import { projects, projectsIntro } from "../../data";
import type { Project } from "../../data";
import Container from "../Container";
import ProjectLinkChip from "../ProjectLinkChip";
import SectionHeading from "../SectionHeading";

const projectLinkLabels = [
  { key: "client" as const, label: "GitHub Client" },
  { key: "server" as const, label: "GitHub Server" },
  { key: "live" as const, label: "Live Site" },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-300/35 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm text-slate-500">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
          Case Study
        </span>
      </div>

      <h3 className="mt-5 text-xl font-semibold text-white">{project.name}</h3>
      <p className="mt-1 text-xs uppercase tracking-[0.22em] text-cyan-200/80">
        {project.type}
      </p>
      <p className="mt-3 text-sm leading-7 text-brand-muted">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {projectLinkLabels.map(({ key, label }) => (
          <ProjectLinkChip
            key={key}
            href={project.links[key]}
            label={label}
          />
        ))}
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <Container id="projects" className="py-12 sm:py-14">
      <SectionHeading
        eyebrow={projectsIntro.eyebrow}
        title={projectsIntro.title}
        description={projectsIntro.description}
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </Container>
  );
}
