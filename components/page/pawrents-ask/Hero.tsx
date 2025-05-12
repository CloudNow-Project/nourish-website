import { heroContent } from "@/data/pawrents-ask";

export function PawRentsAskHero() {
  return (
    <section className="relative bg-white pt-40 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-chile-rojo mb-6">
            {heroContent.heading}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl text-gray-700">{heroContent.description}</p>
        </div>
      </div>
    </section>
  );
}
