import { SectionHeading } from "@/components/ui/SectionHeading";
import { CanadianFlag, IndonesianFlag } from "@/components/ui/Icons";
import Image from "next/image";

export function TeamSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F6b656]">
      <div className="container mx-auto px-4">
        <SectionHeading heading="Our Team" variant="primary" alignment="center" size="sm" bottomMargin="negative" />
        <SectionHeading
          heading="The Bailey Duo"
          subheading="Meet the paw-fect team behind Heyo"
          variant="primary"
          alignment="center"
          size="lg"
          bottomMargin="none"
        />
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 relative">
          {/* Left Dog Card */}
          <div className="flex flex-col items-center">
            <div className="relative w-[400px] h-[400px] mx-auto mb-4">
              <Image src="/images/about/bailey-01.png" alt="Bailey the CFO" fill className="object-contain" />
            </div>
            <div className="bg-[#fff6e0] rounded-xl px-4 py-3 text-[#ae431e] font-medium text-center max-w-xs mb-2">
              Bailey the CFO is an Aussie Doodle, like the title says, he is the fluffy one and his favourite toy is a
              ball.
            </div>
            <div className="bg-[#fff6e0] rounded-xl px-4 py-3 text-[#ae431e] font-medium text-center max-w-xs">
              He ensures that our products are of premium quality.
            </div>
          </div>

          {/* Fun Fact & Flags */}
          <div className="flex flex-col items-center gap-4 md:mx-8">
            <div className="flex gap-2 items-center">
              <IndonesianFlag size={36} />
              <CanadianFlag size={36} />
            </div>
            <div className="bg-white/80 rounded-xl p-4 text-center max-w-xs text-[#ae431e] font-semibold text-lg shadow">
              Fun Fact: the Bailey Duo are Canadian born pups and moved to Indonesia in 2024.
              <br />
              They used to be neighbours back in Canada!
              <br />
              <span className="block mt-2 text-[#ae431e] font-normal">
                They both love durian (in very small amount of course)
              </span>
            </div>
          </div>

          {/* Right Dog Card */}
          <div className="flex flex-col items-center">
            <div className="relative w-[400px] h-[400px] mx-auto mb-4">
              <Image src="/images/about/bailey-02.png" alt="Bailey the CEO" fill className="object-contain" />
            </div>
            <div className="bg-[#fff6e0] rounded-xl px-4 py-3 text-[#ae431e] font-medium text-center max-w-xs mb-2">
              Bailey the CEO is a Pitbull Terrier, like the title says, she is the foodie one and her favourite toy is a
              rope.
            </div>
            <div className="bg-[#fff6e0] rounded-xl px-4 py-3 text-[#ae431e] font-medium text-center max-w-xs">
              She ensures that our products are <span className="font-bold">#DroolWorthy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
