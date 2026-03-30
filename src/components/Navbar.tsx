"use client";

import { useCartStore } from "@/store/cart";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const { totalItems, toggleCart } = useCartStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-700 ease-out border-b border-[#111111]/10 ${
        scrolled ? "bg-[#e6dfd1]/95 backdrop-blur-md py-4 shadow-sm" : "py-6 bg-transparent"
      }`}
    >
      <div className="absolute top-1 left-4 right-4 h-[1px] bg-[#111111]/10 hidden md:block" />
      
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center relative">
        
        {/* Left: Menu */}
        <div className="flex-1 flex justify-start">
          <button className="text-[#111111] hover:text-[#b39b74] transition-colors flex items-center gap-3 group">
            <Menu className="w-5 h-5 stroke-[1.5]" />
            <span className="hidden md:block text-[10px] tracking-[0.2em] uppercase font-mono group-hover:opacity-100 opacity-60 transition-opacity">Khulasa</span>
          </button>
        </div>

        {/* Center: Masthead */}
        <div className="flex-1 flex justify-center text-center">
          <Link
            href="/"
            className="text-2xl md:text-3xl font-serif tracking-[0.3em] text-[#111111] uppercase transition-opacity flex flex-col items-center"
          >
            <span>AFFORAH</span>
          </Link>
        </div>

        {/* Right: Cart */}
        <div className="flex-1 flex justify-end">
          <button
            onClick={toggleCart}
            className="text-[#111111] hover:text-[#b39b74] transition-colors flex items-center gap-2 group"
          >
            <span className="hidden md:block text-[10px] font-medium uppercase tracking-[0.2em] font-mono relative">
              Archive Slip
            </span>
            <div className="relative text-sm font-serif italic border border-[#111111]/20 rounded-full w-8 h-8 flex items-center justify-center bg-[#dbd4c4]">
              {totalItems}
            </div>
          </button>
        </div>

      </div>

      <div className="absolute bottom-1 left-4 right-4 h-[1px] bg-[#111111]/10 hidden md:block" />
    </motion.nav>
  );
}
