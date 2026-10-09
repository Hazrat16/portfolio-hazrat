import type { BlogMeta } from "@/lib/blogs";

const medium = "https://ali-hazrat.medium.com";

/** Posts published on Medium. They appear in the blog grid and link out to
 *  Medium instead of rendering a local page. New posts are picked up from the
 *  Medium feed at build time (lib/medium.ts), so this list only needs posts
 *  that have dropped out of the feed's latest 10, or ones whose generated
 *  description you want to replace. */
export const mediumPosts: BlogMeta[] = [
  {
    slug: "how-i-deployed-smart-jobhub-on-aws",
    title: "How I Deployed Smart JobHub on AWS: Architecture, Security and Releases",
    subtitle: "From two half-working repos to staged, approved releases",
    description:
      "How a Next.js and Express/Socket.IO job platform went from half-working CI to Terraform-managed AWS infrastructure, OIDC deploys, and staged releases.",
    date: "2026-10-01",
    readTime: "5 min read",
    topics: ["AWS", "Terraform", "DevOps", "Cloud Security", "Observability"],
    cover: "https://cdn-images-1.medium.com/max/1024/1*AysAODDVj0SBn14P2OrD5A.jpeg",
    url: `${medium}/how-i-deployed-smart-jobhub-on-aws-architecture-security-and-releases-08e08c6074a4`,
  },
  {
    slug: "if-a-list-is-slow-ask-whether-its-listing",
    title: "If a List Is Slow, Ask Whether It’s Listing",
    subtitle: "The fix was the query shape",
    description:
      "Per-row writes, full-document loads, and N+1 lookups turned a simple table into a migration. What fixed it was changing the shape of the query.",
    date: "2026-09-12",
    readTime: "4 min read",
    topics: ["Backend", "Performance"],
    cover: "https://cdn-images-1.medium.com/max/1024/1*Jb5GVRcqpSyxAGo1IvQelA.jpeg",
    url: `${medium}/if-a-list-is-slow-ask-whether-its-listing-480e3671b4f5`,
  },
  {
    slug: "terraform-the-promise-engine-for-infrastructure",
    title: "Terraform: The Promise Engine for Infrastructure",
    subtitle: "Describe the cloud, review the plan, apply",
    description:
      "You write what the cloud should look like. Terraform shows the plan, then keeps its word. Moving from console clicking to infrastructure as code.",
    date: "2026-09-04",
    readTime: "5 min read",
    topics: ["Terraform", "AWS", "IaC", "DevOps"],
    cover: "https://cdn-images-1.medium.com/max/1024/1*RrwmoJuHUyIMVVnbXpPDWg.jpeg",
    url: `${medium}/terraform-the-promise-engine-for-infrastructure-ef95ac8d7d06`,
  },
  {
    slug: "why-kubernetes-needs-both-a-pv-and-a-pvc",
    title: "Why Kubernetes Needs Both a PV and a PVC",
    subtitle: "And what happens when the Pod dies",
    description:
      "A Pod is a bad place to keep files you care about. How PersistentVolumes and PersistentVolumeClaims keep data alive when Pods come and go.",
    date: "2026-08-25",
    readTime: "5 min read",
    topics: ["Kubernetes", "DevOps"],
    cover: "https://cdn-images-1.medium.com/max/764/1*hYRWsC2HdSz-0LHxWunr1w.jpeg",
    url: `${medium}/why-kubernetes-needs-both-a-pv-and-a-pvc-and-what-happens-when-the-pod-dies-fe8b95cf1a4c`,
  },
  {
    slug: "docker-vs-kubernetes",
    title: "Docker vs Kubernetes: What Finally Made Sense to Me",
    subtitle: "You don’t have to choose between them",
    description:
      "Docker and Kubernetes are often framed as a choice. They aren’t. A beginner-friendly look at how the two work together.",
    date: "2026-08-18",
    readTime: "3 min read",
    topics: ["Docker", "Kubernetes", "DevOps"],
    cover: "https://cdn-images-1.medium.com/max/1024/1*3w9rLXOMcWCJXKh2oqH4jg.png",
    url: `${medium}/docker-vs-kubernetes-what-finally-made-sense-to-me-03a556155067`,
  },
  {
    slug: "npm-err-sigkill-was-oomkilled",
    title: "npm ERR! SIGKILL Wasn’t an npm Bug — It Was OOMKilled",
    subtitle: "Symptoms vs root cause",
    description:
      "What a Docker memory limit taught me about telling a symptom from its root cause while working through a debugging lab.",
    date: "2026-07-31",
    readTime: "3 min read",
    topics: ["Docker", "Node.js", "Linux", "Debugging"],
    cover: "https://cdn-images-1.medium.com/max/1024/1*m3QSuV8-V_SzzTp_r9RJKw.png",
    url: `${medium}/npm-err-sigkill-wasnt-an-npm-bug-it-was-oomkilled-bec098adb30f`,
  },
  {
    slug: "things-to-remember-about-javascript",
    title: "Things to Remember About JavaScript",
    subtitle: "Truthy, falsy, and other everyday rules",
    description:
      "Short notes on JavaScript behaviour worth keeping in mind, starting with truthy and falsy values.",
    date: "2021-05-08",
    readTime: "2 min read",
    topics: ["JavaScript"],
    url: `${medium}/things-to-remember-about-javascript-50fa9a33af9d`,
  },
  {
    slug: "fundamental-of-react-js",
    title: "Fundamentals of React.js",
    subtitle: "Library or framework?",
    description:
      "The difference between a framework and a library, and the core ideas behind React.",
    date: "2021-05-07",
    readTime: "2 min read",
    topics: ["React", "JavaScript"],
    url: `${medium}/fundamental-of-react-js-e57ec7361f38`,
  },
  {
    slug: "javascript-es6-short-note",
    title: "JavaScript ES6 Short Note",
    subtitle: "The ES6 features you use every day",
    description:
      "A quick tour of ES6: variable declarations with var, let, and const, and the other features introduced in the second major revision of JavaScript.",
    date: "2021-05-06",
    readTime: "3 min read",
    topics: ["JavaScript", "ES6"],
    url: `${medium}/javascript-es6-short-note-141c99b01252`,
  },
  {
    slug: "important-javascript-methods",
    title: "Important JavaScript Methods to Remember",
    subtitle: "Strings, arrays, and more",
    description:
      "A reference of commonly used JavaScript methods for strings, arrays, and numbers.",
    date: "2021-05-05",
    readTime: "2 min read",
    topics: ["JavaScript"],
    url: `${medium}/some-important-method-of-javascript-to-remember-6237bbb624dd`,
  },
];
