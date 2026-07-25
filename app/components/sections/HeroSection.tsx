import { hero } from "../../data";
import Container from "../Container";

const buttonStyles = {
  primary:
    "rounded-2xl bg-white px-5 py-3 text-center font-semibold text-slate-950 transition hover:opacity-95 sm:px-6",
  secondary:
    "rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-center font-semibold text-white transition hover:border-cyan-300/40 sm:px-6",
  ghost:
    "flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white/90 transition hover:text-white sm:px-6",
} as const;

export default function HeroSection() {
  return (
    <Container id="home" className="pb-10 pt-6 sm:pt-8">
      <div className="flex flex-col gap-5 sm:gap-6">
        <div className="w-fit max-w-full rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs leading-5 text-cyan-200 sm:px-4 sm:text-sm">
          {hero.badge}
        </div>

        <h1 className="max-w-3xl text-[2rem] font-semibold leading-[1.1] text-white sm:text-5xl md:text-6xl">
          {hero.titleLine1}
          <br className="hidden sm:block" /> {hero.titleLine2}
        </h1>

        <p className="max-w-2xl text-[15px] leading-7 text-brand-muted sm:text-base sm:leading-8 md:text-lg">
          {hero.description}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          {hero.ctas.map((cta) => (
            <a
              key={cta.label}
              href={cta.href}
              download={"download" in cta ? cta.download : undefined}
              className={buttonStyles[cta.variant]}
            >
              {cta.label}
              {cta.variant === "ghost" ? <span aria-hidden>↓</span> : null}
            </a>
          ))}
        </div>
      </div>
    </Container>
  );
}
