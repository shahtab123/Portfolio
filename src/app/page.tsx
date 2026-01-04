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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shahtab Mohtasin",
    jobTitle: "Software Engineer & IT Consultant",
    description:
      "Freelance developer and IT consultant specializing in building production-ready software solutions. Master's in IT Management from De Montfort University.",
    email: "cloudstack6@gmail.com",
    url: "https://www.shahtab.xyz",
    image: "https://www.shahtab.xyz/card.webp",
    sameAs: [
      "https://github.com/shahtab123",
      "https://www.linkedin.com/in/shahtab-mohtasin/",
      "https://x.com/SMohtasin",
      "https://devpost.com/smohtasin",
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "De Montfort University",
        degree: "Master's degree, Information Technology Management",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Lancaster University",
        degree: "Bachelor's degree, Information Technology",
      },
    ],
    knowsAbout: [
      "Software Engineering",
      "Full Stack Development",
      "Web Development",
      "AI Development",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "IT Consulting",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "BD",
      addressLocality: "Bangladesh",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      <div className="flex flex-col flex-1">
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
        </div>
    </>
  );
}
