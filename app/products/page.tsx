import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { MinimalFooter } from "@/components/layout/MinimalFooter";
import { ProductCard } from "@/components/products/ProductCard";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { allProducts } from "@/data/products";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

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

          <AnimatedElement variant="fadeInUp" delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  imageSrc={product.imageSrc}
                  slug={product.slug}
                />
              ))}
            </div>
          </AnimatedElement>
        </div>
      </main>

      <MinimalFooter />
    </div>
  );
}
