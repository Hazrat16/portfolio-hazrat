import { SocialButtons } from "@/components/layout/social-links";
import { Reveal } from "@/components/ui/reveal";
import { heroIntro, site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16">
      <Reveal className="mx-auto w-full max-w-4xl">
        <div data-reveal className="mb-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-[11px] font-medium tracking-wide text-primary/80">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
            </span>
            {site.availability}
          </span>
        </div>

        <h1
          data-reveal
          style={{ transitionDelay: "80ms" }}
          className="mb-4 text-4xl leading-[1.15] font-bold tracking-tight md:text-5xl lg:text-6xl"
        >
          Hi, I&apos;m <span className="text-gradient">{site.name}</span>
          <span className="mt-3 block text-2xl leading-tight font-medium tracking-tight text-muted-foreground md:text-3xl lg:text-4xl">
            Full-Stack Engineer
          </span>
        </h1>

        <p
          data-reveal
          style={{ transitionDelay: "120ms" }}
          className="mb-8 text-lg font-medium text-foreground/80 md:text-xl"
        >
          {site.role}
          <span className="text-muted-foreground">
            {" "}
            · React · Next.js · Node.js · TypeScript · AWS · Docker · CI/CD ·
            Terraform · MongoDB · PostgreSQL
          </span>
        </p>

        <div data-reveal style={{ transitionDelay: "160ms" }} className="mb-4">
          <div className="mb-2 flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-red-500/80" />
              <span className="size-3 rounded-full bg-yellow-500/80" />
              <span className="size-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-[11px] tracking-wide text-muted-foreground/60">
              about.md
            </span>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-primary/20 bg-background/40 backdrop-blur-sm">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-primary/5 to-transparent" />
            <div className="relative p-4 md:p-6">
              <p className="text-[13px] leading-relaxed whitespace-pre-line text-muted-foreground sm:text-[14px]">
                {heroIntro.map((segment, index) => {
                  if (segment.style === "accent") {
                    return (
                      <span key={index} className="text-primary/80">
                        {segment.text}
                      </span>
                    );
                  }
                  if (segment.style === "highlight") {
                    return (
                      <span
                        key={index}
                        className="font-semibold text-foreground/90"
                      >
                        {segment.text}
                      </span>
                    );
                  }
                  return <span key={index}>{segment.text}</span>;
                })}
              </p>
            </div>
          </div>
        </div>

        <div data-reveal style={{ transitionDelay: "240ms" }}>
          <SocialButtons />
        </div>
      </Reveal>
    </section>
  );
}
