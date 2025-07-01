import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heyo Superfood Dog Treats - Fibre Support Bites - Strawberry and Carrot",
  description: "Fibre Support Bites with Beetroot Powder & Oatmeal. Perfect for digestive health.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
