"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { mainNav } from "@/data/site";
import { Paw } from "@/components/ui/Paw";
import { NourishLogo } from "@/components/ui/NourishLogo";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="w-full fixed top-0 z-50">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full bg-sunset shadow-md"
      >
        <div className="container mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="relative z-10">
            <Link href="/" className="block">
              <NourishLogo color="#d06224" size={150} className="hover:scale-105 transition-transform duration-300" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-10 relative z-10">
            {mainNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <div key={item.href} className="group relative">
                  {/* Paw icon that appears behind the text on hover or active state */}
                  <div className="absolute inset-0 flex items-center justify-center -z-10">
                    {isActive ? (
                      <Paw
                        size={32}
                        color="#B04818" /* chile-rojo color for active */
                        className="opacity-20 rotate-12"
                      />
                    ) : (
                      <Paw
                        size={32}
                        color="#FFA94D" /* lighter orange color for hover */
                        className="opacity-0 group-hover:opacity-30 -rotate-12 transition-all duration-300"
                      />
                    )}
                  </div>
                  <Link
                    href={item.href}
                    className={`text-lg md:text-xl font-medium relative z-10 transition-colors ${
                      isActive ? "text-chile-rojo font-bold" : "text-nourish-text hover:text-chile-rojo"
                    }`}
                  >
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="relative z-10">
            <Link href="/treats">
              <Button className="bg-chile-rojo hover:bg-terracota text-white font-medium text-lg rounded-md px-8 py-6 transition-colors border-none shadow-md">
                Pawsome Treats
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button (hidden on desktop) */}
          <button className="md:hidden text-nourish-text relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.nav>
    </div>
  );
}
