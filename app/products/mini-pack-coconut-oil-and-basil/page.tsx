import { MiniProductPage } from "@/components/products/MiniProductPage";
import { miniPackProducts } from "@/data/products";

export default function MiniPackCoconutOilAndBasilPage() {
  const product = miniPackProducts.find((p) => p.slug === "mini-pack-coconut-oil-and-basil");

  if (!product) {
    return <div>Product not found</div>;
  }

  return <MiniProductPage product={product} />;
}
