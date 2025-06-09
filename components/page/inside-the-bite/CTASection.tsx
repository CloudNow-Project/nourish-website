import React from "react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-chile-rojo mb-6">
            Ready to Choose Better for Your Pup?
          </h2>

          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Treat your furry bestie to something that&apos;s <em>actually</em> good for them.
            <br />
            From belly-happy bites to superfood-packed snacks — they&apos;ll love every crunch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="px-8 py-3 bg-nourish-orange text-white font-bold rounded-lg hover:bg-chile-rojo transition-colors"
            >
              🛍️ Explore Our Treats
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-gray-100 text-gray-800 font-bold rounded-lg hover:bg-gray-200 transition-colors"
            >
              📣 Give Us a Woof
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
