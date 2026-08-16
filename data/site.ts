export const site = {
  name: "S.M. Hazrat Ali",
  shortName: "hazrat",
  initials: "HA",
  role: "Software Engineer",
  title: "S.M. Hazrat Ali | Software Engineer",
  description:
    "Frontend-focused Software Engineer building scalable fintech products with React, Next.js, TypeScript, Node.js, and modern web tooling.",
  // Replace with the deployed domain before publishing.
  url: "http://localhost:3000",
  availability: "Online · Available for hire",
  email: "hazrat17016@gmail.com",
  phone: "+880 1521-334914",
  location: "Gazipur, Bangladesh",
  resumeUrl: "/CV_Hazrat_Ali.pdf",
  /** Drop a file in public/ and point here to replace the initials avatar. */
  avatar: "/marayen-tong-avatar.jpg",
  tagline:
    "Building scalable fintech products with a focus on frontend performance, reusable systems, and clean architecture.",
  about:
    "Frontend-focused Software Engineer with 3+ years of experience building and scaling production fintech applications. I specialize in React, Next.js, TypeScript, Redux, and component-driven architecture, with hands-on backend experience using Node.js, Express, MongoDB, and PostgreSQL. At SmartCrowd, I have improved frontend load time by 30–45%, standardized 20+ reusable UI components, and led cross-functional delivery of high-impact investment features used by 10K+ active users.",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Resume", href: "/resume" },
  { label: "Projects", href: "/projects" },
  // { label: "Blogs", href: "/blogs" },
] as const;

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Hazrat16",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/smhazratali/",
    icon: "linkedin",
  },
] as const;

/** Hero intro rendered inside the `about.md` terminal card. Segment styles map
 *  to the comment / plain / highlighted tokens of a source file. */
export const heroIntro: { text: string; style?: "accent" | "highlight" }[] = [
  { text: "Hello! I'm a frontend-focused Software Engineer", style: "accent" },
  { text: " specializing in " },
  { text: "React", style: "highlight" },
  { text: ", " },
  { text: "Next.js", style: "highlight" },
  { text: ", " },
  { text: "TypeScript", style: "highlight" },
  {
    text: ", and Redux, building scalable fintech products used by 10K+ active users. I focus on frontend architecture, reusable design systems, and performance optimization, with backend experience using ",
  },
  { text: "Node.js", style: "highlight" },
  { text: ", Express, " },
  { text: "MongoDB", style: "highlight" },
  { text: ", " },
  { text: "PostgreSQL", style: "highlight" },
  { text: ", and CI/CD tooling." },
];
