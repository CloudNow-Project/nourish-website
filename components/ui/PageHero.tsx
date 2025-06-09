import Image from "next/image";
import { ShadowedHeading } from "./ShadowedHeading";

interface PageHeroProps {
  backgroundImage: string;
  heading: string;
  description: string;
  highlightedText?: string;
  children?: React.ReactNode;
}

export function PageHero({ backgroundImage, heading, description, highlightedText, children }: PageHeroProps) {
  return (
    <section className="relative text-white min-h-[500px] flex flex-col justify-center items-center">
      {/* Hero background image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={backgroundImage}
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content container with padding to account for navbar */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="flex flex-col items-center justify-center text-center py-16">
          <ShadowedHeading
            text={heading}
            highlightWord={highlightedText}
            highlightColor="#FFBD58"
            as="h1"
            size="xl"
            textColor="#FFFFFF"
            shadowColor="rgba(255, 255, 255, 0.2)"
            shadowOffset={3}
            className="mb-6"
          />
          <p className="text-lg md:text-xl max-w-3xl mx-auto">{description}</p>
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
