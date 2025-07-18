import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function StorySection() {
  return (
    <section className="py-20 bg-[#F6b656]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading heading="Our Story" variant="primary" size="lg" alignment="center" bottomMargin="medium" />
          <p className="text-xl md:text-2xl leading-relaxed text-white">
            Born out of a passion for natural and healthy dog treats, we combine premium ingredients with superfoods to
            craft products that are not only delicious but also deliver meaningful health benefits. Our formulations
            consider every aspect of nutrition—from flavor and benefits to allergen safety.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed text-white mt-8">
            We are passionate about creating delicious, nutritious treats that enhance the lives of dogs and their
            pawrents.
          </p>
        </div>
      </div>
    </section>
  );
}
