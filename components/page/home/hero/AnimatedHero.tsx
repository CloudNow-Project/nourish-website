"use client";
import { HeroOrnaments } from "@/components/ui/HeroOrnaments";
import { HeroProductImage } from "./Ornaments";
import { HeroTitle } from "./HeroTitle";

export default function AnimatedHero() {
  return (
    <div className="relative w-full aspect-[1362/804]">
      <div className="absolute inset-0 z-20">
        <HeroTitle />
      </div>
      <div className="absolute inset-0 z-20">
        <HeroProductImage />
      </div>
      <div className="absolute inset-0 z-10">
        <HeroOrnaments />
      </div>
    </div>
  );
}
