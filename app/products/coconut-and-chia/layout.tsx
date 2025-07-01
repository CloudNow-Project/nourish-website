import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heyo Superfood Dog Treats - Omega Support Bites - Coconut & Chia",
  description: "Omega-rich superfood blend for a shiny coat and healthy digestion.",
};

export default function CoconutAndChiaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
