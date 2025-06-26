import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { MinimalFooter } from "@/components/layout/MinimalFooter";
import { GiveUsAWoofHero } from "@/components/page/give-us-a-woof/Hero";
import { ContactInfo } from "@/components/page/give-us-a-woof/ContactInfo";

export const metadata = {
  title: "Give Us a Woof | Nourish",
  description: "Contact us at Nourish for any questions about our dog treats and products.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-ernest-beige">
      <Navbar />

      <main className="flex-grow flex flex-col">
        <GiveUsAWoofHero />
        <ContactInfo />
      </main>

      <MinimalFooter />
    </div>
  );
}
