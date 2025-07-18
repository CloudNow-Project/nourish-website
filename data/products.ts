import { Product } from "@/components/products/ProductGrid";
import { getProductImages, getProductCardImage, getProductMainImage } from "@/lib/product-utils";

// Base product interface with common properties
interface BaseProduct extends Product {
  productColor: string;
}

// Regular product with full details
export interface ExtendedProduct extends BaseProduct {
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
  mainImage?: string;
}

// Mini pack product with simplified details
export interface MiniPackProduct extends BaseProduct {
  isMiniPack: true;
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
  marketplaces: {
    shopee: string;
    tokopedia: string;
  };
  gallery: string[];
  mainImage?: string;
}

// Topper product with simplified details
export interface TopperProduct extends BaseProduct {
  isTopper: true;
}

// Bundle product with bundle-specific details
export interface BundleProduct extends BaseProduct {
  isBundle: true;
  fullName: string;
  includes: string[];
  variants: string[];
  marketplaces?: {
    shopee?: string;
    tokopedia?: string;
  };
}

// Helper function to create a product with automatic image handling
function createProduct(
  id: string,
  name: string,
  fullName: string,
  description: string,
  price: number,
  slug: string,
  ingredients: string[],
  benefits: ExtendedProduct['benefits'],
  noArtificials: string[],
  servingGuide: ExtendedProduct['servingGuide'],
  storage: string,
  netWeight: string,
  marketplaces: ExtendedProduct['marketplaces'],
  productColor: string // Add product color parameter
): ExtendedProduct {
  // Extract the last part of the slug for the image directory name
  const imageSlug = slug.split('/').pop() || slug;
  
  return {
    id,
    name,
    fullName,
    description,
    price,
    imageSrc: getProductCardImage(imageSlug) || '',
    mainImage: getProductMainImage(imageSlug),
    slug,
    ingredients,
    benefits,
    noArtificials,
    servingGuide,
    storage,
    netWeight,
    gallery: getProductImages(imageSlug),
    marketplaces,
    productColor // Add product color to return object
  };
}

// Regular products (previously featured products)
export const regularProducts: ExtendedProduct[] = [
  createProduct(
    "1",
    "Strawberry & Carrot",
    "Heyo Superfood Dog Treats - Fibre Support Bites - Strawberry and Carrot",
    "Give your dog the best with Heyo Superfood Dog Treats! Crafted with love, allergy-friendly, and boosted with powerful superfoods to support digestion, immunity, and overall health. Our Fibre Support Bites combine the natural sweetness of strawberries with the goodness of carrots, creating a treat that's both delicious and nourishing.",
    38000,
    "strawberry-and-carrot",
    ["Oats", "Peanuts", "Egg", "Pumpkin Seeds", "Carrot", "Strawberry", "Beetroot Powder"],
    [
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
    [
      "Preservatives",
      "Coloring",
      "Flavoring",
      "By-products",
      "Artificial ingredients",
      "Salt & Sugar"
    ],
    [
      { dogSize: "Small Dogs", weight: "5 - 10 kg", pieces: "2 - 4 pieces" },
      { dogSize: "Medium Dogs", weight: "10 - 25 kg", pieces: "4 - 6 pieces" },
      { dogSize: "Large Dogs", weight: "25 - 40 kg", pieces: "6 - 8 pieces" },
      { dogSize: "Giant Dogs", weight: ">40 kg", pieces: "8 - 12 pieces" }
    ],
    "Keep in a cool, dry place or refrigerate for maximum freshness.",
    "60g",
    {
      shopee: "https://shopee.co.id/Heyo-Superfood-Dog-Treats-Fibre-Support-Bites-Strawberry-and-Carrot-i.1363197955.27579742548",
      tokopedia: "https://www.tokopedia.com/heyo-superfood-dog-treats/heyo-superfood-dog-treats-fibre-support-bites-strawberry-and-carrot-1731007996702262944"
    },
    "#DFA194" // Strawberry pink color
  ),
  createProduct(
    "2",
    "Pumpkin & Beef",
    "Heyo Superfood Dog Treats - Healthy Power Bites - Pumpkin and Beef",
    "Give your dog a natural, nutrient-packed treat that supports their health from the inside out! Our Healthy Power Bites are crafted with love, allergy-friendly, and boosted with superfoods to support digestion, immunity, and overall well-being. Made with real pumpkin and beef, these treats are packed with wholesome ingredients your dog will love.",
    38000,
    "pumpkin-and-beef",
    ["Rice Flour", "Flax Seeds", "Pumpkin", "Ground Beef", "Spirulina", "Ginger Powder", "Sweet Potato", "Chia Seeds"],
    [
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
    [
      "Preservatives",
      "Coloring",
      "Flavoring",
      "By-products",
      "Artificial ingredients",
      "Salt & Sugar"
    ],
    [
      { dogSize: "Small Dogs", weight: "5 - 10 kg", pieces: "5 - 8 pieces" },
      { dogSize: "Medium Dogs", weight: "10 - 25 kg", pieces: "9 - 14 pieces" },
      { dogSize: "Large Dogs", weight: "25 - 40 kg", pieces: "15 - 20 pieces" },
      { dogSize: "Giant Dogs", weight: ">40 kg", pieces: "21 - 30 pieces" }
    ],
    "Keep in a cool, dry place or refrigerate for maximum freshness.",
    "60g",
    {
      shopee: "https://shopee.co.id/Heyo-Superfood-Dog-Treats-Healthy-Power-Bites-Pumpkin-and-Beef-i.1363197955.26230237485",
      tokopedia: "https://www.tokopedia.com/heyo-superfood-dog-treats/heyo-superfood-dog-treats-healthy-power-bites-pumpkin-and-beef-1731046003767281312"
    },
    "#F6b656" // Pumpkin orange color
  ),
  createProduct(
    "3",
    "Coconut Oil & Basil",
    "Heyo Superfood Dog Treats - Better Breath Bites - Coconut Oil and Basil",
    "Give your dog a natural, nutrient-packed treat that supports their health from the inside out! Our Better Breath Bites are crafted with love, allergy-friendly, and boosted with superfoods to freshen breath naturally while supporting overall well-being. Made with coconut oil and fresh basil, these treats are both delicious and functional.",
    38000,
    "coconut-oil-and-basil",
    ["Oats", "Pumpkin", "Coconut Oil", "Honey", "Chia Seeds", "Spirulina", "Dried Basil", "Dried Parsley"],
    [
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
    [
      "Preservatives",
      "Coloring",
      "Flavoring",
      "By-products",
      "Artificial ingredients",
      "Salt & Sugar"
    ],
    [
      { dogSize: "Toy Dogs", weight: "<5 kg", pieces: "½ - 2 pieces" },
      { dogSize: "Small Dogs", weight: "5 - 10 kg", pieces: "1 - 2 pieces" },
      { dogSize: "Medium Dogs", weight: "10 - 25 kg", pieces: "2 - 3 pieces" },
      { dogSize: "Large Dogs", weight: "25 - 40 kg", pieces: "3 - 4 pieces" },
      { dogSize: "Giant Dogs", weight: ">40 kg", pieces: "4 - 5 pieces" }
    ],
    "Keep in a cool, dry place or refrigerate for maximum freshness.",
    "15g",
    {
      shopee: "https://shopee.co.id/Heyo-Superfood-Dog-Treats-Better-Breath-Bites-Coconut-Oil-and-Basil-i.1363197955.41956669262",
      tokopedia: "https://www.tokopedia.com/heyo-superfood-dog-treats/heyo-superfood-dog-treats-better-breath-bites-coconut-oil-and-basil-1731810397177808544"
    },
    "#8DC3A7" // Mint green color
  )
];

// Mini pack products
export const miniPackProducts: MiniPackProduct[] = [
  
  {
    id: "mini-1",
    name: "Mini Pack Strawberry and Carrot",
    description: "Healthy Digestive Bites with Beetroot Powder & Oatmeal",
    price: 15000,
    imageSrc: "/images/products/mini-pack-strawberry-and-carrot/heyo-mini-pack-strawberry-and-carrot-card.webp",
    slug: "mini-pack-strawberry-and-carrot",
    productColor: "#DFA194",
    isMiniPack: true,
    ingredients: ["Oats", "Peanuts", "Egg", "Pumpkin Seeds", "Carrot", "Strawberry", "Beetroot Powder", "Lots of Love"],
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
      { dogSize: "Toy Dogs", weight: "<5 kg", pieces: "1 - 2 pieces" },
      { dogSize: "Small Dogs", weight: "5 - 10 kg", pieces: "2 - 4 pieces" },
      { dogSize: "Medium Dogs", weight: "10 - 25 kg", pieces: "4 - 6 pieces" },
      { dogSize: "Large Dogs", weight: "25 - 40 kg", pieces: "6 - 8 pieces" },
      { dogSize: "Giant Dogs", weight: ">40 kg", pieces: "8 - 12 pieces" }
    ],
    storage: "Keep in a cool, dry place or refrigerate for maximum freshness.",
    netWeight: "15g",
    marketplaces: {
      shopee: "https://shopee.co.id/MINI-PACK-Heyo-Superfood-Dog-Treats-Fibre-Support-Bites-Strawberry-and-Carrot-i.1363197955.42054633895",
      tokopedia: "https://www.tokopedia.com/heyo-superfood-dog-treats"
    },
    gallery: getProductImages("mini-pack-strawberry-and-carrot"),
    mainImage: getProductMainImage("mini-pack-strawberry-and-carrot")
  },
  {
    id: "mini-2",
    name: "Mini Pack Pumpkin and Beef",
    description: "Pumpkin & Beef with Flax Seeds & Spirulina",
    price: 15000,
    imageSrc: "/images/products/mini-pack-pumpkin-and-beef/heyo-mini-pack-pumpkin-and-beef-card.webp",
    slug: "mini-pack-pumpkin-and-beef",
    productColor: "#E4A853",
    isMiniPack: true,
    ingredients: ["Rice Flour", "Flax Seeds", "Pumpkin", "Ground Beef", "Spirulina", "Ginger Powder", "Sweet Potato", "Chia Seeds", "Lots of Love"],
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
      { dogSize: "Toy Dogs", weight: "<5 kg", pieces: "2 - 4 pieces" },
      { dogSize: "Small Dogs", weight: "5 - 10 kg", pieces: "5 - 8 pieces" },
      { dogSize: "Medium Dogs", weight: "10 - 25 kg", pieces: "9 - 14 pieces" },
      { dogSize: "Large Dogs", weight: "25 - 40 kg", pieces: "15 - 20 pieces" },
      { dogSize: "Giant Dogs", weight: ">40 kg", pieces: "21 - 30 pieces" }
    ],
    storage: "Keep in a cool, dry place or refrigerate for maximum freshness.",
    netWeight: "15g",
    marketplaces: {
      shopee: "https://shopee.co.id/MINI-PACK-Heyo-Superfood-Dog-Treats-Healthy-Power-Bites-Pumpkin-and-Beef-i.1363197955.42104633895",
      tokopedia: "https://www.tokopedia.com/heyo-superfood-dog-treats/mini-pack-heyo-superfood-dog-treats-healthy-power-bites-pumpkin-and-beef-1731685969130325664"
    },
    gallery: getProductImages("mini-pack-pumpkin-and-beef"),
    mainImage: getProductMainImage("mini-pack-pumpkin-and-beef")
  },
  {
    id: "mini-3",
    name: "Mini Pack Coconut Oil and Basil",
    description: "Coconut Oil & Basil with Honey & Chia Seeds",
    price: 15000,
    imageSrc: "/images/products/mini-pack-coconut-oil-and-basil/heyo-mini-pack-coconut-oil-and-basil-card.webp",
    slug: "mini-pack-coconut-oil-and-basil",
    productColor: "#8DC3A7",
    isMiniPack: true,
    ingredients: ["Oats", "Pumpkin", "Coconut Oil", "Honey", "Chia Seeds", "Spirulina", "Dried Basil", "Dried Parsley", "Lots of Love"],
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
    marketplaces: {
      shopee: "https://shopee.co.id/MINI-PACK-Heyo-Superfood-Dog-Treats-Better-Breath-Bites-Coconut-Oil-and-Basil-i.1363197955.41456680982",
      tokopedia: "https://www.tokopedia.com/heyo-superfood-dog-treats/mini-pack-heyo-superfood-dog-treats-better-breath-bites-coconut-oil-and-basil-1731810457579325088"
    },
    gallery: getProductImages("mini-pack-coconut-oil-and-basil"),
    mainImage: getProductMainImage("mini-pack-coconut-oil-and-basil")
  },
];

export const topperProducts: TopperProduct[] = [
  {
    id: "shiny-coat-sprinkle",
    name: "Shiny Coat Sprinkle",
    description: "Omega 3 and 6 Boost with Bee Pollen and Chia Seeds",
    price: 38000,
    imageSrc: "/images/products/shiny-coat-sprinkle/heyo-shiny-coat-sprinkle-card.webp",
    slug: "shiny-coat-sprinkle",
    productColor: "#A8BECD",
    isTopper: true
  }
];

// Bundle products
export const bundleProducts: BundleProduct[] = [
  {
    id: "bundle-1",
    name: "Little and Large Bundle",
    fullName: "Heyo Little and Large Bundle - FREE 2 Sample Packs + 1 Full Size Pack + 1 Mini Size Pack",
    description: "FREE SAMPLES! Get more bark for your buck with our curated bundles!",
    price: 48000,
    imageSrc: "/images/products/little-and-large-bundle/heyo-little-and-large-bundle-card.webp",
    slug: "little-and-large-bundle",
    productColor: "#A2501B",
    isBundle: true,
    includes: [
      "1 full size pack",
      "1 mini size pack",
      "2 free sample packs"
    ],
    variants: [
      "Breath Refresher Bites – Coconut Oil & Basil",
      "Healthy Power Bites – Pumpkin & Beef",
      "Fiber Support Bites – Strawberry & Carrot"
    ],
    marketplaces: {
      shopee: "https://shopee.co.id/Heyo-Little-and-Large-Bundle-FREE-2-Sample-Packs-1-Full-Size-Pack-1-Mini-Size-Pack-i.1363197955.42757000565",
      tokopedia: "https://www.tokopedia.com/heyo-superfood-dog-treats/heyo-little-and-large-bundle-free-2-sample-packs-1-full-size-pack-1-mini-size-pack-1731827904845547168"
    }
  },
  {
    id: "bundle-2",
    name: "The Duo Bundle",
    fullName: "Heyo The Duo Bundle - FREE 3 Sample Packs + 2 Full Size Packs",
    description: "FREE SAMPLES! Get more bark for your buck with our curated bundles!",
    price: 69000,
    imageSrc: "/images/products/duo-bundle/heyo-duo-bundle-card.webp",
    slug: "duo-bundle",
    productColor: "#E67E22",
    isBundle: true,
    includes: [
      "2 full size packs",
      "3 free sample packs"
    ],
    variants: [
      "Breath Refresher Bites – Coconut Oil & Basil",
      "Healthy Power Bites – Pumpkin & Beef",
      "Fiber Support Bites – Strawberry & Carrot"
    ],
    marketplaces: {
      shopee: "https://shopee.co.id/Heyo-The-Duo-Bundle-FREE-3-Sample-Packs-2-Full-Size-Packs-i.1363197955.42056991700",
      tokopedia: "https://www.tokopedia.com/heyo-superfood-dog-treats/heyo-the-duo-bundle-free-3-sample-packs-2-full-size-packs-1731821061611751072"
    }
  }
];

// Update allProducts to include new categories
export const allProducts = [...regularProducts, ...miniPackProducts, ...topperProducts, ...bundleProducts];

// Product categories
export const productCategories = [
  { id: "all", name: "All Treats" },
  { id: "grain-free", name: "Grain-Free" },
  { id: "protein", name: "Protein-Rich" },
  { id: "superfood", name: "Superfood" },
  { id: "immunity", name: "Immunity Support" },
  { id: "digestion", name: "Digestive Health" },
]; 