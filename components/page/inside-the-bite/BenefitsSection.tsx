import React from "react";

export function BenefitsSection() {
  const benefits = [
    { icon: "🛡️", title: "Immunity Boost" },
    { icon: "✨", title: "Skin & Coat Health" },
    { icon: "🧘", title: "Digestive Support" },
    { icon: "💪", title: "Lasting Energy" },
    { icon: "🦴", title: "Joint & Bone Strength" },
  ];

  // Duplicate the array to make the scroll seamless
  const marqueeBenefits = [...benefits, ...benefits, ...benefits];

  return (
    <section className="bg-[#ae431e] py-8 overflow-hidden">
      <div className="relative w-full">
        <div className="flex whitespace-nowrap animate-marquee">
          {marqueeBenefits.map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-center text-white uppercase font-display font-extrabold text-2xl md:text-4xl mx-8"
            >
              <span className="mx-2">{benefit.title}</span>
              <span className="mx-2 text-3xl md:text-4xl">{benefit.icon}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
