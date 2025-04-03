import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " Portfolio | Thanat ",
  description: "Portfolio website of Thanat Thincheelong",
  keywords: "Portfolio",
  authors: [{ name: "Thanat Thincheelong" }],
  creator: "Thanat Thincheelong",
  openGraph: {
    title: "Thanat Thincheelong | Developer",
    description: "Portfolio website of Thanat Thincheelong.",
    type: "website",
    locale: "th_TH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
