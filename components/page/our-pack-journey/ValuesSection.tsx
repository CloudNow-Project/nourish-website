import React from "react";
import Image from "next/image";

export function ValuesSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
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

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-display font-bold text-[#f7d08a] text-center mb-20">
          Our Nourishing Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Value 1 */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <Image src="/images/icons/health-conscious.svg" alt="Health Conscious" fill className="object-contain" />
            </div>
            <p className="text-xl text-[#f7d08a] font-medium">Using no colouring, preservatives or other additives.</p>
          </div>

          {/* Value 2 */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <Image src="/images/icons/trustworthy.svg" alt="Trustworthy" fill className="object-contain" />
            </div>
            <p className="text-xl text-[#f7d08a] font-medium">Clean, socially responsible.</p>
          </div>

          {/* Value 3 */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <Image src="/images/icons/nutrition-first.svg" alt="Nutrition First" fill className="object-contain" />
            </div>
            <p className="text-xl text-[#f7d08a] font-medium">Creating products that have extra benefit for pups</p>
          </div>
        </div>

        {/* Bottom note */}
        <div className="bg-[#f7d08a]/30 rounded-xl p-6 max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-800">
            We focus on multipurpose products that serve as both treats and meal enhancers, combining nutrition with
            functionality, and are shelf stable without preservatives.
          </p>
        </div>
      </div>
    </section>
  );
}
