import type { IconType } from "react-icons";
import {
  SiC,
  SiChakraui,
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiFastify,
  SiGit,
  SiGithubactions,
  SiJavascript,
  SiMui,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiRedux,
  SiSentry,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
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
