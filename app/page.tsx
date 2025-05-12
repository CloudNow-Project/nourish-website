import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductGrid } from "@/components/products/ProductGrid";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { CTASection } from "@/components/sections/CTASection";
import { BlogSection } from "@/components/sections/BlogSection";
import { Paw } from "@/components/ui/Paw";
import Image from "next/image";

// Import data from dedicated data files
import { featuredProducts } from "@/data/products";
import {
  features,
  heroContent,
  statsSection,
  testimonials,
  gallerySection,
  ctaSection,
  blogSection,
} from "@/data/home";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-ernest-beige">
      <Navbar />

      {/* Hero Section with dog and product image */}
      <section className="relative pt-24 min-h-[90vh] flex items-center py-12 overflow-hidden bg-terracota">
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex gap-20 items-center px-10">
            {/* Left side content with balanced margins */}
            <div className="order-2 md:order-1 space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
                <span className="text-sunset block mb-2">{heroContent.heading.mainText} </span>
                <span className="text-white">{heroContent.heading.highlightedText}</span>
              </h1>

              <p className="text-white/90 text-lg md:text-xl">{heroContent.subheading}</p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-nourish-orange hover:bg-nourish-orange/90 px-6 md:px-8 py-6 rounded-full text-nourish-text text-lg shadow-lg shadow-nourish-orange/20">
                  {heroContent.primaryCta.text}
                </Button>
                <Button className="bg-olive hover:bg-olive/90 px-6 md:px-8 py-6 rounded-full text-white text-lg shadow-lg shadow-olive/20">
                  {heroContent.secondaryCta.text}
                </Button>
              </div>
            </div>

            {/* Right side image - adjusted to match actual ratio */}
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-auto h-[400px] md:h-[450px] lg:h-[600px] aspect-[2/3]">
                <Image
                  src="/images/nourish-header-01.png"
                  alt="Nourish dog treats with happy dog"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Highly visible paw prints as decorative elements */}
        <Paw size={200} color="#B04818" className="absolute top-20 left-20 opacity-30 rotate-12 md:block" />
        <Paw size={150} color="#B04818" className="absolute top-1/4 right-40 opacity-25 -rotate-12 md:block" />
        <Paw size={170} color="#B04818" className="absolute bottom-40 left-1/3 opacity-30 rotate-45 md:block" />
        <Paw size={130} color="#B04818" className="absolute bottom-60 right-1/4 opacity-25 -rotate-12 md:block" />
      </section>

      {/* Why Paw-rents Choose Nourish */}
      <section className="py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-chile-rojo mb-8">
            Why Paw-rents Choose Nourish
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
            Our treats aren&apos;t just tasty—they&apos;re made with carefully sourced ingredients, nutritional
            integrity, and doggie science. Here&apos;s why we&apos;re different.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Map through the features data */}
            {features.map((feature) => (
              <div
                key={feature.id}
                className="text-center p-8 rounded-xl hover:shadow-xl transition-shadow border-2 border-chile-rojo/30"
              >
                <div className="mx-auto w-20 h-20 bg-chile-rojo/20 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-chile-rojo"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.iconPath} />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-chile-rojo mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button className="bg-terracota hover:bg-terracota/90 text-white px-8 py-6 rounded-full text-lg font-medium">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <ProductGrid
        title="Paw-some Treats"
        subtitle="Healthy, tasty, and paw-picked by dogs everywhere."
        products={featuredProducts}
      />

      {/* Gallery Section */}
      <GallerySection
        heading={gallerySection.heading}
        subheading={gallerySection.subheading}
        images={gallerySection.images}
      />

      {/* Testimonials Section */}
      <TestimonialsSection
        heading={testimonials.heading}
        subheading={testimonials.subheading}
        reviews={testimonials.reviews}
      />

      {/* Stats Section */}
      <StatsSection
        heading={statsSection.heading}
        subheading={statsSection.subheading}
        stats={statsSection.stats}
        ctaText={statsSection.ctaText}
        ctaUrl={statsSection.ctaUrl}
        bgColor="#555555" // Temporary gray background until image is provided
      />

      {/* CTA Section */}
      <CTASection
        heading={ctaSection.heading}
        description={ctaSection.description}
        image={ctaSection.image}
        primaryButton={ctaSection.primaryButton}
        secondaryButton={ctaSection.secondaryButton}
      />

      {/* Blog Section */}
      <BlogSection
        heading={blogSection.heading}
        subheading={blogSection.subheading}
        categories={blogSection.categories}
        posts={blogSection.posts}
        viewAllLink={blogSection.viewAllLink}
      />

      <Footer />
    </div>
  );
}
