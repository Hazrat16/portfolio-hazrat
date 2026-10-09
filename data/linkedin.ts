import type { BlogMeta } from "@/lib/blogs";

/** LinkedIn articles. LinkedIn has no public feed, so add each one by hand;
 *  the card links out to LinkedIn. `cover` is optional: without it the card
 *  shows a placeholder built from the topics. Example:
 *
 *  {
 *    slug: "my-article",
 *    title: "My Article",
 *    subtitle: "",
 *    description: "One or two sentences about the article.",
 *    date: "2026-10-01",
 *    readTime: "4 min read",
 *    topics: ["React"],
 *    url: "https://www.linkedin.com/pulse/my-article-smhazratali-xxxx",
 *  },
 */
export const linkedinPosts: BlogMeta[] = [];
