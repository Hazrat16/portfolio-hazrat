import Header from "./components/Header";
import {
  AboutSection,
  BuildingNowSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
} from "./components/sections";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-brand-bg text-brand-text">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_45%)]" />

      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <BuildingNowSection />
      <ContactSection />
    </main>
  );
}
