import { about } from "../../data";
import Container from "../Container";

export default function AboutSection() {
  return (
    <Container id="about" className="py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/80">
            {about.eyebrow}
          </p>
          <h2 className="mt-3 max-w-md text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
            {about.title}
          </h2>
        </div>

        <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8">
          {about.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 32)}
              className={`text-[15px] leading-7 text-brand-muted sm:leading-8 ${
                index > 0 ? "mt-4" : ""
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Container>
  );
}
