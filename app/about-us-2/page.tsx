import { Navbar } from "@/components/layout/Navbar";
import { MinimalFooter } from "@/components/layout/MinimalFooter";
import { HeroSection } from "@/components/page/about-us/HeroSection";
import { StorySection } from "@/components/page/about-us/StorySection";
import { VisionMissionSection } from "@/components/page/about-us/VisionMissionSection";
import { ValuesSection } from "@/components/page/about-us/ValuesSection";
import { TeamSection } from "@/components/page/about-us/TeamSection";
import { CTASection } from "@/components/sections/CTASection";
import { aboutUsCTA } from "../about-us/data";

export const metadata = {
  title: "About Heyo | Superfood Dog Treats",
  description: "Learn about our journey and the team behind Heyo&apos;s premium superfood dog treats.",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <StorySection />
        <VisionMissionSection />
        <ValuesSection />
        <TeamSection />
        <div className="relative py-8" style={{ backgroundColor: "#FFF8EA" }}>
          <CTASection
            heading={aboutUsCTA.heading}
            description={aboutUsCTA.description}
            image={aboutUsCTA.image}
            primaryButton={aboutUsCTA.primaryButton}
            secondaryButton={aboutUsCTA.secondaryButton}
          />
        </div>
      </main>
      <MinimalFooter />
    </div>
  );
}
