import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { SectionHeading } from "@/components/ui/SectionHeading";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageSrc: string;
  slug: string;
}

// Sample products data using display images
export const sampleProducts: Product[] = [
  {
    id: "strawberry-carrot",
    name: "Strawberry & Carrot",
    description: "A sweet and nutritious blend perfect for your energetic pup",
    price: 12.99,
    imageSrc: "/images/products/display-strawberry-and-carrot.png",
    slug: "strawberry-carrot",
  },
  {
    id: "pumpkin-beef",
    name: "Pumpkin & Beef",
    description: "Hearty and protein-rich treat for active dogs",
    price: 14.99,
    imageSrc: "/images/products/display-pumpkind-and-beef.png",
    slug: "pumpkin-beef",
  },
  {
    id: "coconut-chia",
    name: "Coconut & Chia",
    description: "Omega-rich superfood blend for a shiny coat and healthy digestion",
    price: 13.99,
    imageSrc: "/images/products/display-coconut-and-chia.png",
    slug: "coconut-chia",
  },
  {
    id: "beef-beet",
    name: "Beef & Beet",
    description: "Antioxidant-rich formula to support immune health",
    price: 14.99,
    imageSrc: "/images/products/display-beef-and-beet.png",
    slug: "beef-beet",
  },
];

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
  products = sampleProducts, // Default to sample products if none provided
  showViewAllButton = true,
  viewAllButtonText = "Sniff Them All",
  viewAllUrl = "/treats",
}: ProductGridProps) {
  return (
    <section className="py-24 bg-[#FFBD58]">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <SectionHeading
              categoryLabel={{
                text: "Our Products",
              }}
              heading={title}
              subheading={subtitle}
              variant="primary"
              customShadowColor="#eda334"
              alignment="left"
              bottomMargin="none"
            />
          </div>

          {showViewAllButton && (
            <AnimatedElement variant="fadeInLeft" delay={0.3}>
              <div className="mt-4 md:mt-0">
                <Button
                  variant="outline"
                  className="border-ernest-navy bg-white text-ernest-navy hover:text-white hover:bg-ernest-navy"
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
