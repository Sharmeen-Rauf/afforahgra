"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { products } from "@/data/products";

const stations = [
  {
    type: "cover" as const,
    title: "Safar-e-Afforah",
    subtitle: "The Journey of Threads",
    urdu: "سفرِ اَفوراہ",
    bgVideo: "https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-down-702-large.mp4",
  },
  {
    type: "station" as const,
    stationNum: "01",
    city: "Karachi",
    time: "06:15 AM",
    title: "Where It All Begins",
    body: "The first stitch was pulled in a small workshop near Saddar. The air smelled of chai and fresh cotton. Every brand has a birthplace — ours smells like the sea.",
    urdu: "ہر سفر ایک قدم سے شروع ہوتا ہے۔",
    product: products[3],
    bgVideo: "https://assets.mixkit.co/videos/preview/mixkit-sun-rays-over-forest-702-large.mp4",
  },
  {
    type: "station" as const,
    stationNum: "02",
    city: "Lahore",
    time: "02:30 PM",
    title: "The City of Gardens",
    body: "Lahore taught us that beauty is never hurried. In its walled city, we found patterns in the brickwork that became our earliest inspirations. The old meets the bold here.",
    urdu: "لاہور نے ہمیں سکھایا کہ خوبصورتی کبھی جلدی نہیں کرتی۔",
    product: products[10],
    bgVideo: "https://assets.mixkit.co/videos/preview/mixkit-golden-particles-floating-in-the-air-in-slow-motion-41504-large.mp4",
  },
  {
    type: "station" as const,
    stationNum: "03",
    city: "Multan",
    time: "05:45 PM",
    title: "The Golden Threads",
    body: "Multan's sun bleaches everything except memory. Here, the dyers still mix haldi with sunset light. Our golden thread collection was born from watching their hands work.",
    urdu: "ملتان کی دھوپ ہر چیز کو سنہرا کر دیتی ہے۔",
    product: products[6],
    bgVideo: "https://assets.mixkit.co/videos/preview/mixkit-white-sand-beach-and-palm-trees-1564-large.mp4",
  },
  {
    type: "station" as const,
    stationNum: "04",
    city: "Hunza",
    time: "09:00 PM",
    title: "Where Silence Wears Wool",
    body: "At 8,000 feet, fabric means survival. The women of Hunza knit stories into every shawl — tales of patience stitched during long winters when the world outside is white and still.",
    urdu: "جہاں خاموشی اون پہنتی ہے۔",
    product: products[2],
    bgVideo: "https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4",
  },
  {
    type: "end" as const,
    title: "The journey never ends.",
    subtitle: "It only changes tracks.",
    urdu: "سفر کبھی ختم نہیں ہوتا — صرف پٹری بدلتی ہے۔",
  },
];

const pageVariants = {
  enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
};

function StationPage({ s }: { s: (typeof stations)[1] }) {
  if (s.type !== "station") return null;
  return (
    <div className="relative w-full h-full flex flex-col md:flex-row items-stretch">
      {/* Left: Ticket stub style info */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-8 md:px-16 py-8 relative">
        {/* Dashed ticket border */}
        <div className="absolute top-4 bottom-4 right-0 w-[1px] border-r border-dashed border-[var(--color-text)]/15 hidden md:block" />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1.2 }}>
          {/* Station badge */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full border-2 border-[var(--color-accent)] flex items-center justify-center">
              <span className="text-[10px] font-mono font-bold text-[var(--color-accent)]">{s.stationNum}</span>
            </div>
            <div>
              <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-[var(--color-text)]/40">{s.time}</p>
              <p className="text-2xl md:text-4xl font-serif text-[var(--color-text)] tracking-tight">{s.city}</p>
            </div>
          </div>

          <h2 className="text-xl md:text-3xl font-serif italic text-[var(--color-text)]/80 mb-6">{s.title}</h2>

          <p className="text-sm md:text-base leading-relaxed text-[var(--color-text)]/70 font-serif max-w-md">{s.body}</p>

          <div className="mt-10 pt-6 border-t border-[var(--color-text)]/10">
            <p className="font-urdu text-xl md:text-2xl text-[var(--color-accent)] leading-loose" dir="rtl">{s.urdu}</p>
          </div>
        </motion.div>
      </div>

      {/* Right: Product */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
        <motion.div initial={{ scale: 1.15, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 2 }} className="absolute inset-0">
          <img src={s.product?.image} alt={s.product?.name} className="w-full h-full object-cover sepia-[0.3]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)]/60 to-transparent" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="absolute bottom-8 right-8 z-10 bg-[var(--color-bg)]/90 backdrop-blur-sm px-5 py-3 border border-[var(--color-text)]/10">
          <p className="text-[9px] uppercase tracking-[0.3em] font-mono text-[var(--color-text)]/50">From this station</p>
          <p className="font-serif text-lg text-[var(--color-text)]">{s.product?.name}</p>
          <p className="text-sm text-[var(--color-accent)] font-mono mt-1">PKR {s.product?.price?.toLocaleString()}</p>
          <Link href={`/product/${s.product?.id}`} className="text-[8px] uppercase tracking-[0.2em] font-mono text-[var(--color-text)]/40 hover:text-[var(--color-accent)] transition-colors mt-2 block">
            View →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default function SafarPage() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = stations.length;

  const goTo = useCallback((n: number) => {
    if (n < 0 || n >= total) return;
    setDirection(n > current ? 1 : -1);
    setCurrent(n);
  }, [current, total]);

  const s = stations[current];

  return (
    <div className="fixed inset-0 z-50 bg-[var(--color-bg)] overflow-hidden">
      {/* BG Video */}
      {"bgVideo" in s && s.bgVideo && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video key={s.bgVideo} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-10 sepia-[0.5] grayscale-[0.3] blur-[1px]">
            <source src={s.bgVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[var(--color-bg)]/60" />
        </div>
      )}

      {/* Train track line */}
      <div className="absolute top-0 bottom-0 left-8 md:left-16 w-[2px] bg-[var(--color-text)]/10 z-[3]">
        {stations.map((_, i) => (
          <div key={i} className="absolute left-1/2 -translate-x-1/2" style={{ top: `${(i / (total - 1)) * 100}%` }}>
            <div className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${i === current ? "bg-[var(--color-accent)] border-[var(--color-accent)] scale-125" : "bg-[var(--color-bg)] border-[var(--color-text)]/20"}`} />
          </div>
        ))}
      </div>

      {/* Page content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div key={current} custom={direction} variants={pageVariants} initial="enter" animate="center" exit="exit"
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-[2]"
        >
          {s.type === "cover" && (
            <div className="w-full h-full flex flex-col items-center justify-center text-center px-8">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }}>
                <div className="font-urdu text-4xl md:text-6xl mb-6 text-[var(--color-accent)]" dir="rtl">{s.urdu}</div>
                <div className="w-20 h-[1px] bg-[var(--color-text)]/20 mx-auto mb-6" />
                <h1 className="text-4xl md:text-8xl font-serif text-[var(--color-text)] tracking-tight">{s.title}</h1>
                <p className="text-sm tracking-[0.4em] uppercase font-mono mt-4 text-[var(--color-text)]/50">{s.subtitle}</p>
              </motion.div>
            </div>
          )}
          {s.type === "station" && <StationPage s={s} />}
          {s.type === "end" && (
            <div className="w-full h-full flex flex-col items-center justify-center text-center px-8">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }}>
                <div className="font-urdu text-2xl md:text-4xl mb-6 text-[var(--color-accent)]" dir="rtl">{s.urdu}</div>
                <div className="w-20 h-[1px] bg-[var(--color-text)]/20 mx-auto mb-6" />
                <h2 className="text-3xl md:text-6xl font-serif text-[var(--color-text)]">{s.title}</h2>
                <p className="text-base font-serif italic text-[var(--color-text)]/50 mt-3">{s.subtitle}</p>
                <Link href="/" className="inline-block mt-12 text-[10px] uppercase tracking-[0.3em] font-mono border border-[var(--color-text)]/20 px-8 py-3 hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-all">
                  Return Home
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
          ← Prev Station
        </button>
        <span className="text-[9px] font-mono tracking-[0.3em] text-[var(--color-text)]/40 uppercase">
          Station {current + 1} / {total}
        </span>
        <button onClick={() => goTo(current + 1)} disabled={current === total - 1}
          className={`text-[10px] uppercase tracking-[0.3em] font-mono px-4 py-2 border border-[var(--color-text)]/10 transition-all ${current === total - 1 ? "opacity-20 cursor-not-allowed" : "opacity-70 hover:opacity-100 hover:bg-[var(--color-text)] hover:text-[var(--color-bg)]"}`}>
          Next Station →
        </button>
      </div>

      <Link href="/" className="absolute top-6 right-6 md:top-8 md:right-12 z-[10] text-[10px] uppercase tracking-[0.3em] font-mono text-[var(--color-text)]/50 hover:text-[var(--color-accent)] transition-colors border border-[var(--color-text)]/10 px-4 py-2">
        ✕ Disembark
      </Link>
      <div className="absolute top-6 left-24 md:top-8 md:left-28 z-[10]">
        <p className="text-[9px] uppercase tracking-[0.4em] font-mono text-[var(--color-text)]/40">Safar-e-Afforah</p>
      </div>
    </div>
  );
}
