import Navbar from '@/components/Navbar';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Hero from '@/sections/Hero';
import Categories from '@/sections/Categories';
import IntensityShowcase from '@/sections/IntensityShowcase';
import Ingredients from '@/sections/Ingredients';
import Menu from '@/sections/Menu';
import BrandStory from '@/sections/BrandStory';
import InfoBar from '@/sections/InfoBar';
import Footer from '@/sections/Footer';

/**
 * App — composition root.
 * Pure ordering of sections, no logic.
 *
 * Brand-led narrative arc:
 *   Hero               → emotional headline + identity
 *   Categories         → visual entry points (3 photo-style cards)
 *   IntensityShowcase  → "Suave o Intenso" interactive explainer
 *   Ingredients        → DXN superfoods (Spirulina / Cordyceps / Ganoderma)
 *   Menu               → visual catalog (no ordering CTAs)
 *   BrandStory         → "Somos BRIG" cinematic close
 *   InfoBar            → location · hours · social
 *   Footer             → housekeeping
 */
export default function App() {
  return (
    <div className="min-h-dvh flex flex-col bg-brand-cream">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Categories />
        <IntensityShowcase />
        <Ingredients />
        <Menu />
        <BrandStory />
        <InfoBar />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
