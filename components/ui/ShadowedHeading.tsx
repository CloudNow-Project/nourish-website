"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ShadowedHeadingProps {
  text: string;
  highlightWord?: string;
  highlightColor?: string;
  className?: string;
  as?: React.ElementType;
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "hero";
  textColor?: string;
  shadowColor?: string;
  shadowOffset?: number;
}

export function ShadowedHeading({
  text,
  highlightWord,
  highlightColor = "#f6b656",
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
    hero: "text-4xl md:text-7xl",
  };

  // Process text to add highlight and support line breaks
  const renderText = () => {
    if (!highlightWord) {
      // If no highlight word, just render the text with <br> support
      return text.split("<br>").map((line, i) => (
        <React.Fragment key={i}>
          {i > 0 && <br />}
          {line}
        </React.Fragment>
      ));
    }

    // If there's a highlight word, we need to handle both highlight and <br>
    return text.split("<br>").map((line, i) => {
      // Check if this line contains the highlight word
      if (line.includes(highlightWord)) {
        const parts = line.split(highlightWord);
        return (
          <React.Fragment key={i}>
            {i > 0 && <br />}
            {parts[0]}
            <span style={{ color: highlightColor }}>{highlightWord}</span>
            {parts[1]}
          </React.Fragment>
        );
      }

      // Line without highlight word
      return (
        <React.Fragment key={i}>
          {i > 0 && <br />}
          {line}
        </React.Fragment>
      );
    });
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
      {renderText()}
    </Component>
  );
}
