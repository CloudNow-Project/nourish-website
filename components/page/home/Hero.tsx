import { Button } from "@/components/ui/button";
import { Paw } from "@/components/ui/Paw";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  heading: {
    mainText: string;
    highlightedText: string;
  };
  subheading: string;
  primaryCta: {
    text: string;
    url: string;
  };
  secondaryCta: {
    text: string;
    url: string;
  };
}

export function Hero({ heading, subheading, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="relative pt-20 md:pt-32 min-h-[90vh] flex items-center py-8 md:py-12 overflow-hidden bg-terracota">
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:gap-20 items-center px-4 md:px-10">
          {/* Mobile & Desktop: Image first on small screens, content first on medium+ */}
          <div className="order-1 md:order-2 flex justify-center w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] max-w-[400px] md:max-w-none">
              <Image
                src="/images/nourish-header-01.png"
                alt="Nourish dog treats with happy dog"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="order-2 md:order-1 w-full md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              <span className="text-sunset block mb-2">{heading.mainText}</span>
              <span className="text-white">{heading.highlightedText}</span>
            </h1>

            <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0">{subheading}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2 md:pt-4">
              <Link href={primaryCta.url}>
                <Button className="w-full sm:w-auto bg-nourish-orange hover:bg-nourish-orange/90 px-6 md:px-8 py-5 md:py-6 rounded-full text-nourish-text text-base md:text-lg shadow-lg shadow-nourish-orange/20">
                  {primaryCta.text}
                </Button>
              </Link>
              <Link href={secondaryCta.url}>
                <Button className="w-full sm:w-auto bg-olive hover:bg-olive/90 px-6 md:px-8 py-5 md:py-6 rounded-full text-white text-base md:text-lg shadow-lg shadow-olive/20">
                  {secondaryCta.text}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative paw prints - hidden on small screens */}
      <div className="hidden md:block">
        <Paw size={200} color="#B04818" className="absolute top-20 left-20 opacity-30 rotate-12" />
        <Paw size={150} color="#B04818" className="absolute top-1/4 right-40 opacity-25 -rotate-12" />
        <Paw size={170} color="#B04818" className="absolute bottom-40 left-1/3 opacity-30 rotate-45" />
        <Paw size={130} color="#B04818" className="absolute bottom-60 right-1/4 opacity-25 -rotate-12" />
      </div>

      {/* Mobile paw prints - fewer and positioned differently */}
      <div className="md:hidden">
        <Paw size={100} color="#B04818" className="absolute top-20 right-10 opacity-30 rotate-12" />
        <Paw size={80} color="#B04818" className="absolute bottom-20 left-10 opacity-25 -rotate-12" />
      </div>
    </section>
  );
}
