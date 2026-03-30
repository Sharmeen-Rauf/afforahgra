"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { products } from "@/data/products";

/* ─── BOOK SPREADS: left = shayari, right = product image ─── */
const spreads = [
  {
    shayari: [
      "سیاہ ریشم کی تاروں میں",
      "بُنی ہوئی ایک خاموش داستان۔",
    ],
    english: "A silent tale woven into black silk threads.",
    product: products[0],
  },
  {
    shayari: [
      "سادگی میں چھپی ہوئی",
      "ایک گہری کشش۔",
    ],
    english: "A deep allure hidden within simplicity.",
    product: products[1],
  },
  {
    shayari: [
      "سرد راتوں میں یادوں کی طرح",
      "لپٹ جانے والا گرم اون۔",
    ],
    english: "Warm wool that wraps you like memories on cold nights.",
    product: products[2],
  },
  {
    shayari: [
      "سنہری دھاگوں سے بُنی ہوئی",
      "ایک مدھم سی روشنی۔",
    ],
    english: "A soft glow woven from golden threads.",
    product: products[6],
  },
  {
    shayari: [
      "رات کے اندھیرے اور",
      "تنہائیوں کا ایک خوبصورت پیرہن۔",
    ],
    english: "A beautiful garment of darkness and solitude.",
    product: products[5],
  },
];

export default function BookSection() {
  const [currentSpread, setCurrentSpread] = useState(0);
  const [direction, setDirection] = useState(0);

  const total = spreads.length;
  const spread = spreads[currentSpread];

  const goTo = useCallback(
    (idx: number) => {
      if (idx < 0 || idx >= total) return;
      setDirection(idx > currentSpread ? 1 : -1);
      setCurrentSpread(idx);
    },
    [currentSpread, total]
  );

  const pageVariants = {
    enter: (d: number) => ({
      rotateY: d > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: { rotateY: 0, opacity: 1 },
    exit: (d: number) => ({
      rotateY: d > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  return (
    <section className="relative py-32 md:py-48 px-4 overflow-hidden">
      {/* Section header */}
      <div className="text-center mb-20">
        <span className="text-[9px] uppercase tracking-[0.4em] font-mono text-[var(--color-text)]/40 block mb-4">
          The Open Book
        </span>
        <h2 className="text-4xl md:text-7xl font-serif text-[var(--color-text)] tracking-tight">
          Safha Ba Safha
        </h2>
        <p className="text-sm font-serif italic text-[var(--color-text)]/50 mt-3">
          Page by page — a story told through fabric and verse.
        </p>
      </div>

      {/* The Book */}
      <div
        className="relative max-w-5xl mx-auto"
        style={{ perspective: "1800px" }}
      >
        {/* Book shadow underneath */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-[var(--color-shadow)] rounded-[50%] blur-xl opacity-40" />

        {/* Book container */}
        <div className="relative bg-[var(--color-bg)] border border-[var(--color-text)]/10 shadow-2xl mx-auto">
          {/* Top book edge */}
          <div className="absolute -top-1 left-4 right-4 h-[2px] bg-[var(--color-accent)]/30" />
          <div className="absolute -top-2 left-8 right-8 h-[1px] bg-[var(--color-accent)]/15" />

          {/* Central spine */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[3px] bg-gradient-to-b from-[var(--color-accent)]/40 via-[var(--color-accent)]/20 to-[var(--color-accent)]/40 z-10" />
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-[6px] w-[1px] bg-[var(--color-shadow)] opacity-20 z-10" />
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 translate-x-[4px] w-[1px] bg-[var(--color-shadow)] opacity-20 z-10" />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSpread}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                rotateY: { type: "spring", stiffness: 80, damping: 25 },
                opacity: { duration: 0.5 },
              }}
              className="flex flex-col md:flex-row min-h-[450px] md:min-h-[550px]"
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              {/* LEFT PAGE: Shayari */}
              <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center items-center md:items-end text-center md:text-right relative">
                {/* Page number */}
                <span className="absolute top-6 left-6 text-[9px] font-mono text-[var(--color-text)]/20">
                  {currentSpread * 2 + 1}
                </span>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[var(--color-accent)]/20 hidden md:block" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[var(--color-accent)]/20 hidden md:block" />

                {/* Urdu Calligraphy */}
                <div className="max-w-sm" dir="rtl">
                  <div className="w-12 h-[1px] bg-[var(--color-accent)]/40 mb-8 ml-auto" />
                  {spread.shayari.map((line, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, filter: "blur(6px)" }}
                      animate={{ opacity: 0.9, filter: "blur(0px)" }}
                      transition={{
                        delay: 0.3 + i * 0.4,
                        duration: 1.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="font-urdu text-3xl md:text-4xl leading-[2.2] text-[var(--color-text)]"
                    >
                      {line}
                    </motion.p>
                  ))}
                  <div className="w-12 h-[1px] bg-[var(--color-accent)]/40 mt-8 ml-auto" />
                </div>

                {/* English translation */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.6, y: 0 }}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="font-serif italic text-sm text-[var(--color-text)]/50 mt-8 max-w-xs"
                >
                  &ldquo;{spread.english}&rdquo;
                </motion.p>
              </div>

              {/* RIGHT PAGE: Product Image */}
              <div className="w-full md:w-1/2 relative overflow-hidden min-h-[300px] md:min-h-0">
                {/* Page number */}
                <span className="absolute top-6 right-6 text-[9px] font-mono text-[var(--color-text)]/20 z-10">
                  {currentSpread * 2 + 2}
                </span>

                {/* Photo pasted into book */}
                <motion.div
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-4 md:inset-8 overflow-hidden shadow-inner"
                >
                  {/* The "pasted photo" border */}
                  <div className="absolute inset-0 border-[6px] border-[var(--color-bg)] z-10 pointer-events-none" />

                  {/* Tape strips */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-16 h-5 bg-[var(--color-accent)]/20 rotate-[-2deg] z-20 backdrop-blur-sm" />
                  <div className="absolute -bottom-1 right-8 w-12 h-4 bg-[var(--color-accent)]/15 rotate-[3deg] z-20 backdrop-blur-sm" />

                  <img
                    src={spread.product.image}
                    alt={spread.product.name}
                    className="w-full h-full object-cover sepia-[0.25] contrast-[1.05]"
                  />
                  {/* Vintage photo overlay */}
                  <div className="absolute inset-0 bg-[var(--color-bg)]/10 mix-blend-multiply" />
                </motion.div>

                {/* Handwritten product label */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="absolute bottom-2 md:bottom-4 left-4 md:left-8 right-4 md:right-8 z-20 flex justify-between items-end px-2"
                >
                  <div>
                    <p className="font-serif text-base md:text-lg text-[var(--color-text)]">
                      {spread.product.name}
                    </p>
                    <p className="text-[10px] font-mono text-[var(--color-accent)]">
                      PKR {spread.product.price.toLocaleString()}
                    </p>
                  </div>
                  <Link
                    href={`/product/${spread.product.id}`}
                    className="text-[9px] uppercase tracking-[0.2em] font-mono text-[var(--color-text)]/40 hover:text-[var(--color-accent)] transition-colors"
                  >
                    View →
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom book edge */}
          <div className="absolute -bottom-1 left-4 right-4 h-[2px] bg-[var(--color-accent)]/30" />
          <div className="absolute -bottom-2 left-8 right-8 h-[1px] bg-[var(--color-accent)]/15" />
        </div>
      </div>

      {/* Page Navigation */}
      <div className="flex items-center justify-center gap-8 mt-12">
        <button
          onClick={() => goTo(currentSpread - 1)}
          disabled={currentSpread === 0}
          className={`text-[10px] uppercase tracking-[0.3em] font-mono px-4 py-2 border border-[var(--color-text)]/10 transition-all ${
            currentSpread === 0
              ? "opacity-20 cursor-not-allowed"
              : "opacity-60 hover:opacity-100 hover:bg-[var(--color-text)] hover:text-[var(--color-bg)]"
          }`}
        >
          ← Turn Back
        </button>

        <div className="flex gap-3">
          {spreads.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                i === currentSpread
                  ? "bg-[var(--color-accent)] scale-150"
                  : "bg-[var(--color-text)]/15 hover:bg-[var(--color-text)]/30"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(currentSpread + 1)}
          disabled={currentSpread === total - 1}
          className={`text-[10px] uppercase tracking-[0.3em] font-mono px-4 py-2 border border-[var(--color-text)]/10 transition-all ${
            currentSpread === total - 1
              ? "opacity-20 cursor-not-allowed"
              : "opacity-60 hover:opacity-100 hover:bg-[var(--color-text)] hover:text-[var(--color-bg)]"
          }`}
        >
          Turn Page →
        </button>
      </div>
    </section>
  );
}
