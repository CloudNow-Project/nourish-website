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
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const buttonContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 1.1,
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
        delay: 0.2,
        duration: 1,
      },
    },
  };

  const productContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.0,
      },
    },
  };

  const productAnimation = (direction: number) => ({
    hidden: {
      opacity: 0,
      y: 30,
      rotate: direction === 1 ? -15 : 15,
    },
    show: {
      opacity: 1,
      y: 0,
      rotate: direction === 1 ? -5 : 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
    hover: {
      y: -10,
      rotate: direction === 1 ? -8 : 8,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  });

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-8 md:pt-24 md:pb-12 overflow-hidden">
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
                  <Button className="w-full sm:w-auto bg-nourish-orange hover:bg-nourish-orange/90 px-6 md:px-8 py-5 md:py-6 rounded-full text-nourish-text text-base md:text-lg shadow-lg shadow-nourish-orange/20">
                    {primaryCta.text}
                  </Button>
                </Link>
              </motion.div>
              <motion.div variants={buttonVariant} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link href={secondaryCta.url}>
                  <Button className="w-full sm:w-auto bg-olive hover:bg-olive/90 px-6 md:px-8 py-5 md:py-6 rounded-full text-white text-base md:text-lg shadow-lg shadow-olive/20">
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
                className="absolute inset-0 scale-[1.8] md:scale-[1.6] lg:scale-[2] translate-x-[50%]"
                variants={dogAnimation}
                initial="hidden"
                animate="show"
              >
                <Image
                  src="/images/doggy-cartoon.png"
                  alt="Cartoon dog illustration"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </motion.div>

              {/* Product Container - Positioned relative to the container */}
              <motion.div
                className="absolute top-[45%] left-[50%] transform -translate-x-1/2 -translate-y-[40%] flex items-center justify-center z-20"
                variants={productContainer}
                initial="hidden"
                animate="show"
              >
                {/* Product 1: Pumpkin and Beef */}
                <motion.div
                  className="transform rotate-[-5deg] w-[200px] md:w-[200px] lg:w-[220px] z-30"
                  variants={productAnimation(1)}
                  whileHover="hover"
                >
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
                  className="transform rotate-[5deg] w-[200px] md:w-[200px] lg:w-[220px] ml-[-40px] mt-10 z-30"
                  variants={productAnimation(2)}
                  whileHover="hover"
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
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
