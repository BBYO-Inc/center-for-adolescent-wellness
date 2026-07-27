import type { Metadata } from "next";
import { graphik } from "@/fonts/graphik";
import { gamay } from "@/fonts/gamay";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Center for Adolescent Wellness | BBYO",
  description:
    "Helping youth-serving organizations become places where all adolescents thrive — mentally, emotionally, and socially.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${graphik.variable} ${gamay.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
