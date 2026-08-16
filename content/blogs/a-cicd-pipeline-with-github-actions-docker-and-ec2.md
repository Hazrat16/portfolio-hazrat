---
title: "A CI/CD Pipeline with GitHub Actions, Docker, and EC2"
subtitle: "From git push to production with zero manual steps"
description: "Walk through a real GitHub Actions pipeline that lints, builds, dockerizes, and deploys a Next.js app to EC2 — with multi-stage Dockerfiles, compose files, and a remote deploy script."
date: "2026-08-04"
readTime: "16 min read"
topics: ["GitHub Actions", "Docker", "EC2", "CI/CD", "Next.js", "DevOps"]
---

Shipping should be boring. Every time you deploy by hand you invent a slightly
different sequence of steps, and one of those variations eventually takes
production down. The fix is to encode the whole path — lint, build, image, push,
restart — in a pipeline that runs the same way on every commit.

This post builds that pipeline for a Next.js app running on a single EC2
instance with Docker. It's the setup I reach for when a project is too small for
Kubernetes but too important to deploy over SSH by hand.

## What we're building

The flow has four stages:

1. **Verify** — install dependencies, typecheck, lint, and run tests.
2. **Build** — produce a multi-stage Docker image tagged with the commit SHA.
3. **Publish** — push that image to GitHub Container Registry (GHCR).
4. **Deploy** — SSH into EC2, pull the new tag, and restart via Docker Compose.

Tagging with the commit SHA matters. `latest` tells you nothing about what is
running, and rolling back becomes guesswork. With SHA tags a rollback is one
`docker compose up` away.

## A production Dockerfile for Next.js

Next.js has a standalone output mode that copies only the files the server
actually needs. Enable it first:

```js
// next.config.ts
const nextConfig = {
  output: "standalone",
};

export default nextConfig;
```

Then build in stages so the final image never carries the toolchain:

```dockerfile
# syntax=docker/dockerfile:1

FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000 HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
```

Three details that save pain later:

- `npm ci` with only the lockfile copied first means dependency layers stay
  cached until dependencies actually change.
- The image runs as a non-root user, so a container escape doesn't hand over the
  host.
- `HOSTNAME=0.0.0.0` is required — the standalone server binds to localhost
  otherwise and nginx can't reach it.

### Keeping the build context small

A `.dockerignore` is not optional. Without it you ship `node_modules` and
`.next` from your laptop into the build context:

```
node_modules
.next
.git
.env*.local
npm-debug.log*
Dockerfile
.dockerignore
```

## Compose on the server

The server only needs to know how to run the image, not how to build it:

```yaml
# docker-compose.yml
services:
  web:
    image: ghcr.io/${GITHUB_REPOSITORY}:${IMAGE_TAG}
    restart: unless-stopped
    ports:
      - "127.0.0.1:3000:3000"
    env_file:
      - .env.production
    healthcheck:
      test: ["CMD", "wget", "--spider", "-q", "http://localhost:3000/api/health"]
      interval: 30s
      timeout: 5s
      retries: 3
      start_period: 20s
```

Binding to `127.0.0.1:3000` instead of `0.0.0.0:3000` keeps the app off the
public internet. Only nginx talks to it directly.

The healthcheck needs an endpoint to hit:

```ts
// app/api/health/route.ts
export const dynamic = "force-dynamic";

export function GET() {
  return Response.json({ status: "ok", uptime: process.uptime() });
}
```

## The verify job

Fail fast and cheap. If lint breaks, don't spend three minutes building an
image:

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]
  workflow_dispatch:

concurrency:
  group: deploy-${{ github.ref }}
  cancel-in-progress: true

jobs:
  verify:
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
      - run: npm test --if-present
```

The `concurrency` block is the piece people skip. Push twice in a minute
without it and two deploy jobs race to restart the same container.

## Build and publish the image

GHCR authenticates with the built-in `GITHUB_TOKEN`, so there's no extra secret
to manage:

```yaml
  build:
    needs: verify
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    outputs:
      image: ${{ steps.meta.outputs.image }}
    steps:
      - uses: actions/checkout@v4

      - uses: docker/setup-buildx-action@v3

      - uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - id: meta
        run: |
          IMAGE="ghcr.io/${GITHUB_REPOSITORY,,}"
          echo "image=$IMAGE" >> "$GITHUB_OUTPUT"

      - uses: docker/build-push-action@v6
        with:
          context: .
          push: true
          tags: |
            ${{ steps.meta.outputs.image }}:${{ github.sha }}
            ${{ steps.meta.outputs.image }}:latest
          cache-from: type=gha
          cache-to: type=gha,mode=max
```

`cache-from`/`cache-to` with the GitHub Actions cache backend is what turns a
four-minute build into a forty-second one on dependency-stable commits.

Note `${GITHUB_REPOSITORY,,}` — the bash lowercase expansion. GHCR rejects
uppercase image names, and repository names often contain them.

## Deploying to EC2

Create a dedicated deploy user on the instance rather than reusing `ubuntu`,
add it to the `docker` group, and put the workflow's public key in its
`authorized_keys`. Then the deploy job is a short SSH session:

```yaml
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: production
    steps:
      - uses: appleboy/ssh-action@v1
        with:
          host: ${{ secrets.EC2_HOST }}
          username: ${{ secrets.EC2_USER }}
          key: ${{ secrets.EC2_SSH_KEY }}
          script: |
            set -euo pipefail
            cd /srv/app

            echo "${{ secrets.GHCR_TOKEN }}" \
              | docker login ghcr.io -u ${{ github.actor }} --password-stdin

            export GITHUB_REPOSITORY="${{ needs.build.outputs.image }}"
            export IMAGE_TAG="${{ github.sha }}"

            docker compose pull web
            docker compose up -d --no-deps web
            docker image prune -f --filter "until=168h"
```

`set -euo pipefail` is the difference between a failed deploy that reports
failure and one that silently reports success. Without `-e`, a failing
`docker compose pull` still lets the script exit 0.

### Verifying the rollout

Restarting is not deploying. Confirm the new container is actually healthy
before calling the job green:

```yaml
            for i in $(seq 1 20); do
              status=$(docker inspect --format='{{.State.Health.Status}}' app-web-1)
              [ "$status" = "healthy" ] && exit 0
              sleep 3
            done

            echo "Container failed to become healthy" >&2
            docker compose logs --tail 80 web
            exit 1
```

Dumping the last 80 log lines on failure means the Actions run itself tells you
what went wrong, instead of sending you to SSH in and look.

## Nginx in front

Nginx terminates TLS and proxies to the container:

```nginx
server {
  listen 443 ssl http2;
  server_name example.com;

  ssl_certificate     /etc/letsencrypt/live/example.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }

  location /_next/static/ {
    proxy_pass http://127.0.0.1:3000;
    proxy_cache_valid 200 60m;
    add_header Cache-Control "public, max-age=31536000, immutable";
  }
}
```

Forwarding `X-Forwarded-Proto` matters more than it looks: without it, code
that builds absolute URLs will happily generate `http://` links on an HTTPS
site.

## Rolling back

Because every image is tagged with its commit, a rollback is a one-liner on the
box:

```bash
IMAGE_TAG=<previous-sha> docker compose up -d --no-deps web
```

Keep it in a script called `rollback.sh` in the repo. During an incident nobody
remembers flags.

## What to add next

The pipeline above is production-adequate for a single instance. When traffic
justifies it, the natural next steps are:

- **Zero-downtime restarts** — run two replicas behind nginx and cycle them one
  at a time, or move to ECS/Fargate where rolling deploys are built in.
- **Migrations as a separate step** — run them before the new image starts, and
  keep them backwards compatible so old and new containers can coexist.
- **Deployment notifications** — a Slack message with the SHA and author turns
  "who broke prod" into a five-second lookup.

The important part is already done: nobody has to remember the steps, and every
deploy is identical to the last one.
