import { TechIcon } from "@/components/ui/tech-icon";
import { skillGroups } from "@/data/skills";

export function SkillList() {
  return (
    <div className="space-y-5">
      {skillGroups.map((group) => (
        <div key={group.title}>
          <p className="mb-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            {group.title}
          </p>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <TechIcon key={item} name={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
