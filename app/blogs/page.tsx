import type { Metadata } from "next";
import { BlogCard } from "@/components/blogs/blog-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/primitives";
import { getAllBlogs } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on building products, infrastructure, and the debugging lessons in between, including posts from Medium.",
};

export default async function BlogsPage() {
  const blogs = await getAllBlogs();

  return (
    <div className="px-5 pt-28 pb-20">
      <Reveal className="mx-auto max-w-5xl">
        <div data-reveal className="mb-10">
          <SectionLabel>Blog</SectionLabel>
          <h1 className="text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
            Writing that{" "}
            <span className="text-primary">shares what I learn</span>.
          </h1>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Notes on building products, infrastructure, and the debugging
            lessons in between. More on{" "}
            <a
              href="https://ali-hazrat.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary transition-colors hover:text-primary/80"
            >
              Medium
            </a>
            .
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {blogs.map((blog, index) => (
            <div
              key={blog.slug}
              data-reveal
              style={{ transitionDelay: `${(index % 2) * 80}ms` }}
            >
              <BlogCard blog={blog} priority={index < 2} />
            </div>
          ))}
        </div>

        {blogs.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No posts published yet.
          </p>
        )}
      </Reveal>
    </div>
  );
}
