export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI Tooling",
    items: ["Claude Code", "Cursor", "OpenAI", "Ollama"],
  },
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
      "shadcn/ui",
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
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma"],
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
      "Jenkins",
      "Nginx",
    ],
  },
  {
    title: "Testing & Observability",
    items: [
      "Vitest",
      "Testing Library",
      "ESLint",
      "Trivy",
      "Sentry",
      "Prometheus",
      "Grafana",
      "Git",
      "Postman",
    ],
  },
];

export const engineeringHighlights = [
  "4 years building production fintech and billing products",
  "30–45% faster initial frontend load time",
  "20+ reusable UI components across product teams",
  "Terraform, ECS, EKS, and GitHub Actions deployments on AWS",
  "Agentic workflow with Claude Code and Cursor, with every change reviewed and tested",
];
