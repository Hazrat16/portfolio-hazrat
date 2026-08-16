import type { Metadata } from "next";
import Image from "next/image";
import { Download } from "lucide-react";
import { Panel, PanelItem } from "@/components/ui/panel";
import { Reveal } from "@/components/ui/reveal";
import { Bullets } from "@/components/ui/primitives";
import { SkillList } from "@/components/ui/skill-list";
import { DetailProjectCard } from "@/components/projects/project-cards";
import { education, experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume",
  description: site.about,
};

export default function ResumePage() {
  return (
    <div className="px-5 pt-28 pb-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row md:gap-8">
        <aside className="shrink-0 md:w-66">
          <div className="md:sticky md:top-24">
            <div className="rounded-xl border border-border/50 bg-card/40 p-5 backdrop-blur-[2px]">
              <div className="flex flex-col items-center text-center">
                <span className="flex size-28 items-center justify-center overflow-hidden rounded-full border border-primary/25 bg-primary/10 text-2xl font-bold text-primary/90">
                  {site.avatar ? (
                    <Image
                      src={site.avatar}
                      alt={site.name}
                      width={256}
                      height={256}
                      quality={95}
                      priority
                      sizes="112px"
                      className="size-full object-cover object-[center_25%]"
                    />
                  ) : (
                    site.initials
                  )}
                </span>
                <h1 className="mt-4 text-2xl font-bold">{site.name}</h1>
                <p className="mt-0.5 text-sm font-medium text-primary">
                  {site.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {site.tagline}
                </p>

                <div className="mt-4 grid w-full gap-2">
                  <a
                    href={site.resumeUrl}
                    download="CV_Hazrat_Ali.pdf"
                    className="group flex w-full items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary/8 px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/15"
                  >
                    <Download className="size-3.5 text-primary" />
                    Download CV
                  </a>
                </div>
              </div>

              <div className="mt-6 border-t border-border/40 pt-5">
                <SkillList />
              </div>
            </div>
          </div>
        </aside>

        <Reveal className="min-w-0 flex-1 space-y-6">
          <div data-reveal>
            <Panel label="About Me">
              <PanelItem>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {site.about}
                </p>
              </PanelItem>
            </Panel>
          </div>

          <div data-reveal style={{ transitionDelay: "60ms" }}>
            <Panel label="Professional Experience">
              {experiences.map((item) => (
                <PanelItem key={item.company}>
                  <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold">{item.role}</h3>
                    <span className="text-xs text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                  <p className="mb-3 text-sm font-medium text-primary">
                    {item.company} | {item.location} | {item.employmentType}
                  </p>
                  <Bullets items={item.bullets} />
                </PanelItem>
              ))}
            </Panel>
          </div>

          <div data-reveal style={{ transitionDelay: "120ms" }}>
            <Panel label="Projects">
              {projects.map((project) => (
                <PanelItem key={project.name}>
                  <DetailProjectCard project={project} />
                </PanelItem>
              ))}
            </Panel>
          </div>

          <div data-reveal style={{ transitionDelay: "180ms" }}>
            <Panel label="Education">
              {education.map((item) => (
                <PanelItem key={item.degree}>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-semibold">
                        {item.degree}
                      </h3>
                      <p className="mt-0.5 text-sm text-primary">
                        {item.institution}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">
                        {item.period}
                      </p>
                      <p className="text-xs text-primary/80">{item.result}</p>
                    </div>
                  </div>
                </PanelItem>
              ))}
            </Panel>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
