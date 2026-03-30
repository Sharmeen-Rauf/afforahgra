"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { products } from "@/data/products";

/* ─── SANDOOK ITEMS ─── */
const sandookItems = [
  {
    type: "photo" as const,
    icon: "📸",
    label: "Purani Tasveer",
    labelEn: "Old Photograph",
    shayari: "کچھ چیزیں وقت کے ساتھ پرانی نہیں ہوتیں… گہری ہو جاتی ہیں",
    shayariEn: "Some things don't grow old with time… they grow deeper.",
    product: products[0],
    rotation: -8,
    position: { x: -30, y: -15 },
  },
  {
    type: "letter" as const,
    icon: "✉️",
    label: "Purani Chitthi",
    labelEn: "A Forgotten Letter",
    shayari: "تم نے کہا تھا سفید رنگ تم پر اچھا لگتا ہے…",
    shayariEn: "You once said white looks beautiful on you…",
    product: products[9],
    rotation: 5,
    position: { x: 25, y: -5 },
  },
  {
    type: "fabric" as const,
    icon: "🧵",
    label: "Lapeta Hua Kapra",
    labelEn: "A Folded Fabric",
    shayari: "یہ صرف کپڑا نہیں، ایک لمحہ ہے",
    shayariEn: "This is not just cloth — it is a moment frozen in time.",
    product: products[2],
    rotation: -3,
    position: { x: -15, y: 10 },
  },
  {
    type: "ticket" as const,
    icon: "🎟️",
    label: "Purana Ticket",
    labelEn: "An Old Ticket Stub",
    shayari: "یادوں کا بھی ایک لباس ہوتا ہے",
    shayariEn: "Memories, too, have their own attire.",
    product: products[3],
    rotation: 12,
    position: { x: 20, y: 20 },
  },
];

/* ─── SANDOOK CHEST SVG ─── */
function ChestVisual({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative w-64 h-48 md:w-80 md:h-56 mx-auto">
      {/* Shadow beneath the chest */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-6 bg-[var(--color-shadow)] rounded-[50%] blur-xl opacity-50" />

      {/* Chest body */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%] rounded-b-lg overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #6B4226 0%, #4A2E17 40%, #3A2110 100%)",
          boxShadow: "inset 0 -4px 20px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)",
        }}
      >
        {/* wood grain lines */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="absolute w-full h-[1px] opacity-10"
            style={{ top: `${12 + i * 12}%`, background: "#000" }} />
        ))}
        {/* Metal band */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-[#8B7355] to-[#5C4033]" />
        {/* Keyhole */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-6 rounded-full bg-[#2A1A0A] border border-[#8B7355]/50 shadow-inner" />
        <div className="absolute top-7 left-1/2 -translate-x-1/2 w-2 h-4 rounded-b-sm bg-[#2A1A0A]" />
      </div>

      {/* Chest lid (opens) */}
      <motion.div
        animate={{ rotateX: isOpen ? -110 : 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-[50%] rounded-t-lg origin-bottom"
        style={{
          background: "linear-gradient(0deg, #6B4226 0%, #7B5233 60%, #8B6243 100%)",
          boxShadow: "inset 0 2px 10px rgba(255,255,255,0.06), 0 -2px 8px rgba(0,0,0,0.2)",
          transformStyle: "preserve-3d",
        }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="absolute w-full h-[1px] opacity-10"
            style={{ top: `${15 + i * 14}%`, background: "#000" }} />
        ))}
        {/* Metal clasp on lid */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-3 rounded-b-md bg-gradient-to-b from-[#8B7355] to-[#6B5030] shadow-md" />
      </motion.div>

      {/* Dust particles when opening */}
      <AnimatePresence>
        {isOpen && (
          <>
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 0, x: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.6, 0],
                  y: -(40 + Math.random() * 80),
                  x: (Math.random() - 0.5) * 100,
                  scale: [0, 1, 0.5],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  delay: 0.3 + Math.random() * 0.8,
                  ease: "easeOut",
                }}
                className="absolute rounded-full pointer-events-none"
                style={{
                  bottom: "40%",
                  left: `${30 + Math.random() * 40}%`,
                  width: `${2 + Math.random() * 3}px`,
                  height: `${2 + Math.random() * 3}px`,
                  background: "var(--color-accent)",
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Soft light rays when open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-[10%] left-[20%] right-[20%] bottom-[40%] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center bottom, var(--color-accent) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── ITEM DETAIL OVERLAY ─── */
function ItemReveal({
  item,
  onClose,
}: {
  item: (typeof sandookItems)[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--color-bg)]/95 backdrop-blur-md px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-3xl w-full flex flex-col md:flex-row gap-8 md:gap-12 items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: shayari / letter */}
        <div className="w-full md:w-1/2 text-center md:text-right flex flex-col items-center md:items-end">
          {/* Object icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="text-5xl mb-6"
          >
            {item.icon}
          </motion.div>

          <span className="text-[9px] uppercase tracking-[0.4em] font-mono text-[var(--color-text)]/40 mb-2">
            {item.labelEn}
          </span>

          {/* Letter / shayari card */}
          <div className="relative p-8 border border-[var(--color-text)]/10 bg-[var(--color-bg)] max-w-sm shadow-lg mt-4">
            {/* Aged paper texture */}
            <div className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='p'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23p)' opacity='0.3'/%3E%3C/svg%3E")`,
              }}
            />
            <motion.p
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 0.9, filter: "blur(0px)" }}
              transition={{ delay: 0.6, duration: 2 }}
              className="font-urdu text-2xl md:text-3xl text-[var(--color-text)] leading-[2.2] relative z-10"
              dir="rtl"
            >
              {item.shayari}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="font-serif italic text-sm text-[var(--color-text)]/50 mt-6 relative z-10"
            >
              &ldquo;{item.shayariEn}&rdquo;
            </motion.p>
          </div>
        </div>

        {/* Right: product reveal */}
        <div className="w-full md:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)", scale: 0.9 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ delay: 0.8, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[3/4] overflow-hidden shadow-2xl border border-[var(--color-text)]/10"
          >
            <img
              src={item.product.image}
              alt={item.product.name}
              className="w-full h-full object-cover sepia-[0.2]"
            />
            <div className="absolute inset-0 bg-[var(--color-bg)]/10 mix-blend-multiply" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-6 flex items-end justify-between"
          >
            <div>
              <h3 className="font-serif text-xl md:text-2xl text-[var(--color-text)]">
                {item.product.name}
              </h3>
              <p className="font-mono text-sm text-[var(--color-accent)] mt-1">
                PKR {item.product.price.toLocaleString()}
              </p>
            </div>
            <Link
              href={`/product/${item.product.id}`}
              className="text-[10px] uppercase tracking-[0.3em] font-mono border border-[var(--color-text)]/20 px-6 py-2 hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-all"
            >
              View in Archive
            </Link>
          </motion.div>
        </div>

        {/* Close hint */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-[10px] uppercase tracking-[0.3em] font-mono text-[var(--color-text)]/40 hover:text-[var(--color-accent)] transition-colors"
        >
          ✕ Close
        </button>
      </motion.div>
    </motion.div>
  );
}

/* ─── MAIN COMPONENT ─── */
export default function YaadonKaSandook() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<(typeof sandookItems)[0] | null>(null);

  return (
    <section className="relative py-32 md:py-48 px-4 overflow-hidden">
      {/* Background dim atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] via-[var(--color-bg-alt)]/60 to-[var(--color-bg)]" />

      {/* Floating dust particles (always) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -(100 + Math.random() * 200)],
              x: [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 60],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut",
            }}
            className="absolute rounded-full"
            style={{
              bottom: `${Math.random() * 40}%`,
              left: `${10 + Math.random() * 80}%`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              background: "var(--color-accent)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto max-w-4xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-center mb-20"
        >
          <span className="text-[9px] uppercase tracking-[0.5em] font-mono text-[var(--color-text)]/30 block mb-3">
            Interactive Experience
          </span>
          <h2 className="text-4xl md:text-7xl font-serif text-[var(--color-text)] tracking-tight">
            Yaadon ka Sandook
          </h2>
          <p className="font-urdu text-xl md:text-2xl text-[var(--color-accent)] mt-4 opacity-70" dir="rtl">
            یادوں کا صندوق
          </p>
          <p className="text-xs font-serif italic text-[var(--color-text)]/40 mt-2 max-w-md mx-auto">
            Open the chest. Inside you will not find clothes — you will find memories.
          </p>
        </motion.div>

        {/* The Chest */}
        <div className="relative mb-16" style={{ perspective: "800px" }}>
          <ChestVisual isOpen={isOpen} />

          {/* Click to open prompt */}
          <AnimatePresence>
            {!isOpen && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => setIsOpen(true)}
                className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer group"
              >
                <motion.span
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                  className="text-[10px] uppercase tracking-[0.4em] font-mono text-[var(--color-accent)] bg-[var(--color-bg)]/80 backdrop-blur-sm px-6 py-3 border border-[var(--color-accent)]/30 group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-bg)] transition-all"
                >
                  Open the Chest
                </motion.span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Revealed Items (after chest opens) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-8"
            >
              {sandookItems.map((item, idx) => (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0, y: 30, rotate: 0 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotate: item.rotation,
                  }}
                  transition={{
                    delay: 1.8 + idx * 0.25,
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    scale: 1.08,
                    rotate: 0,
                    boxShadow: "0 12px 40px var(--color-shadow)",
                  }}
                  onClick={() => setSelectedItem(item)}
                  className="relative p-6 md:p-8 border border-[var(--color-text)]/10 bg-[var(--color-bg)] text-center group cursor-pointer transition-colors hover:border-[var(--color-accent)]/40"
                  style={{
                    boxShadow: "0 4px 16px var(--color-shadow)",
                  }}
                >
                  {/* Aged paper inner texture */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none rounded"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='t'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23t)' opacity='0.25'/%3E%3C/svg%3E")`,
                    }}
                  />

                  {/* Object icon */}
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 3, delay: idx * 0.5 }}
                    className="text-3xl md:text-4xl mb-4 relative z-10"
                  >
                    {item.icon}
                  </motion.div>

                  {/* Label */}
                  <p className="font-serif text-sm md:text-base text-[var(--color-text)] relative z-10">
                    {item.labelEn}
                  </p>
                  <p className="font-urdu text-base text-[var(--color-accent)]/60 mt-1 relative z-10" dir="rtl">
                    {item.label}
                  </p>

                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-[var(--color-accent)]/0 group-hover:bg-[var(--color-accent)]/5 transition-colors pointer-events-none" />

                  {/* Corner detail */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[var(--color-accent)]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[var(--color-accent)]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom quote */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1.5 }}
              className="text-center mt-16"
            >
              <div className="flex items-center justify-center gap-4 mb-3">
                <div className="w-12 h-[1px] bg-[var(--color-text)]/10" />
                <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-[var(--color-text)]/30">
                  Click any object to reveal its story
                </span>
                <div className="w-12 h-[1px] bg-[var(--color-text)]/10" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ITEM REVEAL OVERLAY */}
      <AnimatePresence>
        {selectedItem && (
          <ItemReveal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
