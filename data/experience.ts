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
    role: "Software Engineer",
    company: "SmartCrowd",
    period: "Mar 2025 – Present",
    employmentType: "Full-time",
    location: "Remote",
    bullets: [
      "Promoted from Junior Software Engineer within two years for leading frontend architecture improvements and delivering high-impact fintech features used by 10K+ active users.",
      "Improved initial load time by 30–45% through component-level code splitting, lazy loading, and optimization of legacy React components.",
      "Built and standardized 20+ reusable UI components, improving development efficiency by approximately 35% and reducing duplicated implementation across teams.",
      "Led end-to-end delivery of the Share Transfer Facility, coordinating cross-functional teams with zero major post-release production issues.",
      "Implemented Node.js and Express APIs, optimized MongoDB queries and caching to reduce response times by 25–35%, and integrated LogRocket and Sentry for observability.",
      "Mentored junior developers and led code reviews to uphold frontend quality, best practices, and maintainable documentation.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "SmartCrowd",
    period: "Dec 2022 – Feb 2025",
    employmentType: "Full-time",
    location: "Dubai, UAE · Remote",
    bullets: [
      "Developed and scaled the React and Redux-based SmartCrowd platform, integrating 5+ third-party financial APIs for investment, portfolio, and transaction workflows.",
      "Modernized the legacy frontend and delivered performance, usability, and responsive-design improvements across desktop, tablet, and mobile.",
      "Collaborated with product and UI/UX teams to align product features with user needs and visual design standards.",
      "Enabled multilingual support with RTL layouts for Arabic, expanding accessibility for a broader user base.",
      "Owned frontend feature delivery and coordinated critical milestones across product and engineering teams.",
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
