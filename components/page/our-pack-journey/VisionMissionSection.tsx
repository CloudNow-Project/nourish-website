import React from "react";
import { HeyoLogo } from "@/components/ui/HeyoLogo";

export function VisionMissionSection() {
  return (
    <section className="py-20 bg-ernest-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex flex-col items-center justify-center mb-12">
            <HeyoLogo color="#F6b656" size={200} />
            <div className="mt-4 text-black uppercase tracking-[0.3em] font-medium text-sm pb-2 font-agrandir">
              SUPERFOOD DOG TREATS
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#F6b656] mb-6">Our Vision</h2>
          <p className="text-xl leading-relaxed text-gray-800">
            Our vision is to become Indonesia&apos;s leading beneficial dog treat brand, one that is synonymous with
            health, joy, and quality—all while remaining accessible for every pawrent.
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#F6b656] mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed text-gray-800">
            Our mission is to provide tasty, nutritious, and safe superfood treats for pawrents who want nothing but the
            best for their dogs. We are dedicated to crafting treats that not only make tails wag but also contribute to
            their overall health and well-being.
          </p>
        </div>

        {/* Commitment Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#F6b656] mb-6">Our Commitment</h2>
          <p className="text-xl leading-relaxed text-gray-800">
            We are committed to creating premium, superfood-infused treats that bring joy and nourishment to every pup.
            We use only natural, high-quality ingredients, and we maintain complete transparency in our sourcing and
            production practices.
          </p>
        </div>
      </div>
    </section>
  );
}
