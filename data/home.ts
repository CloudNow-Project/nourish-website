// Features for "Why Pawrents Choose Heyo" section
export const features = [
  {
    id: "nutritionist-formulated",
    title: "Nutritionist Formulated",
    description: "Crafted with expert guidance to provide optimal nutrition for your dog's health and vitality.",
    image: "feature-nutritionist-formulated.png",
  },
  {
    id: "human-grade",
    title: "Human-Grade Ingredients",
    description: "Only the highest quality ingredients that you would eat yourself - because your dog deserves the best.",
    image: "feature-human-grade.png",
  },
  {
    id: "natural",
    title: "100% Natural Ingredients",
    description: "Free from artificial preservatives, colors, and flavors - just pure, wholesome goodness.",
    image: "feature-natural.png",
  },
  {
    id: "no-chicken",
    title: "Chicken-Free Recipe",
    description: "Perfect for dogs with sensitivities - our recipes avoid common allergens for gentle nutrition.",
    image: "feature-no-chicken.png",
  },
];

// Gallery section data
export const gallerySection = {
  heading: "Happy Tails",
  subheading: "See our furry friends enjoying their favorite treats!",
  images: [
    { id: "1", src: "/images/home/galery/happy-tails-01.jpg", alt: "Happy dog enjoying Heyo treats" },
    { id: "2", src: "/images/home/galery/happy-tails-02.jpg", alt: "Playful puppy with Heyo biscuit" },
    { id: "3", src: "/images/home/galery/happy-tails-03.jpg", alt: "Dog owner giving treats to pet" },
    { id: "4", src: "/images/home/galery/happy-tails-04.jpg", alt: "Excited dog waiting for treat" },
    { id: "5", src: "/images/home/galery/happy-tails-05.jpg", alt: "Golden retriever with pawsome treat" },
    { id: "6", src: "/images/home/galery/happy-tails-06.jpg", alt: "Small dog with big treat" },
    { id: "7", src: "/images/home/galery/happy-tails-07.jpg", alt: "Dog duo sharing treats" },
  ],
};

// CTA section data
export const ctaSection = {
  heading: "Snack Time Starts Here",
  description: "Order via WhatsApp or your favorite marketplace and spoil your pup with treats that are as nutritious as they are drool-worthy.",
  image: "/images/home/doggo-stop-here.jpg",
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
  heading: "Tales & Tips for Pawrents",
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
       imageSrc: "/images/home/blog/blog-1.jpg",
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
      imageSrc: "/images/home/blog/blog-2.jpg",
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
      imageSrc: "/images/home/blog/blog-3.jpg",
      slug: "benefits-of-regular-exercise-for-dogs",
    },
  ],
};

// Testimonials section data
export const testimonials = {
  heading: "What Pawrents Say",
  subheading: "Healthy pups, happy pawrents — see what they're woofing about!",
  reviews: [
    {
      id: "1",
      text: "Heyo treats transformed my dog's energy levels!",
      author: "Emily Johnson",
      title: "Pet Owner, Dog Lover",
      rating: 5,
      imageSrc: "/images/avatar/ava-01.jpg", // Placeholder for now
    },
    {
      id: "2",
      text: "My pup can't get enough of these treats!",
      author: "Michael Smith",
      title: "Dog Trainer, Canine Academy",
      rating: 5,
      imageSrc: "/images/avatar/ava-02.jpg", // Placeholder for now
    },
    {
      id: "3",
      text: "The best decision for my dog's diet!",
      author: "Sarah Lee",
      title: "Veterinarian, Pet Care",
      rating: 5,
      imageSrc: "/images/avatar/ava-03.jpg", // Placeholder for now
    },
  ],
};

// Stats section data
export const statsSection = {
  heading: "Why Our Treats Are Pawsitively Amazing",
  subheading: "Join the pack of satisfied pups! Our superfood treats are loved by dogs and their owners alike.",
  ctaText: "Pawsome Treats",
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
    mainText: "Superfood for <br> Super Tails",
  },
  subheading: "Crafted with love, powerful ingredients, and zero junk.",
  primaryCta: {
    text: "Order on Shopee",
    url: "https://shopee.com/nourish"
  },
  secondaryCta: {
    text: "Order on Tokopedia",
    url: "https://www.tokopedia.com/nourish"
  }
}; 