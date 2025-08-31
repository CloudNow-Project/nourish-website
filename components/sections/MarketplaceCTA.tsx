"use client";

import Image from "next/image";
import { IconButton } from "@/components/ui/IconButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { WhatsApp } from "@/components/ui/Icons";

export function MarketplaceCTA() {
  return (
    <section className="relative">
      {/* White background section */}
      <div className="bg-ernest-beige pt-16 md:pt-20 pb-36 sm:pb-48 md:pb-72">
        <div className="container mx-auto px-4">
          <AnimatedElement variant="fadeInUp" delay={0.2}>
            <SectionHeading
              heading="Get Your Paws on Heyo!"
              subheading="Find our pawsome treats on your favorite marketplace"
              variant="secondary"
              alignment="center"
              bottomMargin="medium"
            />

            <div className="flex flex-col gap-4 items-center justify-center max-w-[320px]  md:max-w-xl mx-auto">
              <IconButton
                href="https://shopee.co.id/heyofordogs"
                icon={<Image src="/images/logo/shopee-logo.png" alt="Shopee" width={24} height={24} />}
                className="w-[280px] bg-[#F65E42] py-4 md:py-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Our Shopee Store
              </IconButton>
              <IconButton
                href="https://www.tokopedia.com/heyo-superfood-dog-treats"
                icon={<Image src="/images/logo/tokped-logo.png" alt="Tokopedia" width={24} height={24} />}
                className="w-[280px] bg-[#5B9959] py-4 md:py-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Our Tokopedia Store
              </IconButton>
              <IconButton
                href="https://wa.me/6282133127474?text=Hello!%20My%20dog%20is%20ready%20to%20drool%20more%20and%20would%20like%20to%20order%20some%20Heyo%20treats!%20🐶❤️"
                icon={<WhatsApp size={24} />}
                className="w-[280px] bg-[#25D366] py-4 md:py-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat with Heyo Admin
              </IconButton>
            </div>
          </AnimatedElement>
        </div>
      </div>

      {/* Orange background section */}
      <div className="bg-[#F6b656] h-32 md:h-40" />

      {/* Overlapping image */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-full px-4">
        <AnimatedElement variant="fadeInUp" delay={0.4}>
          <div className="relative w-full" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <Image
              src="/images/home/heyo-all-pouches.webp"
              alt="Heyo Dog Treats Collection"
              width={1000}
              height={600}
              className="w-full md:w-[800px] h-auto object-contain"
              priority
            />
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
