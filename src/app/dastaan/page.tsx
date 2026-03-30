"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { products } from "@/data/products";

/* ─────────────────── BOOK CHAPTERS ─────────────────── */
const chapters = [
  {
    // Cover page
    type: "cover" as const,
    title: "Dastaan-e-Afforah",
    subtitle: "The Living Chronicle",
    urdu: "داستانِ اَفوراہ",
    bgVideo: "https://assets.mixkit.co/videos/preview/mixkit-smoke-swirling-on-black-background-2462-large.mp4",
  },
  {
    type: "story" as const,
    chapterNum: "I",
    title: "The First Thread",
    body: "Every garment begins with a single thread. A thread pulled from the memory of grandmothers, dyed in the color of sunset over Lahore, and woven into something that outlives the weaver.",
    urdu: "ہر لباس ایک دھاگے سے شروع ہوتا ہے۔",
    product: products[0],
    bgVideo: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-woman-weaving-on-a-loom-41422-large.mp4",
  },
  {
    type: "poetry" as const,
    chapterNum: "II",
    title: "The Silent Color",
    lines: [
      "Rang khamosh hote hain,",
      "magar unki awaaz",
      "seenon mein goonj-ti hai.",
    ],
    urduLines: [
      "رنگ خاموش ہوتے ہیں",
      "مگر ان کی آواز",
      "سینوں میں گونجتی ہے۔",
    ],
    product: products[1],
    bgVideo: "https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-water-238-large.mp4",
  },
  {
    type: "story" as const,
    chapterNum: "III",
    title: "Warmth of Winters Past",
    body: "She used to wrap this shawl around cold shoulders on December evenings. Now it hangs in a glass wardrobe, folded the same way. Some fabrics carry the warmth of the person who wore them, long after they're gone.",
    urdu: "کچھ کپڑے وہ گرمی رکھتے ہیں جو پہننے والے کی ہوتی ہے۔",
    product: products[2],
    bgVideo: "https://assets.mixkit.co/videos/preview/mixkit-slow-motion-of-particles-in-dark-background-26619-large.mp4",
  },
  {
    type: "poetry" as const,
    chapterNum: "IV",
    title: "Streets That Remember",
    lines: [
      "Sheher ki galiyaan yaad rakhti hain,",
      "har qadam, har mudaqat,",
      "har ek khwaab jo adhoora reh gaya.",
    ],
    urduLines: [
      "شہر کی گلیاں یاد رکھتی ہیں",
      "ہر قدم، ہر مڑقت",
      "ہر ایک خواب جو ادھورا رہ گیا۔",
    ],
    product: products[3],
    bgVideo: "https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-down-702-large.mp4",
  },
  {
    type: "story" as const,
    chapterNum: "V",
    title: "The Golden Thread",
    body: "There was a time when gold wasn't wealth—it was light. Thread-workers in old Multan would weave sunlight into dupatta borders. Each stitch carried a silent prayer. That tradition doesn't live in museums. It lives in what you choose to wear.",
    urdu: "سنہری دھاگوں سے بُنی ہوئی ایک مدھم سی روشنی۔",
    product: products[6],
    bgVideo: "https://assets.mixkit.co/videos/preview/mixkit-golden-particles-floating-in-the-air-in-slow-motion-41504-large.mp4",
  },
  {
    type: "poetry" as const,
    chapterNum: "VI",
    title: "Night of Separation",
    lines: [
      "Shab-e-firaq mein bhi,",
      "ek khamosh hoodie ne",
      "mujhe gale lagaya tha.",
    ],
    urduLines: [
      "شبِ فراق میں بھی",
      "ایک خاموش ہوڈی نے",
      "مجھے گلے لگایا تھا۔",
    ],
    product: products[5],
    bgVideo: "https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4",
  },
  {
    // End page
    type: "end" as const,
    title: "The story continues…",
    subtitle: "with every thread you choose to wear.",
    urdu: "کہانی ابھی ختم نہیں ہوئی۔",
  },
];

/* ─────────────────── PAGE TURN VARIANTS ─────────────────── */
const pageVariants = {
  enter: (direction: number) => ({
    rotateY: direction > 0 ? 90 : -90,
    opacity: 0,
    scale: 0.95,
    originX: direction > 0 ? 0 : 1,
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    originX: 0.5,
  },
  exit: (direction: number) => ({
    rotateY: direction > 0 ? -90 : 90,
    opacity: 0,
    scale: 0.95,
    originX: direction > 0 ? 1 : 0,
  }),
};

/* ─────────────────── CHAPTER RENDERERS ─────────────────── */
function CoverPage({ chapter }: { chapter: typeof chapters[0] }) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="z-10 relative"
      >
        <div className="font-urdu text-5xl md:text-7xl mb-8 text-[var(--color-accent)]" dir="rtl">
          {chapter.urdu}
        </div>
        <div className="w-24 h-[1px] bg-[var(--color-text)]/20 mx-auto mb-8" />
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif tracking-tight text-[var(--color-text)]">
          {chapter.title}
        </h1>
        <p className="text-sm md:text-base tracking-[0.4em] uppercase font-mono mt-6 text-[var(--color-text)]/60">
          {chapter.subtitle}
        </p>
      </motion.div>
    </div>
  );
}

function StoryPage({ chapter }: { chapter: typeof chapters[1] }) {
  if (chapter.type !== "story") return null;
  return (
    <div className="relative w-full h-full flex flex-col md:flex-row items-stretch overflow-hidden">
      {/* Left: Product Image */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={chapter.product?.image}
            alt={chapter.product?.name}
            className="w-full h-full object-cover sepia-[0.3] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-bg)]/80" />
          <div className="absolute inset-0 bg-[var(--color-bg)]/20 mix-blend-multiply" />
        </motion.div>

        {/* Product tag */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-8 z-10 bg-[var(--color-bg)]/90 backdrop-blur-sm px-5 py-3 border border-[var(--color-text)]/10"
        >
          <p className="text-[9px] uppercase tracking-[0.3em] font-mono text-[var(--color-text)]/50">Archive Item</p>
          <p className="font-serif text-lg text-[var(--color-text)]">{chapter.product?.name}</p>
          <p className="text-sm text-[var(--color-accent)] font-mono mt-1">
            PKR {chapter.product?.price?.toLocaleString()}
          </p>
        </motion.div>
      </div>

      {/* Right: Story text */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-8 md:px-16 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          <span className="text-[9px] uppercase tracking-[0.4em] font-mono text-[var(--color-text)]/40 mb-4 block">
            Chapter {chapter.chapterNum}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[var(--color-text)] leading-tight mb-8">
            {chapter.title}
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[var(--color-text)]/80 font-serif italic max-w-md">
            {chapter.body}
          </p>

          {/* Urdu stamp */}
          <div className="mt-12 pt-8 border-t border-[var(--color-text)]/10">
            <p className="font-urdu text-2xl md:text-3xl text-[var(--color-accent)] leading-loose" dir="rtl">
              {chapter.urdu}
            </p>
          </div>

          {/* Link to product */}
          <Link
            href={`/product/${chapter.product?.id}`}
            className="inline-block mt-8 text-[10px] uppercase tracking-[0.3em] font-mono text-[var(--color-text)]/60 hover:text-[var(--color-accent)] transition-colors border-b border-[var(--color-text)]/10 pb-1"
          >
            View in Archive →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

function PoetryPage({ chapter }: { chapter: typeof chapters[2] }) {
  if (chapter.type !== "poetry") return null;
  return (
    <div className="relative w-full h-full flex flex-col md:flex-row items-stretch overflow-hidden">
      {/* Left: Poetry */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center md:items-end px-8 md:px-16 py-8 text-right">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <span className="text-[9px] uppercase tracking-[0.4em] font-mono text-[var(--color-text)]/40 mb-6 block text-center md:text-right">
            Chapter {chapter.chapterNum}
          </span>
          <h2 className="text-2xl md:text-4xl font-serif text-[var(--color-text)] mb-10 text-center md:text-right">
            {chapter.title}
          </h2>

          {/* English transliteration */}
          <div className="space-y-3 mb-12">
            {chapter.lines?.map((line: string, i: number) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 0.9, x: 0 }}
                transition={{ delay: 0.5 + i * 0.4, duration: 1.2 }}
                className="text-lg md:text-xl font-serif italic text-[var(--color-text)]/70 text-center md:text-right"
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* Urdu calligraphy */}
          <div className="space-y-4 border-t border-[var(--color-text)]/10 pt-8" dir="rtl">
            {chapter.urduLines?.map((line: string, i: number) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 0.85, filter: "blur(0px)" }}
                transition={{ delay: 1.5 + i * 0.5, duration: 2 }}
                className="font-urdu text-2xl md:text-4xl text-[var(--color-accent)] leading-loose"
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right: Product Image */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
        <motion.div
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={chapter.product?.image}
            alt={chapter.product?.name}
            className="w-full h-full object-cover sepia-[0.4] grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[var(--color-bg)]/70" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 right-8 z-10 bg-[var(--color-bg)]/90 backdrop-blur-sm px-5 py-3 border border-[var(--color-text)]/10"
        >
          <p className="text-[9px] uppercase tracking-[0.3em] font-mono text-[var(--color-text)]/50">Archive Item</p>
          <p className="font-serif text-lg text-[var(--color-text)]">{chapter.product?.name}</p>
          <p className="text-sm text-[var(--color-accent)] font-mono mt-1">
            PKR {chapter.product?.price?.toLocaleString()}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function EndPage({ chapter }: { chapter: typeof chapters[7] }) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center text-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="z-10 relative"
      >
        <div className="font-urdu text-3xl md:text-5xl mb-8 text-[var(--color-accent)]" dir="rtl">
          {chapter.urdu}
        </div>
        <div className="w-24 h-[1px] bg-[var(--color-text)]/20 mx-auto mb-8" />
        <h2 className="text-3xl md:text-6xl font-serif text-[var(--color-text)] tracking-tight">
          {chapter.title}
        </h2>
        <p className="text-base md:text-lg font-serif italic text-[var(--color-text)]/60 mt-4 max-w-md mx-auto">
          {chapter.subtitle}
        </p>

        <div className="mt-16 flex flex-col md:flex-row gap-6 items-center justify-center">
          <Link
            href="/"
            className="text-[10px] uppercase tracking-[0.3em] font-mono border border-[var(--color-text)]/20 px-8 py-3 hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-all"
          >
            Return to Archive
          </Link>
          <button
            onClick={() => window.scrollTo({ top: 0 })}
            className="text-[10px] uppercase tracking-[0.3em] font-mono text-[var(--color-text)]/50 hover:text-[var(--color-accent)] transition-colors"
          >
            Read Again
          </button>
        </div>
      </motion.div>
    </div>
  );
}

/* ─────────────────── MAIN BOOK COMPONENT ─────────────────── */
export default function DastaanPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const totalPages = chapters.length;

  const goToPage = useCallback((newPage: number) => {
    if (newPage < 0 || newPage >= totalPages) return;
    setDirection(newPage > currentPage ? 1 : -1);
    setCurrentPage(newPage);
  }, [currentPage, totalPages]);

  const nextPage = () => goToPage(currentPage + 1);
  const prevPage = () => goToPage(currentPage - 1);

  const chapter = chapters[currentPage];

  const renderChapter = () => {
    switch (chapter.type) {
      case "cover":
        return <CoverPage chapter={chapter as typeof chapters[0]} />;
      case "story":
        return <StoryPage chapter={chapter as typeof chapters[1]} />;
      case "poetry":
        return <PoetryPage chapter={chapter as typeof chapters[2]} />;
      case "end":
        return <EndPage chapter={chapter as typeof chapters[7]} />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[var(--color-bg)] overflow-hidden" style={{ perspective: "1500px" }}>

      {/* Background video layer */}
      {"bgVideo" in chapter && chapter.bgVideo && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video
            key={chapter.bgVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-15 sepia-[0.5] grayscale-[0.4] scale-105 blur-[1px]"
          >
            <source src={chapter.bgVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[var(--color-bg)]/60" />
        </div>
      )}

      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-30 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Book spine shadow */}
      <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 z-[5] pointer-events-none bg-gradient-to-r from-transparent via-[var(--color-shadow)] to-transparent opacity-30" />

      {/* Page Content with 3D Turn Animation */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentPage}
          custom={direction}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            rotateY: { type: "spring", stiffness: 100, damping: 30, mass: 1.5 },
            opacity: { duration: 0.6 },
            scale: { duration: 0.6 },
          }}
          className="absolute inset-0 z-[2]"
          style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
        >
          {renderChapter()}
        </motion.div>
      </AnimatePresence>

      {/* Navigation controls */}
      <div className="absolute bottom-0 left-0 right-0 z-[10] flex items-center justify-between px-6 md:px-12 py-6">
        {/* Prev */}
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`text-[10px] uppercase tracking-[0.3em] font-mono transition-all px-4 py-2 border border-[var(--color-text)]/10 ${
            currentPage === 0
              ? "opacity-20 cursor-not-allowed"
              : "opacity-70 hover:opacity-100 hover:bg-[var(--color-text)] hover:text-[var(--color-bg)]"
          }`}
        >
          ← Prev Page
        </button>

        {/* Page counter */}
        <div className="flex flex-col items-center gap-2">
          {/* Progress dots */}
          <div className="flex gap-2">
            {chapters.map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  i === currentPage
                    ? "bg-[var(--color-accent)] scale-125"
                    : "bg-[var(--color-text)]/20 hover:bg-[var(--color-text)]/40"
                }`}
              />
            ))}
          </div>
          <span className="text-[9px] font-mono tracking-[0.3em] text-[var(--color-text)]/40 uppercase">
            Page {currentPage + 1} of {totalPages}
          </span>
        </div>

        {/* Next */}
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className={`text-[10px] uppercase tracking-[0.3em] font-mono transition-all px-4 py-2 border border-[var(--color-text)]/10 ${
            currentPage === totalPages - 1
              ? "opacity-20 cursor-not-allowed"
              : "opacity-70 hover:opacity-100 hover:bg-[var(--color-text)] hover:text-[var(--color-bg)]"
          }`}
        >
          Next Page →
        </button>
      </div>

      {/* Close / Back to home */}
      <Link
        href="/"
        className="absolute top-6 right-6 md:top-8 md:right-12 z-[10] text-[10px] uppercase tracking-[0.3em] font-mono text-[var(--color-text)]/50 hover:text-[var(--color-accent)] transition-colors border border-[var(--color-text)]/10 px-4 py-2 hover:bg-[var(--color-text)]/5"
      >
        ✕ Close Book
      </Link>

      {/* Book title header */}
      <div className="absolute top-6 left-6 md:top-8 md:left-12 z-[10]">
        <p className="text-[9px] uppercase tracking-[0.4em] font-mono text-[var(--color-text)]/40">
          Dastaan-e-Afforah
        </p>
      </div>
    </div>
  );
}
