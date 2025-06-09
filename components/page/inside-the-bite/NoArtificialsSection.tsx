import React from "react";

export function NoArtificialsSection() {
  const avoidedIngredients = [
    "No artificial preservatives or coloring",
    "No mystery fillers or &quot;meat by-products&quot;",
    "No synthetic vitamins",
    "Just real, functional, shelf-stable nutrition",
  ];

  return (
    <section className="py-20 bg-ernest-beige-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-chile-rojo mb-8">
            What We Leave Out Matters, Too
          </h2>

          <ul className="mb-10 space-y-4">
            {avoidedIngredients.map((item, index) => (
              <li key={index} className="flex items-center justify-center gap-3 text-lg">
                <span className="text-chile-rojo font-bold">•</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>

          <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
            <p className="text-xl text-gray-700 italic font-serif">
              &ldquo;If it doesn&apos;t support your dog&apos;s health, we leave it out.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
