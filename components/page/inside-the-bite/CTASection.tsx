import React from "react";
import Image from "next/image";
import { IconButton } from "@/components/ui/IconButton";
import { heroContent } from "@/data/home";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            heading="Ready to Choose Better for Your Pup?"
            subheading="Treat your furry bestie to something that's actually good for them. From belly-happy bites to superfood-packed snacks — they'll love every crunch."
            variant="secondary"
            alignment="center"
            size="lg"
            bottomMargin="medium"
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <IconButton
              href={heroContent.primaryCta.url}
              icon={<Image src="/images/logo/shopee-logo.png" alt="Shopee" width={24} height={24} />}
              className="bg-[#F65E42]"
            >
              Buy on Shopee
            </IconButton>
            <IconButton
              href={heroContent.secondaryCta.url}
              icon={<Image src="/images/logo/tokped-logo.png" alt="Tokopedia" width={24} height={24} />}
              className="bg-[#5B9959]"
            >
              Buy on Tokopedia
            </IconButton>
          </div>
        </div>
      </div>
    </section>
  );
}
