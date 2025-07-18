import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { HeyoLogo } from "@/components/ui/HeyoLogo";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 bg-[#F6b656]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedElement variant="fadeInUp" delay={0.1}>
            <HeyoLogo color="#F6b656" size={120} className="mx-auto mb-8" />
            <SectionHeading
              heading="Crafting Joy in Every Bite"
              subheading="At Heyo, we're on a mission to fuel joy, health, and tail-wags — one superfood bite at a time."
              variant="secondary"
              alignment="center"
              size="lg"
              bottomMargin="medium"
            />
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
