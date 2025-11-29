import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";

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
      <body className={`antialiased ${manrope.className}`}>{children}</body>
    </html>
  );
}
