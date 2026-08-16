# Portfolio

A dark, emerald-accented developer portfolio built with Next.js 16 (App Router),
TypeScript, and Tailwind CSS v4. Four pages — Home, Resume, Projects, and a
markdown-powered Blog with per-post table of contents.

## Getting started

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

Other scripts:

```bash
npm run build   # production build (prerenders every page and blog post)
npm start       # serve the production build
npm run lint    # eslint
```

## Editing content

All copy lives in `data/` and `content/` — no component changes needed for
routine updates.

| File | Contents |
| --- | --- |
| `data/site.ts` | Name, role, email, socials, hero intro paragraph, nav links |
| `data/experience.ts` | Work history and education |
| `data/projects.ts` | Professional projects and personal projects |
| `data/skills.ts` | Skill groups (rendered as logo tiles) and engineering highlights |
| `data/achievements.ts` | Career-impact and achievement cards |
| `content/blogs/*.md` | Blog posts, one markdown file per post |

### Profile assets

- **CVs** — the Resume page links to `public/CV_Hazrat_Ali_Frontend.pdf` and
  `public/CV_Hazrat_Ali.pdf`.
- **Avatar** — set `avatar` in `data/site.ts` to an image path (e.g.
  `/avatar.jpg` in `public/`). Until then the resume sidebar shows initials.

Blog posts fall back to a generated gradient cover when no `cover` is set. Add
`cover: /blog/my-post.png` to a post's frontmatter to use real artwork.

### Adding a blog post

Create `content/blogs/my-post.md`. The filename becomes the URL slug:

```md
---
title: "My Post Title"
subtitle: "One-line hook shown under the title"
description: "Card and meta description."
date: "2026-08-16"
readTime: "8 min read"
topics: ["Next.js", "Performance"]
cover: "/blog/my-post.png" # optional
---

## First section

Markdown body. `##` and `###` headings automatically populate the sidebar
table of contents, and fenced code blocks get syntax highlighting.
```

Posts are sorted by `date`, newest first, and prerendered at build time.

## Skill icons

`components/ui/tech-icon.tsx` maps skill names to brand icons and colors. To add
a technology, import its icon from `react-icons/si` and add an entry to
`iconMap`. Names without a mapping fall back to a two-letter tile.

## Theme

Design tokens are defined once in `app/globals.css` under `@theme`, using the
same HSL values across the site:

| Token | Value |
| --- | --- |
| `background` | `hsl(220 25% 12%)` |
| `card` | `hsl(220 30% 13%)` |
| `primary` | `hsl(160 84% 39%)` |
| `border` | `hsl(220 25% 20%)` |
| `muted-foreground` | `hsl(215 20% 65%)` |

Change `--color-primary` to re-accent the entire site — glows, borders, links,
and gradients all derive from it. Fonts are Space Grotesk (UI) and JetBrains
Mono (code), loaded via `next/font`.

## Structure

```
app/
  page.tsx              # Home
  resume/page.tsx
  projects/page.tsx
  blogs/page.tsx        # listing
  blogs/[slug]/page.tsx # post + table of contents
components/
  layout/               # navbar, ambient background, social links
  home/                 # hero, experience, featured projects, achievements, contact
  projects/             # project card variants
  blogs/                # cards, covers, table of contents
  ui/                   # panels, tags, bullets, skill tiles, scroll reveal
content/blogs/          # markdown posts
data/                   # all site copy
lib/blogs.ts            # frontmatter parsing, TOC generation, date formatting
```

## Animations

Sections fade and slide in on scroll. `components/ui/reveal.tsx` wraps a block
and adds `in-view` when it enters the viewport; children opt in with a
`data-reveal` attribute and stagger via inline `transitionDelay`. All of it is
disabled under `prefers-reduced-motion`.

## Deploying

Every route is static, so any host works. On Vercel, push the repo and accept the
defaults. Elsewhere, `npm run build && npm start` behind a reverse proxy is
enough.
