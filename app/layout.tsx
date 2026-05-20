import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dhandhara Developers | Elite Architectural Landmarks",
  description: "Ultra-luxury residential real estate and modern architectural landmarks for visionary investors and families.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${plusJakartaSans.variable} scroll-smooth antialiased`}
    >
      <body className="bg-ivory text-ink font-sans min-h-screen selection:bg-champagne/30 selection:text-ink">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
