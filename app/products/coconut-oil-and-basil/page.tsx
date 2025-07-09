import { ProductPage } from "@/components/products/ProductPage";
import { allProducts } from "@/data/products";

export default function CoconutAndBasilPage() {
  const product = allProducts.find((p) => p.slug === "products/coconut-oil-and-basil");

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductPage product={product} />;
}
