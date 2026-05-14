import SectionTitle from '@/components/SectionTitle';
import BenefitCard from '@/components/BenefitCard';
import { about } from '@/data/content';

/**
 * About — explains DXN without dumping a wikipedia article.
 * Layout splits the section into:
 *   - Left: brief copy with two paragraphs
 *   - Right: 4 benefit cards (icon + title + 1-line desc)
 * On mobile: copy first, then cards (natural reading order).
 */
export default function About() {
  return (
    <section
      id="dxn"
      className="
        relative py-20 sm:py-28
        bg-brand-ink text-brand-cream
        overflow-hidden
      "
    >
      {/* Decorative texture */}
      <div
        aria-hidden
        className="absolute inset-0 bg-grain opacity-30 mix-blend-screen pointer-events-none"
      />
      {/* Soft accent glow */}
      <div
        aria-hidden
        className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(closest-side,rgba(168,124,79,0.20),transparent_70%)]"
      />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Copy */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <span className="eyebrow !text-brand-caramel before:!bg-brand-caramel">
              {about.eyebrow}
            </span>
            <h2 className="h-display text-3xl sm:text-4xl lg:text-5xl text-brand-cream">
              {about.headline}
            </h2>
            <div className="flex flex-col gap-4 text-brand-cream/75 leading-relaxed text-base sm:text-lg">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 pt-4">
              {['Ganoderma', 'Cordyceps', 'Espirulina', 'Melena de León'].map(
                (chip) => (
                  <span
                    key={chip}
                    className="
                      inline-flex items-center
                      text-xs font-semibold uppercase tracking-wider
                      px-3 py-1.5 rounded-full
                      bg-brand-cream/10 text-brand-cream/90
                      border border-brand-cream/15
                    "
                  >
                    {chip}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Benefits grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {about.benefits.map((b, i) => (
                <DarkBenefitCard key={b.title} {...b} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Dark variant of BenefitCard for the inverted About section.
 * Wraps BenefitCard with a wrapper that overrides surface colors.
 */
function DarkBenefitCard(props) {
  return (
    <div className="dark-card-wrap">
      <BenefitCard {...props} />
      <style>{`
        .dark-card-wrap > .reveal {
          background-color: rgba(245, 239, 230, 0.04);
          border-color: rgba(245, 239, 230, 0.10);
        }
        .dark-card-wrap > .reveal:hover {
          border-color: rgba(245, 239, 230, 0.25);
        }
        .dark-card-wrap > .reveal h3 {
          color: #F5EFE6;
        }
        .dark-card-wrap > .reveal p {
          color: rgba(245, 239, 230, 0.70);
        }
        .dark-card-wrap > .reveal > div:first-child {
          background-color: #F5EFE6;
          color: #0A0A0A;
        }
      `}</style>
    </div>
  );
}
