import { BBH_Sans_Hegarty, Numans, Stack_Sans_Notch } from "next/font/google";

export const bbhSansHegarty = BBH_Sans_Hegarty({
  variable: "--font-bbhSans",
  weight: ["400"],
  subsets: ["latin"],
});

export const stackSansNotch = Stack_Sans_Notch({
  variable: "--font-stack",
  subsets: ["latin"],
});

export const numans = Numans({
  variable: "--font-numans",
  weight: ["400"],
  subsets: ["latin"],
});
