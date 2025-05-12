import { Product } from "@/components/products/ProductGrid";

// Featured products for the homepage
export const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Strawberry & Carrot Bites",
    description: "Packed with antioxidants, fiber, and superfoods – these soft, waffle-style bites are perfect for pups who need a digestion boost with a fruity twist.",
    price: 10,
    imageSrc: "",
    slug: "strawberry-carrot-bites",
  },
  {
    id: "2",
    name: "Pumpkin Crunch Squares",
    description: "Made with pumpkin, oats, and a dash of cinnamon, these crunchy squares are tummy-friendly and tail-wag approved.",
    price: 12,
    imageSrc: "",
    slug: "pumpkin-crunch-squares",
  },
  {
    id: "3",
    name: "Beef & Beet Boosters",
    description: "Savory beef mixed with beetroot for a nutrient-packed chew that supports muscle and energy – no fillers, just goodness.",
    price: 15,
    imageSrc: "",
    slug: "beef-beet-boosters",
  },
  {
    id: "4",
    name: "Coconut Chia Bites",
    description: "Light, chewy, and packed with omega-rich chia and coconut flakes – ideal for shiny coats and happy bellies.",
    price: 18,
    imageSrc: "",
    slug: "coconut-chia-bites",
  },
  {
    id: "5",
    name: "Blueberry Banana Biscuits",
    description: "These soft-baked treats combine blueberries and bananas for a naturally sweet, vitamin-rich nibble your pup will love.",
    price: 14,
    imageSrc: "",
    slug: "blueberry-banana-biscuits",
  },
  {
    id: "6",
    name: "Omega 3 Superstars",
    description: "Salmon and spinach in a star-shaped treat designed to support brain, joints, and heart health – especially for senior dogs.",
    price: 16,
    imageSrc: "",
    slug: "omega-3-superstars",
  },
];

// All products for the product catalog page
export const allProducts: Product[] = [
  ...featuredProducts,
  {
    id: "7",
    name: "Apple Cinnamon Biscuits",
    description: "Crunchy biscuits made with fresh apples and a hint of cinnamon – a delicious way to freshen breath naturally.",
    price: 11,
    imageSrc: "",
    slug: "apple-cinnamon-biscuits",
  },
  {
    id: "8",
    name: "Turkey & Sweet Potato Nibbles",
    description: "Protein-packed turkey combined with sweet potato makes these chewy nibbles perfect for active dogs.",
    price: 13,
    imageSrc: "",
    slug: "turkey-sweet-potato-nibbles",
  },
  {
    id: "9",
    name: "Peanut Butter Paws",
    description: "Paw-shaped treats made with natural peanut butter – a protein-rich favorite that helps keep teeth clean.",
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