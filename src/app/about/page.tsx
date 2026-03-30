import Image from "next/image";

export const metadata = {
  title: "About Us | Afforah Clothing",
  description: "The heritage and history of Afforah Maison De Couture.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-40 pb-32 px-6 md:px-12 bg-vintage-sepia text-faded-ink relative overflow-hidden">
      {/* Decorative architectural borders */}
      <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-faded-ink/10 hidden md:block" />
      <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-faded-ink/10 hidden md:block" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <header className="text-center mb-24 relative">
          <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-faded-ink/60 mb-6 block font-serif">
            Fashion Archive • MMXXVI
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif leading-[0.85] tracking-tight mb-8">
            <span className="italic font-light">The</span> History
          </h1>
          <div className="w-[1px] h-24 bg-faded-ink/20 mx-auto" />
        </header>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[3/4] p-3 border border-faded-ink/20 shadow-2xl bg-faded-ink/5 relative rotate-[-1deg]">
              <Image
                src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800"
                alt="Afforah Atelier"
                fill
                className="object-cover sepia-[0.4] contrast-125 mix-blend-multiply"
              />
              {/* Tape effect */}
              <div className="absolute -top-3 left-1/2 w-24 h-8 -translate-x-1/2 bg-[#f0ebd8]/60 backdrop-blur-sm rotate-[2deg] shadow-sm transform origin-center mix-blend-overlay border border-white/20" />
            </div>
            <div className="mt-4 text-[9px] uppercase tracking-widest text-faded-ink/60 text-center font-mono">
              Fig. 1 — The Original Atelier
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8 font-serif text-lg leading-relaxed text-faded-ink/80 text-justify">
            <p>
              <span className="float-left text-7xl leading-[0.8] pr-4 text-faded-ink mt-2">B</span>
              orn in the heart of Pakistan, Afforah began not as a commercial endeavor, but as an obsession with the mechanics of memory and fabric. Our founder believed that true luxury isn't manufactured; it is slowly unearthed through meticulous iteration and historical reverence.
            </p>
            <p>
              We source deadstock textiles, archival prints, and forgotten looms, resurrecting techniques that industrialization left behind. Each piece in our collection is a dialogue between the silhouettes of the past and the demands of the future.
            </p>
            <div className="pt-8 border-t border-faded-ink/10 flex justify-between items-center italic text-sm text-faded-ink/90">
              <span>"Wear Stories, Not Just Clothes."</span>
              <span className="font-mono text-[9px] uppercase tracking-widest not-italic">Archival Dir.</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
