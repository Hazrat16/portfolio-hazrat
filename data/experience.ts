export type Experience = {
  role: string;
  company: string;
  period: string;
  employmentType: string;
  location: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    role: "Full-Stack Engineer",
    company: "Firmwide — PriceEstimator.ai",
    period: "May 2026 – Present",
    employmentType: "Contract",
    location: "USA · Remote",
    bullets: [
      "Primary engineer for a project-fee estimation and billing platform built with React 19, TypeScript, Vite, TanStack Query, Tailwind CSS, Radix UI, Node.js/Express 5, MongoDB, and Redis.",
      "Built the proposal-to-invoice workflow: enquiry intake, project scoping, proposal generation, and milestone-based, multi-currency invoicing with client-side PDF export (jsPDF, html2canvas).",
      "Built REST APIs with Express 5, Mongoose, Redis, JWT, and Zod for enquiries, proposals, invoicing, authentication, and user management, with a caching strategy to reduce database load.",
      "Architected a domain-driven frontend of about 450 TypeScript/React files with vertical-slice modules and enforced import boundaries.",
      "Added Microsoft single sign-on (MSAL), Microsoft 365 mailbox ingestion through Microsoft Graph, role-based access control, OTP-based invitations, and real-time Socket.IO notifications.",
      "Set up GitHub Actions CI/CD with lint, type-check, and build gates on pull requests, tag-based staging-to-production promotion, multi-stage Docker builds, and environment-specific Nginx reverse-proxy configs.",
      "Use Claude Code and Cursor as the main development environment: scoped specs, parallel agents across API, UI, and test work guided by CLAUDE.md rule files, and line-by-line review before merging.",
    ],
  },
  {
    role: "Software Engineer",
    company: "SmartCrowd",
    period: "Mar 2025 – Apr 2026",
    employmentType: "Full-time",
    location: "Dubai, UAE · Remote",
    bullets: [
      "Promoted from Junior Software Engineer to Software Engineer in Mar 2025, just over two years in, for leading architecture improvements and delivering fintech features.",
      "Developed and scaled the React and Redux platform, integrating 5+ financial APIs across investment, portfolio, and transaction workflows for 10K+ active users.",
      "Reduced initial frontend load time by 30–45% through code splitting, lazy loading, and legacy component optimization.",
      "Led end-to-end delivery of the Share Transfer Facility with backend and design teams, with zero major post-release production issues in a high-volume transaction system.",
      "Built 20+ reusable components, reducing duplicated UI code by about 35%.",
      "Monitored the platform daily with Sentry and LogRocket, triaging alerts and driving incident resolution.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "SmartCrowd",
    period: "Dec 2022 – Feb 2025",
    employmentType: "Full-time",
    location: "Dubai, UAE · Remote",
    bullets: [
      "Built React/Redux features across investment, portfolio, and transaction workflows on a regulated fintech platform.",
      "Modernized the legacy frontend and improved responsive design across desktop, tablet, and mobile.",
      "Added multi-language support with right-to-left (RTL) layouts for Arabic.",
      "Collaborated with product and UI/UX teams to align features with user needs and visual design standards.",
    ],
  },
];

export type Education = {
  degree: string;
  institution: string;
  period: string;
  result: string;
};

export const education: Education[] = [
  {
    degree: "B.Sc. in Information and Communication Technology",
    institution: "Mawlana Bhashani Science and Technology University",
    period: "Feb 2017 – Dec 2022",
    result: "CGPA: 3.53 / 4.00",
  },
];
