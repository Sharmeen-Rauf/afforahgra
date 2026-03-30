"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { products } from "@/data/products";

/* Pick specific products as "new arrivals" */
const newArrivals = [products[8], products[10], products[6], products[11]];

export default function NewCollectionManuscript() {
  return (
    <section className="relative py-32 md:py-48 px-4 overflow-hidden">
      {/* Torn top edge */}
      <div
        className="absolute top-0 left-0 right-0 h-8 z-10 pointer-events-none"
        style={{
          background: "var(--color-bg)",
          maskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,10 Q30,0 60,8 T120,12 T180,6 T240,14 T300,4 T360,10 T420,8 T480,14 T540,5 T600,12 T660,7 T720,13 T780,4 T840,11 T900,6 T960,14 T1020,3 T1080,10 T1140,8 T1200,12 V20 H0 Z' fill='white'/%3E%3C/svg%3E")`,
          WebkitMaskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,10 Q30,0 60,8 T120,12 T180,6 T240,14 T300,4 T360,10 T420,8 T480,14 T540,5 T600,12 T660,7 T720,13 T780,4 T840,11 T900,6 T960,14 T1020,3 T1080,10 T1140,8 T1200,12 V20 H0 Z' fill='white'/%3E%3C/svg%3E")`,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
        }}
      />

      {/* Aged paper background */}
      <div className="absolute inset-0 bg-[var(--color-bg-alt)]/40" />
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)' opacity='0.15'/%3E%3C/svg%3E")
          `,
        }}
      />

      {/* Faded ruled lines like old notebook */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="w-full h-[1px] bg-[var(--color-accent)]"
            style={{ marginTop: `${32 + i * 32}px` }}
          />
        ))}
        {/* Margin line */}
        <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-red-800/30" />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        {/* Header — handwritten chapter style */}
        <div className="text-center mb-24 relative">
          {/* Ink blot decoration */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-3 h-3 rounded-full bg-[var(--color-text)] mx-auto mb-6 opacity-60"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <span className="text-[9px] uppercase tracking-[0.5em] font-mono text-[var(--color-text)]/30 block mb-3">
              Naya Baab &middot; New Chapter
            </span>
            <h2 className="text-4xl md:text-7xl font-serif text-[var(--color-text)] tracking-tight italic">
              Fresh Arrivals
            </h2>
            <p className="font-urdu text-xl md:text-2xl text-[var(--color-accent)] mt-4 opacity-70" dir="rtl">
              نئے دور کے پرانے انداز
            </p>
            <p className="text-xs font-serif italic text-[var(--color-text)]/40 mt-2">
              Old aesthetics for a new era
            </p>
          </motion.div>

          {/* Quill stroke separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="w-32 h-[1px] bg-[var(--color-text)]/20 mx-auto mt-8"
          />
        </div>

        {/* Manuscript Grid — scattered, editorial */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 relative">
          {newArrivals.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 1.2,
                delay: idx * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative"
              style={{
                transform: `rotate(${idx % 2 === 0 ? "-0.5" : "0.4"}deg)`,
              }}
            >
              {/* Handwritten item number */}
              <span
                className="absolute -top-6 -left-2 text-6xl md:text-8xl font-serif text-[var(--color-text)]/[0.04] select-none pointer-events-none"
                style={{ fontStyle: "italic" }}
              >
                {String(idx + 1).padStart(2, "0")}
              </span>

              {/* Image with mounted-photo aesthetic */}
              <Link href={`/product/${product.id}`} className="block">
                <div className="relative overflow-hidden aspect-[3/4] mb-6 shadow-md">
                  {/* Corner mounts */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[var(--color-accent)]/30 z-10" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[var(--color-accent)]/30 z-10" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[var(--color-accent)]/30 z-10" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[var(--color-accent)]/30 z-10" />

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 sepia-[0.2]"
                  />

                  {/* Film grain on image */}
                  <div className="absolute inset-0 bg-[var(--color-bg)]/10 mix-blend-multiply pointer-events-none" />

                  {/* "NEW" wax seal */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center z-10 shadow-lg rotate-[-12deg]">
                    <span className="text-[8px] uppercase tracking-[0.15em] font-bold text-[var(--color-bg)]">
                      New
                    </span>
                  </div>
                </div>
              </Link>

              {/* Product details — manuscript annotation style */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-mono text-[var(--color-text)]/40 mt-1">
                    {product.category}
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-mono text-sm text-[var(--color-accent)] font-medium">
                    PKR {product.price.toLocaleString()}
                  </p>
                  {/* Handwritten underline */}
                  <div className="w-full h-[1px] bg-[var(--color-accent)]/40 mt-1" />
                </div>
              </div>

              {/* Urdu annotation — like a margin note */}
              {product.urduDesc && (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.5 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="font-urdu text-base text-[var(--color-text)] mt-4 leading-loose line-clamp-2"
                  dir="rtl"
                >
                  {product.urduDesc}
                </motion.p>
              )}

              {/* Ink dash separator */}
              <div className="mt-6 flex gap-1">
                {Array.from({ length: 20 }).map((_, j) => (
                  <div
                    key={j}
                    className="w-2 h-[1px] bg-[var(--color-text)]/10"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom flourish */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-center mt-24 flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-[1px] bg-[var(--color-text)]/15" />
            <span className="font-urdu text-lg text-[var(--color-accent)] opacity-60" dir="rtl">
              ختم نہیں، آغاز ہے
            </span>
            <div className="w-16 h-[1px] bg-[var(--color-text)]/15" />
          </div>
          <p className="text-[9px] uppercase tracking-[0.4em] font-mono text-[var(--color-text)]/30">
            This is not the end — it is the beginning.
          </p>
        </motion.div>
      </div>

      {/* Torn bottom edge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-8 z-10 pointer-events-none"
        style={{
          background: "var(--color-bg)",
          maskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 H1200 V10 Q1170,18 1140,8 T1080,14 T1020,6 T960,12 T900,4 T840,10 T780,8 T720,14 T660,5 T600,12 T540,7 T480,13 T420,4 T360,11 T300,6 T240,14 T180,3 T120,10 T60,8 T0,12 Z' fill='white'/%3E%3C/svg%3E")`,
          WebkitMaskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 H1200 V10 Q1170,18 1140,8 T1080,14 T1020,6 T960,12 T900,4 T840,10 T780,8 T720,14 T660,5 T600,12 T540,7 T480,13 T420,4 T360,11 T300,6 T240,14 T180,3 T120,10 T60,8 T0,12 Z' fill='white'/%3E%3C/svg%3E")`,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
        }}
      />
    </section>
  );
}
