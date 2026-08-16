import Link from "next/link";
import { CalendarDays, Clock } from "lucide-react";
import { BlogCover } from "@/components/blogs/blog-cover";
import { TopicTag } from "@/components/ui/primitives";
import { formatDate, type BlogMeta } from "@/lib/blogs";

export function BlogCard({
  blog,
  priority = false,
}: {
  blog: BlogMeta;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border/50 bg-card/40 backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_12px_40px_-12px_hsl(160_84%_39%/0.25)]"
    >
      <div className="aspect-video overflow-hidden border-b border-border/40">
        <BlogCover blog={blog} priority={priority} />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-lg leading-snug font-semibold transition-colors duration-200 group-hover:text-primary">
          {blog.title}
        </h2>

        {blog.subtitle && (
          <p className="mt-1.5 text-sm font-medium leading-relaxed text-primary/80">
            {blog.subtitle}
          </p>
        )}

        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
          {blog.description}
        </p>

        <div className="mt-5">
          <p className="mb-2 text-xs tracking-widest text-muted-foreground/60 uppercase">
            Topics
          </p>
          <div className="flex flex-wrap gap-1.5">
            {blog.topics.map((topic) => (
              <TopicTag key={topic}>{topic}</TopicTag>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center gap-4 border-t border-border/40 pt-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="size-3.5 text-primary/60" />
            {formatDate(blog.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="size-3.5 text-primary/60" />
            {blog.readTime}
          </span>
        </div>
      </div>
    </Link>
  );
}
