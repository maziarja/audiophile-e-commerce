import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import BrandStory from "../components/share/BrandStory";
import Footer from "../components/share/Footer";
import Navbar from "@/components/share/Navbar";

export const metadata: Metadata = {
  title: {
    default: "audiophile-e-commerce",
    template: "%s | audiophile-e-commerce",
  },
  description:
    "Audiophile is a premium e-commerce site offering high-end audio gear with a clean design, smooth shopping experience, and detailed product pages for true sound enthusiasts.",
};

const manrope = Manrope({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${manrope.className}`}>
        {
          <>
            {/* <Navbar /> */}
            {children}
            <BrandStory className="mb-30 md:mb-24 lg:mb-59.25" />
            <Footer />
          </>
        }
      </body>
    </html>
  );
}
