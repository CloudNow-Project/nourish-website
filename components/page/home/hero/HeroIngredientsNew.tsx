"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Carrot01 } from "./ingredients/Carrot01";
import { Strawberry02 } from "./ingredients/Strawberry02";

interface HeroIngredientsProps {
  initialDelay?: number;
}

const ingredients = [
  { Component: Carrot01, size: 80, top: "10%", left: "10%" },
  { Component: Strawberry02, size: 90, top: "15%", left: "25%" },
];

export const HeroIngredients: React.FC<HeroIngredientsProps> = ({ initialDelay = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ingredientsRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Register ScrollTrigger plugin
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    if (!containerRef.current) return;

    // Store all animations for cleanup
    const animations: gsap.core.Tween[] = [];

    // Container animation
    animations.push(
      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
          scale: 0.9,
          y: "17%",
          x: "2%",
        },
        {
          opacity: 1,
          scale: 1.08,
          y: "17%",
          x: "2%",
          duration: 1,
          delay: initialDelay + 0.2,
          ease: "power2.out",
        }
      )
    );

    // Staggered ingredients animation
    animations.push(
      gsap.fromTo(
        ingredientsRefs.current,
        {
          opacity: 0,
          scale: 0.9,
          y: 10,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          delay: initialDelay + 0.5,
          ease: "back.out(1.7)",
        }
      )
    );

    // Scroll animations for ingredients
    ingredientsRefs.current.forEach((el, index) => {
      if (!el) return;

      const isEven = index % 2 === 0;
      const xMove = isEven ? -50 : 50;
      const yMove = 20 + index * 5;
      const rotation = isEven ? -15 : 15;

      // Add floating animation
      const floatAnimation = gsap.to(el, {
        y: `+=${isEven ? 20 : -20}`,
        x: `+=${isEven ? 10 : -10}`,
        rotation: `+=${isEven ? 10 : -10}`,
        duration: 2 + (index % 3),
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.1,
      });
      animations.push(floatAnimation);

      // Add scroll-based parallax
      const scrollTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(el, {
            y: yMove + progress * (isEven ? -30 : 30),
            x: xMove * progress,
            rotation: rotation + progress * (isEven ? -10 : 10),
            duration: 0.1,
            overwrite: true,
          });
        },
      });

      // Store ScrollTrigger instance for cleanup
      animations.push({ kill: () => scrollTrigger.kill() } as gsap.core.Tween);
    });

    return () => {
      // Cleanup all animations and ScrollTriggers
      try {
        animations.forEach((animation) => {
          if (animation && typeof animation.kill === "function") {
            animation.kill();
          }
        });
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      } catch (error) {
        console.warn("Error during GSAP cleanup:", error);
      }
    };
  }, [initialDelay]);

  return (
    <div ref={containerRef} className="hero-ingredients relative w-full h-full opacity-0">
      {ingredients.map(({ Component, size, top, left }, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) ingredientsRefs.current[index] = el;
          }}
          className="ingredients absolute opacity-0"
          style={{
            top,
            left,
            width: size,
            height: "auto",
            transform: `rotate(${index % 2 === 0 ? -15 : 15}deg)`,
          }}
        >
          <Component size={size} />
        </div>
      ))}
    </div>
  );
};
