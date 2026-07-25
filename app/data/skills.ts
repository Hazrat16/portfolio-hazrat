import type { TechCard } from "./types";

export const techCards: TechCard[] = [
  {
    icon: "frontend",
    title: "Frontend Engineering",
    description:
      "UI architecture, performance, and reusable component systems.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Styled-components",
      "Chakra UI",
      "Material UI",
      "Ant design",
      "Bootstrap",
    ],
  },
  {
    icon: "backend",
    title: "Backend",
    description: "REST APIs, server-side logic, and real-time communication.",
    tags: ["Node.js", "Express.js", "TypeScript", "MongoDB", "Socket.IO"],
  },
  {
    icon: "database",
    title: "Databases",
    description: "Data modeling and persistent storage for production apps.",
    tags: ["MongoDB"],
  },
  {
    icon: "devops",
    title: "DevOps & CI/CD",
    description: "Automation, continuous integration, and safe deployments.",
    tags: ["GitHub Actions", "CI/CD Pipelines", "Docker"],
  },
  {
    icon: "tools",
    title: "Tools",
    description: "Developer tooling that keeps delivery fast and consistent.",
    tags: ["Git", "GitHub", "VS Code", "Cursor", "LogRocket"],
  },
  {
    icon: "tools",
    title: "Engineering Focus",
    description: "Practices and priorities behind how I build product UI.",
    tags: ["Performance", "Reusable UI", "Responsive Design", "RTL Support"],
  },
];

export const tagIconColors: Record<string, string> = {
  React: "bg-sky-400/15 text-sky-300 border-sky-400/20",
  "Next.js": "bg-slate-200/10 text-slate-100 border-slate-200/15",
  TypeScript: "bg-blue-500/15 text-blue-300 border-blue-500/20",
  "Redux Toolkit": "bg-violet-500/15 text-violet-300 border-violet-500/20",
  "Tailwind CSS": "bg-cyan-400/15 text-cyan-300 border-cyan-400/20",
  "Styled-components": "bg-pink-500/15 text-pink-300 border-pink-500/20",
  "Chakra UI": "bg-teal-500/15 text-teal-300 border-teal-500/20",
  "Material UI": "bg-indigo-500/15 text-indigo-300 border-indigo-500/20",
  "Ant design": "bg-red-500/15 text-red-300 border-red-500/20",
  Bootstrap: "bg-purple-500/15 text-purple-300 border-purple-500/20",
  "Node.js": "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
  "Express.js": "bg-zinc-400/15 text-zinc-200 border-zinc-400/20",
  MongoDB: "bg-green-500/15 text-green-300 border-green-500/20",
  "Socket.IO": "bg-amber-500/15 text-amber-300 border-amber-500/20",
  "GitHub Actions": "bg-indigo-500/15 text-indigo-300 border-indigo-500/20",
  "CI/CD Pipelines": "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/20",
  Docker: "bg-sky-500/15 text-sky-300 border-sky-500/20",
  Git: "bg-orange-500/15 text-orange-300 border-orange-500/20",
  GitHub: "bg-slate-300/10 text-slate-100 border-slate-300/15",
  "VS Code": "bg-blue-500/15 text-blue-300 border-blue-500/20",
  Cursor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/20",
  LogRocket: "bg-lime-500/15 text-lime-300 border-lime-500/20",
};

export function splitIntoColumns<T>(items: T[], columnCount = 2): T[][] {
  const columns: T[][] = Array.from({ length: columnCount }, () => []);

  items.forEach((item, index) => {
    columns[index % columnCount].push(item);
  });

  return columns;
}
