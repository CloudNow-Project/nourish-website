import type { Metadata } from "next";
import "./globals.css";
import { quicksand, fredoka, sharpshooter, agrandir } from "./fonts";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { LoadingProvider } from "@/components/ui/LoadingContext";
import { WhatsApp } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Heyo | Superfood Dog Treats",
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
        className={`${quicksand.variable} ${fredoka.variable} ${sharpshooter.variable} ${agrandir.variable} antialiased font-sans overscroll-y-none`}
      >
        <LoadingProvider>
          <LoadingScreen />
          <div className="fixed bottom-3 right-3 md:bottom-5 md:right-5 z-50">
            <a
              href="https://wa.me/6282133127474?text=Hello!%20My%20dog%20is%20ready%20to%20drool%20more%20and%20would%20like%20to%20order%20some%20Heyo%20treats!%20🐶❤️"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-inherit no-underline"
            >
              <WhatsApp size={40} />
            </a>
          </div>
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
