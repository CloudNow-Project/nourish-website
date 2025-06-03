import { Product } from "@/components/products/ProductGrid";

// Featured products for the homepage
export const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Strawberry & Carrot Bites",
    description: "Antioxidant-rich soft bites with a fruity twist. Perfect for pups who need a digestion boost.",
    price: 10,
    imageSrc: "/images/products/display-strawberry-and-carrot.png",
    slug: "strawberry-carrot-bites",
  },
  {
    id: "2",
    name: "Pumpkin Crunch Squares",
    description: "Crunchy squares with pumpkin, oats, and cinnamon. Tummy-friendly and tail-wag approved.",
    price: 12,
    imageSrc: "/images/products/display-pumpkind-and-beef.png",
    slug: "pumpkin-crunch-squares",
  },
  {
    id: "3",
    name: "Beef & Beet Boosters",
    description: "Savory beef and beetroot chews that support muscle and energy. No fillers, just goodness.",
    price: 15,
    imageSrc: "/images/products/display-beef-and-beet.png",
    slug: "beef-beet-boosters",
  },
  {
    id: "4",
    name: "Coconut Chia Bites",
    description: "Chewy treats with omega-rich chia and coconut flakes for shiny coats and happy bellies.",
    price: 18,
    imageSrc: "/images/products/display-coconut-and-chia.png",
    slug: "coconut-chia-bites",
  },
  {
    id: "5",
    name: "Blueberry Banana Biscuits",
    description: "Soft-baked treats with blueberries and bananas. Naturally sweet and vitamin-rich nibbles.",
    price: 14,
    imageSrc: "/images/products/display-blueberry-banana.png",
    slug: "blueberry-banana-biscuits",
  },
  {
    id: "6",
    name: "Omega 3 Superstars",
    description: "Star-shaped salmon and spinach treats that support brain, joints, and heart health.",
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