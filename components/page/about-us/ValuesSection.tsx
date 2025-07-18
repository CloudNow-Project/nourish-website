import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

export function ValuesSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          heading="Our Nourishing Values"
          variant="default"
          alignment="center"
          size="lg"
          bottomMargin="medium"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Value 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-40 h-40 mx-auto mb-6 relative">
              <Image src="/images/about/heyo-values-01.jpg" alt="Health Conscious" fill className="object-contain" />
            </div>
            <div className="text-[#F6b656] text-lg md:text-xl font-normal">
              Using no colouring, preservatives or other additives.
            </div>
          </div>
          {/* Value 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-40 h-40 mx-auto mb-6 relative">
              <Image src="/images/about/heyo-values-02.jpg" alt="Trustworthy" fill className="object-contain" />
            </div>
            <div className="text-[#F6b656] text-lg md:text-xl font-normal">Clean, socially responsible.</div>
          </div>
          {/* Value 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-40 h-40 mx-auto mb-6 relative">
              <Image src="/images/about/heyo-values-03.jpg" alt="Nutrition First" fill className="object-contain" />
            </div>
            <div className="text-[#F6b656] text-lg md:text-xl font-normal">
              Creating products that have extra benefit for pups
            </div>
          </div>
        </div>
        {/* Bottom note speech bubble */}
        <div className="max-w-3xl mx-auto mt-8">
          <div
            className="bg-[#F6b656] text-white text-xl md:text-2xl font-display px-8 py-6 rounded-[2rem] shadow-lg text-center relative"
            style={{ borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}
          >
            <span className="block">
              We focus on multipurpose products that serve as both treats and meal enhancers, combining nutrition with
              functionality, and are shelf stable without preservatives.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
