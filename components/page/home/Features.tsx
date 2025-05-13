import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Feature {
  id: string;
  title: string;
  description: string;
  iconPath: string;
  color: string;
}

interface FeaturesProps {
  features: Feature[];
}

export function Features({ features }: FeaturesProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center text-chile-rojo mb-6 md:mb-8">
          Why Pawrents Choose Nourish
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 md:mb-16 text-base md:text-lg px-4">
          Our treats aren&apos;t just tasty—they&apos;re made with carefully sourced ingredients, nutritional integrity,
          and doggie science. Here&apos;s why we&apos;re different.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 px-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="text-center p-6 md:p-8 rounded-xl hover:shadow-xl transition-shadow border-2 border-chile-rojo/30"
            >
              <div className="mx-auto w-16 h-16 md:w-20 md:h-20 bg-chile-rojo/20 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 md:h-10 md:w-10 text-chile-rojo"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.iconPath} />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-chile-rojo mb-2 md:mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-16">
          <Link href="/inside-the-bite">
            <Button className="bg-terracota hover:bg-terracota/90 text-white px-6 md:px-8 py-5 md:py-6 rounded-full text-base md:text-lg font-medium">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
