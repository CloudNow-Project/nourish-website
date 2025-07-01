import React from "react";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { TextSwipeAnimation } from "@/components/ui/TextSwipeAnimation";
import { ShadowedHeading } from "@/components/ui/ShadowedHeading";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function InsideTheBiteFeatures() {
  const features = [
    {
      id: "wholesome",
      title: "Nutrient-Rich Goodness",
      description:
        "Every bite is crafted with nutrient-dense ingredients to support your dog's immune system, energy, and overall health.",
      icon: "/images/icons/ingredient-ico-nutrient-rich.png",
    },
    {
      id: "pure",
      title: "Pure Ingredients, Playful Energy",
      description: "We use nothing artificial. Just nature's best to support a life full of zoomies and snuggles.",
      icon: "/images/icons/ingredient-ico-pure-ingredients.png",
    },
    {
      id: "custom",
      title: "Custom Care in<br> Every Crunch",
      description:
        "From picky eaters to sensitive tummies, our recipes are crafted with intention to meet your dog's personal wellness goals.",
      icon: "/images/icons/ingredient-ico-custom-care.png",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white shadow-top-separator z-20">
      <div className="container max-w-6xl mx-auto px-4">
        <SectionHeading
          heading="Discover the Superpower<br>of Our Ingredients"
          subheading="Every bite is packed with purposeful superfoods that support your dog's health from nose to tail. No fillers, no fluff, just functional food for dogs who deserve the best."
          // categoryLabel={{ text: "Features" }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedElement key={feature.id} variant="fadeInUp" delay={0.3 + index * 0.1}>
              <div className="text-center p-6 md:p-4 rounded-xl transition-transform hover:scale-105 h-full flex flex-col">
                <div className="w-32 h-32 md:w-40 md:h-40 mb-5 mx-auto relative">
                  <Image src={feature.icon} alt={feature.title} width={160} height={160} className="object-contain" />
                </div>
                <div className="mb-2 md:mb-3 min-h-[80px] flex items-center justify-center">
                  <ShadowedHeading
                    text={feature.title}
                    as="h3"
                    size="sm"
                    textColor="#FFBD58"
                    shadowColor="#FBE2BF80"
                    shadowOffset={2}
                    className="text-center"
                  />
                </div>
                <p className="text-gray-600 text-base md:text-lg font-semibold flex-grow">{feature.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement variant="fadeInUp" delay={0.7}>
          <div className="text-center mt-10 md:mt-16">
            <a
              href="#ingredients-detail"
              className="inline-flex items-center text-base font-semibold transition-all px-4 py-1.5 rounded-full border-2 border-[#333] text-[#333] hover:bg-[#333] hover:text-white group"
            >
              <TextSwipeAnimation>Explore Ingredients</TextSwipeAnimation>
            </a>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
