// import { heroContent } from "@/data/inside-the-bite";
// import { PageHero } from "@/components/ui/PageHero";

import Image from "next/image";

export function InsideTheBiteHero() {
  return (
    <section className="aspect-[1280/641]">
      <div className="relative w-full aspect-[1280/641]">
        <Image
          src="/images/hero-ingredients.svg"
          alt="What's Inside the Bites Matters"
          fill
          priority
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
}
