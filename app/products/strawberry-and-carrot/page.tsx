import { ProductPage } from "@/components/products/ProductPage";
import { featuredProducts } from "@/data/products";

export default function StrawberryAndCarrotPage() {
  const product = featuredProducts.find((p) => p.slug === "products/strawberry-and-carrot");

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductPage product={product} />;
}
