import type { Metadata } from "next";
import "./globals.css";
import { quicksand, fredoka, sharpShooter } from "./fonts";

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
      <body
        className={`${quicksand.variable} ${fredoka.variable} ${sharpShooter.variable} antialiased font-sans overscroll-y-none`}
      >
        {children}
      </body>
    </html>
  );
}
