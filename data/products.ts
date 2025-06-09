import { Product } from "@/components/products/ProductGrid";

// Featured products for the homepage
export const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Strawberry and Carrot Digestive Bites",
    description: "Packed with fiber, superfoods, and a fruity twist—ideal for pups needing a digestion-friendly treat",
    price: 10,
    imageSrc: "/images/products/display-strawberry-and-carrot.png",
    slug: "strawberry-carrot-bites",
  },
  {
    id: "2",
    name: "Pumpkin and Beef Healthy Power Bites",
    description: "Boosted with protein, superfoods, and a savory kick—made for pups who play hard and snack smart",
    price: 12,
    imageSrc: "/images/products/display-pumpkind-and-beef.png",
    slug: "pumpkin-crunch-squares",
  },
  {
    id: "3",
    name: "Beef and Beetroot Energy Bites",
    description: "Packed with protein, superfoods, and a savory twist—perfect for pups needing a muscle-building boost",
    price: 15,
    imageSrc: "/images/products/display-beef-and-beet.png",
    slug: "beef-beet-boosters",
  },
  {
    id: "4",
    name: "Coconut and Chia Omega Bites",
    description: "Rich with healthy fats, superfoods, and a tropical twist—designed for pups needing a shiny coat and healthy skin",
    price: 18,
    imageSrc: "/images/products/display-coconut-and-chia.png",
    slug: "coconut-chia-bites",
  },
  {
    id: "5",
    name: "Blueberry and Banana Antioxidant Bites",
    description: "Loaded with vitamins, superfoods, and a fruity sweetness—ideal for pups needing immune system support",
    price: 14,
    imageSrc: "/images/products/display-blueberry-banana.png",
    slug: "blueberry-banana-biscuits",
  },
  {
    id: "6",
    name: "Salmon and Spinach Omega Bites",
    description: "Enriched with omega-3, superfoods, and a nutrient-dense blend—formulated for pups needing brain and joint support",
    price: 16,
    imageSrc: "/images/products/display-omega3.png",
    slug: "omega-3-superstars",
  },
];

// All products for the product catalog page
export const allProducts: Product[] = [
  ...featuredProducts,
  {
    id: "7",
    name: "Apple Cinnamon Biscuits",
    description: "Crunchy biscuits with fresh apples and cinnamon. A delicious way to freshen breath.",
    price: 11,
    imageSrc: "",
    slug: "apple-cinnamon-biscuits",
  },
  {
    id: "8",
    name: "Turkey & Sweet Potato Nibbles",
    description: "Protein-rich turkey and sweet potato nibbles. Perfect for active, energetic dogs.",
    price: 13,
    imageSrc: "",
    slug: "turkey-sweet-potato-nibbles",
  },
  {
    id: "9",
    name: "Peanut Butter Paws",
    description: "Paw-shaped natural peanut butter treats. Protein-rich and helps keep teeth clean.",
    price: 12,
    imageSrc: "",
    slug: "peanut-butter-paws",
  },
];

// Product categories
export const productCategories = [
  { id: "all", name: "All Treats" },
  { id: "crunchy", name: "Crunchy Treats" },
  { id: "soft", name: "Soft Treats" },
  { id: "grain-free", name: "Grain-Free Options" },
  { id: "protein", name: "Protein-Rich" },
  { id: "superfood", name: "Superfood Treats" },
]; 