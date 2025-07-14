import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { MinimalFooter } from "@/components/layout/MinimalFooter";
import { ProductCard } from "@/components/products/ProductCard";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { featuredProducts, miniPackProducts } from "@/data/products";
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

          <AnimatedElement variant="fadeInUp" delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Our Pawsome Treats</h1>
          </AnimatedElement>

          <AnimatedElement variant="fadeInUp" delay={0.2}>
            <div className="text-center mb-16">
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
                Our premium dog treats are created with human-grade, nutritionally dense ingredients that support your
                dog&apos;s health and happiness.
              </p>
            </div>
          </AnimatedElement>

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
                {featuredProducts.map((product) => (
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

          {/* Mini Pack Section */}
          <AnimatedElement variant="fadeInUp" delay={0.4}>
            <div>
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
                    isMiniPack={true}
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
