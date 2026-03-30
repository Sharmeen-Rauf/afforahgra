import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Services | Afforah Clothing",
  description: "Exquisite personalization, care, and repair services.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Archival Repairs",
      desc: "Our master tailors will restore your Afforah pieces to their original glory using original threads and era-specific techniques.",
      details: ["Reweaving", "Hardware Replacement", "Leather Conditioning"]
    },
    {
      title: "Personalization",
      desc: "Imprint your legacy. We offer bespoke monogramming, hand-painted details, and custom hardware finishes for select pieces.",
      details: ["Hot Stamping", "Hand Painting", "Embroidery"]
    },
    {
      title: "The Art of Gifting",
      desc: "Elevate your presentation. Each order can be prepared in our signature archival packaging, sealed with wax and bound in silk ribbon.",
      details: ["Wax Sealed Boxes", "Calligraphy Notes", "Scented Wrapping"]
    }
  ];

  return (
    <main className="min-h-screen pt-40 pb-32 px-6 md:px-12 bg-deep-black text-vintage-sepia relative overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10 hairline-left pl-0 md:pl-12">
        <header className="mb-24">
          <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-muted-gold mb-6 block font-serif border border-muted-gold/30 inline-block px-4 py-1">
            Maison Services
          </span>
          <h1 className="text-5xl md:text-7xl font-serif leading-none tracking-tight mb-8 text-cream">
            Preserving <span className="italic font-light text-vintage-sepia/70">the Legacy.</span>
          </h1>
          <p className="text-vintage-sepia/60 font-serif text-lg max-w-xl leading-relaxed">
            True luxury extends far beyond the point of acquisition. Discover our suite of high-end care, restoration, and personalization services designed to ensure your piece lasts generations.
          </p>
        </header>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="group relative pt-8 border-t border-vintage-sepia/10 flex flex-col md:flex-row gap-8 md:gap-16 items-start transition-colors hover:border-vintage-sepia/30">
              <div className="md:w-1/3 flex flex-col gap-2">
                <span className="text-[10px] font-mono tracking-widest text-muted-gold/50">0{index + 1}</span>
                <h2 className="text-3xl font-serif text-cream group-hover:text-muted-gold transition-colors">{service.title}</h2>
              </div>
              <div className="md:w-2/3 space-y-6">
                <p className="text-vintage-sepia/70 font-sans leading-relaxed">
                  {service.desc}
                </p>
                <ul className="flex flex-wrap gap-4 text-[10px] uppercase tracking-widest font-mono text-vintage-sepia/40">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="border border-vintage-sepia/20 px-3 py-1 bg-white/5">{detail}</li>
                  ))}
                </ul>
                <button className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cream hover:text-muted-gold transition-colors mt-4">
                  <span>Inquire</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
