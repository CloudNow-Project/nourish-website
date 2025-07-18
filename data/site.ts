// Site-wide configuration
export const siteConfig = {
  name: "Nourish",
  description: "Wholesome dog treats powered by superfoods",
  url: "https://nourish-treats.com",
  ogImage: "https://nourish-treats.com/og.jpg",
};

// Navigation items with icons for Navbar
export const mainNav = [
  { name: "Inside the Bite", href: "/ingredients", icon: "Bowl" },
  { name: "Our Pack Story", href: "/about-us", icon: "Pack" },
  // { name: "Pawrents Ask", href: "/faq", icon: "Pawsk" },
  { name: "Give us a Woof", href: "/contact", icon: "Woof" },
];

// Footer menu data for easy editing
export const footerMenus = {
  treatsAndInfo: {
    title: "Treats & Info",
    items: [
      { name: "Pawsome Treats", href: "/treats" },
      { name: "Inside the Bite", href: "/inside-the-bite" },
      { name: "Our Pack Journey", href: "/our-pack-journey" },
      { name: "Pawrents Ask", href: "/pawrents-ask" },
    ],
  },
  forPawrents: {
    title: "For Pawrents",
    items: [
      { name: "How to Order", href: "/how-to-order" },
      { name: "Shipping Info", href: "/shipping-info" },
      { name: "Returns & Refunds", href: "/returns-refunds" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
    ],
  },
  social: {
    title: "Let's Be Furiends",
    items: [
      { name: "TikTok", href: "https://www.tiktok.com/@heyofordogs", icon: "tiktok" },
      { name: "Instagram", href: "https://instagram.com/heyofordogs", icon: "instagram" },
      { name: "Facebook", href: "https://facebook.com/heyofordogs", icon: "facebook" },
      { name: "Youtube", href: "https://youtube.com/heyofordogs", icon: "youtube" },
    ],
  },
};

// Newsletter content 
export const newsletterContent = {
  title: "Stay in the Loop, Pup!",
  description: "Join our pack to fetch updates on new flavors, restocks, and tail-wagging promos.",
  buttonText: "Subscribe",
  disclaimer: "By subscribing, you agree to our Privacy Policy and give us pawmission to send you updates.",
}; 