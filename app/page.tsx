import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductGrid } from "@/components/products/ProductGrid";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { CTASection } from "@/components/sections/CTASection";
import { BlogSection } from "@/components/sections/BlogSection";
import { Hero } from "@/components/page/home/Hero";
import { Features } from "@/components/page/home/Features";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

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
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <Hero
        heading={heroContent.heading}
        subheading={heroContent.subheading}
        primaryCta={heroContent.primaryCta}
        secondaryCta={heroContent.secondaryCta}
      />

      {/* Features Section */}
      <AnimatedSection delay={0.1}>
        <Features features={features} />
      </AnimatedSection>

      {/* Featured Products Section */}
      <AnimatedSection delay={0.2}>
        <ProductGrid
          title="Pawsome Treats"
          subtitle="Healthy, tasty, and pawpicked by dogs everywhere."
          products={featuredProducts}
        />
      </AnimatedSection>

      {/* Gallery Section */}
      <AnimatedSection delay={0.3}>
        <GallerySection
          heading={gallerySection.heading}
          subheading={gallerySection.subheading}
          images={gallerySection.images}
        />
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection delay={0.4}>
        <TestimonialsSection
          heading={testimonials.heading}
          subheading={testimonials.subheading}
          reviews={testimonials.reviews}
        />
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection delay={0.5}>
        <StatsSection
          heading={statsSection.heading}
          subheading={statsSection.subheading}
          stats={statsSection.stats}
          ctaText={statsSection.ctaText}
          ctaUrl={statsSection.ctaUrl}
          bgColor="#555555" // Temporary gray background until image is provided
        />
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection delay={0.6}>
        <CTASection
          heading={ctaSection.heading}
          description={ctaSection.description}
          image={ctaSection.image}
          primaryButton={ctaSection.primaryButton}
          secondaryButton={ctaSection.secondaryButton}
        />
      </AnimatedSection>

      {/* Blog Section */}
      <AnimatedSection delay={0.7}>
        <BlogSection
          heading={blogSection.heading}
          subheading={blogSection.subheading}
          categories={blogSection.categories}
          posts={blogSection.posts}
          viewAllLink={blogSection.viewAllLink}
        />
      </AnimatedSection>

      <Footer />
    </div>
  );
}
