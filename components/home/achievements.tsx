import { ArrowRight, Trophy } from "lucide-react";
import { SectionGlow } from "@/components/layout/background";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel, SectionTitle } from "@/components/ui/primitives";
import { achievements } from "@/data/achievements";

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative border-t border-border/30 bg-card/50 px-5 py-18"
    >
      <SectionGlow side="left" />
      <Reveal className="mx-auto max-w-4xl">
        <div data-reveal className="mb-8">
          <SectionLabel>Professional Impact</SectionLabel>
          <SectionTitle>
            Results that <span className="text-primary">made an impact</span>.
          </SectionTitle>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Measurable improvements delivered across performance, product
            architecture, and engineering workflows.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((item, index) => (
            <div
              key={item.title}
              data-reveal
              style={{ transitionDelay: `${index * 100}ms` }}
              className="group h-full"
            >
              <div className="flex h-full flex-col rounded-xl border border-border/50 bg-background/40 p-5 backdrop-blur-[2px] transition-colors duration-300 group-hover:border-primary/30">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md border border-primary/25 bg-primary/10">
                      <Trophy className="size-3.5 text-primary" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {item.organization}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-md border border-border/50 bg-secondary/40 px-2 py-0.5 text-xs text-muted-foreground">
                    {item.year}
                  </span>
                </div>

                <p className="mb-2 text-sm font-medium text-primary/85">
                  {item.subject}
                </p>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                <a
                  href={item.link.href}
                  className="group/link mt-auto flex items-center gap-1.5 text-xs font-medium text-primary/80 transition-colors hover:text-primary"
                >
                  {item.link.label}
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
