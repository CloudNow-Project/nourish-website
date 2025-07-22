import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { MinimalFooter } from "@/components/layout/MinimalFooter";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { IconButton } from "@/components/ui/IconButton";
import { Instagram, TikTok, Youtube } from "@/components/ui/Icons";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

const EMAIL = "contact@nourishfordogs.com";
const SOCIALS = [
  {
    name: "Instagram",
    url: "https://instagram.com/heyofordogs",
    icon: <Instagram className="w-7 h-7 text-ernest-navy" />,
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@heyofordogs",
    icon: <TikTok className="w-7 h-7 text-ernest-navy" />,
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@heyofordogs",
    icon: <Youtube className="w-7 h-7 text-ernest-navy" />,
  },
];

export const metadata = {
  title: "Contact | Heyo",
  description: "Contact us at Heyo for any questions about our dog treats and products.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col relative bg-ernest-beige overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src="/images/hero/hero-contact.jpg"
          alt="Contact background"
          fill
          priority
          className="object-cover w-full h-full opacity-40"
          style={{ objectPosition: "center top" }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-ernest-beige/80" />
      </div>
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-16 relative pt-40">
        <AnimatedElement variant="fadeInDown" delay={0.1} className="mb-8 flex flex-col items-center">
          <SectionHeading
            heading="Let’s Connect!"
            subheading="Got a question, want to share a story, or just want to say hi? We’d love to hear from you!"
            variant="secondary"
            alignment="center"
            size="lg"
            bottomMargin="large"
          />
        </AnimatedElement>
        <AnimatedElement
          variant="fadeInUp"
          delay={0.2}
          className="w-full max-w-lg bg-white/90 rounded-3xl shadow-2xl p-10 flex flex-col items-center mb-8 backdrop-blur-md border border-white/60"
        >
          <div className="w-full flex flex-col items-center mb-8">
            <span className="text-base text-gray-500 mb-1">Email us anytime</span>
            <a href={`mailto:${EMAIL}`} className="text-xl font-semibold text-[#F6b656] hover:underline break-all">
              {EMAIL}
            </a>
          </div>
          <div className="w-full flex flex-col items-center mb-6">
            <span className="text-base text-gray-500 mb-2">Find us on social media</span>
            <div className="flex gap-6">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="hover:scale-110 transition-transform"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col items-center mt-6">
            <span className="text-base text-gray-500 mb-2">Order our treats online</span>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <IconButton
                href="https://shopee.co.id/heyofordogs"
                icon={<Image src="/images/logo/shopee-logo.png" alt="Shopee" width={24} height={24} />}
                className="bg-[#F65E42]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy on Shopee
              </IconButton>
              <IconButton
                href="https://www.tokopedia.com/heyo-superfood-dog-treats"
                icon={<Image src="/images/logo/tokped-logo.png" alt="Tokopedia" width={24} height={24} />}
                className="bg-[#5B9959]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy on Tokopedia
              </IconButton>
            </div>
          </div>
        </AnimatedElement>
        {/* Playful doggy cartoon accent */}
        <Image
          src="/images/doggy-cartoon.png"
          alt="Playful dog"
          width={180}
          height={180}
          className="hidden md:block absolute bottom-8 right-8 z-10 drop-shadow-xl animate-float"
          style={{ pointerEvents: "none" }}
        />
      </main>
      <MinimalFooter />
    </div>
  );
}
