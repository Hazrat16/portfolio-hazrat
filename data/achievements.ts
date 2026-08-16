export type Achievement = {
  title: string;
  organization: string;
  year: string;
  subject: string;
  description: string;
  link: { label: string; href: string };
};

export const achievements: Achievement[] = [
  {
    title: "Promoted in 2 Years",
    organization: "SmartCrowd",
    year: "2025",
    subject: "Junior Software Engineer → Software Engineer",
    description:
      "Promoted for leading frontend architecture improvements and delivering high-impact fintech product features serving more than 10K active users.",
    link: { label: "Visit SmartCrowd", href: "https://smartcrowd.ae/" },
  },
  {
    title: "30–45% Faster",
    organization: "Frontend Performance",
    year: "Impact",
    subject: "Initial Load-Time Optimization",
    description:
      "Reduced initial load time through component-level code splitting, lazy loading, bundle optimization, and modernization of legacy React components.",
    link: { label: "View Experience", href: "/resume" },
  },
  {
    title: "20+ Components",
    organization: "Frontend Design System",
    year: "Scale",
    subject: "Reusable UI Standardization",
    description:
      "Built and standardized a reusable component library that improved development efficiency by approximately 35% and reduced duplicated UI work across teams.",
    link: { label: "View Experience", href: "/resume" },
  },
];
