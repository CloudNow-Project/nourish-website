import { TopperProductPage } from "@/components/products/TopperProductPage";

const product = {
  name: "Shiny Coat Sprinkle",
  fullName: "Heyo Superfood Dog Topper – Shiny Coat Sprinkle with Bee Pollen and Chia Seeds",
  slug: "shiny-coat-sprinkle",
  price: 38000,
  subtitle: "Omega 3 and 6 Boost with Bee Pollen and Chia Seeds",
  description:
    "Heyo Superfood Dog Toppers are crafted with love, allergy-friendly, and boosted with superfoods to support shiny and silky fluff. Give your dog a natural, nutrient-packed treat that supports their skin and coat from the inside out.",
  ingredients: ["Pumpkin Seeds", "Chia Seeds", "Coconut", "Bee Pollen", "Spirulina", "Turmeric Powder", "Lots of Love"],
  noArtificials: ["Preservatives", "Coloring", "Flavoring", "By-products", "Artificial ingredients", "Salt & Sugar"],
  benefits: [
    {
      name: "Pumpkin Seeds",
      description: "Rich in antioxidants, healthy fats, and zinc to boost immunity and promote a healthy coat.",
    },
    {
      name: "Chia Seeds",
      description: "High in omega-3s, fiber, and protein to support joints, digestion, and energy.",
    },
    {
      name: "Coconut",
      description: "A source of healthy fats (MCTs) that support skin and coat health, energy, and digestion.",
    },
    {
      name: "Bee Pollen",
      description: "Supports immune function, reduces inflammation, and promotes overall vitality.",
    },
    {
      name: "Spirulina",
      description:
        "A superfood loaded with antioxidants, vitamins, and minerals that boost the immune system and support detoxification.",
    },
    {
      name: "Turmeric Powder",
      description:
        "A natural anti-inflammatory and antioxidant that supports joint health and may help with allergies and immune balance.",
    },
  ],
  servingGuide: [
    { dogSize: "Toy Dogs", weight: "<5 kg", amount: "1/4 teaspoon" },
    { dogSize: "Small Dogs", weight: "5 - 10 kg", amount: "1/2 teaspoon" },
    { dogSize: "Medium Dogs", weight: "10 - 25 kg", amount: "1 teaspoon" },
    { dogSize: "Large Dogs", weight: "25 - 40 kg", amount: "1 ½ teaspoon" },
    { dogSize: "Giant Dogs", weight: ">40 kg", amount: "2 teaspoon" },
  ],
  storage: "Keep in a cool, dry place or refrigerate for maximum freshness.",
  netWeight: "35g",
  marketplaces: {
    shopee:
      "https://shopee.co.id/Heyo-Superfood-Dog-Topper-%E2%80%93-Shiny-Coat-Sprinkle-with-Bee-Pollen-and-Chia-Seeds-i.1363197955.42007605671",
    tokopedia:
      "https://www.tokopedia.com/heyo-superfood-dog-treats/heyo-superfood-dog-topper-shiny-coat-sprinkle-with-bee-pollen-and-chia-seeds-1731871250321671840",
  },
};

export default function Page() {
  return <TopperProductPage product={product} />;
}
