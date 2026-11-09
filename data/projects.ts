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
    name: "PriceEstimator.ai",
    tagline: "Project-Fee Estimation and Billing Platform",
    summary:
      "A billing platform for Firmwide that takes a project from enquiry to proposal to multi-currency invoice.",
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "TanStack Query",
      "Tailwind CSS",
      "Node.js",
      "Express 5",
      "MongoDB",
      "Redis",
      "Docker",
    ],
    bullets: [
      "Primary engineer on the proposal-to-invoice workflow: enquiry intake, scoping, proposal generation, and milestone-based, multi-currency invoicing with client-side PDF export.",
      "Built REST APIs with Mongoose, JWT, and Zod, and a domain-driven frontend of ~450 TypeScript/React files with enforced module boundaries.",
      "Added Microsoft single sign-on (MSAL), Microsoft 365 mailbox ingestion via Microsoft Graph, role-based access, OTP invitations, and Socket.IO notifications.",
      "Set up GitHub Actions CI/CD with multi-stage Docker builds and Nginx deployments for staging and production.",
    ],
    links: [],
  },
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
      "Sentry",
    ],
    bullets: [
      "Developed and scaled investment, portfolio, and transaction workflows used by 10K+ active users, integrating 5+ third-party financial APIs.",
      "Reduced initial load time by 30–45% through code splitting, lazy loading, and modernization of legacy React components.",
      "Built 20+ reusable UI components and led delivery of the Share Transfer Facility across product, design, and engineering teams.",
      "Added multi-language support with RTL layouts for Arabic, and monitored production daily with Sentry and LogRocket.",
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
    name: "ApplyTracker",
    tagline: "Full-Stack Job Application Tracker",
    summary:
      "Organise job applications on a Kanban board, import jobs from a link, get follow-up reminders, and see analytics on your job search.",
    stack: [
      "Next.js 16",
      "TypeScript",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Turborepo",
    ],
    bullets: [
      "Built a Kanban board with optimistic drag-and-drop (mouse, touch, keyboard), a filterable list view with shareable URLs, and per-application timelines, interviews, and contacts.",
      "Imports jobs from LinkedIn, Indeed, Greenhouse, or company links via JSON-LD and site parsers, with SSRF-safe fetching and an installable share target on mobile.",
      "Runs reminders, follow-up suggestions, interview heads-ups, and weekly summary emails on idempotent BullMQ jobs.",
      "Scores a resume against a job description and drafts cover letters with a free built-in matcher, Ollama, or the Claude API.",
      "Secured auth with argon2id, rotating refresh tokens with reuse detection, Google OAuth with PKCE, rate limiting, and CSRF checks; Zod schemas shared between web and API.",
    ],
    links: [{ label: "Code", href: "https://github.com/Hazrat16/apply-tracker" }],
    featured: true,
  },
  {
    name: "SmartJobHub",
    tagline: "Job Portal on AWS with CI/CD",
    summary:
      "A job portal for jobseekers, employers, and admins, with real-time chat, payments, and a production AWS deployment built with Terraform and GitHub Actions.",
    stack: [
      "Next.js",
      "TypeScript",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Redis",
      "Terraform",
      "AWS ECS",
    ],
    bullets: [
      "Built a 29-page app with job search and filters, applications with status history, saved jobs, company profiles, notifications, an analytics dashboard, role-based access, and ARIA labelling.",
      "Added real-time chat with Socket.IO and a Redis adapter so messages and online status work across several servers.",
      "Integrated SSLCommerz payments, Cloudinary uploads, PDF resume parsing, and a BullMQ email queue; covered the API with 15 test suites and the web app with Playwright.",
      "Wrote Terraform modules for VPC, ALB, ECS Fargate, ElastiCache, Secrets Manager, and CloudFront, with matching staging and production environments.",
      "Built GitHub Actions pipelines (tests, Docker build, Trivy, CodeQL) that deploy to staging, then promote the same image to production after approval, using GitHub OIDC.",
      "Made deploys safe with ECS circuit-breaker rollback, smoke tests, and autoscaling.",
      "Set up CloudWatch alarms to SNS, AWS budget alerts, Sentry, Prometheus, Loki, and Grafana, and wrote the runbook, 9 ADRs, and a backup restore drill.",
    ],
    links: [{ label: "Code", href: "https://github.com/Hazrat16/smart-jobhub" }],
    featured: true,
  },
  {
    name: "Doctor Appointment Platform",
    tagline: "Booking App with CI/CD, IaC, and Configuration Management",
    summary:
      "A booking platform with separate patient, doctor, and admin dashboards, deployed to AWS with Terraform, Ansible, and GitHub Actions.",
    stack: [
      "Next.js",
      "TypeScript",
      "Express",
      "MongoDB",
      "Docker",
      "Terraform",
      "Ansible",
    ],
    bullets: [
      "Built patient, doctor, and admin dashboards behind role-based route guards: booking, availability management, and doctor verification.",
      "Built a reusable UI kit (buttons, inputs, selects, cards, confirm dialogs) and validated forms with Zod.",
      "Automated TypeScript builds, CodeQL scanning, and Docker image publishing to GHCR with GitHub Actions.",
      "Provisioned VPC, security groups, and EC2 with Terraform, and configured hosts with Ansible: Docker, MongoDB backups, Nginx, TLS, rolling deployments, and health checks.",
    ],
    links: [{ label: "Code", href: "https://github.com/Hazrat16/appointment" }],
    featured: true,
  },
  {
    name: "AI SQL Assistant",
    tagline: "Natural-Language PostgreSQL Workspace",
    summary:
      "A full-stack PostgreSQL tool that turns plain-English questions into validated, read-only SQL with explanations.",
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
      "Integrated OpenAI and Ollama with an offline fallback for natural-language query generation.",
      "Created a Next.js workspace with results tables, a schema browser, and database connection management.",
      "Runs locally with Docker, database migrations, and seeded datasets.",
    ],
    links: [{ label: "Code", href: "https://github.com/Hazrat16/ai-sql-assistant" }],
    featured: true,
  },
  {
    name: "AI Mock Interview Coach",
    tagline: "Offline Voice Interview Practice",
    summary:
      "A voice interview practice app that runs fully offline, using local speech and LLM models.",
    stack: ["React 19", "TypeScript", "Vite", "AudioWorklet", "Vitest", "Playwright"],
    bullets: [
      "Captures microphone audio with an AudioWorklet and detects when the speaker starts and stops with voice activity detection.",
      "Runs speech recognition and the interviewer LLM locally, so no audio or answers leave the device.",
      "Covered with 244 Vitest tests and 11 Playwright specs, including axe WCAG 2.1 AA and keyboard-only checks.",
    ],
    links: [{ label: "Code", href: "https://github.com/Hazrat16/ai-mock-interview-coach" }],
  },
  {
    name: "Sneaker Drop Inventory",
    tagline: "Real-Time Reservation System with Jenkins CI/CD",
    summary:
      "A limited-stock storefront where many shoppers reserve at once, shipped by a self-hosted Jenkins pipeline on AWS EC2.",
    stack: [
      "React",
      "TypeScript",
      "Socket.IO",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Jenkins",
      "Docker",
      "Nginx",
    ],
    bullets: [
      "Streams live stock updates over Socket.IO, with a countdown for each 60-second hold before checkout and skeleton loaders under load.",
      "Prevents overselling with row-level database locking and transactional reservations that expire automatically.",
      "Built a webhook-triggered Jenkins pipeline on AWS EC2: multi-stage Docker builds, PostgreSQL integration tests including a 100-request concurrency test, and automated deploys with smoke tests, so failed builds never ship.",
      "Deploys with Docker Compose behind Nginx, with versioned images, Prisma migrations, server hardening, rollback support, and a runbook.",
    ],
    links: [
      { label: "Live", href: "https://real-time-high-trafic-inventory-web.vercel.app" },
      { label: "Code", href: "https://github.com/Hazrat16/real-time-high-trafic-inventory" },
    ],
  },
  {
    name: "AWS and DevOps Labs",
    tagline: "Kubernetes, Terraform, and Serverless on AWS",
    summary:
      "Smaller infrastructure projects, each focused on one piece of the AWS and DevOps toolchain.",
    stack: ["AWS", "EKS", "Kubernetes", "Terraform", "Lambda", "DynamoDB", "Bash"],
    bullets: [
      "Kubernetes on EKS: deployed a two-tier, MySQL-backed app with kubectl and eksctl, and documented cluster setup and teardown to manage costs.",
      "Terraform module: provisioned a VPC, subnets, internet gateway, route tables, security groups, and an EC2 web server with a Bash user-data bootstrap.",
      "Serverless expense tracker: an Express and DynamoDB app that runs the same way in Docker locally and on AWS Lambda in production.",
    ],
    links: [
      { label: "EKS", href: "https://github.com/Hazrat16/student-management-with-eks" },
      { label: "Terraform", href: "https://github.com/Hazrat16/terraform-launchpad" },
      { label: "Serverless", href: "https://github.com/Hazrat16/serverless-expense-tracker" },
    ],
  },
  {
    name: "Open Source React Hooks",
    tagline: "Published npm Packages",
    summary:
      "Two React hooks published on npm, with about 400 downloads in the past year.",
    stack: ["React", "TypeScript", "npm"],
    bullets: [
      "block-browser-back: a hook that blocks the browser back button.",
      "checkout-risk-sdk: a hook for Checkout.com fraud-detection (Risk SDK) integration.",
    ],
    links: [
      { label: "block-browser-back", href: "https://www.npmjs.com/package/block-browser-back" },
      { label: "checkout-risk-sdk", href: "https://www.npmjs.com/package/checkout-risk-sdk" },
    ],
  },
];
