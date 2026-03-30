"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BookLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [phase, setPhase] = useState<"closed" | "opening" | "revealing" | "done">("closed");

  useEffect(() => {
    // Phase 1: Closed book
    const t1 = setTimeout(() => setPhase("opening"), 800);
    // Phase 2: Book opens
    const t2 = setTimeout(() => setPhase("revealing"), 2200);
    // Phase 3: Content reveals
    const t3 = setTimeout(() => {
      setPhase("done");
      setIsLoading(false);
    }, 3600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[99999] flex items-center justify-center"
            style={{ backgroundColor: "var(--color-bg)" }}
          >
            {/* Paper texture */}
            <div
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.3'/%3E%3C/svg%3E")`,
              }}
            />

            {/* The Book */}
            <div className="relative" style={{ perspective: "1200px" }}>
              {/* Book spine */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-48 md:h-64 z-10"
                style={{ backgroundColor: "var(--color-accent)" }}
              />

              {/* Left cover (static) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute left-1/2 top-1/2 -translate-y-1/2 w-36 md:w-48 h-48 md:h-64 origin-right border border-[var(--color-text)]/10"
                style={{
                  transform: "translateY(-50%) translateX(-100%)",
                  backgroundColor: "var(--color-bg)",
                  boxShadow: "inset -4px 0 12px var(--color-shadow)",
                }}
              >
                <div className="absolute inset-4 border border-[var(--color-text)]/10 flex flex-col items-center justify-center">
                  <div className="w-8 h-[1px] mb-4" style={{ backgroundColor: "var(--color-accent)" }} />
                  <span className="font-urdu text-lg md:text-xl" style={{ color: "var(--color-accent)" }} dir="rtl">
                    اَفوراہ
                  </span>
                  <div className="w-8 h-[1px] mt-4" style={{ backgroundColor: "var(--color-accent)" }} />
                </div>
              </motion.div>

              {/* Right cover (opens) */}
              <motion.div
                initial={{ rotateY: 0 }}
                animate={{
                  rotateY: phase === "opening" || phase === "revealing" || phase === "done" ? -160 : 0,
                }}
                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-1/2 top-1/2 -translate-y-1/2 w-36 md:w-48 h-48 md:h-64 origin-left border border-[var(--color-text)]/10"
                style={{
                  backgroundColor: "var(--color-bg)",
                  boxShadow: "4px 0 12px var(--color-shadow)",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="absolute inset-4 border border-[var(--color-text)]/10 flex flex-col items-center justify-center">
                  <span className="text-[8px] uppercase tracking-[0.4em] font-mono" style={{ color: "var(--color-text)", opacity: 0.4 }}>
                    Est. Karachi
                  </span>
                </div>
              </motion.div>

              {/* Inner page (visible after opening) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: phase === "revealing" ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                className="absolute left-1/2 top-1/2 -translate-y-1/2 w-36 md:w-48 h-48 md:h-64 flex flex-col items-center justify-center"
              >
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: phase === "revealing" ? 0.7 : 0, y: phase === "revealing" ? 0 : 10 }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="font-serif text-xs md:text-sm italic text-center max-w-[120px] leading-relaxed"
                  style={{ color: "var(--color-text)" }}
                >
                  &ldquo;Some stories are not read, they are worn.&rdquo;
                </motion.p>
              </motion.div>
            </div>

            {/* Bottom text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === "opening" ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
              <span className="text-3xl md:text-5xl font-serif tracking-tighter uppercase" style={{ color: "var(--color-text)" }}>
                AFFORAH
              </span>
              <span className="text-[8px] tracking-[0.5em] uppercase font-mono" style={{ color: "var(--color-text)", opacity: 0.4 }}>
                Opening the archive...
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actual page content — fade in after book opens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "done" ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
