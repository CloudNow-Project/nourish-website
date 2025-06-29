"use client";
// import { HeroOrnaments } from "@/components/page/home/hero/HeroOrnaments";
import { HeroProductImage } from "./Ornaments";
import { HeroTitle } from "./HeroTitle";
import { HeroIngredients } from "./HeroIngredients";

export default function AnimatedHero() {
  return (
    <div className="relative w-full aspect-[1362/804] overflow-hidden">
      <div className="absolute inset-0 z-20">
        <HeroTitle />
      </div>
      <div className="absolute inset-0 z-20">
        <HeroProductImage />
      </div>
      {/* <div className="absolute inset-0 z-10 opacity-30">
        <HeroOrnaments />
      </div> */}
      <div className="absolute inset-0 z-10">
        <HeroIngredients />
      </div>
    </div>
  );
}
