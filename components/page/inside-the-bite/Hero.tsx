import Image from "next/image";
import { heroContent } from "@/data/inside-the-bite";

export function InsideTheBiteHero() {
  // Background image path - set to empty for now as mentioned by the user
  const backgroundImage = "";

  return (
    <section className="relative bg-gray-700 text-white pt-40 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            {heroContent.heading.split(" Matters")[0]} <span className="text-nourish-orange">Matters</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">{heroContent.description}</p>
        </div>
      </div>

      {/* Image placeholder */}
      <div className="absolute inset-0 z-[-1] opacity-60">
        {backgroundImage ? (
          <Image src={backgroundImage} alt="Nourish Ingredients Background" fill className="object-cover" priority />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            {/* Large decorative pattern for background */}
            <div className="grid grid-cols-3 gap-8 opacity-10">
              {[...Array(9)].map((_, i) => (
                <svg key={i} className="w-20 h-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
