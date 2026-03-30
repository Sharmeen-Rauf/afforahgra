"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { products } from "@/data/products";

const acts = [
  {
    type: "cover" as const,
    title: "Mehfil-e-Afforah",
    subtitle: "A Gathering of Verse & Fabric",
    urdu: "محفلِ اَفوراہ",
    bgVideo: "https://assets.mixkit.co/videos/preview/mixkit-lit-candle-in-the-dark-2625-large.mp4",
  },
  {
    type: "verse" as const,
    actNum: "I",
    speaker: "The Weaver",
    verse: [
      "Main ne dhaage se kaha,",
      "tu sirf dhaaga nahi —",
      "tu kisi ki yaad ka silsila hai.",
    ],
    verseEn: [
      "I said to the thread,",
      "you are not just a thread —",
      "you are the continuation of someone's memory.",
    ],
    product: products[0],
    bgVideo: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-woman-weaving-on-a-loom-41422-large.mp4",
  },
  {
    type: "verse" as const,
    actNum: "II",
    speaker: "The Dyer",
    verse: [
      "Rang laga ke dekh liya,",
      "magar asli rang —",
      "pehenne waale ka hota hai.",
    ],
    verseEn: [
      "I tried every dye,",
      "but the true color —",
      "belongs to the one who wears it.",
    ],
    product: products[8],
    bgVideo: "https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-water-238-large.mp4",
  },
  {
    type: "verse" as const,
    actNum: "III",
    speaker: "The Tailor",
    verse: [
      "Qainchi chalane se pehle,",
      "main kapre ki rooh sun'ta hoon —",
      "woh khud batata hai kahan se katna hai.",
    ],
    verseEn: [
      "Before I cut,",
      "I listen to the soul of the fabric —",
      "it tells me where it wants to be shaped.",
    ],
    product: products[9],
    bgVideo: "https://assets.mixkit.co/videos/preview/mixkit-slow-motion-of-particles-in-dark-background-26619-large.mp4",
  },
  {
    type: "verse" as const,
    actNum: "IV",
    speaker: "The Wearer",
    verse: [
      "Jab main yeh libaas pehanti hoon,",
      "mujhe lagta hai —",
      "koi purani kahani phir se shuru ho gayi.",
    ],
    verseEn: [
      "When I wear this garment,",
      "I feel —",
      "an old story has begun again.",
    ],
    product: products[5],
    bgVideo: "https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4",
  },
  {
    type: "end" as const,
    title: "The mehfil awaits your return.",
    subtitle: "Every visit reveals a new verse.",
    urdu: "محفل آپ کے انتظار میں ہے۔",
  },
];

const pageVariants = {
  enter: { opacity: 0, scale: 0.96 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.04 },
};

function VersePage({ act }: { act: (typeof acts)[1] }) {
  if (act.type !== "verse") return null;
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 md:px-16 py-12 text-center">
      {/* Candle glow at top */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)", filter: "blur(40px)" }} />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1.5 }} className="relative z-10 max-w-2xl">
        {/* Act & Speaker */}
        <span className="text-[9px] uppercase tracking-[0.4em] font-mono text-[var(--color-text)]/30 block mb-2">
          Act {act.actNum}
        </span>
        <span className="text-sm font-serif italic text-[var(--color-accent)] block mb-10">
          — {act.speaker} speaks
        </span>

        {/* English verse */}
        <div className="space-y-3 mb-12">
          {act.verseEn?.map((line: string, i: number) => (
            <motion.p key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ delay: 0.8 + i * 0.5, duration: 1.2 }}
              className="text-xl md:text-3xl font-serif text-[var(--color-text)] leading-relaxed italic"
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Separator */}
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 2, duration: 1 }}
          className="w-16 h-[1px] bg-[var(--color-accent)]/40 mx-auto mb-10" />

        {/* Urdu verse */}
        <div className="space-y-3 mb-12" dir="rtl">
          {act.verse?.map((line: string, i: number) => (
            <motion.p key={i}
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 0.85, filter: "blur(0px)" }}
              transition={{ delay: 2.5 + i * 0.4, duration: 1.5 }}
              className="font-urdu text-2xl md:text-4xl text-[var(--color-accent)] leading-[2]"
            >
              {line}
            </motion.p>
          ))}
        </div>
      </motion.div>

      {/* Product strip at bottom */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex items-center gap-6 bg-[var(--color-bg)]/80 backdrop-blur-sm border border-[var(--color-text)]/10 px-6 py-3"
      >
        <img src={act.product?.image} alt={act.product?.name} className="w-12 h-12 object-cover sepia-[0.3] rounded-sm" />
        <div className="text-left">
          <p className="font-serif text-sm text-[var(--color-text)]">{act.product?.name}</p>
          <p className="text-[10px] font-mono text-[var(--color-accent)]">PKR {act.product?.price?.toLocaleString()}</p>
        </div>
        <Link href={`/product/${act.product?.id}`} className="text-[8px] uppercase tracking-[0.2em] font-mono text-[var(--color-text)]/40 hover:text-[var(--color-accent)] transition-colors">
          View →
        </Link>
      </motion.div>
    </div>
  );
}

export default function MehfilPage() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = acts.length;

  const goTo = useCallback((n: number) => {
    if (n < 0 || n >= total) return;
    setDirection(n > current ? 1 : -1);
    setCurrent(n);
  }, [current, total]);

  const act = acts[current];

  return (
    <div className="fixed inset-0 z-50 bg-[var(--color-bg)] overflow-hidden">
      {/* BG Video */}
      {"bgVideo" in act && act.bgVideo && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video key={act.bgVideo} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-10 sepia-[0.5] grayscale-[0.4] blur-[2px]">
            <source src={act.bgVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[var(--color-bg)]/70" />
        </div>
      )}

      {/* Dim vignette */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 40%, var(--color-bg) 100%)" }} />

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div key={current} variants={pageVariants} initial="enter" animate="center" exit="exit"
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-[2]"
        >
          {act.type === "cover" && (
            <div className="w-full h-full flex flex-col items-center justify-center text-center px-8">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }}>
                <div className="text-5xl mb-8">🕯️</div>
                <div className="font-urdu text-4xl md:text-6xl mb-6 text-[var(--color-accent)]" dir="rtl">{act.urdu}</div>
                <div className="w-20 h-[1px] bg-[var(--color-text)]/20 mx-auto mb-6" />
                <h1 className="text-4xl md:text-8xl font-serif text-[var(--color-text)] tracking-tight">{act.title}</h1>
                <p className="text-sm tracking-[0.4em] uppercase font-mono mt-4 text-[var(--color-text)]/50">{act.subtitle}</p>
              </motion.div>
            </div>
          )}
          {act.type === "verse" && <VersePage act={act} />}
          {act.type === "end" && (
            <div className="w-full h-full flex flex-col items-center justify-center text-center px-8">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }}>
                <div className="text-4xl mb-6">🕯️</div>
                <div className="font-urdu text-2xl md:text-4xl mb-6 text-[var(--color-accent)]" dir="rtl">{act.urdu}</div>
                <div className="w-20 h-[1px] bg-[var(--color-text)]/20 mx-auto mb-6" />
                <h2 className="text-3xl md:text-6xl font-serif text-[var(--color-text)]">{act.title}</h2>
                <p className="text-base font-serif italic text-[var(--color-text)]/50 mt-3">{act.subtitle}</p>
                <Link href="/" className="inline-block mt-12 text-[10px] uppercase tracking-[0.3em] font-mono border border-[var(--color-text)]/20 px-8 py-3 hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-all">
                  Leave the Mehfil
                </Link>
              </motion.div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute bottom-0 left-0 right-0 z-[10] flex items-center justify-between px-6 md:px-12 py-6">
        <button onClick={() => goTo(current - 1)} disabled={current === 0}
          className={`text-[10px] uppercase tracking-[0.3em] font-mono px-4 py-2 border border-[var(--color-text)]/10 transition-all ${current === 0 ? "opacity-20 cursor-not-allowed" : "opacity-70 hover:opacity-100 hover:bg-[var(--color-text)] hover:text-[var(--color-bg)]"}`}>
          ← Prev Act
        </button>
        <div className="flex gap-2">
          {acts.map((_, i) => (
            <button key={i} onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${i === current ? "bg-[var(--color-accent)] scale-150" : "bg-[var(--color-text)]/15 hover:bg-[var(--color-text)]/30"}`} />
          ))}
        </div>
        <button onClick={() => goTo(current + 1)} disabled={current === total - 1}
          className={`text-[10px] uppercase tracking-[0.3em] font-mono px-4 py-2 border border-[var(--color-text)]/10 transition-all ${current === total - 1 ? "opacity-20 cursor-not-allowed" : "opacity-70 hover:opacity-100 hover:bg-[var(--color-text)] hover:text-[var(--color-bg)]"}`}>
          Next Act →
        </button>
      </div>

      <Link href="/" className="absolute top-6 right-6 md:top-8 md:right-12 z-[10] text-[10px] uppercase tracking-[0.3em] font-mono text-[var(--color-text)]/50 hover:text-[var(--color-accent)] transition-colors border border-[var(--color-text)]/10 px-4 py-2">
        ✕ Leave Mehfil
      </Link>
      <div className="absolute top-6 left-6 md:top-8 md:left-12 z-[10]">
        <p className="text-[9px] uppercase tracking-[0.4em] font-mono text-[var(--color-text)]/40">Mehfil-e-Afforah</p>
      </div>
    </div>
  );
}
