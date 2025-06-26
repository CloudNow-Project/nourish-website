import { Navbar } from "@/components/layout/Navbar";
import { MinimalFooter } from "@/components/layout/MinimalFooter";
import { InsideTheBiteHero } from "@/components/page/inside-the-bite/Hero";
import { InsideTheBiteFeatures } from "@/components/page/inside-the-bite/Features";
import { IngredientsSection } from "@/components/page/inside-the-bite/IngredientsSection";
import { BenefitsSection } from "@/components/page/inside-the-bite/BenefitsSection";
// import { NoArtificialsSection } from "@/components/page/inside-the-bite/NoArtificialsSection";
import { CTASection } from "@/components/page/inside-the-bite/CTASection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { testimonials } from "@/data/inside-the-bite";

export const metadata = {
  title: "What's Inside the Bites Matters | Nourish",
  description:
    "From sweet strawberries to tummy-friendly carrots — every ingredient is chosen with love and purpose to keep your pup thriving.",
};

export default function IngredientsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-ernest-beige">
      <Navbar />

      <InsideTheBiteHero />
      <InsideTheBiteFeatures />
      <IngredientsSection />
      <BenefitsSection />
      {/* <NoArtificialsSection /> */}
      <TestimonialsSection
        heading={testimonials.heading}
        subheading={testimonials.subheading}
        reviews={testimonials.reviews}
      />
      <CTASection />

      <MinimalFooter />
    </div>
  );
}
