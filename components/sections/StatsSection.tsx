import { Button } from "@/components/ui/button";
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

export function StatsSection({ heading, subheading, stats, ctaText, ctaUrl, bgColor = "#6B7280" }: StatsSectionProps) {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: bgColor }}>
      {/* This div will be replaced with an image background later */}
      <div className="absolute inset-0 bg-opacity-70"></div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">{heading}</h2>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-lg">{subheading}</p>

            {ctaText && ctaUrl && (
              <div>
                <Button
                  asChild
                  className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-6 text-lg font-medium rounded-md"
                >
                  <Link href={ctaUrl}>{ctaText}</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Right side - Stats grid */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 font-display">{stat.value}</div>
                <div className="text-lg text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
