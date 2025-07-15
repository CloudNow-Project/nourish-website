import { BundleProductPage } from "@/components/products/BundleProductPage";

const product = {
  name: "The Duo Bundle",
  fullName: "Heyo The Duo Bundle - FREE 3 Sample Packs + 2 Full Size Packs",
  slug: "duo-bundle",
  price: 69000,
  description: "FREE SAMPLES! Get more bark for your buck with our curated bundles!",
  includes: ["2 full size packs", "3 free sample packs"],
  variants: [
    "Breath Refresher Bites – Coconut Oil & Basil",
    "Healthy Power Bites – Pumpkin & Beef",
    "Fiber Support Bites – Strawberry & Carrot",
  ],
};

export default function Page() {
  return <BundleProductPage product={product} />;
}
