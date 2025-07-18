import Link from "next/link";
import { footerMenus } from "@/data/site";
import { HeyoLogo } from "@/components/ui/HeyoLogo";
import { Paw, TikTok, Facebook, Instagram, Youtube } from "../ui/Icons";
import { AnimatedElement } from "@/components/ui/AnimatedElement";

export function MinimalFooter() {
  return (
    <footer className="relative text-white">
      {/* Main footer content */}
      <div className="relative py-12 overflow-hidden" style={{ backgroundColor: "#F6b656" }}>
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
          <div className="flex flex-col items-center mb-8 lg:mb-0 lg:w-1/2 lg:pr-20 xl:pr-0">
            <AnimatedElement className="flex flex-col items-center" variant="fadeInUp" delay={0.1}>
              <HeyoLogo color="white" size="100%" className="mb-10" />

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
                        {item.icon === "tiktok" && <TikTok className="w-6 h-6 mr-2" />}
                        {item.icon === "facebook" && <Facebook className="w-6 h-6 mr-2" />}
                        {item.icon === "instagram" && <Instagram className="w-6 h-6 mr-2" />}
                        {item.icon === "youtube" && <Youtube className="w-6 h-6 mr-2" />}
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
                © {new Date().getFullYear()} Heyo. All rights reserved.
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </footer>
  );
}
