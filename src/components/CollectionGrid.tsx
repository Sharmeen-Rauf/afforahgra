"use client";

import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function CollectionGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];
  
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 bg-transparent min-h-screen relative z-10 ink-line-top">

      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12 ink-line-bottom pb-12">
          <div className="max-w-xl">
            <span className="text-[#111111] uppercase tracking-[0.4em] text-[10px] font-mono mb-6 block border border-[#111111]/30 inline-block px-4 py-1 bg-[#111111]/5">
              Chapter I
            </span>
            <h2 className="text-5xl md:text-8xl font-serif text-[#111111] leading-[0.9] tracking-tight mb-4">
              The Archives
            </h2>
            <p className="mt-6 text-[#2b2b2b] text-sm md:text-base leading-relaxed hidden md:block font-serif max-w-md italic">
              "Jaise purani kitaab ke safhon mein zinda kahani chal rahi ho." Select a chapter.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 scrollbar-hide pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] md:text-xs uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 font-mono ${
                  activeCategory === cat 
                    ? "text-[#e6dfd1] bg-[#111111] px-5 py-2 shadow-xl" 
                    : "text-[#111111] hover:bg-[#111111]/10 px-5 py-2 border border-[#111111]/20"
                }`}
              >
                {cat === 'All' ? 'Mukammal' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Scattered Photo Album Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-32">
          {filteredProducts.map((product, index) => {
            // Randomize rotations to make it look like a messy photo album
            const rotateAngles = ["rotate-[-2deg]", "rotate-[3deg]", "rotate-[-1deg]", "rotate-[2deg]", "rotate-0"];
            const rotate = rotateAngles[index % rotateAngles.length];

            return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 70, filter: "grayscale(100%)" }}
              whileInView={{ opacity: 1, y: 0, filter: "grayscale(0%)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: (index % 3) * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col items-center"
            >
              <Link href={`/product/${product.id}`} className="block w-full">
                
                {/* Physical Photo Print Effect */}
                <div className={`relative w-[90%] mx-auto aspect-[3/4] bg-[#f7f4ea] p-4 pb-16 shadow-xl transition-all duration-700 ${rotate} group-hover:rotate-0 group-hover:shadow-2xl group-hover:-translate-y-2 border border-[#b8a995]/40`}>
                  
                  {/* Fake masking tape pieces */}
                  <div className="absolute -top-4 left-1/4 w-12 h-6 bg-[#d4c8b2]/60 backdrop-blur-sm -rotate-6 shadow-sm z-20 mix-blend-multiply opacity-80" />
                  <div className="absolute -bottom-4 right-1/4 w-16 h-5 bg-[#d4c8b2]/60 backdrop-blur-sm rotate-3 shadow-sm z-20 mix-blend-multiply opacity-80" />

                  <div className="relative w-full h-full overflow-hidden border border-[#111111]/10">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-[3s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 sepia-[0.3] contrast-110"
                    />
                    
                    {/* Dark gradient overlay on hover */}
                    <div className="absolute inset-0 bg-[#111111]/60 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Hover Urdu Poetry Reveal */}
                    <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10">
                      <p className="font-urdu text-[#e6dfd1] text-2xl text-center leading-loose drop-shadow-md">
                        {product.urduDesc}
                      </p>
                    </div>
                  </div>

                  {/* Handwritten info below photo */}
                  <div className="absolute bottom-5 left-6 right-6 flex flex-col text-[#111111]">
                    <span className="font-urdu text-xl line-clamp-1">{product.name}</span>
                    <div className="flex justify-between items-center w-full mt-1 border-t border-[#111111]/20 pt-1">
                      <span className="font-serif text-[10px] uppercase tracking-widest text-[#2b2b2b]">Archive {product.id}</span>
                      <span className="font-mono text-xs font-bold">PKR {product.price.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
