"use client";
// import { HeroOrnaments } from "@/components/page/home/hero/HeroOrnaments";
import { HeroProductImage } from "./Ornaments";
import { HeroTitle } from "./HeroTitle";
import { useLoading } from "@/components/ui/LoadingContext";
import { HeroIngredients } from "./HeroIngredients";

export default function AnimatedHero() {
  const { isLoading } = useLoading();
  const baseDelay = isLoading ? 2.5 : 0; // Base delay after loader finishes

  return (
    <div className="relative w-full aspect-[1362/804] overflow-hidden">
      <div className="absolute inset-0 z-20">
        <HeroTitle initialDelay={baseDelay} />
      </div>
      <div className="absolute inset-0 z-20">
        <HeroProductImage initialDelay={baseDelay + 0.3} />
      </div>
      <div className="absolute inset-0 z-10">
        <HeroIngredients initialDelay={baseDelay + 0.5} />
      </div>
      {/* <div className="absolute inset-0 z-10 opacity-30">
        <HeroOrnaments />
      </div> */}
    </div>
  );
}
