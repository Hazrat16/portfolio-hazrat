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
    location: "Remote",
    bullets: [
      "Primary engineer for a project-fee estimation and billing platform built with React 19, TypeScript, Vite, TanStack Query, Tailwind CSS, Radix UI, Node.js/Express 5, MongoDB, and Redis.",
      "Built the proposal-to-invoice workflow: enquiry intake, project scoping, proposal generation, and milestone-based, multi-currency invoicing with PDF export.",
      "Built REST APIs with Mongoose, JWT, and Zod for enquiries, proposals, invoicing, authentication, and user management.",
      "Architected a domain-driven frontend (~450 TypeScript/React files) with vertical-slice modules and enforced import boundaries.",
      "Added Microsoft Graph/MSAL single sign-on, role-based access, OTP invitations, and real-time Socket.IO notifications.",
      "Set up GitHub Actions CI/CD with lint, type-check, and build gates, tag-based staging-to-production promotion, multi-stage Docker builds, and Nginx deployments.",
    ],
  },
  {
    role: "Software Engineer",
    company: "SmartCrowd",
    period: "Mar 2025 – Apr 2026",
    employmentType: "Full-time",
    location: "Dubai, UAE · Remote",
    bullets: [
      "Promoted from Junior Software Engineer within just over two years for leading frontend architecture improvements and delivering fintech features used by 10K+ active users.",
      "Reduced initial frontend load time by 30–45% through code splitting, lazy loading, and legacy component optimization.",
      "Led delivery of the Share Transfer Facility with backend and design teams, with zero major post-release production issues in a high-volume transaction system.",
      "Built Node.js/Express authentication and transaction APIs, and optimized MongoDB queries and caching to improve API response times by 25–35%.",
      "Built 20+ reusable components, reducing duplicated UI implementation by approximately 35%.",
      "Used LogRocket and Sentry daily to monitor the platform, investigate alerts, and speed up incident resolution.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "SmartCrowd",
    period: "Dec 2022 – Feb 2025",
    employmentType: "Full-time",
    location: "Dubai, UAE · Remote",
    bullets: [
      "Developed and scaled the React/Redux platform, integrating 5+ financial APIs across investment, portfolio, and transaction workflows.",
      "Modernized the legacy frontend and delivered performance, usability, and responsive-design improvements across desktop, tablet, and mobile.",
      "Collaborated with product and UI/UX teams to align product features with user needs and visual design standards.",
      "Enabled multilingual support with RTL layouts for Arabic, expanding accessibility for a broader user base.",
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
