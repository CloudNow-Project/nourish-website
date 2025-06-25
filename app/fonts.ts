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

export const sharpshooter = localFont({
  src: '../public/fonts/SharpShooter-Regular.otf',
  display: 'swap',
  variable: '--font-sharpshooter',
});

export const agrandir = localFont({
  src: [
    {
      path: "../public/fonts/agrandir/Agrandir-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/agrandir/Agrandir-GrandLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/agrandir/Agrandir-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/agrandir/Agrandir-TextBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/agrandir/Agrandir-GrandHeavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/agrandir/Agrandir-WideBlackItalic.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../public/fonts/agrandir/Agrandir-WideLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/agrandir/Agrandir-Narrow.otf",
      style: "normal",
    },
    {
      path: "../public/fonts/agrandir/Agrandir-Tight.otf",
      style: "normal",
    },
  ],
  variable: "--font-agrandir",
  display: "swap",
}); 