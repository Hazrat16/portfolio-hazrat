import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn, FaMedium, FaXTwitter } from "react-icons/fa6";
import { socials } from "@/data/site";

const icons: Record<string, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  medium: FaMedium,
  twitter: FaXTwitter,
};

/** Glowing bordered buttons with hover tooltips, used in the hero. */
export function SocialButtons() {
  return (
    <div className="mt-8 flex items-center gap-4">
      {socials.map((social) => {
        const Icon = icons[social.icon];
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="group relative"
          >
            <span className="absolute -inset-3 rounded-lg border border-primary/20 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:shadow-[0_0_24px_hsl(160_84%_39%/0.3)]" />
            <span className="relative flex min-h-[48px] min-w-[48px] items-center justify-center rounded-lg border border-primary/30 bg-primary/5 px-4 py-3.5 shadow-[0_0_16px_hsl(160_84%_39%/0.1)] backdrop-blur-sm transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/12 group-hover:shadow-[0_0_24px_hsl(160_84%_39%/0.25)]">
              <Icon className="size-5 text-primary/90" />
            </span>
            <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 rounded-lg border border-primary/30 bg-background/90 px-3 py-1.5 text-xs font-medium whitespace-nowrap text-primary/90 opacity-0 shadow-[0_0_16px_hsl(160_84%_39%/0.2)] backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
              {social.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}

/** Muted inline links used at the bottom of the contact section. */
export function SocialLinks() {
  return (
    <div className="flex items-center gap-5">
      {socials.map((social) => {
        const Icon = icons[social.icon];
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="flex min-h-[44px] items-center justify-center text-muted-foreground/60 transition-colors duration-300 hover:text-primary"
          >
            <Icon className="size-5" />
          </a>
        );
      })}
    </div>
  );
}
