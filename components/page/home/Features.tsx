import { Bowl } from "@/components/ui/Icons";
import { ShadowedHeading } from "@/components/ui/ShadowedHeading";
import { TextSwipeAnimation } from "@/components/ui/TextSwipeAnimation";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import Image from "next/image";
import Link from "next/link";

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface FeaturesProps {
  features: Feature[];
}

export function Features({ features }: FeaturesProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <AnimatedElement variant="fadeInUp" delay={0.1}>
          <div className="text-center mb-6 md:mb-8">
            <ShadowedHeading
              text="Less Junk, More Drool"
              as="h2"
              size="lg"
              textColor="#AC4C43"
              shadowColor="#FADCB9"
              shadowOffset={3}
              className="text-center"
            />
          </div>
        </AnimatedElement>

        <AnimatedElement variant="fadeInUp" delay={0.2}>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 md:mb-16 text-base md:text-lg px-4">
            Crafted with all-natural, health conscious ingredients, Nourish Superfood Dog Treats support your dog&apos;s
            health, happiness, and tail-wagging moments—one bite at a time.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 px-4">
          {features.map((feature, index) => (
            <AnimatedElement key={feature.id} variant="fadeInUp" delay={0.3 + index * 0.1}>
              <div className="text-center p-6 md:p-4 rounded-xl transition-transform hover:scale-105">
                <div className="mx-auto w-32 h-32 md:w-40 md:h-40 mb-5 relative">
                  <Image
                    src={`/images/home/feature/${feature.image}`}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mb-2 md:mb-3">
                  <ShadowedHeading
                    text={feature.title}
                    as="h3"
                    size="sm"
                    textColor="#AC4C43"
                    shadowColor="#FADCB9"
                    shadowOffset={2}
                    className="text-center"
                  />
                </div>
                <p className="text-gray-600 text-base md:text-lg">{feature.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement variant="fadeInUp" delay={0.7}>
          <div className="text-center mt-10 md:mt-16">
            <Link
              href="/ingredients"
              className="inline-flex items-center text-base font-medium transition-all px-4 py-1.5 rounded-full bg-[#AC4C43] text-white hover:bg-[#AC4C43]/90 group"
            >
              <Bowl className="w-10 h-10 mr-2" size={28} />
              <TextSwipeAnimation>Inside the Bite</TextSwipeAnimation>
            </Link>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
