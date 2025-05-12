import Image from "next/image";

interface IngredientSectionProps {
  heading: string;
  description: string;
  benefits: {
    title: string;
    description: string;
  };
  quality: {
    title: string;
    description: string;
  };
  imageSrc: string;
  isReversed?: boolean;
}

export function IngredientSection({
  heading,
  description,
  benefits,
  quality,
  imageSrc,
  isReversed = false,
}: IngredientSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-16 items-center`}
        >
          {/* Content side */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-chile-rojo mb-6">{heading}</h2>
            <p className="text-gray-700 mb-8">{description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Health Benefits */}
              <div>
                <h3 className="text-xl font-display font-bold text-chile-rojo mb-3">{benefits.title}</h3>
                <p className="text-gray-600">{benefits.description}</p>
              </div>

              {/* Quality/Source */}
              <div>
                <h3 className="text-xl font-display font-bold text-chile-rojo mb-3">{quality.title}</h3>
                <p className="text-gray-600">{quality.description}</p>
              </div>
            </div>
          </div>

          {/* Image side */}
          <div className="md:w-1/2 h-[300px] md:h-[400px] relative bg-gray-200 rounded-lg overflow-hidden">
            {imageSrc ? (
              <Image src={imageSrc} alt="Nourish ingredient" fill className="object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
