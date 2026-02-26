import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Premier Flooring Specialists | 30+ Years of Expert Flooring",
  description:
    "Expert hardwood installation, luxury carpeting, tile, and commercial flooring solutions. Serving New Jersey with 30+ years of experience. Emergency water damage service available. Call 973-442-1182.",
  keywords:
    "flooring, hardwood, carpet, tile, commercial flooring, NJ flooring, water damage flooring",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
