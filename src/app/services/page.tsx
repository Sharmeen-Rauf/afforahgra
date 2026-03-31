"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Dastkaari Repairs",
    urdu: "دستکاری مرمت",
    desc: "Our master artisans restore your Afforah pieces using original threads and era-specific hand-stitching techniques passed down through generations.",
    details: ["Reweaving", "Embroidery Restoration", "Fabric Reinforcement", "Color Revival"],
    icon: "🧵",
  },
  {
    title: "Bespoke Tailoring",
    urdu: "حسبِ ضرورت سلائی",
    desc: "Custom measurements, personal consultations, and garments cut to your exact specifications. Every measurement is taken by hand, documented in our archive.",
    details: ["Custom Sizing", "Personal Fitting", "Fabric Selection", "Design Consultation"],
    icon: "✂️",
  },
  {
    title: "The Art of Gifting",
    urdu: "تحفے کا فن",
    desc: "Elevate your presentation. Each order can be wrapped in our signature archival packaging — sealed with wax, bound in silk ribbon, and accompanied by a handwritten note.",
    details: ["Wax-Sealed Boxes", "Calligraphy Notes", "Silk Ribbons", "Scented Packaging"],
    icon: "🎁",
  },
  {
    title: "Monogramming",
    urdu: "نقش نگاری",
    desc: "Imprint your identity into the fabric. We offer hand-embroidered monograms in both English and Urdu script — a tradition of personalization rooted in Mughal-era craftsmanship.",
    details: ["Urdu Calligraphy", "English Initials", "Gold Thread", "Silk Thread"],
    icon: "✒️",
  },
];

export default function ServicesPage() {
  return (
    <>
      <main className="min-h-screen pt-32 pb-32 px-6 md:px-12 bg-[var(--color-bg)] text-[var(--color-text)] relative overflow-hidden">
        {/* Background ruled lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 39px, currentColor 39px, currentColor 40px)', backgroundPositionY: '60px' }} />

        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="mb-24"
          >
            <span className="text-[9px] uppercase tracking-[0.5em] font-mono text-[var(--color-text)]/30 block mb-6">
              Khidmaat &middot; Services
            </span>
            <h1 className="text-5xl md:text-8xl font-serif leading-none tracking-tight mb-6">
              Preserving <span className="italic font-light text-[var(--color-text)]/60">the Legacy.</span>
            </h1>
            <p className="font-urdu text-xl md:text-2xl text-[var(--color-accent)] mb-6" dir="rtl">
              وراثت کی حفاظت
            </p>
            <p className="text-[var(--color-text)]/60 font-serif text-base md:text-lg max-w-2xl leading-relaxed">
              True luxury extends far beyond the point of acquisition. Discover our suite of artisanal care, restoration, and personalization services designed to ensure your piece endures for generations.
            </p>
          </motion.header>

          {/* Services Grid */}
          <div className="space-y-0">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="group relative pt-10 pb-12 border-t border-[var(--color-text)]/10 flex flex-col md:flex-row gap-8 md:gap-16 items-start hover:bg-[var(--color-text)]/[0.02] transition-colors px-4 md:px-8 -mx-4 md:-mx-8"
              >
                {/* Left */}
                <div className="md:w-1/3 flex flex-col gap-3">
                  <span className="text-3xl md:text-4xl">{service.icon}</span>
                  <span className="text-[9px] font-mono tracking-[0.3em] text-[var(--color-text)]/30 uppercase">0{index + 1}</span>
                  <h2 className="text-2xl md:text-3xl font-serif text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                    {service.title}
                  </h2>
                  <p className="font-urdu text-base text-[var(--color-accent)]/60" dir="rtl">{service.urdu}</p>
                </div>

                {/* Right */}
                <div className="md:w-2/3 space-y-6">
                  <p className="text-[var(--color-text)]/70 font-serif leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="flex flex-wrap gap-3 text-[9px] uppercase tracking-[0.2em] font-mono text-[var(--color-text)]/40">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="border border-[var(--color-text)]/10 px-3 py-1.5 hover:border-[var(--color-accent)]/30 transition-colors">
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-mono text-[var(--color-text)]/50 hover:text-[var(--color-accent)] transition-colors mt-2"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="mt-24 text-center border-t border-[var(--color-text)]/10 pt-16"
          >
            <p className="font-urdu text-2xl text-[var(--color-accent)] mb-4" dir="rtl">ہم آپ کی خدمت میں حاضر ہیں</p>
            <p className="text-sm font-serif italic text-[var(--color-text)]/50 mb-8">We are at your service.</p>
            <Link
              href="/contact"
              className="inline-block text-[10px] uppercase tracking-[0.3em] font-mono border border-[var(--color-text)]/20 px-10 py-4 hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-all"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
