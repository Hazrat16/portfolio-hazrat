export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "HTML", "CSS", "Bash"],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "Vite",
      "Redux Toolkit",
      "TanStack Query",
      "React Hook Form",
      "Tailwind CSS",
      "Radix UI",
      "Material UI",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "NestJS", "Fastify", "Socket.IO", "Zod"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "Redis", "Prisma"],
  },
  {
    title: "DevOps & Cloud",
    items: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "GitHub Actions",
      "Nginx",
    ],
  },
  {
    title: "Testing & Tools",
    items: ["Vitest", "Sentry", "Grafana", "Git", "Postman"],
  },
];

export const engineeringHighlights = [
  "3+ years building production fintech and billing products",
  "30–45% faster initial frontend load time",
  "25–35% faster API responses through query and caching work",
  "20+ reusable UI components across product teams",
  "Terraform, ECS, and GitHub Actions deployments on AWS",
];
