import { ProductPage } from "@/components/products/ProductPage";
import { MiniProductPage } from "@/components/products/MiniProductPage";
import { allProducts, MiniPackProduct, ExtendedProduct, TopperProduct, BundleProduct } from "@/data/products";

type ProductType = ExtendedProduct | MiniPackProduct | TopperProduct | BundleProduct;

export default function CoconutAndBasilPage() {
  const product = allProducts.find((p) => p.slug === "coconut-oil-and-basil");

  if (!product) {
    return <div>Product not found</div>;
  }

  // Type guards for different product types
  const isMiniPack = (p: ProductType): p is MiniPackProduct => "isMiniPack" in p;
  const isTopper = (p: ProductType): p is TopperProduct => "isTopper" in p;
  const isBundle = (p: ProductType): p is BundleProduct => "isBundle" in p;
  const isExtended = (p: ProductType): p is ExtendedProduct => !isMiniPack(p) && !isTopper(p) && !isBundle(p);

  if (isMiniPack(product)) {
    return <MiniProductPage product={product} />;
  }

  if (isExtended(product)) {
    return <ProductPage product={product} />;
  }

  // For now, we'll show a not found page for other product types
  // You may want to create specific pages for toppers and bundles later
  return <div>Product type not supported</div>;
}
