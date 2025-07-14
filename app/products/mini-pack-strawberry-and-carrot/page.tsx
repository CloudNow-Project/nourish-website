import { MiniProductPage } from "@/components/products/MiniProductPage";

const product = {
  name: "Mini Pack Strawberry & Carrot",
  fullName: "MINI PACK Heyo Superfood Dog Treats - Fibre Support Bites - Strawberry and Carrot",
  slug: "mini-pack-strawberry-and-carrot",
  price: 15000,
  subtitle: "Healthy Digestive Bites with Beetroot Powder & Oatmeal",
  description:
    "Give your dog the best with Heyo Superfood Dog Treats - Crafted with love, allergy-friendly, and boosted with superfoods to support digestion, immunity, and overall health.",
  ingredients: ["Oats", "Peanuts", "Egg", "Pumpkin Seeds", "Carrot", "Strawberry", "Beetroot Powder"],
  noArtificials: ["Preservatives", "Coloring", "Flavoring", "By-products", "Artificial ingredients", "Salt & Sugar"],
  benefits: [
    {
      name: "Oats",
      description: "Supports digestion with fiber, vitamins, and minerals while helping regulate blood sugar.",
    },
    {
      name: "Peanuts",
      description: "A protein-rich source of healthy fats, vitamin B, and vitamin E for skin, coat, and energy.",
    },
    {
      name: "Egg",
      description:
        "A complete protein packed with essential amino acids, vitamins, and minerals for muscle growth and overall health.",
    },
    {
      name: "Pumpkin Seeds",
      description: "Rich in antioxidants, healthy fats, and zinc to boost immunity and promote a healthy coat.",
    },
    {
      name: "Carrot",
      description: "High in beta-carotene and vitamin A, great for eye health, skin, and immune function.",
    },
    {
      name: "Strawberry",
      description: "Loaded with antioxidants, vitamin C, and fiber to promote a healthy immune system and digestion.",
    },
    {
      name: "Beetroot Powder",
      description: "A natural source of fiber, iron, and antioxidants that support heart health and circulation.",
    },
  ],
  servingGuide: [
    {
      dogSize: "Toy Dogs",
      weight: "<5 kg",
      pieces: "1 - 2 pieces",
    },
    {
      dogSize: "Small Dogs",
      weight: "5 - 10 kg",
      pieces: "2 - 4 pieces",
    },
    {
      dogSize: "Medium Dogs",
      weight: "10 - 25 kg",
      pieces: "4 - 6 pieces",
    },
    {
      dogSize: "Large Dogs",
      weight: "25 - 40 kg",
      pieces: "6 - 8 pieces",
    },
    {
      dogSize: "Giant Dogs",
      weight: ">40 kg",
      pieces: "8 - 12 pieces",
    },
  ],
  marketplaces: {
    shopee:
      "https://shopee.co.id/MINI-PACK-Heyo-Superfood-Dog-Treats-Fibre-Support-Bites-Strawberry-and-Carrot-i.1363197955.42054633895",
    tokopedia: "",
  },
};

export default function Page() {
  return <MiniProductPage product={product} />;
}
