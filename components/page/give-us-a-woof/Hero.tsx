import { heroContent } from "@/data/give-us-a-woof";
import { PageHero } from "@/components/ui/PageHero";

export function GiveUsAWoofHero() {
  return (
    <PageHero
      backgroundImage="/images/hero/hero-contact.jpg"
      heading={heroContent.heading}
      description={heroContent.description}
    />
  );
}
