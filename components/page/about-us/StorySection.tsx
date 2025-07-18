import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

export function StorySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedElement variant="fadeInLeft" delay={0.2}>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image src="/images/hero/hero-about.jpg" alt="Our Story" fill className="object-cover" />
            </div>
          </AnimatedElement>
          <AnimatedElement variant="fadeInRight" delay={0.3}>
            <div>
              <SectionHeading
                heading="Our Story"
                variant="secondary"
                alignment="left"
                size="md"
                bottomMargin="medium"
              />
              <div className="prose prose-lg">
                <p>
                  Born out of a passion for natural and healthy dog treats, we combine premium ingredients with
                  superfoods to craft treats that are not only delicious but also deliver meaningful health benefits.
                  Our formulations consider every aspect of nutrition—from flavor and benefits to allergen safety.
                </p>
                <p>
                  We are passionate about creating delicious, nutritious treats that enhance the lives of dogs and their
                  pawrents.
                </p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
