// Features for "Why Paw-rents Choose Nourish" section
export const features = [
  {
    id: "superfood",
    title: "Superfood Packed",
    description: "Nutrient-rich ingredients carefully selected to support your dog's health and vitality.",
    iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    color: "teal",
  },
  {
    id: "vet-approved",
    title: "Vet-Approved Recipes",
    description: "Formulated with input from veterinary nutritionists to ensure optimal health benefits.",
    iconPath: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    color: "coral",
  },
  {
    id: "sensitive-friendly",
    title: "Sensitive-Friendly",
    description: "Gentle on tummies with allergen-conscious options for pups with sensitive systems.",
    iconPath: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    color: "navy",
  },
];

// Gallery section data
export const gallerySection = {
  heading: "Happy Tails",
  subheading: "See our furry friends enjoying their favorite treats!",
  images: [
    { id: "1", src: "", alt: "Happy dog enjoying Nourish treats" },
    { id: "2", src: "", alt: "Playful puppy with Nourish biscuit" },
    { id: "3", src: "", alt: "Dog owner giving treats to pet" },
    { id: "4", src: "", alt: "Excited dog waiting for treat" },
    { id: "5", src: "", alt: "Golden retriever with paw-some treat" },
    { id: "6", src: "", alt: "Small dog with big treat" },
    { id: "7", src: "", alt: "Dog duo sharing treats" },
  ],
};

// CTA section data
export const ctaSection = {
  heading: "Snack Time Starts Here",
  description: "Order via WhatsApp or your favorite marketplace and spoil your pup with treats that are as nutritious as they are drool-worthy.",
  image: "",
  primaryButton: {
    text: "Chat",
    url: "https://wa.me/yourwhatsappnumber",
  },
  secondaryButton: {
    text: "Shop",
    url: "/treats",
  },
};

// Blog section data
export const blogSection = {
  heading: "Tales & Tips for Paw-rents",
  subheading: "Explore tips, insights, and wellness guides for your furry family member.",
  viewAllLink: "/blog",
  categories: [
    { id: "nutrition", name: "Nutrition" },
    { id: "care", name: "Care" },
    { id: "wellness", name: "Wellness" },
  ],
  posts: [
    {
      id: "1",
      title: "Top Tips for Healthy Dogs",
      excerpt: "Discover essential tips to keep your dog healthy and happy.",
      category: "nutrition",
      author: "Jane Doe",
      date: "13 Jan 2023",
      readTime: "3 min read",
      imageSrc: "",
      slug: "top-tips-for-healthy-dogs",
    },
    {
      id: "2",
      title: "Understanding Your Dog's Dietary Needs",
      excerpt: "Learn how to meet your dog's nutritional requirements effectively.",
      category: "care",
      author: "John Smith",
      date: "15 Feb 2023",
      readTime: "4 min read",
      imageSrc: "",
      slug: "understanding-dogs-dietary-needs",
    },
    {
      id: "3",
      title: "The Benefits of Regular Exercise for Dogs",
      excerpt: "Find out why exercise is crucial for your dog's health.",
      category: "wellness",
      author: "Emily White",
      date: "20 Mar 2023",
      readTime: "3 min read", 
      imageSrc: "",
      slug: "benefits-of-regular-exercise-for-dogs",
    },
  ],
};

// Testimonials section data
export const testimonials = {
  heading: "What Paw-rents Say",
  subheading: "Healthy pups, happy paw-rents — see what they're barking about!",
  reviews: [
    {
      id: "1",
      text: "Nourish treats transformed my dog's energy levels!",
      author: "Emily Johnson",
      title: "Pet Owner, Dog Lover",
      rating: 5,
      imageSrc: "", // Placeholder for now
    },
    {
      id: "2",
      text: "My pup can't get enough of these treats!",
      author: "Michael Smith",
      title: "Dog Trainer, Canine Academy",
      rating: 5,
      imageSrc: "", // Placeholder for now
    },
    {
      id: "3",
      text: "The best decision for my dog's diet!",
      author: "Sarah Lee",
      title: "Veterinarian, Pet Care",
      rating: 5,
      imageSrc: "", // Placeholder for now
    },
  ],
};

// Stats section data
export const statsSection = {
  heading: "Why Our Treats Are Paw-sitively Amazing",
  subheading: "Join the pack of satisfied pups! Our superfood treats are loved by dogs and their owners alike.",
  ctaText: "Paw-some Treats",
  ctaUrl: "/treats",
  stats: [
    {
      value: "95%",
      label: "Happy dogs after trying our treats",
    },
    {
      value: "10,000+",
      label: "Treats sold each month",
    },
    {
      value: "50%",
      label: "More nutrients than regular treats",
    },
    {
      value: "100%",
      label: "Natural ingredients, no fillers",
    },
  ],
};

// Hero section content
export const heroContent = {
  heading: {
    mainText: "Wholesome Treats",
    highlightedText: "Happier Tails"
  },
  subheading: "Crafted with love and powered by superfoods – give your dog the goodness they deserve.",
  primaryCta: {
    text: "Order on Shopee",
    url: "https://shopee.com/nourish"
  },
  secondaryCta: {
    text: "Order on Tokopedia",
    url: "https://www.tokopedia.com/nourish"
  }
}; 