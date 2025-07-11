import { ProductPage } from "@/components/products/ProductPage";
import { featuredProducts } from "@/data/products";

export default function PumpkinAndBeefPage() {
  const product = featuredProducts.find((p) => p.slug === "products/pumpkin-and-beef");

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductPage product={product} />;
}
