import { Button } from "@/components/ui/button";
import { ShadowedHeading } from "@/components/ui/ShadowedHeading";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";
import Link from "next/link";

type Stat = {
  value: string;
  label: string;
};

interface StatsSectionProps {
  heading: string;
  subheading: string;
  stats: Stat[];
  ctaText?: string;
  ctaUrl?: string;
  bgColor?: string;
}

export function StatsSection({ heading, subheading, stats, ctaText, ctaUrl }: StatsSectionProps) {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "transparent" }}>
      {/* Background image - simplifying the approach completely */}
      <Image
        src="/images/home/stats-dog.jpg"
        alt="Dogs eating from bowls"
        fill
        priority
        className="object-cover object-center z-0"
      />

      {/* Semi-transparent color overlay - using a color that will blend well with the image */}
      <div className="absolute inset-0 bg-black/60 z-[1]"></div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-white">
            <SectionHeading
              heading={heading}
              subheading={subheading}
              variant="primary"
              alignment="left"
              bottomMargin="medium"
            />

            {ctaText && ctaUrl && (
              <AnimatedElement variant="fadeInUp" delay={0.3}>
                <div>
                  <Button
                    asChild
                    className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-6 text-lg font-medium rounded-md"
                  >
                    <Link href={ctaUrl}>{ctaText}</Link>
                  </Button>
                </div>
              </AnimatedElement>
            )}
          </div>

          {/* Right side - Stats grid */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <AnimatedElement key={index} variant="fadeInRight" delay={0.3 + index * 0.1}>
                <div className="text-white">
                  <ShadowedHeading
                    text={stat.value}
                    size="lg"
                    textColor="white"
                    shadowColor="rgba(255,255,255,0.3)"
                    shadowOffset={3}
                    className="mb-2"
                  />
                  <div className="text-lg text-white/80">{stat.label}</div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
