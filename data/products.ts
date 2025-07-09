import { Product } from "@/components/products/ProductGrid";
import { getProductImages, getProductCardImage, getProductMainImage } from "@/lib/product-utils";

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
  mainImage?: string; // Add mainImage for product detail pages
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
  marketplaces: ExtendedProduct['marketplaces']
): ExtendedProduct {
  // Extract the last part of the slug for the image directory name
  const imageSlug = slug.split('/').pop() || slug;
  
  return {
    id,
    name,
    fullName,
    description,
    price,
    imageSrc: getProductCardImage(imageSlug) || '', // Use -card image for product cards
    mainImage: getProductMainImage(imageSlug), // Use -00 image for main product image
    slug,
    ingredients,
    benefits,
    noArtificials,
    servingGuide,
    storage,
    netWeight,
    gallery: getProductImages(imageSlug), // This now excludes -card images
    marketplaces
  };
}

// Featured products for the homepage
export const featuredProducts: ExtendedProduct[] = [
  createProduct(
    "1",
    "Strawberry & Carrot",
    "Heyo Superfood Dog Treats - Fibre Support Bites - Strawberry and Carrot",
    "Fibre Support Bites with Beetroot Powder & Oatmeal",
    38000,
    "products/strawberry-and-carrot",
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
    }
  ),
  createProduct(
    "2",
    "Pumpkin & Beef",
    "Heyo Superfood Dog Treats - Healthy Power Bites - Pumpkin and Beef",
    "Pumpkin & Beef with Flax Seeds & Spirulina",
    38000,
    "products/pumpkin-and-beef",
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
    }
  ),
  createProduct(
    "3",
    "Coconut Oil & Basil",
    "Heyo Superfood Dog Treats - Better Breath Bites - Coconut Oil and Basil",
    "Coconut Oil & Basil with Honey & Chia Seeds",
    38000,
    "products/coconut-oil-and-basil",
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
    }
  )
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