import { MiniProductPage } from "@/components/products/MiniProductPage";

const product = {
  name: "Mini Pack Coconut Oil & Basil",
  fullName: "MINI PACK Heyo Superfood Dog Treats - Better Breath Bites - Coconut Oil and Basil",
  slug: "mini-pack-coconut-oil-and-basil",
  price: 15000,
  subtitle: "Coconut Oil & Basil with Honey & Chia Seeds",
  description:
    "Heyo Superfood Dog Treats are crafted with love, allergy-friendly, and boosted with superfoods to support digestion, immunity, and overall well-being.",
  ingredients: ["Oats", "Pumpkin", "Coconut Oil", "Honey", "Chia Seeds", "Spirulina", "Dried Basil", "Dried Parsley"],
  noArtificials: ["Preservatives", "Coloring", "Flavoring", "By-products", "Artificial ingredients", "Salt & Sugar"],
  benefits: [
    {
      name: "Oats",
      description: "Supports digestion with fiber, vitamins, and minerals while helping regulate blood sugar.",
    },
    {
      name: "Pumpkin",
      description:
        "High in fiber, great for digestion, and supports gut health by preventing constipation and diarrhea.",
    },
    {
      name: "Coconut Oil",
      description: "A source of healthy fats that promote skin and coat health.",
    },
    {
      name: "Honey",
      description: "A natural sweetener with trace antioxidants and antibacterial properties.",
    },
    {
      name: "Chia Seeds",
      description: "High in omega-3s, fiber, and protein to support joints, digestion, and energy.",
    },
    {
      name: "Spirulina",
      description:
        "A superfood loaded with antioxidants, vitamins, and minerals that boost the immune system and support detoxification.",
    },
    {
      name: "Basil & Parsley",
      description: "Fragrant herbs with natural anti-inflammatory properties that also help freshen breath.",
    },
  ],
  servingGuide: [
    {
      dogSize: "Toy Dogs",
      weight: "<5 kg",
      pieces: "½ - 2 pieces",
    },
    {
      dogSize: "Small Dogs",
      weight: "5 - 10 kg",
      pieces: "1 - 2 pieces",
    },
    {
      dogSize: "Medium Dogs",
      weight: "10 - 25 kg",
      pieces: "2 - 3 pieces",
    },
    {
      dogSize: "Large Dogs",
      weight: "25 - 40 kg",
      pieces: "3 - 4 pieces",
    },
    {
      dogSize: "Giant Dogs",
      weight: ">40 kg",
      pieces: "4 - 5 pieces",
    },
  ],
  marketplaces: {
    shopee:
      "https://shopee.co.id/MINI-PACK-Heyo-Superfood-Dog-Treats-Better-Breath-Bites-Coconut-Oil-and-Basil-i.1363197955.41456680982",
    tokopedia:
      "https://www.tokopedia.com/heyo-superfood-dog-treats/mini-pack-heyo-superfood-dog-treats-better-breath-bites-coconut-oil-and-basil-1731810457579325088",
  },
};

export default function Page() {
  return <MiniProductPage product={product} />;
}
