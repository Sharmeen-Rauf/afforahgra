"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

export default function BrandStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current && imageRef.current) {
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  const poetryLines = [
    "وقت گزر جاتا ہے، لیکن کچھ دھاگے کبھی پرانے نہیں ہوتے۔",
    "ہمارا لباس صرف تن ڈھانکنے کے لیے نہیں، بلکہ ان یادوں کو زندہ رکھنے کے لیے ہے جو خاموشی سے دل کے کسی کونے میں سو رہی ہیں۔",
    "ہر جوڑا ایک کہانی ہے۔ خاموش رنگ، پرانے کاغذ کی مہک، اور وہ لمس جو آپ کو آپ کی جڑوں سے جوڑ دے۔"
  ];

  return (
    <section ref={containerRef} className="py-24 md:py-40 px-6 md:px-12 relative z-10 overflow-hidden ink-line-top">
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Old Window / Street Imagery */}
          <div className="lg:w-1/2 w-full relative">
            {/* Photo Book Mounting Frame */}
            <div className="relative p-2 pb-12 bg-[#e6dfd1] border border-[#2b2b2b]/10 shadow-2xl rotate-[-2deg]">
              
              {/* Corner Photo Fasteners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#111111]/60 -translate-x-1 -translate-y-1" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#111111]/60 translate-x-1 -translate-y-1" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#111111]/60 -translate-x-1 translate-y-1" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#111111]/60 translate-x-1 translate-y-1" />

              <div className="aspect-[4/5] relative overflow-hidden bg-[#2b2b2b] border border-[#111111]/20">
                <div ref={imageRef} className="absolute inset-[-15%] w-[130%] h-[130%] grayscale-[0.8] sepia-[0.5] contrast-[1.2]">
                  <Image
                    src="https://images.unsplash.com/photo-1541336318489-083c7b399120?auto=format&fit=crop&q=80&w=1200"
                    alt="Old vibes"
                    fill
                    className="object-cover mix-blend-multiply opacity-80"
                  />
                </div>
                <div className="absolute inset-0 bg-[#b39b74]/10 mix-blend-overlay" />
                
                {/* Film Dust Noise Overlay specific to image */}
                <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.5%22/%3E%3C/svg%3E')]" />
              </div>
              
              {/* Handwriting under photo */}
              <div className="absolute bottom-4 right-6 font-urdu text-xl text-[#111111]/80 transform -rotate-2 mix-blend-multiply">
                شام کا وقت، ہلکی روشنی
              </div>
            </div>
          </div>

          {/* Poetry / Story Content */}
          <div className="lg:w-1/2 w-full lg:pt-12 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            <span className="text-[10px] font-mono tracking-widest uppercase mb-8 text-[#111111]/60">
              The Manifesto
            </span>

            <div className="space-y-12 max-w-lg text-[#111111] font-serif">
              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                whileInView={{ opacity: 0.9, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-3xl md:text-5xl leading-tight">
                  Time passes, but <span className="italic text-[#b39b74]">some threads</span> never grow old.
                </p>
                <p className="font-urdu text-2xl mt-4 opacity-70" dir="rtl">
                  وقت گزر جاتا ہے، لیکن کچھ دھاگے کبھی پرانے نہیں ہوتے۔
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                whileInView={{ opacity: 0.9, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-xl md:text-2xl leading-relaxed">
                  Our collections are not merely designed to drape the body, but to keep alive the memories that quietly slumber in forgotten corners of the heart.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                whileInView={{ opacity: 0.9, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-lg md:text-xl leading-relaxed italic opacity-80">
                  Every silhouette is a story. Muted colors, the scent of old paper, and a touch that grounds you to your roots.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 1 }}
              className="mt-16 flex items-center justify-start gap-6"
            >
              <button className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#111111] hover:text-[#b39b74] transition-colors font-mono">
                Read the Diary
              </button>
              <div className="w-16 h-[1px] bg-[#111111]/30" />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
