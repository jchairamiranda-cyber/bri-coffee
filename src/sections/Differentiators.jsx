import SectionTitle from '@/components/SectionTitle';
import BenefitCard from '@/components/BenefitCard';
import { differentiators } from '@/data/content';

/**
 * Differentiators — "why BRIG vs. any coffee shop".
 * Sits right after About (DXN explanation) so the user reads:
 *   "DXN is awesome → and here's specifically why BRIG is the place to drink it."
 *
 * 4 cards, 1/2/4 column responsive grid.
 */
export default function Differentiators() {
  return (
    <section
      id="diferencial"
      className="relative py-20 sm:py-28 bg-brand-paper"
    >
      <div className="container-x">
        <SectionTitle
          eyebrow={differentiators.eyebrow}
          headline={differentiators.headline}
          align="center"
          className="mb-12 sm:mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {differentiators.items.map((item, i) => (
            <BenefitCard key={item.title} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
