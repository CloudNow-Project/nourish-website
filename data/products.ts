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
    imageSrc: "/images/products/display-strawberry-and-carrot.png",
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
    imageSrc: "/images/products/display-pumpkind-and-beef.png",
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
    name: "Beef & Beetroot",
    fullName: "Heyo Superfood Dog Treats - Antioxidant Support Bites - Beef & Beetroot",
    description: "Antioxidant-rich formula with high-quality protein to support immune health",
    price: 38000,
    imageSrc: "/images/products/display-beef-and-beet.png",
    slug: "products/beef-and-beetroot",
    ingredients: ["Oats", "Peanuts", "Egg", "Beef", "Beetroot Powder", "Pumpkin Seeds"],
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
        name: "Beef",
        description: "High-quality protein source rich in iron and essential nutrients for muscle development and energy."
      },
      {
        name: "Beetroot Powder",
        description: "Natural source of fiber, iron, and antioxidants that support heart health and circulation."
      },
      {
        name: "Pumpkin Seeds",
        description: "Rich in antioxidants, healthy fats, and zinc to boost immunity and promote a healthy coat."
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
      "/images/products/beef-and-beet/heyo-beef-beet-01.jpeg",
      "/images/products/beef-and-beet/heyo-beef-beet-02.jpeg",
      "/images/products/beef-and-beet/heyo-beef-beet-03.jpeg",
      "/images/products/beef-and-beet/heyo-beef-beet-04.jpeg",
      "/images/products/beef-and-beet/heyo-beef-beet-05.jpeg"
    ],
    marketplaces: {
      shopee: "https://shopee.com",
      tokopedia: "https://tokopedia.com"
    }
  },
  {
    id: "4",
    name: "Coconut & Chia",
    fullName: "Heyo Superfood Dog Treats - Omega Support Bites - Coconut & Chia",
    description: "Omega-rich superfood blend for a shiny coat and healthy digestion",
    price: 38000,
    imageSrc: "/images/products/display-coconut-and-chia.png",
    slug: "products/coconut-and-chia",
    ingredients: ["Oats", "Coconut", "Chia Seeds", "Egg", "Pumpkin Seeds", "Flax Seeds"],
    benefits: [
      {
        name: "Oats",
        description: "Supports digestion with fiber, vitamins, and minerals while helping regulate blood sugar."
      },
      {
        name: "Coconut",
        description: "Rich in healthy fats and medium-chain triglycerides for energy and coat health."
      },
      {
        name: "Chia Seeds",
        description: "Packed with omega-3s, fiber, and protein for joints, energy, and digestive health."
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
        name: "Flax Seeds",
        description: "Excellent source of omega-3s and fiber for coat health and digestion."
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
      "/images/products/coconut-and-chia/heyo-coconut-chia-01.jpeg",
      "/images/products/coconut-and-chia/heyo-coconut-chia-02.jpeg",
      "/images/products/coconut-and-chia/heyo-coconut-chia-03.jpeg",
      "/images/products/coconut-and-chia/heyo-coconut-chia-04.jpeg",
      "/images/products/coconut-and-chia/heyo-coconut-chia-05.jpeg"
    ],
    marketplaces: {
      shopee: "https://shopee.com",
      tokopedia: "https://tokopedia.com"
    }
  },
  {
    id: "5",
    name: "Blueberry & Banana",
    fullName: "Heyo Superfood Dog Treats - Antioxidant Support Bites - Blueberry & Banana",
    description: "Antioxidant-packed treats with natural sweetness for immune support",
    price: 38000,
    imageSrc: "/images/products/display-blueberry-banana.png",
    slug: "products/blueberry-and-banana",
    ingredients: ["Oats", "Blueberries", "Banana", "Egg", "Pumpkin Seeds", "Flax Seeds"],
    benefits: [
      {
        name: "Oats",
        description: "Supports digestion with fiber, vitamins, and minerals while helping regulate blood sugar."
      },
      {
        name: "Blueberries",
        description: "Rich in antioxidants and vitamin C for immune support and brain health."
      },
      {
        name: "Banana",
        description: "Natural source of potassium and vitamin B6 for energy and muscle function."
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
        name: "Flax Seeds",
        description: "Excellent source of omega-3s and fiber for coat health and digestion."
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
      "/images/products/blueberry-and-banana/heyo-blueberry-banana-01.jpeg",
      "/images/products/blueberry-and-banana/heyo-blueberry-banana-02.jpeg",
      "/images/products/blueberry-and-banana/heyo-blueberry-banana-03.jpeg",
      "/images/products/blueberry-and-banana/heyo-blueberry-banana-04.jpeg",
      "/images/products/blueberry-and-banana/heyo-blueberry-banana-05.jpeg"
    ],
    marketplaces: {
      shopee: "https://shopee.com",
      tokopedia: "https://tokopedia.com"
    }
  },
  {
    id: "6",
    name: "Omega-3 Support",
    fullName: "Heyo Superfood Dog Treats - Omega-3 Support Bites",
    description: "Essential fatty acids blend for brain health and joint support",
    price: 38000,
    imageSrc: "/images/products/display-omega3.png",
    slug: "products/omega-3-support",
    ingredients: ["Oats", "Salmon", "Chia Seeds", "Flax Seeds", "Egg", "Pumpkin Seeds"],
    benefits: [
      {
        name: "Oats",
        description: "Supports digestion with fiber, vitamins, and minerals while helping regulate blood sugar."
      },
      {
        name: "Salmon",
        description: "Rich in omega-3 fatty acids for brain health, joint function, and coat shine."
      },
      {
        name: "Chia Seeds",
        description: "Packed with omega-3s, fiber, and protein for joints, energy, and digestive health."
      },
      {
        name: "Flax Seeds",
        description: "Excellent source of omega-3s and fiber for coat health and digestion."
      },
      {
        name: "Egg",
        description: "A complete protein packed with essential amino acids, vitamins, and minerals for muscle growth and overall health."
      },
      {
        name: "Pumpkin Seeds",
        description: "Rich in antioxidants, healthy fats, and zinc to boost immunity and promote a healthy coat."
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
      "/images/products/omega-3-support/heyo-omega3-01.jpeg",
      "/images/products/omega-3-support/heyo-omega3-02.jpeg",
      "/images/products/omega-3-support/heyo-omega3-03.jpeg",
      "/images/products/omega-3-support/heyo-omega3-04.jpeg",
      "/images/products/omega-3-support/heyo-omega3-05.jpeg"
    ],
    marketplaces: {
      shopee: "https://shopee.com",
      tokopedia: "https://tokopedia.com"
    }
  },
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