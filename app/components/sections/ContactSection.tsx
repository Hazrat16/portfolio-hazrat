import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import type { IconType } from "react-icons";
import { contact, contactLinks, site } from "../../data";
import Container from "../Container";
import SectionHeading from "../SectionHeading";

const contactIcons: Record<string, IconType> = {
  Email: FaEnvelope,
  LinkedIn: FaLinkedin,
  WhatsApp: FaWhatsapp,
  GitHub: FaGithub,
};

export default function ContactSection() {
  return (
    <Container as="footer" id="contact" className="pb-12 sm:pb-16">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-8">
        <SectionHeading eyebrow={contact.eyebrow} title={contact.title} />
        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-brand-muted sm:text-base sm:leading-8">
          {contact.description}
        </p>

        <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/40 via-slate-900/30 to-cyan-950/20 p-4 sm:p-7">
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {contactLinks.map((link) => {
              const Icon = contactIcons[link.label];

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="group rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:border-cyan-300/45 sm:px-5"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">
                    {link.label}
                  </p>
                  <div
                    className={`mt-2 flex items-center gap-2 transition ${
                      link.accent
                        ? "text-cyan-200 group-hover:text-cyan-100"
                        : "text-slate-200 group-hover:text-white"
                    }`}
                  >
                    {Icon ? (
                      <Icon className="h-4 w-4 shrink-0" aria-hidden />
                    ) : null}
                    <span className="text-sm font-medium">{link.action}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <p className="mt-8 text-xs text-slate-500">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </Container>
  );
}
