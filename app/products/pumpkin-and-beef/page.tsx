import { ProductPage } from "@/components/products/ProductPage";
import { ExtendedProduct, regularProducts } from "@/data/products";

export default function PumpkinAndBeefPage() {
  const product = regularProducts.find((p: ExtendedProduct) => p.slug === "pumpkin-and-beef");

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductPage product={product} />;
}
