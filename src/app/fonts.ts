import { Noto_Sans_JP, Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notojp = Noto_Sans_JP({
  weight: ["400", "600"],
  variable: "--font-notojp",
  display: "swap",
  preload: false,
});

export { inter, notojp };
