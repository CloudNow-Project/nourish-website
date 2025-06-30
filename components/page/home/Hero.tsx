"use client";

import { ShadowedHeading } from "@/components/ui/ShadowedHeading";
import { IconButton } from "@/components/ui/IconButton";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLoading } from "@/components/ui/LoadingContext";

interface HeroProps {
  heading: {
    mainText: string;
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
  const { isLoading } = useLoading();
  const animationDelay = isLoading ? 3 : 0;

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
        delay: animationDelay + 0.5,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: animationDelay + 0.7,
      },
    },
  };

  const buttonContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: animationDelay + 1,
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
        delay: animationDelay + 0.1,
        duration: 0.8,
      },
    },
  };

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
        delay: animationDelay + 1.3,
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
        delay: animationDelay + 1.5,
      },
    },
  };

  return (
    <section className="relative flex items-center py-32 md:py-24 lg:py-48 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/home/hero/hero-bg.png"
          alt="Background"
          fill
          priority
          className="object-cover object-bottom"
        />
      </div>

      <div className="container max-w-6xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:flex-row items-center">
          {/* Content Section */}
          <motion.div
            className="w-1/2 space-y-8 text-left z-10"
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
                size="hero"
                textColor="#f6b656"
                shadowColor="#FBE2BF"
                shadowOffset={4}
              />
            </motion.h1>

            <motion.p className="text-black/90 text-2xl max-w-md font-medium" variants={fadeInUp}>
              {subheading}
            </motion.p>

            <motion.div
              className="flex flex-row items-center justify-start gap-4 pt-4"
              variants={buttonContainer}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={buttonVariant}>
                <Link href={primaryCta.url}>
                  <IconButton
                    href={primaryCta.url}
                    icon={<Image src="/images/logo/shopee-logo.png" alt="Shopee" width={24} height={24} />}
                    className="w-auto bg-[#F65E42]"
                  >
                    {primaryCta.text}
                  </IconButton>
                </Link>
              </motion.div>
              <motion.div variants={buttonVariant}>
                <Link href={secondaryCta.url}>
                  <IconButton
                    href={secondaryCta.url}
                    icon={<Image src="/images/logo/tokped-logo.png" alt="Tokopedia" width={24} height={24} />}
                    className="w-auto bg-[#5B9959]"
                  >
                    {secondaryCta.text}
                  </IconButton>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Dog and Products Section for Desktop */}
          <div className="w-1/2 relative">
            <div className="relative w-full h-[550px]">
              {/* Dog Image */}
              <motion.div
                className="absolute inset-0 scale-[1.6] translate-x-[10%]"
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
              <div className="absolute top-[50%] left-[30%] transform -translate-x-1/2 translate-y-[25%] flex items-center justify-center z-20 group">
                {/* Product 1: Pumpkin and Beef */}
                <motion.div
                  className="transform w-[330px] z-40 scale-[1.05] relative
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
                    src="/images/products/product-pumpkind-and-beef-transparent.png"
                    alt="Nourish Pumpkin and Beef dog treats"
                    width={250}
                    height={350}
                    className="drop-shadow-xl"
                    priority
                  />
                </motion.div>

                {/* Product 2: Strawberry and Carrot */}
                <motion.div
                  className="transform w-[330px] scale-[1.05] ml-[-120px] z-30
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
                    src="/images/products/product-strawberry-and-carrot-transparent.png"
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

        {/* Mobile and Tablet Layout */}
        <div className="flex flex-col lg:hidden">
          {/* Content Section */}
          <motion.div
            className="w-full space-y-6 z-10 mb-6 mt-10 text-left"
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
                size="hero"
                textColor="#f6b656"
                shadowColor="#FBE2BF"
                shadowOffset={4}
              />
            </motion.h1>

            <motion.p className="text-black/90 text-xl max-w-md font-semibold" variants={fadeInUp}>
              {subheading}
            </motion.p>
          </motion.div>

          {/* Combined dog and products section */}
          <div className="relative flex flex-row items-start justify-start gap-4 pt-4 md:min-h-[500px] min-h-[450px]">
            {/* Dog Image for Tablet */}
            <motion.div
              className="absolute inset-0 right-10 scale-[1.4] md:scale-150 translate-y-[0%]"
              variants={dogAnimation}
              initial="hidden"
              animate="show"
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
                src="/images/doggo.png"
                alt="Cartoon dog illustration"
                fill
                className="object-contain object-right-top"
                priority
              />
            </motion.div>

            {/* CTA Buttons - Positioned to match reference image */}
            <motion.div
              className="flex flex-col items-start justify-start gap-4 mb-8 w-auto z-20 relative mt-4"
              variants={buttonContainer}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={buttonVariant} className="w-auto">
                <Link href={primaryCta.url} className="block">
                  <IconButton
                    href={primaryCta.url}
                    icon={<Image src="/images/logo/shopee-logo.png" alt="Shopee" width={24} height={24} />}
                    className="w-auto bg-[#F65E42] pr-4"
                  >
                    {primaryCta.text}
                  </IconButton>
                </Link>
              </motion.div>
              <motion.div variants={buttonVariant} className="w-auto">
                <Link href={secondaryCta.url} className="block">
                  <IconButton
                    href={secondaryCta.url}
                    icon={<Image src="/images/logo/tokped-logo.png" alt="Tokopedia" width={24} height={24} />}
                    className="w-auto bg-[#5B9959] pr-4"
                  >
                    {secondaryCta.text}
                  </IconButton>
                </Link>
              </motion.div>
            </motion.div>

            {/* Products at Bottom for Tablet */}
            <div className="absolute bottom-[-10px] left-0 flex items-center justify-start md:justify-center z-10">
              <motion.div
                className="transform w-[160px] md:w-[180px] relative mr-5 scale-[1.4]"
                variants={firstProductAnimation}
                initial="hidden"
                animate="show"
              >
                <Image
                  src="/images/products/product-pumpkind-and-beef-transparent.png"
                  alt="Nourish Pumpkin and Beef dog treats"
                  width={180}
                  height={250}
                  className="drop-shadow-xl"
                  priority
                />
              </motion.div>

              <motion.div
                className="transform w-[160px] md:w-[180px] relative scale-[1.4]"
                variants={secondProductAnimation}
                initial="hidden"
                animate="show"
              >
                <Image
                  src="/images/products/product-strawberry-and-carrot-transparent.png"
                  alt="Nourish Strawberry and Carrot dog treats"
                  width={180}
                  height={250}
                  className="drop-shadow-xl"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
