const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const site = {
  name: "S.M. Hazrat Ali",
  shortName: "Hazrat",
  initials: "HA",
  role: "Full-Stack Engineer",
  title: "S.M. Hazrat Ali | Full-Stack Engineer",
  description:
    "Full-stack engineer with 4 years of production experience building React and TypeScript frontends, Node.js APIs, and the CI/CD and AWS infrastructure that ships them, using agentic coding tools like Claude Code and Cursor.",
  // Replace with the deployed domain before publishing.
  url: "https://hazrat16.github.io/portfolio-hazrat",
  availability: "Available to join immediately",
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
    "Full-stack engineer with 4 years of production experience building fintech and billing platforms with React/Next.js, TypeScript, Node.js, PostgreSQL, MongoDB, and Redis, plus over a year of hands-on DevOps work with Docker, Kubernetes (EKS), Terraform, Ansible, Jenkins, GitHub Actions, and AWS. At Firmwide, I'm the primary engineer on PriceEstimator.ai, a project-fee estimation and billing platform. Before that, at SmartCrowd, I built React/Redux fintech features for 10K+ active users, cut initial load time by 30–45%, and led delivery of the Share Transfer Facility. I build mainly with agentic coding tools (Claude Code, Cursor): I write scoped specs, run parallel agents across backend and frontend work, and review, test, and debug their output before it ships, while personally reviewing all auth, billing, and payment code. Currently on a contract and available to join immediately.",
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
  { text: "From code to cloud", style: "accent" },
  {
    text: "\nI design, build, and deploy production-ready web applications end to end. I build fast, responsive interfaces with ",
  },
  { text: "React", style: "highlight" },
  { text: ", " },
  { text: "Next.js", style: "highlight" },
  { text: ", and " },
  { text: "TypeScript", style: "highlight" },
  { text: "; develop APIs and real-time services with " },
  { text: "Node.js", style: "highlight" },
  { text: " and Express; and build reliable backend systems with " },
  { text: "MongoDB", style: "highlight" },
  { text: ", " },
  { text: "PostgreSQL", style: "highlight" },
  { text: " and " },
  { text: "Redis", style: "highlight" },
  { text: ". I take applications from the first commit to production using " },
  { text: "Docker", style: "highlight" },
  { text: ", " },
  { text: "GitHub Actions", style: "highlight" },
  { text: ", " },
  { text: "Terraform", style: "highlight" },
  { text: ", and " },
  { text: "AWS", style: "highlight" },
  {
    text: " from deployment automation and cloud infrastructure to reliable releases.",
  },
  { text: "\nI build mainly with " },
  { text: "Claude Code", style: "highlight" },
  { text: " and " },
  { text: "Cursor", style: "highlight" },
  {
    text: ": scoped specs, parallel agents, and line-by-line review and testing before anything ships.",
  },
  {
    text: "\nCurrently on a contract and available to transition into a new role immediately.",
    style: "accent",
  },
];
