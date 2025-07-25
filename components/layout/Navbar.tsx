"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HeyoLogo } from "@/components/ui/HeyoLogo";
import { usePathname } from "next/navigation";
import { Bowl, Pack, Pawsk, Woof, HeyoPaw } from "@/components/ui/Icons";
import { TextSwipeAnimation } from "@/components/ui/TextSwipeAnimation";
import { IconButton } from "@/components/ui/IconButton";
import { mainNav } from "@/data/site";
import { useLoading } from "@/components/ui/LoadingContext";

export function Navbar() {
  const pathname = usePathname();

  const solidNavPaths: string[] = ["/contact", "/about-us", "/about-us-2"];
  const needsSolidNav = solidNavPaths.includes(pathname);

  // Check if current page needs animation delay
  const animationDelayPaths: string[] = ["/"];
  const needsAnimationDelay = animationDelayPaths.includes(pathname);

  const { isLoading } = useLoading();
  const animationDelay = isLoading && needsAnimationDelay ? 3 : 0;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Check if current page needs solid navbar (currently none, prepared for future)

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

  // Get icon component by name
  const getIconComponent = (iconName: string, className: string = "w-10 h-10 mr-2") => {
    const iconProps = { className, size: 28 };

    switch (iconName) {
      case "Bowl":
        return <Bowl {...iconProps} />;
      case "Pack":
        return <Pack {...iconProps} />;
      case "Pawsk":
        return <Pawsk {...iconProps} />;
      case "Woof":
        return <Woof {...iconProps} />;
      default:
        return null;
    }
  };

  // Split navigation items for layout
  const leftNavItems = mainNav.slice(0, 3);
  const rightNavItems = mainNav.slice(3);

  // Animation variants
  const navContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: animationDelay + 0.3,
      },
    },
  };

  const navItem = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
  };

  const logoAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        delay: animationDelay + 0.2,
        duration: 0.6,
      },
    },
  };

  return (
    <div className={`w-full fixed top-0 z-50 pointer-events-none ${needsSolidNav ? "bg-white shadow-md" : ""}`}>
      {/* Desktop Navigation - Hidden on Mobile */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`w-full hidden xl:block transition-all duration-300 ease-in-out pointer-events-auto ${
          scrolled || needsSolidNav ? "bg-white/95 backdrop-blur-sm shadow-md py-4" : "bg-transparent py-4"
        }`}
        style={{
          borderRadius: scrolled || needsSolidNav ? "0" : "0 0 20px 20px",
        }}
      >
        <div className="2xl:container mx-auto px-4 relative">
          {/* Logo (Absolutely Centered) */}
          <motion.div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-transform duration-300 ${
              scrolled ? "scale-90" : "scale-100"
            }`}
            initial="hidden"
            animate="show"
            variants={logoAnimation}
          >
            <Link href="/" className="block">
              <HeyoLogo color="#F6b656" size={120} className="hover:scale-105 transition-transform duration-300" />
            </Link>
          </motion.div>

          <div className="flex justify-between items-center">
            {/* Left Navigation Items with Icons */}
            <motion.div className="flex items-center" variants={navContainer} initial="hidden" animate="show">
              {leftNavItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div key={item.href} variants={navItem}>
                    <Link
                      href={item.href}
                      className={`flex items-center text-base font-semibold transition-all rounded-full group px-3 ${
                        isActive
                          ? "bg-[#FDEACD] text-[#000000] font-bold"
                          : "text-nourish-text hover:text-[#A2501B] hover:bg-sunset/20"
                      } ${scrolled ? "py-[2px]" : "py-1"}`}
                    >
                      {getIconComponent(item.icon)}
                      <TextSwipeAnimation>{item.name}</TextSwipeAnimation>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Right Side - "Give us a Woof" link and CTA Button */}
            <motion.div className="flex items-center space-x-2" variants={navContainer} initial="hidden" animate="show">
              {rightNavItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div key={item.href} variants={navItem}>
                    <Link
                      href={item.href}
                      className={`flex items-center text-base font-semibold transition-all rounded-full group ${
                        isActive
                          ? "bg-[#FDEACD] text-[#000000] font-bold"
                          : "text-nourish-text hover:text-[#A2501B] hover:bg-sunset/20"
                      } ${scrolled ? "px-2.5 py-1.5" : "px-3 py-2"}`}
                    >
                      {getIconComponent(item.icon)}
                      <TextSwipeAnimation>{item.name}</TextSwipeAnimation>
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div variants={navItem}>
                <IconButton
                  // href="#products-section"
                  icon={<HeyoPaw size={20} color="#F6b656" />}
                  variant="orange"
                  href="/products"
                  // onClick={() => {
                  //   const element = document.getElementById("products-section");
                  //   if (element) {
                  //     element.scrollIntoView({ behavior: "smooth" });
                  //   }
                  // }}
                  className={`${scrolled ? "py-2" : "py-3"}`}
                >
                  Pawsome Treats
                </IconButton>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation - Only visible on Mobile */}
      <div
        className={`xl:hidden w-full transition-all duration-300 ease-in-out pointer-events-auto ${
          scrolled || needsSolidNav ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-center relative">
          {/* Logo (Centered) */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
          >
            <Link href="/" className="block">
              <HeyoLogo color="#F6b656" size={100} className="transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Mobile Menu Button (Absolute Position on Right) */}
          <motion.button
            className="text-nourish-text absolute right-4 z-10 p-2"
            onClick={() => setIsOpen(!isOpen)}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
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
          </motion.button>
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
                <motion.nav className="flex flex-col space-y-4" variants={navContainer} initial="hidden" animate="show">
                  {mainNav.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div key={item.href} variants={navItem} custom={index}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center text-xl py-3 px-4 rounded-lg font-medium transition-colors group ${
                            isActive
                              ? "bg-[#FFF2D9] text-[#000000] font-bold"
                              : "text-nourish-text hover:bg-[#FFF2D9]/50"
                          }`}
                        >
                          {getIconComponent(item.icon)}
                          <TextSwipeAnimation>{item.name}</TextSwipeAnimation>
                        </Link>
                      </motion.div>
                    );
                  })}
                  <motion.div variants={navItem}>
                    <IconButton
                      href="/products"
                      // href="#products-section"
                      icon={<HeyoPaw size={20} color="#000000" />}
                      variant="black"
                      // onClick={() => {
                      //   setIsOpen(false);
                      //   const element = document.getElementById("products-section");
                      //   if (element) {
                      //     element.scrollIntoView({ behavior: "smooth" });
                      //   }
                      // }}
                    >
                      Pawsome Treats
                    </IconButton>
                  </motion.div>
                </motion.nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
