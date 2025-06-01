import { heroContent } from "@/data/inside-the-bite";
import { PageHero } from "@/components/ui/PageHero";

export function InsideTheBiteHero() {
  return (
    <PageHero
      backgroundImage="/images/hero/hero-ingredients.jpg"
      heading={heroContent.heading}
      description={heroContent.description}
      highlightedText="Matters"
    />
  );
}
