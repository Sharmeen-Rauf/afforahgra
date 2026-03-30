import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar";
import CartPanel from "@/components/CartPanel";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: 'swap' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: 'swap' });
const urdu = Noto_Nastaliq_Urdu({ subsets: ["arabic"], variable: "--font-urdu", weight: ["400", "700"], display: 'swap' });

export const metadata: Metadata = {
  title: "Afforah | Waqt ke daaman se",
  description: "Libaas sirf pehna nahi jaata, mehsoos kiya jaata hai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${urdu.variable}`}>
      <body className="antialiased font-sans relative overflow-x-hidden min-h-screen">
        <CustomCursor />
        {/* Old Paper Ambient Lighting */}
        <div className="fixed inset-0 pointer-events-none z-0 mix-blend-multiply opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[var(--color-bg-alt)]/20 to-[var(--color-shadow)]" />
        
        {/* Physical Paper Borders */}
        <div className="fixed top-0 left-0 right-0 h-4 bg-gradient-to-b from-[#b8a995]/40 to-transparent z-[9999] pointer-events-none" />
        <div className="fixed bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-[#b8a995]/40 to-transparent z-[9999] pointer-events-none" />
        <div className="fixed top-0 bottom-0 left-0 w-4 bg-gradient-to-r from-[#b8a995]/40 to-transparent z-[9999] pointer-events-none" />
        <div className="fixed top-0 bottom-0 right-0 w-4 bg-gradient-to-l from-[#b8a995]/40 to-transparent z-[9999] pointer-events-none" />

        {/* Global Paper Grain */}
        <div className="desi-paper-overlay" />
        
        <SmoothScroll>
          <div className="pt-24 md:pt-[7.5rem]" /> 
          <Navbar />
          <CartPanel />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
