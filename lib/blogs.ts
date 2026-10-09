import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";
import { linkedinPosts } from "@/data/linkedin";
import { getMediumPosts } from "@/lib/medium";

const BLOG_DIR = path.join(process.cwd(), "content/blogs");

export type TocItem = {
  id: string;
  title: string;
  level: 2 | 3;
};

export type BlogMeta = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  readTime: string;
  topics: string[];
  cover?: string;
  /** Set for posts hosted elsewhere; the card links straight there. */
  url?: string;
  source?: "Medium" | "LinkedIn";
};

export type Blog = BlogMeta & {
  content: string;
  toc: TocItem[];
};

function readBlogFile(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const meta: BlogMeta = {
    slug,
    title: String(data.title ?? slug),
    subtitle: String(data.subtitle ?? ""),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    readTime: String(data.readTime ?? ""),
    topics: Array.isArray(data.topics) ? data.topics.map(String) : [],
    cover: data.cover ? String(data.cover) : undefined,
  };

  return { meta, content };
}

/** Headings are matched to the ids that rehype-slug generates at render time. */
function buildToc(content: string): TocItem[] {
  const slugger = new GithubSlugger();
  const items: TocItem[] = [];

  let insideCodeFence = false;
  for (const line of content.split("\n")) {
    if (line.trimStart().startsWith("```")) {
      insideCodeFence = !insideCodeFence;
      continue;
    }
    if (insideCodeFence) continue;

    const match = /^(#{2,3})\s+(.*)$/.exec(line);
    if (!match) continue;

    const title = match[2].replace(/`/g, "").trim();
    items.push({
      id: slugger.slug(title),
      title,
      level: match[1].length as 2 | 3,
    });
  }

  return items;
}

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export async function getAllBlogs(): Promise<BlogMeta[]> {
  return getBlogSlugs()
    .map((slug) => readBlogFile(slug).meta)
    .concat(
      await getMediumPosts(),
      linkedinPosts.map((post) => ({ ...post, source: "LinkedIn" as const })),
    )
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlog(slug: string): Blog | null {
  if (!getBlogSlugs().includes(slug)) return null;

  const { meta, content } = readBlogFile(slug);
  return { ...meta, content, toc: buildToc(content) };
}

export function formatDate(date: string): string {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;

  return parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
