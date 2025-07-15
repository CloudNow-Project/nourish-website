import { BundleProductPage } from "@/components/products/BundleProductPage";

export default function Page() {
  const product = {
    name: "The Duo Bundle",
    fullName: "Heyo The Duo Bundle - FREE 3 Sample Packs + 2 Full Size Packs",
    slug: "duo-bundle",
    price: 69000,
    description:
      "FREE SAMPLES! Get more bark for your buck with our curated bundles! Whether you're trying Heyo for the first time or restocking your pup's favorites, there's something tasty in every bundle.",
    includes: ["2 full size packs", "3 free sample packs"],
    variants: [
      "Breath Refresher Bites – Coconut Oil & Basil",
      "Healthy Power Bites – Pumpkin & Beef",
      "Fiber Support Bites – Strawberry & Carrot",
    ],
    notes: ["Samples are sent randomly based on availability", "Variants cannot be chosen"],
    tagline: "All treats are made with real superfoods, no nasties – just clean, functional bites your pup will love!",
    marketplaces: {
      shopee: "https://shopee.co.id/Heyo-The-Duo-Bundle-FREE-3-Sample-Packs-2-Full-Size-Packs-i.1363197955.42056991700",
      tokopedia:
        "https://www.tokopedia.com/heyo-superfood-dog-treats/heyo-the-duo-bundle-free-3-sample-packs-2-full-size-packs-1731821061611751072",
    },
  };

  return <BundleProductPage product={product} />;
}
