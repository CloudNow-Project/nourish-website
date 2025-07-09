import { Product } from "@/components/products/ProductGrid";

export interface ExtendedProduct extends Product {
  fullName: string;
  ingredients: string[];
  benefits: {
    name: string;
    description: string;
  }[];
  noArtificials: string[];
  servingGuide: {
    dogSize: string;
    weight: string;
    pieces: string;
  }[];
  storage: string;
  netWeight: string;
  gallery: string[];
  marketplaces: {
    shopee: string;
    tokopedia: string;
  };
}

// Featured products for the homepage
export const featuredProducts: ExtendedProduct[] = [
  {
    id: "1",
    name: "Strawberry & Carrot",
    fullName: "Heyo Superfood Dog Treats - Fibre Support Bites - Strawberry and Carrot",
    description: "Fibre Support Bites with Beetroot Powder & Oatmeal",
    price: 38000,
    imageSrc: "/images/products/strawberry-and-carrot/heyo-strawberry-carrot-00.webp",
    slug: "products/strawberry-and-carrot",
    ingredients: ["Oats", "Peanuts", "Egg", "Pumpkin Seeds", "Carrot", "Strawberry", "Beetroot Powder"],
    benefits: [
      {
        name: "Oats",
        description: "Supports digestion with fiber, vitamins, and minerals while helping regulate blood sugar."
      },
      {
        name: "Peanuts",
        description: "A protein-rich source of healthy fats, vitamin B, and vitamin E for skin, coat, and energy."
      },
      {
        name: "Egg",
        description: "A complete protein packed with essential amino acids, vitamins, and minerals for muscle growth and overall health."
      },
      {
        name: "Pumpkin Seeds",
        description: "Rich in antioxidants, healthy fats, and zinc to boost immunity and promote a healthy coat."
      },
      {
        name: "Carrot",
        description: "High in beta-carotene and vitamin A, great for eye health, skin, and immune function."
      },
      {
        name: "Strawberry",
        description: "Loaded with antioxidants, vitamin C, and fiber to promote a healthy immune system and digestion."
      },
      {
        name: "Beetroot Powder",
        description: "A natural source of fiber, iron, and antioxidants that support heart health and circulation."
      }
    ],
    noArtificials: [
      "Preservatives",
      "Coloring",
      "Flavoring",
      "By-products",
      "Artificial ingredients",
      "Salt & Sugar"
    ],
    servingGuide: [
      { dogSize: "Small Dogs", weight: "5 - 10 kg", pieces: "2 - 4 pieces" },
      { dogSize: "Medium Dogs", weight: "10 - 25 kg", pieces: "4 - 6 pieces" },
      { dogSize: "Large Dogs", weight: "25 - 40 kg", pieces: "6 - 8 pieces" },
      { dogSize: "Giant Dogs", weight: ">40 kg", pieces: "8 - 12 pieces" }
    ],
    storage: "Keep in a cool, dry place or refrigerate for maximum freshness.",
    netWeight: "60g",
    gallery: [
      "/images/products/strawberry-and-carrot/heyo-strawberry-carrot-01.jpeg",
      "/images/products/strawberry-and-carrot/heyo-strawberry-carrot-02.jpeg",
      "/images/products/strawberry-and-carrot/heyo-strawberry-carrot-03.jpeg",
      "/images/products/strawberry-and-carrot/heyo-strawberry-carrot-04.jpeg",
      "/images/products/strawberry-and-carrot/heyo-strawberry-carrot-05.jpeg"
    ],
    marketplaces: {
      shopee: "https://shopee.com",
      tokopedia: "https://tokopedia.com"
    }
  },
  {
    id: "2",
    name: "Pumpkin & Beef",
    fullName: "Heyo Superfood Dog Treats - Healthy Power Bites - Pumpkin and Beef",
    description: "Pumpkin & Beef with Flax Seeds & Spirulina",
    price: 38000,
    imageSrc: "/images/products/pumpkin-and-beef/heyo-pumpkin-beef-00.webp",
    slug: "products/pumpkin-and-beef",
    ingredients: ["Rice Flour", "Flax Seeds", "Pumpkin", "Ground Beef", "Spirulina", "Ginger Powder", "Sweet Potato", "Chia Seeds"],
    benefits: [
      {
        name: "Rice Flour",
        description: "A gluten-free, easily digestible carbohydrate that provides energy without irritating sensitive stomachs."
      },
      {
        name: "Flax Seeds",
        description: "Rich in omega-3 fatty acids for healthy skin and a shiny coat, plus fiber for digestion."
      },
      {
        name: "Pumpkin",
        description: "High in fiber, great for digestion, and supports gut health by preventing constipation and diarrhea."
      },
      {
        name: "Ground Beef",
        description: "A high-quality protein source packed with essential amino acids, iron, and B vitamins for muscle growth and energy."
      },
      {
        name: "Spirulina",
        description: "A superfood loaded with antioxidants, vitamins, and minerals that boost the immune system and support detoxification."
      },
      {
        name: "Ginger Powder",
        description: "Helps reduce inflammation, aids digestion, and can soothe nausea or an upset stomach."
      },
      {
        name: "Sweet Potato",
        description: "A nutrient-dense carbohydrate rich in fiber, vitamin A, and antioxidants for overall health and sustained energy."
      },
      {
        name: "Chia Seeds",
        description: "Packed with omega-3s, fiber, and protein to promote healthy joints, digestion, and sustained energy."
      }
    ],
    noArtificials: [
      "Preservatives",
      "Coloring",
      "Flavoring",
      "By-products",
      "Artificial ingredients",
      "Salt & Sugar"
    ],
    servingGuide: [
      { dogSize: "Small Dogs", weight: "5 - 10 kg", pieces: "5 - 8 pieces" },
      { dogSize: "Medium Dogs", weight: "10 - 25 kg", pieces: "9 - 14 pieces" },
      { dogSize: "Large Dogs", weight: "25 - 40 kg", pieces: "15 - 20 pieces" },
      { dogSize: "Giant Dogs", weight: ">40 kg", pieces: "21 - 30 pieces" }
    ],
    storage: "Keep in a cool, dry place or refrigerate for maximum freshness.",
    netWeight: "60g",
    gallery: [
      "/images/products/pumpkin-and-beef/heyo-pumpkin-beef-01.jpeg",
      "/images/products/pumpkin-and-beef/heyo-pumpkin-beef-02.jpeg",
      "/images/products/pumpkin-and-beef/heyo-pumpkin-beef-03.jpeg",
      "/images/products/pumpkin-and-beef/heyo-pumpkin-beef-04.jpeg",
      "/images/products/pumpkin-and-beef/heyo-pumpkin-beef-05.jpeg"
    ],
    marketplaces: {
      shopee: "https://shopee.com",
      tokopedia: "https://tokopedia.com"
    }
  },
  {
    id: "3",
    name: "Coconut Oil & Basil",
    fullName: "Heyo Superfood Dog Treats - Better Breath Bites - Coconut Oil and Basil",
    description: "Coconut Oil & Basil with Honey & Chia Seeds",
    price: 38000,
    imageSrc: "/images/products/coconut-and-basil/heyo-coconut-basil-00.webp",
    slug: "products/coconut-oil-and-basil",
    ingredients: ["Oats", "Pumpkin", "Coconut Oil", "Honey", "Chia Seeds", "Spirulina", "Dried Basil", "Dried Parsley"],
    benefits: [
      {
        name: "Oats",
        description: "Supports digestion with fiber, vitamins, and minerals while helping regulate blood sugar."
      },
      {
        name: "Pumpkin",
        description: "High in fiber, great for digestion, and supports gut health by preventing constipation and diarrhea."
      },
      {
        name: "Coconut Oil",
        description: "A source of healthy fats that promote skin and coat health."
      },
      {
        name: "Honey",
        description: "A natural sweetener with trace antioxidants and antibacterial properties."
      },
      {
        name: "Chia Seeds",
        description: "High in omega-3s, fiber, and protein to support joints, digestion, and energy."
      },
      {
        name: "Spirulina",
        description: "A superfood loaded with antioxidants, vitamins, and minerals that boost the immune system and support detoxification."
      },
      {
        name: "Basil & Parsley",
        description: "Fragrant herbs with natural anti-inflammatory properties that also help freshen breath."
      }
    ],
    noArtificials: [
      "Preservatives",
      "Coloring",
      "Flavoring",
      "By-products",
      "Artificial ingredients",
      "Salt & Sugar"
    ],
    servingGuide: [
      { dogSize: "Toy Dogs", weight: "<5 kg", pieces: "½ - 2 pieces" },
      { dogSize: "Small Dogs", weight: "5 - 10 kg", pieces: "1 - 2 pieces" },
      { dogSize: "Medium Dogs", weight: "10 - 25 kg", pieces: "2 - 3 pieces" },
      { dogSize: "Large Dogs", weight: "25 - 40 kg", pieces: "3 - 4 pieces" },
      { dogSize: "Giant Dogs", weight: ">40 kg", pieces: "4 - 5 pieces" }
    ],
    storage: "Keep in a cool, dry place or refrigerate for maximum freshness.",
    netWeight: "15g",
    gallery: [
      "/images/products/coconut-and-basil/heyo-coconut-basil-01.webp",
      "/images/products/coconut-and-basil/heyo-coconut-basil-02.webp",
      "/images/products/coconut-and-basil/heyo-coconut-basil-03.webp",
      "/images/products/coconut-and-basil/heyo-coconut-basil-04.webp",
    ],
    marketplaces: {
      shopee: "https://shopee.com",
      tokopedia: "https://tokopedia.com"
    }
  }
];

// All products for the product catalog page
export const allProducts: ExtendedProduct[] = [
  ...featuredProducts,
];

// Product categories
export const productCategories = [
  { id: "all", name: "All Treats" },
  { id: "grain-free", name: "Grain-Free" },
  { id: "protein", name: "Protein-Rich" },
  { id: "superfood", name: "Superfood" },
  { id: "immunity", name: "Immunity Support" },
  { id: "digestion", name: "Digestive Health" },
]; 