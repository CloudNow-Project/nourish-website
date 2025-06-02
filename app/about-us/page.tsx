import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OurPackJourneyHero } from "@/components/page/our-pack-journey/Hero";
import { StorySection } from "@/components/page/our-pack-journey/StorySection";
import { VisionMissionSection } from "@/components/page/our-pack-journey/VisionMissionSection";
import { ValuesSection } from "@/components/page/our-pack-journey/ValuesSection";
import { TeamSection } from "@/components/page/our-pack-journey/TeamSection";

export const metadata = {
  title: "Our Pack Story | Nourish",
  description: "Learn about our journey and the team behind Nourish's premium dog treats.",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main>
        <OurPackJourneyHero />
        <StorySection />
        <VisionMissionSection />
        <ValuesSection />
        <TeamSection />
      </main>

      <Footer />
    </div>
  );
}
