import type { NavLink } from "./types";

export const site = {
  name: "S.M. Hazrat Ali",
  brand: "SM HAZRAT ALI",
  cvPath: "./assests/CV_Hazrat_Ali.pdf",
} as const;

export const navLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Tech Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact Me" },
];

export const hero = {
  badge: "Software Engineer • Full-Stack • DevOps • FinTech",
  titleLine1: "Full-Stack and DevOps",
  titleLine2: "Focused Software Engineer",
  description:
    "I'm S.M. Hazrat Ali — a software engineer with 3+ years shipping production systems in FinTech. I lead frontend architecture in React and Next.js, and I build across the stack with scalable backends, CI/CD automation, and reliable end-to-end delivery.",
  ctas: [
    { href: "#projects", label: "View Projects", variant: "primary" as const },
    { href: "#contact", label: "Contact Me", variant: "secondary" as const },
    {
      href: "./assests/CV_Hazrat_Ali.pdf",
      label: "Download CV",
      variant: "ghost" as const,
      download: true,
    },
  ],
};

export const about = {
  eyebrow: "About Me",
  title: "Product-minded full-stack engineering.",
  paragraphs: [
    "I build and own production FinTech interfaces — scalable frontend systems, high-performance UIs, reusable component architecture, and polished user experience. Frontend is my strongest domain, and I also deliver across the stack with Node.js and Express, shipping REST APIs and real-time applications.",
    "Beyond the UI layer, I deepen backend and DevOps capability — system design, CI/CD pipelines, and deployment automation — so I can own features end to end. I apply AI-assisted engineering to move faster without compromising quality, and I take on complex, high-impact work across the full stack.",
  ],
};

export const experienceIntro = {
  eyebrow: "Experience",
  title: "Professional journey",
  description:
    "Progression from junior engineer to software engineer while delivering production-grade features in a FinTech environment.",
};

export const skillsIntro = {
  eyebrow: "Skills & Technologies",
  title: "What I use to build and ship.",
  description:
    "From frontend frameworks to backend systems, databases, DevOps, and engineering practices, this is the toolkit I use to build and ship.",
};

export const projectsIntro = {
  eyebrow: "Projects",
  title: "Featured work",
  description:
    "Explore some personal and team-based projects showcasing my frontend and full-stack engineering experience.",
};

export const buildingNowIntro = {
  eyebrow: "What I'm Building Now",
  title: "Current focus areas",
};

export const contact = {
  eyebrow: "Contact Me",
  title: "Let's connect.",
  description:
    "I'm open to frontend engineering roles and product-focused collaborations.",
};
