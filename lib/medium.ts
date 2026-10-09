import { mediumPosts } from "@/data/medium";
import type { BlogMeta } from "@/lib/blogs";

const FEED_URL = "https://medium.com/feed/@ali-hazrat";

/** Medium tags are slugs ("cloud-security"); these need more than title case. */
const TOPIC_NAMES: Record<string, string> = {
  aws: "AWS",
  devops: "DevOps",
  iac: "IaC",
  nodejs: "Node.js",
  javascript: "JavaScript",
  typescript: "TypeScript",
  reactjs: "React",
  nextjs: "Next.js",
  ci: "CI/CD",
  cicd: "CI/CD",
};

function topicName(tag: string): string {
  return (
    TOPIC_NAMES[tag] ??
    tag
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
}

function decodeEntities(text: string): string {
  return text
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");
}

function tag(item: string, name: string): string {
  const match = new RegExp(`<${name}>([\\s\\S]*?)</${name}>`).exec(item);
  return match ? match[1].replace(/^<!\[CDATA\[([\s\S]*)\]\]>$/, "$1").trim() : "";
}

/** Medium post URLs end in a hex id, which survives title and slug edits. */
function postId(url: string): string {
  return /-([0-9a-f]{8,})(?:\?|$)/.exec(url)?.[1] ?? url;
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return `${text.slice(0, text.lastIndexOf(" ", max)).replace(/[,.;:]$/, "")}…`;
}

function parseItem(item: string): BlogMeta {
  const url = tag(item, "link").split("?")[0];
  const html = tag(item, "content:encoded");
  const text = decodeEntities(html.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
  // The last <img> in every feed item is Medium's view-tracking pixel.
  const cover = /<img[^>]+src="(https:\/\/cdn-images-1\.medium\.com\/[^"]+)"/.exec(html)?.[1];
  const firstParagraph = /<p>([\s\S]*?)<\/p>/.exec(html)?.[1] ?? text;

  return {
    slug: postId(url),
    title: decodeEntities(tag(item, "title")),
    subtitle: "",
    description: truncate(
      decodeEntities(firstParagraph.replace(/<[^>]+>/g, "")).trim(),
      180,
    ),
    date: new Date(tag(item, "pubDate")).toISOString().slice(0, 10),
    readTime: `${Math.max(1, Math.ceil(text.split(" ").length / 230))} min read`,
    topics: [...item.matchAll(/<category>(?:<!\[CDATA\[)?([^\]<]+)/g)].map(
      (match) => topicName(match[1]),
    ),
    cover,
    url,
    source: "Medium",
  };
}

/** Runs during `next build`. If Medium can't be reached, the build continues
 *  with the posts saved in data/medium.ts. */
async function fetchFeed(): Promise<BlogMeta[]> {
  try {
    const res = await fetch(FEED_URL, { signal: AbortSignal.timeout(10_000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const xml = await res.text();
    return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((match) =>
      parseItem(match[1]),
    );
  } catch (error) {
    console.warn(`Medium feed unavailable, using saved posts only: ${error}`);
    return [];
  }
}

/** Saved posts win over feed entries for the same post, so hand-written
 *  subtitles and descriptions are kept. The feed only returns the latest 10
 *  posts, which is why older ones live in data/medium.ts. */
export async function getMediumPosts(): Promise<BlogMeta[]> {
  const saved = new Set(mediumPosts.map((post) => postId(post.url ?? "")));
  const fresh = (await fetchFeed()).filter((post) => !saved.has(postId(post.url ?? "")));
  return [...mediumPosts, ...fresh].map((post) => ({ ...post, source: "Medium" }));
}
