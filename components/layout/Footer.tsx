import Link from "next/link";

// Menu data for easy editing
const footerMenus = {
  treatsAndInfo: {
    title: "Treats & Info",
    items: [
      { name: "Paw-some Treats", href: "/treats" },
      { name: "Inside the Bite", href: "/inside-the-bite" },
      { name: "Our Pack Journey", href: "/our-pack-journey" },
      { name: "Paw-rents Ask", href: "/paw-rents-ask" },
      { name: "Paw-some Treats", href: "/treats" }, // Duplicate in the image
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
      { name: "Facebook", href: "https://facebook.com", icon: "facebook" },
      { name: "Instagram", href: "https://instagram.com", icon: "instagram" },
      { name: "Youtube", href: "https://youtube.com", icon: "youtube" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="border-t border-gray-200 pt-12 pb-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-4">Stay in the Loop, Pup!</h2>
            <p className="text-gray-600 mb-4">
              Join our pack to fetch updates on new flavors, restocks, and tail-wagging promos.
            </p>

            <div className="flex flex-col space-y-4 max-w-md">
              <input type="email" placeholder="Enter your email" className="border border-gray-300 px-4 py-3 rounded" />
              <button className="bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
              <p className="text-sm text-gray-500">
                By subscribing, you agree to our{" "}
                <Link href="/privacy-policy" className="underline">
                  Privacy Policy
                </Link>{" "}
                and give us paw-mission to send you updates.
              </p>
            </div>
          </div>

          {/* Menu Columns */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Treats & Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4">{footerMenus.treatsAndInfo.title}</h3>
              <ul className="space-y-3">
                {footerMenus.treatsAndInfo.items.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="text-gray-700 hover:text-black">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Paw-rents */}
            <div>
              <h3 className="font-semibold text-lg mb-4">{footerMenus.forPawrents.title}</h3>
              <ul className="space-y-3">
                {footerMenus.forPawrents.items.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="text-gray-700 hover:text-black">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Let's Be Furiends */}
            <div>
              <h3 className="font-semibold text-lg mb-4">{footerMenus.social.title}</h3>
              <ul className="space-y-3">
                {footerMenus.social.items.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Link href={item.href} className="text-gray-700 hover:text-black flex items-center">
                      <span className="mr-2">
                        {item.icon === "facebook" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                          </svg>
                        )}
                        {item.icon === "instagram" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.045.976.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.04.058 2.67 0 2.986-.01 4.04-.058.976-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.054.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.04-.058zm0 3.063a5.136 5.136 0 110 10.27 5.136 5.136 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.469a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
                          </svg>
                        )}
                        {item.icon === "youtube" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                          </svg>
                        )}
                      </span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Logo and Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-center">
            <div className="text-9xl font-black tracking-tighter mb-6">NOURISH</div>
            <div className="text-sm text-gray-500 mb-6">© {new Date().getFullYear()} Nourish. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
