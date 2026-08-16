import Image from "next/image";
import { Terminal } from "lucide-react";
import type { BlogMeta } from "@/lib/blogs";

/** Uses the post's cover image when present, otherwise renders a themed
 *  placeholder so the grid keeps its rhythm without missing artwork. */
export function BlogCover({
  blog,
  priority = false,
}: {
  blog: BlogMeta;
  priority?: boolean;
}) {
  if (blog.cover) {
    return (
      <Image
        src={blog.cover}
        alt={blog.title}
        width={1200}
        height={675}
        priority={priority}
        className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    );
  }

  return (
    <div className="relative flex size-full items-center justify-center bg-linear-to-br from-primary/20 via-card to-background">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(160 84% 39% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(160 84% 39% / 0.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative flex flex-col items-center gap-2 px-6 text-center">
        <Terminal className="size-7 text-primary/70" />
        <span className="text-xs font-medium tracking-wide text-muted-foreground">
          {blog.topics.slice(0, 3).join(" · ")}
        </span>
      </div>
    </div>
  );
}
