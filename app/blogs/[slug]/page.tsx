import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import { BlogCover } from "@/components/blogs/blog-cover";
import { TableOfContents } from "@/components/blogs/table-of-contents";
import { TopicTag } from "@/components/ui/primitives";
import { formatDate, getBlog, getBlogSlugs } from "@/lib/blogs";
import "highlight.js/styles/github-dark.css";

type BlogPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlog(slug);

  if (!blog) return { title: "Post not found" };

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      publishedTime: blog.date,
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = getBlog(slug);

  if (!blog) notFound();

  return (
    <div className="px-5 pt-28 pb-20">
      <div className="mx-auto flex max-w-5xl gap-12">
        <article className="max-w-3xl min-w-0 flex-1">
          <Link
            href="/blogs"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
            Back to blogs
          </Link>

          <h1 className="mt-6 text-3xl leading-[1.2] font-bold tracking-tight sm:text-4xl">
            {blog.title}
          </h1>

          {blog.subtitle && (
            <p className="mt-3 leading-relaxed font-medium text-primary/90">
              {blog.subtitle}
            </p>
          )}

          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="size-3.5 text-primary/60" />
              {formatDate(blog.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5 text-primary/60" />
              {blog.readTime}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {blog.topics.map((topic) => (
              <TopicTag key={topic}>{topic}</TopicTag>
            ))}
          </div>

          <div className="mt-8 mb-10 aspect-video overflow-hidden rounded-lg border border-border/40">
            <BlogCover blog={blog} priority />
          </div>

          <div className="blog-content">
            <Markdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeSlug, rehypeHighlight]}
            >
              {blog.content}
            </Markdown>
          </div>

          <div className="mt-14 border-t border-border/40 pt-6">
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
              Back to all posts
            </Link>
          </div>
        </article>

        <aside className="hidden w-56 shrink-0 lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pb-6">
            <TableOfContents items={blog.toc} />
          </div>
        </aside>
      </div>
    </div>
  );
}
