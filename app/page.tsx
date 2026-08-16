import { Achievements } from "@/components/home/achievements";
import { Contact } from "@/components/home/contact";
import { ExperienceSection } from "@/components/home/experience";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Hero } from "@/components/home/hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <FeaturedProjects />
      <Achievements />
      <Contact />
    </>
  );
}
