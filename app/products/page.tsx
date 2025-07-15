import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { MinimalFooter } from "@/components/layout/MinimalFooter";
import { ProductCard } from "@/components/products/ProductCard";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import {
  ExtendedProduct,
  TopperProduct,
  BundleProduct,
  regularProducts,
  miniPackProducts,
  topperProducts,
  bundleProducts,
} from "@/data/products";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Our Pawsome Treats | Heyo Superfood Dog Treats",
  description:
    "Discover our premium dog treats created with human-grade, nutritionally dense ingredients that support your dog's health and happiness.",
};

export default function ProductsPage() {
  const breadcrumbItems = [{ label: "Products", href: "/products" }];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto max-w-6xl px-4">
          <Breadcrumb items={breadcrumbItems} />

          <SectionHeading
            heading="Our Pawsome Treats"
            subheading="Our premium dog treats are created with human-grade, nutritionally dense ingredients that support your dog's health and happiness."
            variant="default"
            size="lg"
            alignment="center"
            bottomMargin="large"
          />

          {/* Main Products Section */}
          <AnimatedElement variant="fadeInUp" delay={0.3}>
            <div className="mb-20">
              <div className="mb-12">
                <SectionHeading
                  heading="Premium Treats"
                  subheading="Our signature collection of nutritious and delicious treats"
                  variant="secondary"
                  alignment="center"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularProducts.map((product: ExtendedProduct) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    imageSrc={product.imageSrc}
                    slug={product.slug}
                    productColor={product.productColor}
                  />
                ))}
              </div>
            </div>
          </AnimatedElement>

          {/* Mini Packs */}
          <AnimatedElement variant="fadeInUp" delay={0.4}>
            <div className="mt-24">
              <div className="mb-12">
                <SectionHeading
                  heading="Mini Packs"
                  subheading="Perfect trial size treats for your furry friend"
                  variant="secondary"
                  alignment="center"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {miniPackProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    imageSrc={product.imageSrc}
                    slug={product.slug}
                    productColor={product.productColor}
                    isMiniPack={product.isMiniPack}
                  />
                ))}
              </div>
            </div>
          </AnimatedElement>

          {/* Toppers */}
          <AnimatedElement variant="fadeInUp" delay={0.6}>
            <div className="mt-24">
              <div className="mb-12">
                <SectionHeading
                  heading="Food Toppers"
                  subheading="Sprinkle some extra nutrition on your pup's meal"
                  variant="secondary"
                  alignment="center"
                />
              </div>
              <div className="flex justify-center">
                {topperProducts.map((product: TopperProduct) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    imageSrc={product.imageSrc}
                    slug={product.slug}
                    productColor={product.productColor}
                    isTopper={true}
                  />
                ))}
              </div>
            </div>
          </AnimatedElement>

          {/* Bundles */}
          <AnimatedElement variant="fadeInUp" delay={0.8}>
            <div className="mt-24 mb-24">
              <div className="mb-12">
                <SectionHeading
                  heading="Value Bundles"
                  subheading="Get more bark for your buck with our curated bundles"
                  variant="secondary"
                  alignment="center"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                {bundleProducts.map((product: BundleProduct) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    imageSrc={product.imageSrc}
                    slug={product.slug}
                    productColor={product.productColor}
                    isBundle={true}
                  />
                ))}
              </div>
            </div>
          </AnimatedElement>
        </div>
      </main>

      <MinimalFooter />
    </div>
  );
}
