"use client";

import { Button } from "@/components/ui/button";
import { ShadowedHeading } from "@/components/ui/ShadowedHeading";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroProps {
  heading: {
    mainText: string;
    highlightedText: string;
  };
  subheading: string;
  primaryCta: {
    text: string;
    url: string;
  };
  secondaryCta: {
    text: string;
    url: string;
  };
}

export function Hero({ heading, subheading, primaryCta, secondaryCta }: HeroProps) {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 300,
        duration: 0.5,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.7,
      },
    },
  };

  const buttonContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.3,
      },
    },
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
        duration: 0.7,
      },
    },
  };

  const dogAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.1,
        duration: 0.8,
      },
    },
  };

  // Removing the product container staggering approach and using individual animations instead

  const firstProductAnimation = {
    hidden: { opacity: 0, y: 30, rotate: 0, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      rotate: -1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        duration: 0.8,
        delay: 1.8, // First product delay
      },
    },
  };

  const secondProductAnimation = {
    hidden: { opacity: 0, y: 30, rotate: 0, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      rotate: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        duration: 0.8,
        delay: 2, // Second product delay - appears after first
      },
    },
  };

  return (
    <section className="relative flex items-center py-32 md:py-40 lg:py-48 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Content Section */}
          <motion.div
            className="w-full md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left z-10"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              className="font-display font-bold"
              style={{ fontFamily: "var(--font-sharpshooter)" }}
              variants={fadeInUp}
            >
              <ShadowedHeading
                text={heading.mainText}
                className="mb-2"
                size="xl"
                textColor="#f6b656"
                shadowColor="#FBE2BF"
                shadowOffset={4}
              />
              <ShadowedHeading
                text={heading.highlightedText}
                size="xl"
                textColor="#f6b656"
                shadowColor="#FBE2BF"
                shadowOffset={4}
              />
            </motion.h1>

            <motion.p
              className="text-black/90 text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0"
              variants={fadeInUp}
            >
              {subheading}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2 md:pt-4"
              variants={buttonContainer}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={buttonVariant} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link href={primaryCta.url}>
                  <Button className="w-full sm:w-auto bg-[#EA7625] hover:bg-[#EA7625]/90 px-6 md:px-8 py-5 md:py-6 rounded-full text-white text-base md:text-lg shadow-lg shadow-[#EA7625]/20">
                    {primaryCta.text}
                  </Button>
                </Link>
              </motion.div>
              <motion.div variants={buttonVariant} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link href={secondaryCta.url}>
                  <Button className="w-full sm:w-auto bg-[#258A49] hover:bg-[#258A49]/90 px-6 md:px-8 py-5 md:py-6 rounded-full text-white text-base md:text-lg shadow-lg shadow-[#258A49]/20">
                    {secondaryCta.text}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Dog and Products Section - Combined as one unit */}
          <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
            <div className="relative w-full h-[450px] md:h-[500px] lg:h-[550px]">
              {/* Dog Image as a positioned base */}
              <motion.div
                className="absolute inset-0 scale-[1.8] md:scale-[1.6] lg:scale-[1.6] translate-x-[10%]"
                variants={dogAnimation}
                initial="hidden"
                animate="show"
              >
                <Image
                  src="/images/doggo.png"
                  alt="Cartoon dog illustration"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </motion.div>

              {/* Products with individual animations */}
              <div className="absolute top-[50%] left-[30%] transform -translate-x-1/2 translate-y-[10%] flex items-center justify-center z-20 group">
                {/* Product 1: Pumpkin and Beef */}
                <motion.div
                  className="transform w-[200px] md:w-[200px] lg:w-[330px] z-40 scale-[1.05] relative
                             group-hover:-translate-y-3 group-hover:rotate-[-3deg] transition-all duration-300 ease-out"
                  variants={firstProductAnimation}
                  initial="hidden"
                  animate="show"
                  transition={{
                    type: "spring",
                    stiffness: 700,
                    damping: 35,
                    mass: 0.8,
                    restDelta: 0.001,
                  }}
                >
                  {/* Custom shadow element that appears to cast from first product onto second */}
                  <div
                    className="absolute right-[20px] top-[30px] bottom-[40px] w-[100px] z-35 rounded-lg"
                    style={{
                      background: "linear-gradient(to right, rgba(0,0,0,0.2) 10%, rgba(0,0,0,0) 100%)",
                      transform: "skewY(-2deg)",
                      filter: "blur(8px)",
                      opacity: 0.7,
                    }}
                  ></div>

                  {/* Custom shadow element that appears to cast from first product onto second */}
                  <div
                    className="absolute right-[-120px] top-[30px] bottom-[40px] w-[100px] z-35 rounded-lg"
                    style={{
                      background: "linear-gradient(to right, rgba(0,0,0,0.2) 10%, rgba(0,0,0,0) 100%)",
                      transform: "skewY(-2deg)",
                      filter: "blur(8px)",
                      opacity: 0.7,
                    }}
                  ></div>

                  <Image
                    src="/images/products/product-pumpkind-and-beef.png"
                    alt="Nourish Pumpkin and Beef dog treats"
                    width={250}
                    height={350}
                    className="drop-shadow-xl"
                    priority
                  />
                </motion.div>

                {/* Product 2: Strawberry and Carrot */}
                <motion.div
                  className="transform w-[200px] md:w-[200px] lg:w-[330px] ml-[-138px] mt-6 z-30
                             group-hover:-translate-y-3 group-hover:rotate-[3deg] transition-all duration-300 ease-out"
                  variants={secondProductAnimation}
                  initial="hidden"
                  animate="show"
                  transition={{
                    type: "spring",
                    stiffness: 700,
                    damping: 35,
                    mass: 0.8,
                    restDelta: 0.001,
                  }}
                >
                  <Image
                    src="/images/products/product-strawberry-and-carrot.png"
                    alt="Nourish Strawberry and Carrot dog treats"
                    width={250}
                    height={350}
                    className="drop-shadow-xl"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
