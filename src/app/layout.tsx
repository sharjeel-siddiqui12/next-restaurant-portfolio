import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Restaurant — Premium Pakistani Restaurant | Authentic Desi Cuisine",
  description:
    "Experience the finest Pakistani cuisine at Restaurant. Authentic Mughal recipes, handcrafted with tradition and served with luxury. Reserve your table today.",
  keywords: [
    "Pakistani restaurant",
    "desi food",
    "halal restaurant",
    "biryani",
    "karahi",
    "Karachi",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${dmSans.variable} antialiased bg-[#0A0705] text-cream`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
