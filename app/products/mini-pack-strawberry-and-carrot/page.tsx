import { MiniProductPage } from "@/components/products/MiniProductPage";
import { miniPackProducts } from "@/data/products";

export default function MiniPackStrawberryAndCarrotPage() {
  const product = miniPackProducts.find((p) => p.slug === "mini-pack-strawberry-and-carrot");

  if (!product) {
    return <div>Product not found</div>;
  }

  return <MiniProductPage product={product} />;
}
