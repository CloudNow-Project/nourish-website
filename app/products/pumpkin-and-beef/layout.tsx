import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heyo Superfood Dog Treats - Healthy Power Bites - Pumpkin and Beef",
  description: "Pumpkin & Beef with Flax Seeds & Spirulina. A protein-rich treat packed with nourishing ingredients.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
