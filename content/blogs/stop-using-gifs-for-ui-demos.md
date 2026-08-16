---
title: "Stop Using GIFs for UI Demos: Use Optimized Video in Next.js Instead"
subtitle: "Learn how to replace heavy GIF animations with optimized videos to dramatically improve your Next.js performance"
description: "Learn why GIFs hurt performance and how to replace them with optimized videos in Next.js using lazy loading and IntersectionObserver."
date: "2026-03-08"
readTime: "10 min read"
topics: ["Next.js", "Performance", "Frontend", "Web Optimization"]
---

A product page with three GIF demos can easily ship 15 MB of images before a
single line of your JavaScript runs. The same three demos as WebM video are
often under 1 MB combined — with better color, smoother motion, and playback you
can actually control.

The reason isn't subtle. GIF is a 1987 image format with no modern compression,
capped at 256 colors, and no way to seek, pause, or defer decoding.

## What a GIF actually costs

GIF stores every frame as a full palette-indexed bitmap with LZW compression.
There's no motion prediction, so a 5-second screen recording stores 150
near-identical images. Modern video codecs store the first frame and then only
the differences.

For a typical 1280×720, 5-second UI recording:

| Format | Size | Notes |
| --- | --- | --- |
| GIF | 12.4 MB | 256 colors, visible dithering |
| MP4 (H.264) | 780 KB | Universal support |
| WebM (VP9) | 520 KB | Smaller, no Safari 14 support |

That's roughly a 20× difference, and it lands squarely on your Largest
Contentful Paint if the demo is above the fold.

There's a second cost that's easy to miss: a decoding GIF pegs the main thread.
Animated GIFs can't be decoded off-thread the way video frames can, so a heavy
GIF competes with React hydration for CPU.

## Converting with ffmpeg

Two commands cover both formats. H.264 for compatibility, VP9 for size:

```bash
# MP4 (H.264) — plays everywhere
ffmpeg -i demo.gif \
  -movflags faststart \
  -pix_fmt yuv420p \
  -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" \
  -crf 26 \
  demo.mp4

# WebM (VP9) — smaller, served first when supported
ffmpeg -i demo.gif \
  -c:v libvpx-vp9 \
  -crf 34 -b:v 0 \
  -row-mt 1 \
  demo.webm
```

The flags that matter:

- `-movflags faststart` moves the metadata to the front of the file so playback
  can begin before the whole thing downloads.
- `-pix_fmt yuv420p` is required for Safari and most hardware decoders.
- The `scale=trunc(iw/2)*2` filter rounds dimensions to even numbers — H.264
  refuses odd dimensions and the error message is unhelpful.
- `-crf` is quality, not size: lower is better quality. 23–28 is the useful
  range for screen recordings.

If you're recording fresh rather than converting, capture at the size you'll
display. Scaling a 2560px recording down to a 640px container wastes bytes on
detail nobody sees.

### Generating a poster frame

Video elements show nothing until the first frame decodes. A poster image fills
that gap and gives the browser something to paint for LCP:

```bash
ffmpeg -i demo.mp4 -vf "select=eq(n\,0)" -q:v 3 demo-poster.jpg
```

## The replacement component

A GIF that autoplays inline maps to a muted, looping, inline video. All four
attributes are required — mobile Safari refuses to autoplay without `muted` and
`playsInline`:

```tsx
// components/demo-video.tsx
type DemoVideoProps = {
  src: string;
  poster: string;
  caption: string;
};

export function DemoVideo({ src, poster, caption }: DemoVideoProps) {
  return (
    <figure className="overflow-hidden rounded-lg border border-border">
      <video
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-label={caption}
        className="w-full"
      >
        <source src={`${src}.webm`} type="video/webm" />
        <source src={`${src}.mp4`} type="video/mp4" />
      </video>
      <figcaption className="px-3 py-2 text-xs text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}
```

Order the `<source>` elements smallest-first. The browser picks the first type
it can play, so WebM before MP4 means capable browsers get the smaller file.

`preload="none"` tells the browser not to fetch the video during initial page
load. Combined with the poster image, the page paints fast and the video arrives
when it's needed.

## Only play what's on screen

`autoPlay` starts every video immediately, including the four below the fold.
An IntersectionObserver fixes that — play on enter, pause on exit:

```tsx
"use client";

import { useEffect, useRef } from "react";

export function useAutoplayInView<T extends HTMLVideoElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // play() rejects if the browser blocks autoplay; ignore it.
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return ref;
}
```

Wire it up by dropping `autoPlay` and attaching the ref instead:

```tsx
const videoRef = useAutoplayInView();

return (
  <video ref={videoRef} poster={poster} muted loop playsInline preload="none">
    <source src={`${src}.webm`} type="video/webm" />
    <source src={`${src}.mp4`} type="video/mp4" />
  </video>
);
```

Two things this buys you beyond bandwidth: offscreen videos stop consuming
decode cycles, and battery drain on mobile drops noticeably on pages with
several demos.

### Respect reduced motion

The hook above bails out entirely when a visitor has reduced motion enabled,
leaving the poster frame visible. That's the correct behavior — an endlessly
looping UI recording is exactly the kind of motion the preference exists to
suppress. Pair it with visible controls so those users can still watch on
demand:

```tsx
<video controls={prefersReducedMotion} poster={poster} />
```

## Serving the files

Files in `public/` are served with a short cache lifetime by default. Since
demo videos rarely change, version the filename and cache hard:

```ts
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: "/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

Once a video is more than a couple of megabytes, or once you have more than a
handful, move them to a CDN or a service like Mux and keep them out of your
repository entirely. Git is bad at binaries, and every clone pays for them.

## Measuring the difference

Confirm the win rather than assuming it. In Chrome DevTools, throttle to Fast
3G, hard reload, and compare:

- **Network panel** — total transferred bytes and the size of the largest
  request.
- **Performance panel** — main thread activity during load. The GIF version
  shows long decode blocks that the video version doesn't have.
- **Lighthouse** — LCP and Total Blocking Time.

On a marketing page with three demos, the swap typically moves LCP by a second
or more on mobile. That's a larger improvement than most code splitting work,
for an afternoon of ffmpeg.

## The short version

Use GIF for nothing that moves for more than a second. Encode to WebM and MP4,
serve WebM first, add a poster frame, set `preload="none"`, and only play what's
visible. The demos look better and the page gets faster at the same time.
