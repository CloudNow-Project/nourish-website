import { BundleProductPage } from "@/components/products/BundleProductPage";

export default function LittleAndLargeBundlePage() {
  const product = {
    name: "Little and Large Bundle",
    fullName: "Heyo Little and Large Bundle - FREE 2 Sample Packs + 1 Full Size Pack + 1 Mini Size Pack",
    slug: "little-and-large-bundle",
    price: 48000,
    description: "FREE SAMPLES! Get more bark for your buck with our curated bundles!",
    includes: ["1 full size pack", "1 mini size pack", "2 free sample packs"],
    variants: [
      "Breath Refresher Bites – Coconut Oil & Basil",
      "Healthy Power Bites – Pumpkin & Beef",
      "Fiber Support Bites – Strawberry & Carrot",
    ],
    notes: ["Samples are sent randomly based on availability", "Variants cannot be chosen"],
    tagline: "All treats are made with real superfoods, no nasties – just clean, functional bites your pup will love!",
    marketplaces: {
      shopee:
        "https://shopee.co.id/Heyo-Little-and-Large-Bundle-FREE-2-Sample-Packs-1-Full-Size-Pack-1-Mini-Size-Pack-i.1363197955.42757000565",
      tokopedia:
        "https://www.tokopedia.com/heyo-superfood-dog-treats/heyo-little-and-large-bundle-free-2-sample-packs-1-full-size-pack-1-mini-size-pack-1731827904845547168",
    },
  };

  return <BundleProductPage product={product} />;
}
