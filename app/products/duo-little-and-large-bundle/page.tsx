import { BundleProductPage } from "@/components/products/BundleProductPage";
import { BundleProduct } from "@/data/products";
import { getProductBySlug } from "@/lib/product-utils";

export default function ProductPage() {
  const product = getProductBySlug({
    slug: "duo-little-and-large-bundle",
    type: "bundle",
  });

  if (!product || !("isBundle" in product)) {
    return <div>Bundle not found</div>;
  }

  // Now TypeScript knows this is a BundleProduct
  const bundleProduct = product as BundleProduct;
  return <BundleProductPage product={bundleProduct} />;
}
