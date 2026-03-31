"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen pt-32 pb-32 px-6 md:px-12 bg-[var(--color-bg)] text-[var(--color-text)] relative overflow-hidden">
        {/* Paper texture */}
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='c'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23c)' opacity='0.25'/%3E%3C/svg%3E")` }} />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="w-full lg:w-1/2 space-y-12"
            >
              <header className="border-b border-[var(--color-text)]/10 pb-8">
                <span className="text-[9px] uppercase tracking-[0.5em] font-mono text-[var(--color-text)]/40 mb-6 block">
                  Chitthi Likhein &middot; Write to Us
                </span>
                <h1 className="text-5xl md:text-8xl font-serif leading-[0.9] tracking-tight">
                  <span className="italic font-light">Rabta</span> Karein
                </h1>
                <p className="font-urdu text-xl text-[var(--color-accent)] mt-4" dir="rtl">
                  ہم سے رابطہ کریں
                </p>
              </header>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 font-serif">
                <div>
                  <h3 className="text-[9px] font-mono tracking-[0.3em] uppercase text-[var(--color-text)]/40 mb-4">Flagship Studio</h3>
                  <address className="not-italic text-sm leading-relaxed text-[var(--color-text)]/70">
                    DHA Phase 6<br />
                    Karachi, Pakistan<br />
                    +92 21 3580 0000
                  </address>
                </div>
                <div>
                  <h3 className="text-[9px] font-mono tracking-[0.3em] uppercase text-[var(--color-text)]/40 mb-4">Client Care</h3>
                  <p className="text-sm leading-relaxed text-[var(--color-text)]/70">
                    <a href="mailto:hello@afforah.pk" className="border-b border-[var(--color-text)]/20 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">hello@afforah.pk</a><br />
                    Mon–Sat: 10AM – 7PM PST<br />
                    Sun: Closed
                  </p>
                </div>
                <div>
                  <h3 className="text-[9px] font-mono tracking-[0.3em] uppercase text-[var(--color-text)]/40 mb-4">Social</h3>
                  <div className="flex flex-col gap-2 text-sm text-[var(--color-text)]/70">
                    <a href="#" className="hover:text-[var(--color-accent)] transition-colors">Instagram</a>
                    <a href="#" className="hover:text-[var(--color-accent)] transition-colors">Facebook</a>
                    <a href="#" className="hover:text-[var(--color-accent)] transition-colors">WhatsApp</a>
                  </div>
                </div>
                <div>
                  <h3 className="text-[9px] font-mono tracking-[0.3em] uppercase text-[var(--color-text)]/40 mb-4">Wholesale</h3>
                  <p className="text-sm leading-relaxed text-[var(--color-text)]/70">
                    For bulk orders and collaborations:<br />
                    <a href="mailto:wholesale@afforah.pk" className="border-b border-[var(--color-text)]/20 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">wholesale@afforah.pk</a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="w-full lg:w-1/2"
            >
              <div className="p-8 md:p-12 border border-[var(--color-text)]/10 bg-[var(--color-bg)] relative shadow-xl">
                {/* Tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-[var(--color-accent)]/20 backdrop-blur-sm rotate-[-2deg]" />

                <h2 className="text-2xl font-serif mb-2">Send a Dispatch</h2>
                <p className="font-urdu text-base text-[var(--color-accent)]/60 mb-8" dir="rtl">خط لکھیں</p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.3em] font-mono text-[var(--color-text)]/40">First Name</label>
                      <input type="text" className="w-full bg-transparent border-b border-[var(--color-text)]/20 pb-2 text-sm font-serif outline-none focus:border-[var(--color-accent)] transition-colors text-[var(--color-text)]" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.3em] font-mono text-[var(--color-text)]/40">Last Name</label>
                      <input type="text" className="w-full bg-transparent border-b border-[var(--color-text)]/20 pb-2 text-sm font-serif outline-none focus:border-[var(--color-accent)] transition-colors text-[var(--color-text)]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.3em] font-mono text-[var(--color-text)]/40">Email Address</label>
                    <input type="email" className="w-full bg-transparent border-b border-[var(--color-text)]/20 pb-2 text-sm font-serif outline-none focus:border-[var(--color-accent)] transition-colors text-[var(--color-text)]" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.3em] font-mono text-[var(--color-text)]/40">Subject</label>
                    <select className="w-full bg-transparent border-b border-[var(--color-text)]/20 pb-2 text-sm font-serif outline-none focus:border-[var(--color-accent)] transition-colors appearance-none rounded-none text-[var(--color-text)]">
                      <option>Product Inquiry</option>
                      <option>Order Status</option>
                      <option>Custom / Bespoke</option>
                      <option>Wholesale</option>
                      <option>Press / Media</option>
                    </select>
                  </div>

                  <div className="space-y-2 pt-2">
                    <label className="text-[9px] uppercase tracking-[0.3em] font-mono text-[var(--color-text)]/40">Message</label>
                    <textarea rows={4} className="w-full bg-transparent border-b border-[var(--color-text)]/20 pb-2 text-sm font-serif outline-none focus:border-[var(--color-accent)] transition-colors resize-none text-[var(--color-text)]" />
                  </div>

                  <button type="submit" className="flex items-center justify-between w-full py-4 border border-[var(--color-text)]/20 hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-all group px-6 mt-4">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-mono">Send Message</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
