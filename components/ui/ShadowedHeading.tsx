"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ShadowedHeadingProps {
  text: string;
  className?: string;
  as?: React.ElementType;
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
  textColor?: string;
  shadowColor?: string;
  shadowOffset?: number;
}

export function ShadowedHeading({
  text,
  className,
  as: Component = "span",
  size = "lg",
  textColor = "#f6b656",
  shadowColor = "#FBE2BF",
  shadowOffset = 4,
}: ShadowedHeadingProps) {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    // Wait for fonts to be ready
    document.fonts.ready.then(() => {
      setFontLoaded(true);
    });

    // Fallback in case fonts.ready doesn't resolve
    const timer = setTimeout(() => {
      setFontLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const sizeClasses = {
    xxs: "text-base md:text-xl",
    xs: "text-lg md:text-2xl",
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl",
    xl: "text-5xl md:text-6xl",
  };

  // Using CSS text-shadow instead of positioned elements for better reliability
  return (
    <Component
      className={cn(
        "relative font-display font-bold block transition-opacity duration-300",
        sizeClasses[size],
        className,
        fontLoaded ? "opacity-100" : "opacity-0"
      )}
      style={{
        fontFamily: "var(--font-sharpshooter)",
        color: textColor,
        textShadow: `${shadowOffset * 0.06}rem ${shadowOffset * 0.06}rem 0 ${shadowColor}`,
      }}
    >
      {text}
    </Component>
  );
}
