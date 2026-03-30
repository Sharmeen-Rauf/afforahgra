"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function MarqueeTicker() {
  const scrollContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Basic hover pause mechanism
      const tl = gsap.timeline({ repeat: -1 });
      if (scrollContainer.current) {
        tl.to(scrollContainer.current, {
          x: "-50%",
          duration: 30,
          ease: "none",
        });

        scrollContainer.current.addEventListener("mouseenter", () => tl.pause());
        scrollContainer.current.addEventListener("mouseleave", () => tl.play());
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full overflow-hidden bg-vintage-sepia text-deep-black border-y border-faded-ink py-2 m-0 relative z-30 flex">
      <div ref={scrollContainer} className="flex whitespace-nowrap gap-12 text-[10px] uppercase font-serif italic tracking-[0.2em] px-6">
        {/* Repeat 4 times to ensure seamless infinite loop scrolling */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-12">
            <span>Free Worldwide Shipping on Archival Pieces</span>
            <span className="opacity-50">•</span>
            <span>Maison De Couture</span>
            <span className="opacity-50">•</span>
            <span>Est. MMXXVI</span>
            <span className="opacity-50">•</span>
            <span>Authentic Vintage Heritage</span>
            <span className="opacity-50">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
