import localFont from "next/font/local";

export const gamay = localFont({
  src: [
    { path: "./gamay-narrow-black.otf", weight: "900", style: "normal" },
    { path: "./gamay-narrow-black-italic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-gamay",
  display: "swap",
});
