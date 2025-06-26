import Link from "next/link";
import { footerMenus } from "@/data/site";
import { NourishLogo } from "@/components/ui/NourishLogo";
import { Paw } from "../ui/Icons";
import { AnimatedElement } from "@/components/ui/AnimatedElement";

export function MinimalFooter() {
  return (
    <footer className="relative text-white">
      {/* Main footer content */}
      <div className="relative py-12 overflow-hidden" style={{ backgroundColor: "#FFBD58" }}>
        {/* Decorative paw prints in background with varied orientations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Paw size={120} color="white" className="absolute top-10 left-10 opacity-15 rotate-45" />
          <Paw size={80} color="white" className="absolute top-40 right-20 opacity-15 -rotate-12" />
          <Paw size={100} color="white" className="absolute bottom-20 left-1/4 opacity-15 -rotate-30" />
          <Paw size={60} color="white" className="absolute top-1/2 right-1/3 opacity-15 -rotate-45" />
          <Paw size={90} color="white" className="absolute bottom-10 right-10 opacity-15 rotate-30" />
        </div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center mb-8 lg:mb-0 lg:w-1/2 lg:pr-20 xl:pr-40">
            <AnimatedElement className="flex flex-col items-center" variant="fadeInUp" delay={0.1}>
              <NourishLogo color="white" size="100%" className="mb-4" />

              <div
                className="text-2xl xl:text-3xl 2xl:text-4xl font-light tracking-wide text-white"
                style={{ fontFamily: "Agrandir, Arial, sans-serif" }}
              >
                SUPERFOOD DOG TREATS
              </div>
            </AnimatedElement>
          </div>

          {/* Menu Columns */}
          <div className="flex flex-col sm:flex-row gap-12 w-full lg:w-1/2 justify-between">
            <AnimatedElement variant="fadeInUp" delay={0.2}>
              {/* Treats & Info */}
              <div>
                <h3 className="font-bold text-lg mb-4 text-white">{footerMenus.treatsAndInfo.title}</h3>
                <ul className="space-y-3">
                  {footerMenus.treatsAndInfo.items.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href} className="text-white font-semibold hover:text-white hover:underline">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedElement>
            {/* For Pawrents */}
            <AnimatedElement variant="fadeInUp" delay={0.3}>
              <div>
                <h3 className="font-bold text-lg mb-4 text-white">{footerMenus.forPawrents.title}</h3>
                <ul className="space-y-3">
                  {footerMenus.forPawrents.items.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href} className="text-white font-semibold hover:text-white hover:underline">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedElement>
            {/* Let's Be Furiends */}
            <AnimatedElement variant="fadeInUp" delay={0.4}>
              <div>
                <h3 className="font-bold text-lg mb-4 text-white">{footerMenus.social.title}</h3>
                <ul className="space-y-3">
                  {footerMenus.social.items.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-white font-semibold hover:text-white hover:underline flex items-center"
                      >
                        {item.icon === "facebook" && (
                          <span className="mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6"
                            >
                              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                            </svg>
                          </span>
                        )}
                        {item.icon === "instagram" && (
                          <span className="mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6"
                            >
                              <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.045.976.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.04.058 2.67 0 2.986-.01 4.04-.058.976-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.054.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.04-.058zm0 3.063a5.136 5.136 0 110 10.27 5.136 5.136 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.469a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
                            </svg>
                          </span>
                        )}
                        {item.icon === "youtube" && (
                          <span className="mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6"
                            >
                              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                          </span>
                        )}
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedElement>
          </div>
        </div>

        {/* Copyright */}
        <AnimatedElement variant="fadeIn" delay={0.6}>
          <div className="mt-12 pt-8 border-t-2 border-white/20">
            <div className="flex flex-col items-center justify-center">
              <div className="text-sm text-white font-semibold">
                © {new Date().getFullYear()} Nourish. All rights reserved.
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </footer>
  );
}
