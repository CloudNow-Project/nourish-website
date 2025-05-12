"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { mainNav } from "@/data/site";
import { Paw } from "@/components/ui/Paw";
import { NourishLogo } from "@/components/ui/NourishLogo";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full fixed top-0 z-50">
      {/* Desktop Navigation - Hidden on Mobile */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full shadow-md hidden md:block"
        style={{
          backgroundColor: "#FFF1BF",
          borderRadius: scrolled ? "0" : "0 0 20px 20px",
        }}
      >
        <div className="container mx-auto px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="relative z-10">
            <Link href="/" className="block">
              <NourishLogo color="#d06224" size={150} className="hover:scale-105 transition-transform duration-300" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-10 relative z-10">
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
        </div>
      </motion.nav>

      {/* Mobile Navigation - Only visible on Mobile */}
      <div className="md:hidden bg-[#FFF1BF] shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="relative z-10">
            <Link href="/" className="block">
              <NourishLogo color="#d06224" size={100} className="transition-transform duration-300" />
            </Link>
          </div>

          {/* CTA Button - Visible only on Mobile */}
          <Link
            href="/treats"
            className="bg-chile-rojo hover:bg-terracota text-white text-base font-medium rounded-full px-5 py-3 transition-colors shadow-md z-10 mr-3"
          >
            Pawsome Treats
          </Link>

          {/* Mobile Menu Button */}
          <button className="text-nourish-text relative z-10 p-2" onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#FFF1BF] border-t border-[#d06224]/10 overflow-hidden"
            >
              <div className="container mx-auto py-4 px-6">
                <nav className="flex flex-col space-y-4">
                  {mainNav.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-xl py-3 px-2 rounded-lg font-medium transition-colors ${
                          isActive
                            ? "bg-[#FFF1BF]/30 text-chile-rojo font-bold"
                            : "text-nourish-text hover:bg-[#FFF1BF]/20"
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
