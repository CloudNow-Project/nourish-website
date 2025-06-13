import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedElement } from "@/components/ui/AnimatedElement";

type GalleryImage = {
  id: string;
  src: string;
  alt: string;
};

interface GallerySectionProps {
  heading: string;
  subheading: string;
  images: GalleryImage[];
}

export function GallerySection({ heading, subheading, images }: GallerySectionProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <SectionHeading
          categoryLabel={{
            text: "Gallery",
          }}
          heading={heading}
          subheading={subheading}
        />

        {/* Masonry Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* First column - tall images */}
          <div className="grid gap-4">
            {images.slice(0, 2).map((image, index) => (
              <AnimatedElement key={image.id} variant="zoomIn" delay={0.3 + index * 0.1}>
                <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gray-200">
                  {image.src ? (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={600}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              </AnimatedElement>
            ))}
          </div>

          {/* Middle column - mixed heights */}
          <div className="grid gap-4">
            {/* Top image */}
            <AnimatedElement variant="zoomIn" delay={0.5}>
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
                {images[2]?.src ? (
                  <Image
                    src={images[2].src}
                    alt={images[2].alt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            </AnimatedElement>

            {/* Middle small image */}
            <AnimatedElement variant="zoomIn" delay={0.6}>
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-200">
                {images[3]?.src ? (
                  <Image
                    src={images[3].src}
                    alt={images[3].alt}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            </AnimatedElement>

            {/* Bottom tall image */}
            <AnimatedElement variant="zoomIn" delay={0.7}>
              <div className="aspect-[2/3] rounded-lg overflow-hidden bg-gray-200">
                {images[4]?.src ? (
                  <Image
                    src={images[4].src}
                    alt={images[4].alt}
                    width={400}
                    height={600}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            </AnimatedElement>
          </div>

          {/* Third column - tall images */}
          <div className="grid gap-4">
            {images.slice(5, 7).map((image, index) => (
              <AnimatedElement key={image.id} variant="zoomIn" delay={0.5 + index * 0.2}>
                <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gray-200">
                  {image.src ? (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={600}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
