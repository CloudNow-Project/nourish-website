import { heroContent } from "@/data/our-pack-journey";
import { PageHero } from "@/components/ui/PageHero";

export function OurPackJourneyHero() {
  return (
    <PageHero
      backgroundImage="/images/hero/hero-about.jpg"
      heading={heroContent.heading}
      description={heroContent.description}
    />
  );
}
