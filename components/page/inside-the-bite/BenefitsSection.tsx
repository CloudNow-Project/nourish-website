import React from "react";

export function BenefitsSection() {
  const benefits = [
    { icon: "🛡️", title: "Immunity Boost" },
    { icon: "✨", title: "Skin & Coat Health" },
    { icon: "🧘", title: "Digestive Support" },
    { icon: "💪", title: "Lasting Energy" },
    { icon: "🦴", title: "Joint & Bone Strength" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-chile-rojo mb-8">
            Why These Ingredients Matter
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-10 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center transition-transform hover:scale-105">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="font-bold text-gray-800">{benefit.title}</h3>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-2xl mx-auto">
            <p className="text-xl text-gray-700 italic">
              These aren&apos;t just snacks. They&apos;re bites with a job — to support your dog&apos;s wellness every
              day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
