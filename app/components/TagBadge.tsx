import type { IconType } from "react-icons";
import {
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVsco,
} from "react-icons/si";
import { tagIconColors } from "../data";

const tagIcons: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Redux Toolkit": SiRedux,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  Docker: SiDocker,
  Git: SiGit,
  GitHub: SiGithub,
  "VS Code": SiVsco,
};

const defaultColor =
  "border-cyan-400/20 bg-cyan-400/10 text-cyan-200";

type TagBadgeProps = {
  label: string;
  showIcon?: boolean;
};

export default function TagBadge({ label, showIcon = true }: TagBadgeProps) {
  const TagIcon = showIcon ? tagIcons[label] : undefined;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs sm:px-3 ${tagIconColors[label] ?? defaultColor}`}
    >
      {TagIcon ? <TagIcon className="h-3 w-3" aria-hidden /> : null}
      {label}
    </span>
  );
}
