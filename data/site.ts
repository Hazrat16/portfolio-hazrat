const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const site = {
  name: "S.M. Hazrat Ali",
  shortName: "hazrat",
  initials: "HA",
  role: "Full-Stack Engineer",
  title: "S.M. Hazrat Ali | Full-Stack Engineer",
  description:
    "Full-stack engineer building React and TypeScript frontends, Node.js APIs, and the CI/CD and AWS infrastructure that ships them.",
  // Replace with the deployed domain before publishing.
  url: "https://hazrat16.github.io/portfolio-hazrat",
  availability: "On contract · Available to join immediately",
  email: "hazrat17016@gmail.com",
  phone: "+880 1521-334914",
  location: "Gazipur, Bangladesh",
  /** One CV per role. The first entry is the primary download. */
  resumes: [
    { label: "Full-Stack", file: "CV_Hazrat_Ali_FullStack.pdf" },
    { label: "Frontend", file: "CV_Hazrat_Ali_Frontend.pdf" },
    { label: "DevOps", file: "CV_Hazrat_Ali_DevOps.pdf" },
  ].map((resume) => ({ ...resume, href: `${basePath}/${resume.file}` })),
  /** Drop a file in public/ and point here to replace the initials avatar. */
  avatar: `${basePath}/marayen-tong-avatar.jpg`,
  tagline:
    "Building fintech and billing products end to end, from fast React frontends to Node.js APIs and the pipelines that ship them.",
  about:
    "Full-stack engineer with 3+ years of production experience in React, TypeScript, Node.js/Express, MongoDB, and Redis. I build REST and real-time APIs, fintech and billing workflows, and fast React frontends, and ship them with Docker, CI/CD, and AWS. I'm currently the primary engineer on PriceEstimator.ai at Firmwide, a project-fee estimation and billing platform. Before that, at SmartCrowd, I cut initial load time by 30–45%, built 20+ reusable components, and led delivery of fintech features used by 10K+ active users. I'm also moving deeper into DevOps, with hands-on Terraform, Kubernetes, Ansible, and AWS work. I'm on a contract, so I can join immediately.",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Resume", href: "/resume" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blogs" },
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
  {
    label: "Medium",
    href: "https://ali-hazrat.medium.com/",
    icon: "medium",
  },
] as const;

/** Hero intro rendered inside the `about.md` terminal card. Segment styles map
 *  to the comment / plain / highlighted tokens of a source file. */
export const heroIntro: { text: string; style?: "accent" | "highlight" }[] = [
  { text: "Hello! I'm a full-stack engineer", style: "accent" },
  { text: " specializing in " },
  { text: "React", style: "highlight" },
  { text: ", " },
  { text: "Next.js", style: "highlight" },
  { text: ", " },
  { text: "TypeScript", style: "highlight" },
  {
    text: " on the frontend and ",
  },
  { text: "Node.js", style: "highlight" },
  { text: ", Express, " },
  { text: "MongoDB", style: "highlight" },
  { text: " and Redis on the backend. I've built fintech and billing products used by 10K+ active users, and I ship them with Docker, GitHub Actions, " },
  { text: "Terraform", style: "highlight" },
  { text: " and " },
  { text: "AWS", style: "highlight" },
  { text: "." },
];
