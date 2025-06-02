import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OurPackJourneyHero } from "@/components/page/our-pack-journey/Hero";
import { StorySection } from "@/components/page/our-pack-journey/StorySection";
import { VisionMissionSection } from "@/components/page/our-pack-journey/VisionMissionSection";
import { ValuesSection } from "@/components/page/our-pack-journey/ValuesSection";
import { TeamSection } from "@/components/page/our-pack-journey/TeamSection";
import { CTASection } from "@/components/sections/CTASection";
import { aboutUsCTA } from "./data";
import { AnimatedElement } from "@/components/ui/AnimatedElement";

export const metadata = {
  title: "Our Pack Story | Nourish",
  description: "Learn about our journey and the team behind Nourish's premium dog treats.",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <OurPackJourneyHero />

        {/* Story Section - Wrapped with a parallax scroll effect */}
        <div className="relative overflow-hidden">
          <AnimatedElement variant="fadeIn" threshold={0.2}>
            <StorySection />
          </AnimatedElement>
        </div>

        {/* Vision & Mission Section - Elegant fade-in animation */}
        <div className="relative py-4">
          <AnimatedElement variant="fadeInUp" delay={0.2} threshold={0.3}>
            <VisionMissionSection />
          </AnimatedElement>
        </div>

        {/* Values Section - Staggered entrance animation */}
        <div className="relative py-4">
          <AnimatedElement variant="fadeInUp" delay={0.3} threshold={0.3}>
            <ValuesSection />
          </AnimatedElement>
        </div>

        {/* Team Section - Side entrance animation */}
        <div className="relative py-4">
          <AnimatedElement variant="fadeInRight" delay={0.2} threshold={0.3}>
            <TeamSection />
          </AnimatedElement>
        </div>

        {/* CTA Section - Added before footer with zoom animation */}
        <div className="relative py-8" style={{ backgroundColor: "#FFF8EA" }}>
          <AnimatedElement variant="zoomIn" delay={0.2} threshold={0.4}>
            <CTASection
              heading={aboutUsCTA.heading}
              description={aboutUsCTA.description}
              image={aboutUsCTA.image}
              primaryButton={aboutUsCTA.primaryButton}
              secondaryButton={aboutUsCTA.secondaryButton}
            />
          </AnimatedElement>
        </div>
      </main>

      <Footer />
    </div>
  );
}
