import { skillsIntro, splitIntoColumns, techCards } from "../../data";
import type { TechCard } from "../../data";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import TagBadge from "../TagBadge";
import TechCardIcon from "../TechCardIcon";

function TechCardItem({ card }: { card: TechCard }) {
  return (
    <article className="rounded-[22px] border border-white/10 bg-brand-surface/40 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:border-cyan-300/30 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80 sm:text-sm sm:tracking-[0.22em]">
            {card.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-brand-muted">
            {card.description}
          </p>
        </div>
        <div
          aria-hidden
          className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200/90"
        >
          <TechCardIcon name={card.icon} />
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {card.tags.map((tag) => (
          <TagBadge key={tag} label={tag} />
        ))}
      </div>
    </article>
  );
}

export default function SkillsSection() {
  const columns = splitIntoColumns(techCards, 2);

  return (
    <Container id="skills" className="py-12 sm:py-14">
      <SectionHeading
        eyebrow={skillsIntro.eyebrow}
        title={skillsIntro.title}
        description={skillsIntro.description}
      />

      <div className="mt-8 rounded-[22px] border border-white/10 bg-white/5 p-4 backdrop-blur-md sm:rounded-[28px] sm:p-6">
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-4">
              {column.map((card) => (
                <TechCardItem key={card.title} card={card} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
