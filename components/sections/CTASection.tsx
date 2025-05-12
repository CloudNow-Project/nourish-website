import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  heading: string;
  description: string;
  image?: string;
  primaryButton: {
    text: string;
    url: string;
  };
  secondaryButton: {
    text: string;
    url: string;
  };
}

export function CTASection({ heading, description, image, primaryButton, secondaryButton }: CTASectionProps) {
  return (
    <section className="py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="rounded-xl overflow-hidden border border-gray-200">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Content */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-ernest-navy mb-4">{heading}</h2>
              <p className="text-gray-600 mb-8">{description}</p>

              <div className="flex flex-wrap gap-4">
                <Button asChild variant="default" className="bg-black hover:bg-gray-800 text-white font-medium">
                  <Link href={primaryButton.url}>{primaryButton.text}</Link>
                </Button>
                <Button asChild variant="outline" className="border-gray-300 text-gray-700">
                  <Link href={secondaryButton.url}>{secondaryButton.text}</Link>
                </Button>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="md:w-1/2 bg-gray-200 min-h-[300px] relative">
              {image ? (
                <Image src={image} alt="Dog treat promo" fill className="object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      </div>
    </section>
  );
}
