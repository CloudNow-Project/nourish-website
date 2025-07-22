import { AnimatedElement } from "@/components/ui/AnimatedElement";
import Image from "next/image";

export function ProductGridSection() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      <AnimatedElement variant="fadeIn" delay={0.2}>
        <Image src="/images/home/product-grids.jpg" alt="Heyo Product Grid" fill className="object-cover" priority />
        {/* Optional overlay for better text readability if needed */}
        <div className="absolute inset-0"></div>
      </AnimatedElement>
    </section>
  );
}
