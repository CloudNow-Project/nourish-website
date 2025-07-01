"use client";

import { ProductPage } from "@/components/products/ProductPage";
import { allProducts } from "@/data/products";

export default function PumpkinAndBeefPage() {
  const product = allProducts.find((p) => p.slug === "products/pumpkin-and-beef");

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductPage product={product} />;
}
