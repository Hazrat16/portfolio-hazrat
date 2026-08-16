export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  tagline?: string;
  summary?: string;
  stack: string[];
  bullets: string[];
  links: ProjectLink[];
  featured?: boolean;
};

/** Client work — shown on the Projects page under "Professional Projects". */
export const professionalProjects: Project[] = [
  {
    name: "SmartCrowd",
    tagline: "Digital Real Estate Investment Platform",
    summary:
      "A regulated fintech platform that makes real estate investing accessible through digital investment, portfolio, and transaction experiences.",
    stack: [
      "React.js",
      "TypeScript",
      "Redux",
      "Styled Components",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    bullets: [
      "Developed and scaled investment, portfolio, and transaction workflows used by 10K+ active users, integrating 5+ third-party financial APIs.",
      "Reduced initial load time by 30–45% through code splitting, lazy loading, bundle optimization, and modernization of legacy React components.",
      "Standardized 20+ reusable UI components and led delivery of the Share Transfer Facility across product, design, and engineering teams.",
      "Implemented backend authentication and transaction APIs while improving MongoDB query and caching performance by 25–35%.",
    ],
    links: [
      { label: "Company", href: "https://smartcrowd.ae/" },
      { label: "Live", href: "https://my.smartcrowd.ae" },
    ],
  },
];

/** Personal work — shown on Home, Resume and the Projects page. */
export const projects: Project[] = [
  {
    name: "SmartJob Hub",
    tagline: "Full-Stack Recruitment Platform",
    summary:
      "A full-stack platform connecting job seekers and employers through job discovery, profile management, application tracking, candidate management, and employer analytics.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
    ],
    bullets: [
      "Implemented advanced job search, detailed listings, profiles, application tracking, and saved-job workflows for job seekers.",
      "Built employer tools for job posting, candidate management, company profiles, and engagement analytics.",
      "Designed a responsive Next.js interface backed by full-stack APIs and persistent user data.",
    ],
    links: [{ label: "Code", href: "https://github.com/Hazrat16/job-platform-frontend" }],
    featured: true,
  },
  {
    name: "AI SQL Assistant",
    tagline: "Natural-Language PostgreSQL Workspace",
    summary:
      "A full-stack PostgreSQL assistant that turns plain-English questions into validated, read-only SQL with explanations and secure execution.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Fastify",
      "PostgreSQL",
      "Docker",
      "OpenAI",
    ],
    bullets: [
      "Built schema introspection, AST-based safety checks, and secure read-only execution against default or external databases.",
      "Integrated OpenAI and Ollama with an offline fallback for flexible natural-language query generation.",
      "Created a Next.js chat workspace with results tables, a compile panel, schema browser, and database connection management.",
    ],
    links: [{ label: "Code", href: "https://github.com/Hazrat16/ai-sql-assistant-frontend" }],
    featured: true,
  },
  {
    name: "MediSchedule",
    tagline: "Role-Based Medical Booking System",
    summary:
      "A full-stack booking platform for patients, doctors, and administrators, with secure scheduling, availability management, and operational oversight.",
    stack: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "JWT",
      "Docker",
      "CI/CD",
    ],
    bullets: [
      "Implemented JWT authentication and separate patient, doctor, and administrator roles.",
      "Built appointment scheduling, doctor availability management, and administrative oversight workflows.",
      "Containerized the application and configured continuous integration and cloud deployment.",
    ],
    links: [{ label: "Code", href: "https://github.com/Hazrat16/appointment" }],
    featured: true,
  },
  {
    name: "Urban Eats",
    tagline: "Dockerized Restaurant Platform",
    summary:
      "A full-stack restaurant platform with automated testing and deployment workflows for reliable frontend and backend releases.",
    stack: ["React.js", "Node.js", "Docker", "GitHub Actions", "CI/CD"],
    bullets: [
      "Built a full-stack restaurant experience with independently deployable frontend and backend services.",
      "Automated testing and deployment with GitHub Actions, reducing deployment time by 60%.",
      "Designed a scalable Docker-based workflow that improved reliability and reduced manual deployment errors.",
    ],
    links: [{ label: "Live", href: "https://urban-eats-8a897.web.app" }],
  },
  {
    name: "TalkSphere",
    tagline: "Real-Time Full-Stack Chat",
    summary:
      "A responsive real-time messaging system for SmartJob Hub with live connection, presence, and message updates.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Express.js", "Socket.IO"],
    bullets: [
      "Built a Socket.IO server for connections, generated usernames, timestamped messages, and join/leave notifications.",
      "Developed a responsive Next.js App Router client for instant real-time communication.",
      "Added CORS support and a health-check endpoint for reliable frontend-backend integration.",
    ],
    links: [{ label: "Code", href: "https://github.com/Hazrat16/chat-fullstack" }],
  },
];
