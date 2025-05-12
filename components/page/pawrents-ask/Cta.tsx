import Link from "next/link";
import { ctaContent } from "@/data/pawrents-ask";

export function CtaSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-chile-rojo mb-4">{ctaContent.heading}</h2>
          <p className="text-lg text-gray-600 mb-8">{ctaContent.subheading}</p>
          <Link
            href="/give-us-a-woof"
            className="inline-block bg-chile-rojo hover:bg-terracota text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            {ctaContent.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
