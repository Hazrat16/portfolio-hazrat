import { experienceIntro, experiences } from "../../data";
import type { Experience } from "../../data";
import Container from "../Container";
import SectionHeading from "../SectionHeading";

type ExperienceItemProps = {
  item: Experience;
  index: number;
  isLast: boolean;
};

function ExperienceItem({ item, index, isLast }: ExperienceItemProps) {
  return (
    <article className="grid grid-cols-[16px_1fr] items-stretch gap-3 sm:grid-cols-[24px_1fr] sm:gap-4">
      <div className="relative flex justify-center">
        {!isLast ? (
          <div
            aria-hidden
            className="absolute top-6 h-[calc(100%+1.5rem)] w-px bg-gradient-to-b from-cyan-300/60 via-cyan-300/25 to-transparent"
          />
        ) : null}
        <div
          aria-hidden
          className={`mt-5 h-3.5 w-3.5 rounded-full border-2 shadow-[0_0_0_4px_rgba(34,211,238,0.12)] sm:h-4 sm:w-4 ${
            index === 0
              ? "border-cyan-300 bg-cyan-300"
              : "border-cyan-300/70 bg-brand-bg"
          }`}
        />
      </div>

      <div className="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-white sm:text-xl">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-cyan-200">{item.company}</p>
          </div>
          <div className="shrink-0 text-sm text-slate-300 sm:max-w-[220px] sm:text-right">
            <p>{item.period}</p>
            <p className="mt-0.5 text-slate-400">{item.location}</p>
          </div>
        </div>

        <ul className="mt-5 space-y-3 text-[15px] leading-7 text-brand-muted">
          {item.points.map((point) => (
            <li key={point}>• {point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function ExperienceSection() {
  return (
    <Container id="experience" className="py-12 sm:py-14">
      <SectionHeading
        eyebrow={experienceIntro.eyebrow}
        title={experienceIntro.title}
        description={experienceIntro.description}
      />

      <div className="mt-10 space-y-6">
        {experiences.map((item, index) => (
          <ExperienceItem
            key={`${item.company}-${item.title}-${item.period}`}
            item={item}
            index={index}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </Container>
  );
}
