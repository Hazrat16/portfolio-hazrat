---
title: "Deploying a React + Vite App to AWS EC2 with Nginx and GitHub Actions CI/CD"
subtitle: "Full CI/CD from GitHub push to nginx"
description: "Step-by-step guide to deploying a React + Vite app on AWS EC2 with nginx and a GitHub Actions CI/CD pipeline — from launching the instance to automated deploys."
date: "2026-07-04"
readTime: "14 min read"
topics: ["React", "Vite", "AWS", "EC2", "nginx", "GitHub Actions", "CI/CD"]
---

A Vite build is just static files, which makes it one of the cheapest things to
host well. You don't need a Node process in production — you need nginx, a
directory of assets, and a pipeline that replaces that directory safely.

This guide goes from a blank EC2 instance to automated deploys on every push to
`main`.

## Launching the instance

Pick Ubuntu 24.04 LTS on a `t3.micro` to start. The security group needs exactly
three inbound rules:

| Port | Source | Purpose |
| --- | --- | --- |
| 22 | your IP only | SSH |
| 80 | 0.0.0.0/0 | HTTP (redirects to HTTPS) |
| 443 | 0.0.0.0/0 | HTTPS |

Leaving port 22 open to the world invites a constant stream of credential
stuffing. Restrict it to your IP, or put the instance behind SSM Session Manager
and close it entirely.

Allocate an Elastic IP and associate it with the instance before you point DNS
at it. Without one, the public IP changes on every stop/start and your domain
silently breaks.

## Preparing the server

SSH in and install nginx:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y nginx
sudo systemctl enable --now nginx
```

Create the directory the site will be served from, owned by a dedicated deploy
user:

```bash
sudo adduser --disabled-password --gecos "" deploy
sudo mkdir -p /var/www/app/current
sudo chown -R deploy:www-data /var/www/app
sudo chmod -R 750 /var/www/app
```

The app never runs as root and never runs as your personal user. If the deploy
key leaks, the blast radius is one directory.

## Configuring nginx for a SPA

Two things trip people up here: client-side routing and asset caching. A React
Router app needs every unknown path to fall back to `index.html`, and Vite's
hashed assets should be cached aggressively while `index.html` never is.

```nginx
# /etc/nginx/sites-available/app
server {
  listen 80;
  server_name example.com www.example.com;

  root /var/www/app/current;
  index index.html;

  # Client-side routing: unknown paths render the SPA shell.
  location / {
    try_files $uri $uri/ /index.html;
  }

  # Vite emits content-hashed filenames, so these can be cached forever.
  location /assets/ {
    expires 1y;
    add_header Cache-Control "public, immutable";
    access_log off;
  }

  # The shell must never be cached, or users get stale asset references.
  location = /index.html {
    add_header Cache-Control "no-cache, must-revalidate";
  }

  gzip on;
  gzip_types text/css application/javascript application/json image/svg+xml;
  gzip_min_length 1024;
}
```

Enable it and reload:

```bash
sudo ln -s /etc/nginx/sites-available/app /etc/nginx/sites-enabled/app
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx
```

Always run `nginx -t` first. Reloading a broken config takes the whole site
down, and the error message you get from `systemctl` is far less useful.

### The stale index.html problem

If you cache `index.html`, a returning visitor loads the old shell, which
requests `main.a1b2c3.js` — a file the new deploy deleted. The page white-screens
with a chunk load error. Caching the shell for zero seconds and the assets for a
year is the only combination that avoids this.

## Adding HTTPS

Certbot writes the TLS config and the renewal timer for you:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d example.com -d www.example.com --redirect
```

Verify renewal actually works before you forget about it:

```bash
sudo certbot renew --dry-run
```

## Environment variables in a Vite build

Vite inlines `import.meta.env` values at build time. That means environment
variables are baked into the bundle in CI, not read on the server:

```ts
// src/lib/config.ts
export const config = {
  apiUrl: import.meta.env.VITE_API_URL,
};
```

Two consequences worth internalizing:

1. Anything with a `VITE_` prefix is **public**. It ships to the browser. Never
   put a secret behind that prefix.
2. Changing an API URL requires a rebuild, not a restart.

## Setting up deploy access

On your machine, create a keypair used only by CI:

```bash
ssh-keygen -t ed25519 -C "github-actions" -f ./deploy_key -N ""
```

Append the public key to the deploy user's authorized keys on the server:

```bash
sudo -u deploy mkdir -p /home/deploy/.ssh
sudo -u deploy tee -a /home/deploy/.ssh/authorized_keys < deploy_key.pub
sudo -u deploy chmod 600 /home/deploy/.ssh/authorized_keys
```

Then add these repository secrets in GitHub:

- `EC2_HOST` — the Elastic IP or hostname
- `EC2_USER` — `deploy`
- `EC2_SSH_KEY` — the **private** key contents
- `VITE_API_URL` — the production API base URL

## The workflow

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

concurrency:
  group: deploy-main
  cancel-in-progress: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - run: npm ci
      - run: npx tsc --noEmit
      - run: npm run lint

      - name: Build
        env:
          VITE_API_URL: ${{ secrets.VITE_API_URL }}
        run: npm run build

      - name: Upload release
        uses: appleboy/scp-action@v0.1.7
        with:
          host: ${{ secrets.EC2_HOST }}
          username: ${{ secrets.EC2_USER }}
          key: ${{ secrets.EC2_SSH_KEY }}
          source: "dist/*"
          target: "/var/www/app/releases/${{ github.sha }}"
          strip_components: 1

      - name: Activate release
        uses: appleboy/ssh-action@v1
        with:
          host: ${{ secrets.EC2_HOST }}
          username: ${{ secrets.EC2_USER }}
          key: ${{ secrets.EC2_SSH_KEY }}
          script: |
            set -euo pipefail
            cd /var/www/app

            ln -sfn "releases/${{ github.sha }}" current.tmp
            mv -T current.tmp current

            ls -1dt releases/* | tail -n +6 | xargs -r rm -rf
```

### Why the symlink dance

Copying files directly into the served directory means there's a window where
half the old build and half the new build are live. Instead each release lands
in its own directory and `current` is an atomic symlink swap.

`mv -T` is the part that makes it atomic — `ln -sfn` onto an existing symlink
that points at a directory would nest the link inside it rather than replace it.

The last line keeps the five most recent releases and deletes the rest, which
also gives you instant rollback:

```bash
cd /var/www/app
ln -sfn releases/<previous-sha> current.tmp && mv -T current.tmp current
```

No rebuild, no pipeline run, just a pointer change.

## Pointing nginx at the symlink

One detail: `root /var/www/app/current;` resolves the symlink per request, which
is what you want. But nginx caches open file descriptors when `open_file_cache`
is enabled — if you've turned it on, add a short `open_file_cache_valid` or the
old build stays served after the swap.

## Verifying the deploy

Add a smoke check to the end of the workflow so a broken deploy fails loudly:

```yaml
      - name: Smoke test
        run: |
          code=$(curl -s -o /dev/null -w "%{http_code}" https://example.com)
          [ "$code" = "200" ] || { echo "Got HTTP $code"; exit 1; }
```

It's crude, but it catches the two most common failures — a bad nginx reload and
an empty release directory — before you hear about them from a user.

## Where this setup runs out

A single EC2 instance serving static files handles more traffic than most
projects will ever see. The reasons to move on are latency and availability, not
throughput: when you need global edge caching or you can't tolerate the instance
being a single point of failure, put CloudFront in front of S3 and let the
pipeline sync to a bucket instead. The build steps stay identical — only the
last two steps change.
