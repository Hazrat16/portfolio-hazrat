export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "TypeScript", "C", "C++"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Redux", "Tailwind CSS", "Chakra UI", "Material UI"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Fastify"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "DevOps & Tools",
    items: ["Git", "GitHub Actions", "Docker", "Postman", "Sentry"],
  },
];

export const engineeringHighlights = [
  "3+ years building production fintech products",
  "30–45% faster initial frontend load time",
  "20+ standardized reusable UI components",
  "React, Next.js & TypeScript architecture",
  "Node.js APIs, databases & CI/CD workflows",
];
