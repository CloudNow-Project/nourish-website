import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function VisionMissionSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F6b656]/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <AnimatedElement variant="fadeInUp" delay={0.2}>
            <div>
              <SectionHeading
                heading="Our Vision"
                variant="secondary"
                alignment="left"
                size="md"
                bottomMargin="small"
              />
              <p className="text-lg text-gray-700">
                Our vision is to become Indonesia&apos;s leading beneficial dog treat brand, one that is synonymous with
                health, joy, and quality—all while remaining accessible for every pawrent.
              </p>
            </div>
          </AnimatedElement>
          <AnimatedElement variant="fadeInUp" delay={0.3}>
            <div>
              <SectionHeading
                heading="Our Mission"
                variant="secondary"
                alignment="left"
                size="md"
                bottomMargin="small"
              />
              <p className="text-lg text-gray-700">
                Our mission is to provide tasty, nutritious, and safe superfood treats for pawrents who want nothing but
                the best for their dogs. We are dedicated to crafting treats that not only make tails wag but also
                contribute to their overall health and well-being.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
