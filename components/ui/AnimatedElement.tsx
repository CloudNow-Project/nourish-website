"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimationVariant =
  | "fadeIn"
  | "fadeInUp"
  | "fadeInDown"
  | "fadeInLeft"
  | "fadeInRight"
  | "zoomIn"
  | "slideUp"
  | "slideDown";

interface AnimatedElementProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export function AnimatedElement({
  children,
  variant = "fadeInUp",
  delay = 0,
  duration = 0.6,
  className = "",
  threshold = 0.1,
}: AnimatedElementProps) {
  console.log("🚀 ~ className:", className);
  // Animation variants
  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    fadeInUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
    },
    fadeInDown: {
      initial: { opacity: 0, y: -30 },
      animate: { opacity: 1, y: 0 },
    },
    fadeInLeft: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 },
    },
    fadeInRight: {
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0 },
    },
    zoomIn: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
    },
    slideUp: {
      initial: { y: 50 },
      animate: { y: 0 },
    },
    slideDown: {
      initial: { y: -50 },
      animate: { y: 0 },
    },
  };

  const selectedAnimation = animations[variant];

  return (
    <motion.div
      initial={selectedAnimation.initial}
      whileInView={selectedAnimation.animate}
      viewport={{ once: true, amount: threshold }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 20,
        delay: delay,
        duration: duration,
      }}
      className={`${className} `}
    >
      {children}
    </motion.div>
  );
}
