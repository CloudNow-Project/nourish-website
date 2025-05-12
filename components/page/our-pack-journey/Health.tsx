import Image from "next/image";
import { healthContent } from "@/data/our-pack-journey";

export function HealthSection() {
  return (
    <section className="py-20 bg-ernest-beige">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          {/* Content side */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-chile-rojo mb-6">
              {healthContent.heading}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">{healthContent.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {healthContent.benefits.map((benefit) => (
                <div key={benefit.id} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-nourish-orange/20 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-nourish-orange"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-display font-bold text-chile-rojo mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div className="md:w-1/2 h-[300px] md:h-[400px] relative bg-gray-200 rounded-lg overflow-hidden">
            {healthContent.imageSrc ? (
              <Image src={healthContent.imageSrc} alt="Dog health benefits" fill className="object-cover" />
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
