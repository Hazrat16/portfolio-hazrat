import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SocialLinks } from "@/components/layout/social-links";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border/30 px-6 py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 -z-10 size-[34rem] -translate-x-1/2 rounded-full bg-primary/8 blur-[130px]"
      />

      <Reveal className="mx-auto max-w-3xl text-center">
        <h2
          data-reveal
          className="text-3xl leading-tight font-bold tracking-tight sm:text-4xl"
        >
          Let&apos;s work together on something
          <br />
          <span className="text-gradient">meaningful.</span>
        </h2>

        <p
          data-reveal
          style={{ transitionDelay: "80ms" }}
          className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground"
        >
          I&apos;m always interested in discussing new projects, creative ideas,
          and collaborations. Feel free to reach out—I&apos;d love to hear from
          you.
        </p>

        <div
          data-reveal
          style={{ transitionDelay: "160ms" }}
          className="mt-8 flex flex-col items-center gap-3"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="size-4 text-primary/70" />
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Phone className="size-4 text-primary/70" />
              {site.phone}
            </a>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary/70" />
              {site.location}
            </span>
          </div>

          <a
            href={`mailto:${site.email}`}
            className="group flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/8 px-5 py-2.5 text-sm font-medium text-foreground shadow-[0_0_18px_hsl(160_84%_39%/0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/15"
          >
            <span>Send Email</span>
            <ArrowRight className="size-4 text-primary/80 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary" />
          </a>
        </div>

        <div
          data-reveal
          style={{ transitionDelay: "240ms" }}
          className="mt-12 flex justify-center"
        >
          <SocialLinks />
        </div>
      </Reveal>
    </section>
  );
}
