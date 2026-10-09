import { ArrowUpRight } from "lucide-react";
import { Bullets, Tag } from "@/components/ui/primitives";
import type { Project } from "@/data/projects";

function ProjectLinks({ links }: { links: Project["links"] }) {
  return (
    <div className="flex flex-wrap items-center justify-end gap-x-3 gap-y-1">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors duration-200 hover:text-primary"
        >
          {link.label}
          <ArrowUpRight className="size-3" />
        </a>
      ))}
    </div>
  );
}

/** Home page card: tagline-forward with a tech stack footer. */
export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative h-full">
      <div className="absolute -inset-px rounded-xl bg-linear-to-b from-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col rounded-xl border border-border/50 bg-card/40 p-5 backdrop-blur-[2px] transition-colors duration-300 group-hover:border-primary/30">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold transition-colors duration-200 group-hover:text-primary">
              {project.name}
            </h3>
            {project.tagline && (
              <p className="mt-0.5 text-sm font-medium text-primary/80">
                {project.tagline}
              </p>
            )}
          </div>
          <ProjectLinks links={project.links} />
        </div>

        {project.summary && (
          <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
        )}

        <div className="mt-auto">
          <p className="mb-2 text-xs tracking-widest text-muted-foreground/60 uppercase">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Projects & resume page card: stack chips plus responsibility bullets. */
export function DetailProjectCard({
  project,
  showSummary = true,
}: {
  project: Project;
  showSummary?: boolean;
}) {
  return (
    <div className="group">
      <div className="mb-3 flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold transition-colors duration-200 group-hover:text-primary">
          {project.name}
        </h3>
        <ProjectLinks links={project.links} />
      </div>

      {showSummary && project.summary && (
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
      )}

      <div className="mb-3 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      <Bullets items={project.bullets} />
    </div>
  );
}
