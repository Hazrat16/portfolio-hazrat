import { Briefcase } from "lucide-react";
import { SectionGlow } from "@/components/layout/background";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel, SectionTitle } from "@/components/ui/primitives";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative border-y border-border/30 bg-card/50 px-6 py-18"
    >
      <SectionGlow side="right" />
      <Reveal className="mx-auto max-w-4xl">
        <div data-reveal>
          <SectionLabel>Experience</SectionLabel>
          <SectionTitle className="mb-8">Where I&apos;ve worked.</SectionTitle>
        </div>

        <div className="relative space-y-12 border-l-2 border-border pl-8">
          {experiences.map((item, index) => (
            <div
              key={`${item.role}-${item.company}`}
              data-reveal="left"
              style={{ transitionDelay: `${index * 120}ms` }}
              className="relative"
            >
              <span className="absolute top-1 -left-[2.55rem] flex size-5 items-center justify-center rounded-full border-2 border-primary bg-primary/20">
                <Briefcase className="size-2.5 text-primary" />
              </span>

              <p className="mb-1 text-sm text-muted-foreground">
                {item.period} · {item.employmentType}
              </p>
              <h3 className="text-xl font-semibold">{item.role}</h3>
              <p className="mb-3 font-medium text-primary">{item.company}</p>

              <ul className="space-y-1.5">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
