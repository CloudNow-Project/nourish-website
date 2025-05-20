import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InsideTheBiteHero } from "@/components/page/inside-the-bite/Hero";
import { InsideTheBiteFeatures } from "@/components/page/inside-the-bite/Features";
import { IngredientsSection } from "@/components/page/inside-the-bite/IngredientsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { testimonials } from "@/data/inside-the-bite";

export const metadata = {
  title: "Inside the Bite | Nourish",
  description: "Learn about the premium ingredients in our superfood dog treats.",
};

export default function IngredientsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-ernest-beige">
      <Navbar />

      <InsideTheBiteHero />
      <InsideTheBiteFeatures />
      <IngredientsSection />
      <TestimonialsSection
        heading={testimonials.heading}
        subheading={testimonials.subheading}
        reviews={testimonials.reviews}
      />

      <Footer />
    </div>
  );
}
