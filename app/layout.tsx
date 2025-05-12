import type { Metadata } from "next";
import "./globals.css";
import { quicksand, fredoka } from "./fonts";

export const metadata: Metadata = {
  title: "Nourish | Superfood Dog Treats",
  description: "Premium dog treats made with wholesome ingredients and none of the bad stuff.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${fredoka.variable} antialiased font-sans`}>{children}</body>
    </html>
  );
}
