"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const timeline = [
  { year: "2019", title: "The First Stitch", desc: "Born in a small workshop in Karachi. Afforah began as a one-woman obsession with forgotten textiles and silhouettes lost to time." },
  { year: "2020", title: "The Archive Opens", desc: "First collection launched — 12 pieces, each named after Urdu couplets. Sold out in 72 hours through word of mouth alone." },
  { year: "2022", title: "The Multan Chapter", desc: "Partnered with master dyers in Multan to revive Haldi-dyed golden threads. Every Sunehri Dhaaga piece is born from those hands." },
  { year: "2024", title: "The Digital Mehfil", desc: "Afforah went beyond clothing into cultural storytelling. This website itself became an art installation — a living, breathing desi archive." },
];

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen pt-32 pb-32 px-6 md:px-12 bg-[var(--color-bg)] text-[var(--color-text)] relative overflow-hidden">
        {/* Side rules */}
        <div className="absolute left-8 md:left-16 top-0 bottom-0 w-[1px] bg-[var(--color-text)]/8 hidden md:block" />
        <div className="absolute right-8 md:right-16 top-0 bottom-0 w-[1px] bg-[var(--color-text)]/8 hidden md:block" />

        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-24"
          >
            <span className="text-[9px] uppercase tracking-[0.5em] font-mono text-[var(--color-text)]/40 block mb-6">
              Our Story &middot; Hamari Kahani
            </span>
            <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-serif leading-[0.85] tracking-tight mb-8">
              <span className="italic font-light">The</span> Archive
            </h1>
            <p className="font-urdu text-2xl md:text-3xl text-[var(--color-accent)] mt-4" dir="rtl">
              ہر دھاگے میں ایک کہانی بُنی ہوئی ہے
            </p>
            <div className="w-[1px] h-20 bg-[var(--color-text)]/15 mx-auto mt-8" />
          </motion.header>

          {/* Two column intro */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="aspect-[3/4] p-3 border border-[var(--color-text)]/15 shadow-2xl bg-[var(--color-bg-alt)]/20 relative rotate-[-1.5deg]">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=800"
                  alt="Afforah Atelier"
                  fill
                  className="object-cover sepia-[0.3] contrast-[1.05]"
                />
                {/* Tape */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-[var(--color-accent)]/20 backdrop-blur-sm rotate-[2deg] z-10" />
              </div>
              <p className="text-[9px] uppercase tracking-[0.3em] font-mono text-[var(--color-text)]/30 text-center mt-4">
                Fig. 1 — The Original Workshop, Karachi
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="w-full lg:w-1/2 space-y-8 font-serif text-base md:text-lg leading-relaxed text-[var(--color-text)]/75 text-justify"
            >
              <p>
                <span className="float-left text-6xl md:text-7xl leading-[0.8] pr-3 text-[var(--color-text)] font-serif mt-1">B</span>
                orn in the heart of Pakistan, Afforah began not as a commercial endeavor, but as an obsession with the mechanics of memory and fabric. Our founder believed that true luxury is not manufactured — it is slowly unearthed through meticulous iteration and historical reverence.
              </p>
              <p>
                We source deadstock textiles, archival prints, and forgotten looms, resurrecting techniques that industrialization silenced. Each piece in our collection is a dialogue between the silhouettes of the past and the demands of the present.
              </p>
              <div className="pt-6 border-t border-[var(--color-text)]/10 flex justify-between items-center italic text-sm">
                <span className="text-[var(--color-text)]/70">&ldquo;Wear stories, not just clothes.&rdquo;</span>
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] not-italic text-[var(--color-text)]/30">Archival Dir.</span>
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="relative mb-32">
            <div className="text-center mb-16">
              <span className="text-[9px] uppercase tracking-[0.5em] font-mono text-[var(--color-text)]/30 block mb-3">
                Waqt Ka Safar
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-[var(--color-text)]">Our Journey</h2>
            </div>

            {/* Central line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-32 bottom-0 w-[1px] bg-[var(--color-text)]/10 hidden md:block" />

            <div className="space-y-16 md:space-y-24">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className={`w-full md:w-1/2 ${i % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                    <span className="text-5xl md:text-7xl font-serif text-[var(--color-text)]/[0.06] block">{item.year}</span>
                    <h3 className="text-xl md:text-2xl font-serif text-[var(--color-text)] mt-2">{item.title}</h3>
                    <p className="text-sm text-[var(--color-text)]/60 mt-3 font-serif max-w-sm inline-block">{item.desc}</p>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)] z-10 flex-shrink-0" />
                  <div className="w-full md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-24">
            {[
              { title: "Handcrafted", urdu: "دستکاری", desc: "Every stitch is placed by master artisans who have inherited their craft through generations." },
              { title: "Sustainable", urdu: "پائیدار", desc: "We use deadstock textiles and natural dyes, ensuring nothing beautiful goes to waste." },
              { title: "Storytelling", urdu: "داستان گوئی", desc: "Each garment carries a narrative — of the weaver, the city, and the moment it was made." },
            ].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 1 }}
                className="text-center p-8 border border-[var(--color-text)]/8"
              >
                <p className="font-urdu text-xl text-[var(--color-accent)] mb-3" dir="rtl">{val.urdu}</p>
                <h3 className="text-xl font-serif text-[var(--color-text)] mb-4">{val.title}</h3>
                <p className="text-sm text-[var(--color-text)]/60 font-serif">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
