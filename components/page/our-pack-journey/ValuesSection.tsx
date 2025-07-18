import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ValuesSection() {
  return (
    <section className="py-20 bg-ernest-beige relative overflow-hidden">
      {/* Decorative food illustrations */}
      <div className="absolute top-10 left-10">
        <Image src="/images/decorative/drops.svg" alt="Decorative element" width={80} height={80} />
      </div>
      <div className="absolute bottom-10 left-20">
        <Image src="/images/decorative/strawberry.svg" alt="Decorative element" width={100} height={100} />
      </div>
      <div className="absolute top-1/4 right-10">
        <Image src="/images/decorative/meat.svg" alt="Decorative element" width={140} height={140} />
      </div>
      <div className="absolute bottom-1/3 right-20">
        <Image src="/images/decorative/grains.svg" alt="Decorative element" width={120} height={120} />
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <SectionHeading
          heading="Our Nourishing Values"
          variant="secondary"
          size="lg"
          alignment="center"
          bottomMargin="large"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Value 1 */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <Image src="/images/about/heyo-values-01.jpg" alt="Health Conscious" fill className="object-contain" />
            </div>
            <p className="text-xl text-[#F6b656] font-medium">Using no colouring, preservatives or other additives.</p>
          </div>

          {/* Value 2 */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <Image src="/images/about/heyo-values-02.jpg" alt="Trustworthy" fill className="object-contain" />
            </div>
            <p className="text-xl text-[#F6b656] font-medium">Clean, socially responsible.</p>
          </div>

          {/* Value 3 */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <Image src="/images/about/heyo-values-03.jpg" alt="Nutrition First" fill className="object-contain" />
            </div>
            <p className="text-xl text-[#F6b656] font-medium">Creating treats that have extra benefit for pups</p>
          </div>
        </div>

        {/* Bottom note */}
        <div className="bg-[#F6b656]/30 rounded-xl p-6 max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-800">
            We focus on creating treats that combine nutrition with functionality, and are shelf stable without
            preservatives.
          </p>
        </div>
      </div>
    </section>
  );
}
