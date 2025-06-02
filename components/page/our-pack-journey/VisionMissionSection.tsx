import React from "react";
import { NourishLogo } from "@/components/ui/NourishLogo";

export function VisionMissionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-12">
            <NourishLogo color="#f6b656" size={200} />
            <div className="ml-4 text-black uppercase tracking-wider font-medium text-lg self-end pb-2">
              SUPERFOOD DOG TREATS
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#f7d08a] mb-6">Our Vision</h2>
          <p className="text-xl leading-relaxed text-gray-800">
            Our vision is to become Indonesia&apos;s leading beneficial dog treat brand, one that is synonymous with
            health, luxury, and quality—all while remaining affordable for pet owners.
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#f7d08a] mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed text-gray-800">
            Our mission is to provide tasty, nutritious, and safe toppers and treats for pawrents who want nothing but
            the best for their dogs. We are dedicated to crafting products that not only satisfy your dog&apos;s palate
            but also contribute to their overall health and well-being.
          </p>
        </div>

        {/* Commitment Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#f7d08a] mb-6">Our Commitment</h2>
          <p className="text-xl leading-relaxed text-gray-800">
            We are committed to creating premium, superfood-infused treats and toppers that nourish and enhance the
            lives of pets. We use only natural, high-quality ingredients, and we maintain complete transparency in our
            sourcing and production practices.
          </p>
        </div>
      </div>
    </section>
  );
}
