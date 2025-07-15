import { ProductPage } from "@/components/products/ProductPage";
import { regularProducts } from "@/data/products";

export default function StrawberryAndCarrotPage() {
  const product = regularProducts.find((p) => p.slug === "strawberry-and-carrot");

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductPage product={product} />;
}
