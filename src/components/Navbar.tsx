"use client";

import { useCartStore } from "@/store/cart";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMoodStore } from "@/store/mood";

export default function Navbar() {
  const { totalItems, toggleCart } = useCartStore();
  const { currentMood, setMood } = useMoodStore();
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
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-700 ease-out border-b border-faded-ink/10 ${
        scrolled ? "bg-old-paper/95 backdrop-blur-md py-4 shadow-sm" : "py-6 bg-transparent"
      }`}
    >
      <div className="absolute top-1 left-4 right-4 h-[1px] bg-faded-ink/10 hidden md:block" />
      
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center relative">
        
        {/* Left: Waqt Mood Switcher */}
        <div className="flex-1 flex justify-start items-center gap-4">
          <span className="hidden md:block text-[9px] uppercase tracking-[0.3em] font-mono text-faded-ink opacity-50">
            Waqt:
          </span>
          <div className="flex gap-2">
            {(['subah', 'shaam', 'raat'] as const).map((mood) => (
              <button
                key={mood}
                onClick={() => setMood(mood)}
                className={`text-[9px] font-mono uppercase tracking-[0.2em] transition-all px-2 py-1 border ${
                  currentMood === mood 
                    ? 'border-deep-ink text-old-paper bg-deep-ink' 
                    : 'border-transparent text-faded-ink hover:border-faded-ink/20 opacity-60 hover:opacity-100'
                }`}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>

        {/* Center: Masthead */}
        <div className="flex-1 flex justify-center text-center">
          <Link
            href="/"
            className="text-2xl md:text-3xl font-serif tracking-[0.3em] text-deep-ink uppercase transition-opacity flex flex-col items-center"
          >
            <span>AFFORAH</span>
          </Link>
        </div>

        {/* Right: Dastaan + Cart */}
        <div className="flex-1 flex justify-end items-center gap-6">
          <Link
            href="/dastaan"
            className="hidden md:block text-[10px] font-mono uppercase tracking-[0.2em] text-deep-ink/60 hover:text-dusty-gold transition-colors border-r border-deep-ink/10 pr-6"
          >
            Dastaan
          </Link>
          <button
            onClick={toggleCart}
            className="text-deep-ink hover:text-dusty-gold transition-colors flex items-center gap-2 group"
          >
            <span className="hidden md:block text-[10px] font-medium uppercase tracking-[0.2em] font-mono relative">
              Archive Slip
            </span>
            <div className="relative text-sm font-serif italic border border-deep-ink/20 rounded-full w-8 h-8 flex items-center justify-center bg-dark-paper">
              {totalItems}
            </div>
          </button>
        </div>

      </div>

      <div className="absolute bottom-1 left-4 right-4 h-[1px] bg-faded-ink/10 hidden md:block" />
    </motion.nav>
  );
}
