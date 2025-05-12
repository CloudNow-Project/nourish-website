import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OurPackJourneyHero } from "@/components/page/our-pack-journey/Hero";
import { JourneySection } from "@/components/page/our-pack-journey/Journey";
import { HealthSection } from "@/components/page/our-pack-journey/Health";
import { TeamSection } from "@/components/page/our-pack-journey/Team";
import { ConnectSection } from "@/components/page/our-pack-journey/Connect";

export default function OurPackJourneyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-ernest-beige">
      <Navbar />

      <OurPackJourneyHero />
      <JourneySection />
      <HealthSection />
      <TeamSection />
      <ConnectSection />

      <Footer />
    </div>
  );
}
