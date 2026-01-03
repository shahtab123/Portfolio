import { HeroSection } from "@/components/hero-section";
import { Education } from "@/components/education";
import { OnlinePresence } from "@/components/online-presence";
import { ProjectsSection } from "@/components/projects-section";
import { BlogSection } from "@/components/blog-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { SectionDivider } from "@/components/section-divider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Education />
      <SectionDivider />
      <OnlinePresence />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <BlogSection />
      <SectionDivider />
      <SkillsSection />
      <SectionDivider />
      <ContactSection />
      <Footer />
    </>
  );
}
