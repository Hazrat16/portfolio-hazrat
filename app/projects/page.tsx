import type { Metadata } from "next";
import { Panel, PanelItem } from "@/components/ui/panel";
import { Reveal } from "@/components/ui/reveal";
import { SkillList } from "@/components/ui/skill-list";
import { DetailProjectCard } from "@/components/projects/project-cards";
import { professionalProjects, projects } from "@/data/projects";
import { engineeringHighlights } from "@/data/skills";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Professional and personal engineering work across fintech, billing, job search, AI-assisted data tooling, real-time apps, and AWS infrastructure.",
};

export default function ProjectsPage() {
  return (
    <div className="px-5 pt-28 pb-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row md:gap-8">
        <aside className="shrink-0 md:w-66">
          <div className="md:sticky md:top-24">
            <div className="rounded-xl border border-border/50 bg-card/40 p-5 backdrop-blur-[2px]">
              <h1 className="text-2xl font-bold text-primary">
                Engineering Highlights
              </h1>

              <ul className="mt-3 space-y-1.5">
                {engineeringHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-border/40 pt-5">
                <SkillList />
              </div>
            </div>
          </div>
        </aside>

        <Reveal className="min-w-0 flex-1 space-y-6">
          <div data-reveal>
            <Panel label="Professional Projects">
              {professionalProjects.map((project) => (
                <PanelItem key={project.name}>
                  <DetailProjectCard project={project} showSummary={false} />
                </PanelItem>
              ))}
            </Panel>
          </div>

          <div data-reveal style={{ transitionDelay: "80ms" }}>
            <Panel label="Projects">
              {projects.map((project) => (
                <PanelItem key={project.name}>
                  <DetailProjectCard project={project} />
                </PanelItem>
              ))}
            </Panel>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
