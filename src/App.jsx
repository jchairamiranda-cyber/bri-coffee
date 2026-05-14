import Navbar from '@/components/Navbar';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Hero from '@/sections/Hero';
import Menu from '@/sections/Menu';
import About from '@/sections/About';
import Differentiators from '@/sections/Differentiators';
import Location from '@/sections/Location';
import Footer from '@/sections/Footer';

/**
 * App — composition root.
 * Pure ordering of sections, no logic. Keeps the entry surface scannable.
 *
 * The section order is conversion-optimized:
 *   Hero        → emotional hook + dual CTA
 *   Menu        → main browsing surface (people came for this)
 *   About DXN   → answers "what's actually in it?" once interested
 *   Differentiators → "why here, not somewhere else"
 *   Location    → final close + WhatsApp CTA
 *   Footer      → housekeeping
 */
export default function App() {
  return (
    <div className="min-h-dvh flex flex-col bg-brand-cream">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Menu />
        <About />
        <Differentiators />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
