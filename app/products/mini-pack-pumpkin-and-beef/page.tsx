import { MiniProductPage } from "@/components/products/MiniProductPage";

const product = {
  name: "Mini Pack Pumpkin & Beef",
  fullName: "MINI PACK Heyo Superfood Dog Treats - Healthy Power Bites - Pumpkin and Beef",
  slug: "mini-pack-pumpkin-and-beef",
  price: 15000,
  subtitle: "Pumpkin & Beef with Flax Seeds & Spirulina",
  description:
    "Heyo Superfood Dog Treats are crafted with love, allergy-friendly, and boosted with superfoods to support digestion, immunity, and overall well-being.",
  ingredients: [
    "Rice Flour",
    "Flax Seeds",
    "Pumpkin",
    "Ground Beef",
    "Spirulina",
    "Ginger Powder",
    "Sweet Potato",
    "Chia Seeds",
  ],
  noArtificials: ["Preservatives", "Coloring", "Flavoring", "By-products", "Artificial ingredients", "Salt & Sugar"],
  benefits: [
    {
      name: "Rice Flour",
      description:
        "A gluten-free, easily digestible carbohydrate that provides energy without irritating sensitive stomachs.",
    },
    {
      name: "Flax Seeds",
      description: "Rich in omega-3 fatty acids for healthy skin and a shiny coat, plus fiber for digestion.",
    },
    {
      name: "Pumpkin",
      description:
        "High in fiber, great for digestion, and supports gut health by preventing constipation and diarrhea.",
    },
    {
      name: "Ground Beef",
      description:
        "A high-quality protein source packed with essential amino acids, iron, and B vitamins for muscle growth and energy.",
    },
    {
      name: "Spirulina",
      description:
        "A superfood loaded with antioxidants, vitamins, and minerals that boost the immune system and support detoxification.",
    },
    {
      name: "Ginger Powder",
      description: "Helps reduce inflammation, aids digestion, and can soothe nausea or an upset stomach.",
    },
    {
      name: "Sweet Potato",
      description:
        "A nutrient-dense carbohydrate rich in fiber, vitamin A, and antioxidants for overall health and sustained energy.",
    },
    {
      name: "Chia Seeds",
      description:
        "Packed with omega-3s, fiber, and protein to promote healthy joints, digestion, and sustained energy.",
    },
  ],
  servingGuide: [
    {
      dogSize: "Toy Dogs",
      weight: "<5 kg",
      pieces: "2 - 4 pieces",
    },
    {
      dogSize: "Small Dogs",
      weight: "5 - 10 kg",
      pieces: "5 - 8 pieces",
    },
    {
      dogSize: "Medium Dogs",
      weight: "10 - 25 kg",
      pieces: "9 - 14 pieces",
    },
    {
      dogSize: "Large Dogs",
      weight: "25 - 40 kg",
      pieces: "15 - 20 pieces",
    },
    {
      dogSize: "Giant Dogs",
      weight: ">40 kg",
      pieces: "21 - 30 pieces",
    },
  ],
  marketplaces: {
    shopee:
      "https://shopee.co.id/MINI-PACK-Heyo-Superfood-Dog-Treats-Healthy-Power-Bites-Pumpkin-and-Beef-i.1363197955.42104633895",
    tokopedia:
      "https://www.tokopedia.com/heyo-superfood-dog-treats/mini-pack-heyo-superfood-dog-treats-healthy-power-bites-pumpkin-and-beef-1731685969130325664",
  },
};

export default function Page() {
  return <MiniProductPage product={product} />;
}
