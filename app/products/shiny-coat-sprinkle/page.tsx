import { TopperProductPage } from "@/components/products/TopperProductPage";

const product = {
  name: "Shiny Coat Sprinkle",
  fullName: "Heyo Superfood Dog Topper – Shiny Coat Sprinkle with Bee Pollen and Chia Seeds",
  slug: "shiny-coat-sprinkle",
  price: 38000,
  subtitle: "Omega 3 and 6 Boost with Bee Pollen and Chia Seeds",
  description:
    "Heyo Superfood Dog Toppers are crafted with love, allergy-friendly, and boosted with superfoods to support shiny and silky fluff.",
  ingredients: ["Pumpkin Seeds", "Chia Seeds", "Coconut", "Bee Pollen", "Spirulina", "Turmeric Powder"],
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
    {
      dogSize: "Toy Dogs",
      weight: "<5 kg",
      amount: "1/4 teaspoon",
    },
    {
      dogSize: "Small Dogs",
      weight: "5 - 10 kg",
      amount: "1/2 teaspoon",
    },
    {
      dogSize: "Medium Dogs",
      weight: "10 - 25 kg",
      amount: "1 teaspoon",
    },
    {
      dogSize: "Large Dogs",
      weight: "25 - 40 kg",
      amount: "1 ½ teaspoon",
    },
    {
      dogSize: "Giant Dogs",
      weight: ">40 kg",
      amount: "2 teaspoon",
    },
  ],
};

export default function Page() {
  return <TopperProductPage product={product} />;
}
