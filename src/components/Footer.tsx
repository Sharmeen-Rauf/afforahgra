import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-vintage-sepia text-faded-ink pt-24 pb-12 border-t border-faded-ink/10 relative z-10 hairline-top">
      {/* Top section: Main Navigation Columns */}
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-20 hairline-bottom mb-10">
        
        {/* HELP */}
        <div className="space-y-6">
          <h4 className="text-[10px] tracking-[0.2em] uppercase font-semibold text-faded-ink/90">Help</h4>
          <ul className="space-y-4 text-sm font-serif">
            <li>
              <span className="text-faded-ink/70">You can </span>
              <a href="#" className="border-b border-faded-ink hover:text-faded-ink/80 transition-colors">call</a>
              <span className="text-faded-ink/70"> or </span>
              <a href="#" className="border-b border-faded-ink hover:text-faded-ink/80 transition-colors">email us</a>.
            </li>
            <li><Link href="/faq" className="hover:opacity-60 transition-opacity">FAQ's</Link></li>
            <li><Link href="/care" className="hover:opacity-60 transition-opacity">Product Care</Link></li>
            <li><Link href="/stores" className="hover:opacity-60 transition-opacity">Stores</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="space-y-6">
          <h4 className="text-[10px] tracking-[0.2em] uppercase font-semibold text-faded-ink/90">Services</h4>
          <ul className="space-y-4 text-sm font-serif">
            <li><Link href="/services" className="hover:opacity-60 transition-opacity">Repairs</Link></li>
            <li><Link href="/services" className="hover:opacity-60 transition-opacity">Personalization</Link></li>
            <li><Link href="/services" className="hover:opacity-60 transition-opacity">Art of Gifting</Link></li>
            <li><Link href="/apps" className="hover:opacity-60 transition-opacity">Download our Apps</Link></li>
          </ul>
        </div>

        {/* ABOUT */}
        <div className="space-y-6">
          <h4 className="text-[10px] tracking-[0.2em] uppercase font-semibold text-faded-ink/90">About Afforah</h4>
          <ul className="space-y-4 text-sm font-serif">
            <li><Link href="/about" className="hover:opacity-60 transition-opacity">Fashion Shows</Link></li>
            <li><Link href="/about" className="hover:opacity-60 transition-opacity">Arts & Culture</Link></li>
            <li><Link href="/about" className="hover:opacity-60 transition-opacity">La Maison</Link></li>
            <li><Link href="/about" className="hover:opacity-60 transition-opacity">Sustainability</Link></li>
            <li><Link href="/news" className="hover:opacity-60 transition-opacity">Latest News</Link></li>
            <li><Link href="/about" className="hover:opacity-60 transition-opacity">Ethics and Compliance</Link></li>
            <li><Link href="/about" className="hover:opacity-60 transition-opacity">Careers</Link></li>
            <li><Link href="/about" className="hover:opacity-60 transition-opacity">Foundation Afforah</Link></li>
          </ul>
        </div>

        {/* EMAIL SIGN-UP & SOCIAL */}
        <div className="space-y-6">
          <h4 className="text-[10px] tracking-[0.2em] uppercase font-semibold text-faded-ink/90">Email Sign-up</h4>
          <p className="text-sm font-serif text-faded-ink/80 max-w-xs leading-relaxed">
            <a href="#" className="border-b border-faded-ink hover:text-faded-ink/80 transition-colors">Sign up</a> for Afforah emails and receive the latest news from the Maison, including exclusive online pre-launches and new collections.
          </p>
          <form className="relative max-w-xs mt-4 group">
            <input 
              type="email" 
              placeholder="Email address"
              className="w-full bg-transparent border-b border-faded-ink/30 pb-2 text-sm font-serif outline-none focus:border-faded-ink transition-colors placeholder:text-faded-ink/40"
            />
            <button type="submit" className="absolute right-0 bottom-2 text-faded-ink/50 group-hover:text-faded-ink transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="pt-8">
            <h4 className="text-[10px] tracking-[0.2em] uppercase font-semibold text-faded-ink/90 mb-4">Follow Us</h4>
            <div className="flex gap-4 items-center">
              {['Instagram', 'Twitter', 'Pinterest', 'YouTube'].map(social => (
                <a key={social} href="#" className="text-sm font-serif hover:opacity-60 transition-opacity">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Bottom section: Site & Legal */}
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 pt-4">
        <Link href="/" className="text-2xl md:text-4xl font-serif text-faded-ink uppercase tracking-widest text-center">
          Afforah
        </Link>
        <div className="flex flex-wrapjustify-center gap-6 text-[10px] uppercase tracking-[0.2em] text-faded-ink/60 font-sans">
          <Link href="/sitemap" className="hover:text-faded-ink transition-colors">Sitemap</Link>
          <Link href="/legal" className="hover:text-faded-ink transition-colors">Legal & Privacy</Link>
          <Link href="/cookies" className="hover:text-faded-ink transition-colors">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
