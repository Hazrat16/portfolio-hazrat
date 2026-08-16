import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel, SectionTitle } from "@/components/ui/primitives";
import { FeaturedProjectCard } from "@/components/projects/project-cards";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="relative px-5 py-18">
      <Reveal className="mx-auto max-w-4xl">
        <div
          data-reveal
          className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <SectionLabel>Featured Work</SectionLabel>
            <SectionTitle>
              Projects that{" "}
              <span className="text-primary">made an impact</span>.
            </SectionTitle>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
              A collection of applications built with modern technologies,
              focusing on user experience and scalable architecture.
            </p>
          </div>

          <Link
            href="/projects"
            className="group flex shrink-0 items-center gap-2 text-sm font-medium text-primary/90 transition-colors hover:text-primary"
          >
            View All Projects
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project, index) => (
            <div
              key={project.name}
              data-reveal
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <FeaturedProjectCard project={project} />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
