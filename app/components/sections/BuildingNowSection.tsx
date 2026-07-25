import { buildingNow, buildingNowIntro } from "../../data";
import Container from "../Container";
import SectionHeading from "../SectionHeading";

export default function BuildingNowSection() {
  return (
    <Container className="py-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8">
        <SectionHeading
          eyebrow={buildingNowIntro.eyebrow}
          title={buildingNowIntro.title}
        />
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {buildingNow.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 text-sm leading-7 text-brand-muted"
            >
              • {item}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
