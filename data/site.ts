// Site-wide configuration
export const siteConfig = {
  name: "Nourish",
  description: "Wholesome dog treats powered by superfoods",
  url: "https://nourish-treats.com",
  ogImage: "https://nourish-treats.com/og.jpg",
};

// Navigation items
export const mainNav = [
  { name: "Inside the Bite", href: "/inside-the-bite" },
  { name: "Our Pack Journey", href: "/our-pack-journey" },
  { name: "Paw-rents Ask", href: "/paw-rents-ask" },
  { name: "Give Us a Bark", href: "/give-us-a-bark" },
];

// Footer menu data for easy editing
export const footerMenus = {
  treatsAndInfo: {
    title: "Treats & Info",
    items: [
      { name: "Paw-some Treats", href: "/treats" },
      { name: "Inside the Bite", href: "/inside-the-bite" },
      { name: "Our Pack Journey", href: "/our-pack-journey" },
      { name: "Paw-rents Ask", href: "/paw-rents-ask" },
    ],
  },
  forPawrents: {
    title: "For Paw-rents",
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
      { name: "Facebook", href: "https://facebook.com/nourishtreats", icon: "facebook" },
      { name: "Instagram", href: "https://instagram.com/nourish_treats", icon: "instagram" },
      { name: "Youtube", href: "https://youtube.com/nourishtreats", icon: "youtube" },
    ],
  },
};

// Newsletter content 
export const newsletterContent = {
  title: "Stay in the Loop, Pup!",
  description: "Join our pack to fetch updates on new flavors, restocks, and tail-wagging promos.",
  buttonText: "Subscribe",
  disclaimer: "By subscribing, you agree to our Privacy Policy and give us paw-mission to send you updates.",
}; 