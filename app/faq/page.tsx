import { Navbar } from "@/components/layout/Navbar";
import { MinimalFooter } from "@/components/layout/MinimalFooter";
import { PawRentsAskHero } from "@/components/page/pawrents-ask/Hero";
import { FaqSection } from "@/components/page/pawrents-ask/Faq";
import { CtaSection } from "@/components/page/pawrents-ask/Cta";

export const metadata = {
  title: "Pawrents Ask | Heyo",
  description: "Find answers to common questions about our dog treats and ingredients.",
};

export default function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <PawRentsAskHero />
      <FaqSection />
      <CtaSection />

      <MinimalFooter />
    </div>
  );
}
