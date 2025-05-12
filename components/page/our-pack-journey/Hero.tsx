import { heroContent } from "@/data/our-pack-journey";

export function OurPackJourneyHero() {
  return (
    <section className="relative bg-gray-700 text-white pt-40 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">{heroContent.heading}</h1>
          <p className="text-lg md:text-xl max-w-3xl">{heroContent.description}</p>
          <div className="mt-8">
            <button className="bg-nourish-orange hover:bg-nourish-orange/90 text-white font-medium text-lg rounded-full px-8 py-3 shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Background with overlay */}
      <div className="absolute inset-0 z-[-1] bg-gray-800">
        <div className="w-full h-full bg-gradient-to-b from-gray-900/70 to-gray-700/70">
          {/* Placeholder for background image */}
        </div>
      </div>
    </section>
  );
}
