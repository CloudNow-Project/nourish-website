import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ShadowedHeading } from "@/components/ui/ShadowedHeading";
import { AnimatedElement } from "@/components/ui/AnimatedElement";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageSrc: string;
  slug: string;
}

interface ProductGridProps {
  title: string;
  subtitle?: string;
  products: Product[];
  showViewAllButton?: boolean;
  viewAllButtonText?: string;
  viewAllUrl?: string;
}

export function ProductGrid({
  title,
  subtitle,
  products,
  showViewAllButton = true,
  viewAllButtonText = "Sniff Them All",
  viewAllUrl = "/treats",
}: ProductGridProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <AnimatedElement variant="fadeInUp" delay={0.1}>
              <ShadowedHeading
                text={title}
                as="h2"
                size="lg"
                textColor="#1f2937"
                shadowColor="#E5E7EB"
                shadowOffset={3}
                className="mb-2"
              />
            </AnimatedElement>

            {subtitle && (
              <AnimatedElement variant="fadeInUp" delay={0.2}>
                <p className="text-gray-600 max-w-2xl">{subtitle}</p>
              </AnimatedElement>
            )}
          </div>

          {showViewAllButton && (
            <AnimatedElement variant="fadeInLeft" delay={0.3}>
              <div className="mt-4 md:mt-0">
                <Button
                  variant="outline"
                  className="border-ernest-navy text-ernest-navy hover:bg-ernest-navy hover:text-white"
                  asChild
                >
                  <a href={viewAllUrl}>{viewAllButtonText}</a>
                </Button>
              </div>
            </AnimatedElement>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product, index) => (
            <AnimatedElement key={product.id} variant="fadeInUp" delay={0.1 + index * 0.1}>
              <ProductCard
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageSrc={product.imageSrc}
                slug={product.slug}
              />
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
