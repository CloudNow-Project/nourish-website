import { Quicksand, Fredoka } from "next/font/google";
import localFont from "next/font/local";

export const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});

export const fredoka = Fredoka({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fredoka",
});

export const sharpShooter = localFont({
  src: '../public/fonts/SharpShooter-Regular.otf',
  display: 'swap',
  variable: '--font-sharpshooter',
}); 