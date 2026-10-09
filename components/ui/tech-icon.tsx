import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";
import {
  SiAnsible,
  SiC,
  SiChakraui,
  SiCplusplus,
  SiCss,
  SiDocker,
  SiExpress,
  SiFastify,
  SiGit,
  SiGithubactions,
  SiGnubash,
  SiGrafana,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiRadixui,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiRedis,
  SiRedux,
  SiSentry,
  SiSocketdotio,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVite,
  SiVitest,
  SiZod,
} from "react-icons/si";

const iconMap: Record<string, { Icon: IconType; color: string }> = {
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  C: { Icon: SiC, color: "#A8B9CC" },
  "C++": { Icon: SiCplusplus, color: "#00599C" },
  Java: { Icon: SiOpenjdk, color: "#E76F00" },
  React: { Icon: SiReact, color: "#61DAFB" },
  "React.js": { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#FFFFFF" },
  Redux: { Icon: SiRedux, color: "#764ABC" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#38BDF8" },
  "Chakra UI": { Icon: SiChakraui, color: "#319795" },
  "Material UI": { Icon: SiMui, color: "#007FFF" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  Express: { Icon: SiExpress, color: "#E5E7EB" },
  "Express.js": { Icon: SiExpress, color: "#E5E7EB" },
  Fastify: { Icon: SiFastify, color: "#E5E7EB" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  Git: { Icon: SiGit, color: "#F05032" },
  "GitHub Actions": { Icon: SiGithubactions, color: "#2088FF" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Postman: { Icon: SiPostman, color: "#FF6C37" },
  Sentry: { Icon: SiSentry, color: "#362D59" },
  "Socket.IO": { Icon: SiSocketdotio, color: "#E5E7EB" },
  HTML: { Icon: SiHtml5, color: "#E34F26" },
  CSS: { Icon: SiCss, color: "#663399" },
  Bash: { Icon: SiGnubash, color: "#4EAA25" },
  Vite: { Icon: SiVite, color: "#9135FF" },
  "Redux Toolkit": { Icon: SiRedux, color: "#764ABC" },
  "TanStack Query": { Icon: SiReactquery, color: "#FF4154" },
  "React Hook Form": { Icon: SiReacthookform, color: "#EC5990" },
  "Radix UI": { Icon: SiRadixui, color: "#E5E7EB" },
  NestJS: { Icon: SiNestjs, color: "#E0234E" },
  Zod: { Icon: SiZod, color: "#408AFF" },
  Redis: { Icon: SiRedis, color: "#FF4438" },
  Prisma: { Icon: SiPrisma, color: "#E5E7EB" },
  AWS: { Icon: FaAws, color: "#FF9900" },
  Kubernetes: { Icon: SiKubernetes, color: "#326CE5" },
  Terraform: { Icon: SiTerraform, color: "#844FBA" },
  Ansible: { Icon: SiAnsible, color: "#E5E7EB" },
  Nginx: { Icon: SiNginx, color: "#009639" },
  Vitest: { Icon: SiVitest, color: "#6E9F18" },
  Grafana: { Icon: SiGrafana, color: "#F46800" },
};

export function TechIcon({ name }: { name: string }) {
  const entry = iconMap[name];

  return (
    <span
      title={name}
      aria-label={name}
      className="flex size-9 items-center justify-center rounded-lg border border-border/60 bg-secondary/40 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-secondary/70"
    >
      {entry ? (
        <entry.Icon className="size-[18px]" style={{ color: entry.color }} />
      ) : (
        <span className="text-[10px] font-medium text-muted-foreground">
          {name.slice(0, 2)}
        </span>
      )}
    </span>
  );
}
