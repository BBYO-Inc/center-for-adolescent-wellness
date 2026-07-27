import localFont from "next/font/local";

export const graphik = localFont({
  src: [
    // Base (400) weight uses Graphik Medium site-wide, per design choice.
    { path: "./Graphik-Medium.otf", weight: "400", style: "normal" },
    { path: "./Graphik-RegularItalic.otf", weight: "400", style: "italic" },
    { path: "./Graphik-Semibold.otf", weight: "600", style: "normal" },
    { path: "./Graphik-Bold.otf", weight: "700", style: "normal" },
    { path: "./Graphik-BoldItalic.otf", weight: "700", style: "italic" },
  ],
  variable: "--font-graphik",
  display: "swap",
});
