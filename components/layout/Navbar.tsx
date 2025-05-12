"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { mainNav } from "@/data/site";

export function Navbar() {
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
            <Link href="/" className="font-display text-3xl md:text-4xl text-terracota font-bold tracking-wide">
              nourish
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-10 relative z-10">
            {mainNav.map((item) => (
              <div key={item.href} className="group">
                <Link
                  href={item.href}
                  className="text-nourish-text text-lg md:text-xl font-medium relative pb-1 hover:text-chile-rojo transition-colors"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-chile-rojo group-hover:w-full transition-all duration-300"></span>
                </Link>
              </div>
            ))}
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
