import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Component Imports
import Navbar from "@/components/Navbar/Navbar";
import CategorySelector from "@/components/CategorySelector/CategorySelector";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NewTech",
  description: "Buy the newest Iphones, tablets and latoptop here!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="pageWrapper">
          <Navbar />
          <CategorySelector />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
