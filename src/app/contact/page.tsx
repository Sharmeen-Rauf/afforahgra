import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Contact Concierge | Afforah Clothing",
  description: "Get in touch with the Afforah client services team.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-40 pb-32 px-6 md:px-12 bg-[#EBE5D9] text-faded-ink relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Column: Info */}
          <div className="w-full lg:w-1/2 space-y-12">
            <header className="border-b border-faded-ink/20 pb-8">
              <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-faded-ink/50 mb-6 block font-serif">
                Client Relations
              </span>
              <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] tracking-tight text-deep-black">
                <span className="italic font-light">Contact</span> Us
              </h1>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 font-serif">
              <div>
                <h3 className="text-[10px] font-mono tracking-widest uppercase text-faded-ink/50 mb-4">Flagship Studio</h3>
                <address className="not-italic text-sm leading-relaxed text-faded-ink/80">
                  DHA Phase 6<br/>
                  Karachi, Pakistan<br/>
                  +92 21 3580 0000
                </address>
              </div>
              <div>
                <h3 className="text-[10px] font-mono tracking-widest uppercase text-faded-ink/50 mb-4">Client Care</h3>
                <p className="text-sm leading-relaxed text-faded-ink/80">
                  <a href="mailto:concierge@afforah.com" className="border-b border-faded-ink/30 hover:border-faded-ink transition-colors">concierge@afforah.com</a><br/>
                  Mon–Sat: 10AM – 7PM CET<br/>
                  Sun: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#FAF8F5] p-8 md:p-12 border border-faded-ink/10 shadow-2xl relative">
              {/* Tape effect */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 -translate-x-1/2 bg-white/40 backdrop-blur-md rotate-[-2deg] shadow-sm transform origin-center border border-black/5" />
              
              <h2 className="text-2xl font-serif text-deep-black mb-8 italic">Send a Dispatch</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-mono text-faded-ink/50">First Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-faded-ink/30 pb-2 text-sm font-serif outline-none focus:border-faded-ink transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-mono text-faded-ink/50">Last Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-faded-ink/30 pb-2 text-sm font-serif outline-none focus:border-faded-ink transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-mono text-faded-ink/50">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-faded-ink/30 pb-2 text-sm font-serif outline-none focus:border-faded-ink transition-colors" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-mono text-faded-ink/50">Inquiry / Subject</label>
                  <select className="w-full bg-transparent border-b border-faded-ink/30 pb-2 text-sm font-serif outline-none focus:border-faded-ink transition-colors cursor-pointer appearance-none rounded-none">
                    <option>Product Information</option>
                    <option>Order Status</option>
                    <option>Bespoke Services</option>
                    <option>Press / Media</option>
                  </select>
                </div>

                <div className="space-y-2 pt-4">
                  <label className="text-[10px] uppercase tracking-widest font-mono text-faded-ink/50">Message</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-faded-ink/30 pb-2 text-sm font-serif outline-none focus:border-faded-ink transition-colors resize-none" />
                </div>

                <button type="submit" className="flex items-center justify-between w-full py-4 border border-faded-ink/20 hover:bg-faded-ink hover:text-[#FAF8F5] transition-colors group px-6 mt-8">
                  <span className="text-xs uppercase tracking-[0.2em] font-medium">Transmit Message</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
