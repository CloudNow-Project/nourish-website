import { MiniProductPage } from "@/components/products/MiniProductPage";
import { miniPackProducts } from "@/data/products";

export default function MiniPackPumpkinAndBeefPage() {
  const product = miniPackProducts.find((p) => p.slug === "mini-pack-pumpkin-and-beef");

  if (!product) {
    return <div>Product not found</div>;
  }

  return <MiniProductPage product={product} />;
}
