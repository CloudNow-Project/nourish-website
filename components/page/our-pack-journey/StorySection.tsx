import React from "react";

export function StorySection() {
  return (
    <section className="py-20 bg-[#f7d08a]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-12">Our Story</h2>
          <p className="text-xl md:text-2xl leading-relaxed text-white">
            Born out of a passion for natural and healthy dog treats, we combine premium ingredients with superfoods to
            craft products that are not only delicious but also deliver meaningful health benefits. Our formulations
            consider every aspect of nutrition—from flavor and benefits to allergen safety.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed text-white mt-8">
            We are passionate about creating delicious, nutritious treats and meal toppers that enhance the lives of
            dogs and their pawrents.
          </p>
        </div>
      </div>
    </section>
  );
}
