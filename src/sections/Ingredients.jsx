import SectionTitle from '@/components/SectionTitle';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ingredients } from '@/data/ingredients';
import { ingredientsSection } from '@/data/content';

/**
 * Ingredients — Spirulina / Cordyceps / Ganoderma.
 *
 * Educational cards (not transactional). Each card has:
 *   - A "photo-like" visual area (gradient + stylized SVG illustration)
 *   - A small icon badge in the corner
 *   - Name + tagline with bold keywords
 *
 * Mobile: horizontal snap-scroll carousel (matches mockup).
 * Desktop: 3-column grid.
 */
export default function Ingredients() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-28 bg-brand-cream">
      <div className="container-x">
        <SectionTitle
          eyebrow={ingredientsSection.eyebrow}
          headline={ingredientsSection.headline}
          align="center"
          className="mb-10 sm:mb-14"
        />

        <div
          className="
            -mx-4 sm:mx-0
            flex sm:grid sm:grid-cols-3
            gap-4 sm:gap-5 lg:gap-6
            overflow-x-auto sm:overflow-visible
            snap-x snap-mandatory sm:snap-none
            scrollbar-none
            px-4 sm:px-0
            pb-2 sm:pb-0
          "
        >
          {ingredients.map((ing, i) => (
            <IngredientCard key={ing.slug} ingredient={ing} index={i} />
          ))}
        </div>

        {/* Mobile carousel dots */}
        <div className="mt-5 flex sm:hidden justify-center gap-1.5" aria-hidden>
          {ingredients.map((_, i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-brand-coffee/25"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ACCENT_STYLES = {
  green: { badge: 'bg-[#3D6B30]/85 text-brand-cream' },
  gold:  { badge: 'bg-[#A87C4F]/95 text-brand-cream' },
  red:   { badge: 'bg-[#7A2A1D]/95 text-brand-cream' },
};

function IngredientCard({ ingredient, index }) {
  const ref = useScrollReveal({ delay: index * 90 });
  const accent = ACCENT_STYLES[ingredient.accent] || ACCENT_STYLES.gold;

  // Tagline supports **bold** keywords
  const taglineParts = ingredient.tagline.split('**').map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-brand-ink">
        {part}
      </strong>
    ) : (
      part
    )
  );

  return (
    <article
      ref={ref}
      className="
        reveal
        group relative shrink-0
        w-[78%] xs:w-[68%] sm:w-auto
        flex flex-col
        bg-brand-milk
        border border-brand-coffee/10
        rounded-3xl overflow-hidden
        shadow-soft hover:shadow-cardHover
        transition-all duration-500 ease-out
        hover:-translate-y-1
        snap-start
      "
    >
      {/* Visual area */}
      <div
        className="relative aspect-[4/3] sm:aspect-[5/4] overflow-hidden"
        style={{ background: ingredient.gradient }}
      >
        {/* Grain */}
        <span aria-hidden className="absolute inset-0 bg-grain opacity-25 mix-blend-screen" />
        {/* Stylized SVG illustration */}
        <Illustration slug={ingredient.slug} />
        {/* Icon badge */}
        <span
          className={`
            absolute bottom-3 left-3
            inline-flex items-center justify-center
            h-10 w-10 rounded-full
            ${accent.badge}
            shadow-card
            ring-1 ring-white/15
          `}
        >
          <BadgeIcon slug={ingredient.slug} />
        </span>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col gap-2">
        <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-ink leading-tight">
          {ingredient.name}
        </h3>
        <p className="text-sm sm:text-[15px] text-brand-coffee/75 leading-relaxed">
          {taglineParts}
        </p>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Stylized illustrations — pure SVG, no photo deps                     */
/* ------------------------------------------------------------------ */
function Illustration({ slug }) {
  const common = {
    className: 'absolute inset-0 w-full h-full',
    viewBox: '0 0 400 300',
    'aria-hidden': true,
  };

  if (slug === 'spirulina') {
    // A small bowl of green powder, with leaves
    return (
      <svg {...common}>
        {/* Leaves */}
        <g fill="#4F7A40" opacity="0.85">
          <path d="M40 90 q 30 -40 80 -20 q -15 50 -70 50 q -8 -15 -10 -30 z" />
          <path d="M120 60 q 35 -45 90 -15 q -15 55 -80 45 q -10 -15 -10 -30 z" opacity="0.7" />
        </g>
        {/* Bowl */}
        <ellipse cx="240" cy="220" rx="120" ry="20" fill="rgba(0,0,0,0.4)" />
        <path d="M120 200 L 360 200 q 0 60 -120 60 q -120 0 -120 -60 z" fill="#1A0F0A" />
        <ellipse cx="240" cy="200" rx="120" ry="20" fill="#0A0606" />
        {/* Powder mound */}
        <ellipse cx="240" cy="195" rx="100" ry="14" fill="#2E5A28" />
        <ellipse cx="225" cy="190" rx="60" ry="8" fill="#3F7A35" />
        <ellipse cx="220" cy="186" rx="35" ry="4" fill="#5A9A48" opacity="0.8" />
      </svg>
    );
  }

  if (slug === 'cordyceps') {
    // Cluster of cordyceps stalks (orange-brown)
    return (
      <svg {...common}>
        <g fill="#C57A2A">
          <path d="M120 260 q -5 -70 -10 -130 q 0 -10 8 -10 q 8 0 10 10 q 5 60 4 130 z" />
          <path d="M170 270 q -3 -90 -2 -160 q 0 -8 8 -8 q 8 0 10 8 q 3 80 -2 160 z" />
          <path d="M220 265 q 2 -85 0 -150 q 0 -8 8 -8 q 8 0 8 8 q 6 75 0 150 z" />
          <path d="M270 270 q -3 -65 -4 -125 q 0 -8 8 -8 q 8 0 8 8 q 1 60 -2 125 z" />
        </g>
        {/* Tips (darker) */}
        <g fill="#7C4A1A">
          <ellipse cx="115" cy="125" rx="10" ry="14" />
          <ellipse cx="176" cy="105" rx="12" ry="16" />
          <ellipse cx="228" cy="110" rx="11" ry="15" />
          <ellipse cx="274" cy="140" rx="10" ry="14" />
        </g>
        {/* Ground */}
        <ellipse cx="200" cy="270" rx="180" ry="14" fill="rgba(0,0,0,0.45)" />
      </svg>
    );
  }

  if (slug === 'ganoderma') {
    // Ganoderma / Reishi mushroom — red fan-like cap
    return (
      <svg {...common}>
        <defs>
          <radialGradient id="gan-cap" cx="40%" cy="40%" r="80%">
            <stop offset="0%" stopColor="#C5402E" />
            <stop offset="55%" stopColor="#8A2517" />
            <stop offset="100%" stopColor="#3E0F08" />
          </radialGradient>
        </defs>
        {/* Background mushroom (smaller, behind) */}
        <g transform="translate(80,80)" opacity="0.55">
          <path d="M0 70 q 50 -90 110 0 q -55 30 -110 0 z" fill="url(#gan-cap)" />
          <rect x="48" y="68" width="16" height="60" fill="#3D2418" rx="2" />
        </g>
        {/* Main mushroom */}
        <g transform="translate(170,90)">
          <path
            d="M0 80 q 65 -110 150 0 q -75 35 -150 0 z"
            fill="url(#gan-cap)"
          />
          {/* Concentric rings on the cap */}
          <g stroke="#5A1409" strokeWidth="2" fill="none" opacity="0.4">
            <path d="M10 70 q 65 -90 130 0" />
            <path d="M22 60 q 53 -75 106 0" />
          </g>
          {/* Stem */}
          <rect x="68" y="78" width="18" height="80" fill="#3D2418" rx="2" />
        </g>
        {/* Ground */}
        <ellipse cx="200" cy="270" rx="180" ry="14" fill="rgba(0,0,0,0.45)" />
      </svg>
    );
  }

  return null;
}

function BadgeIcon({ slug }) {
  const props = {
    className: 'h-5 w-5',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };
  if (slug === 'spirulina') return (<svg {...props}><path d="M3 21 c 0 -9 8 -15 18 -16 c -1 11 -7 17 -15 17 c -1 0 -2 0 -3 -1 z" /><path d="M9 14 c 2 -3 5 -5 9 -6" /></svg>);
  if (slug === 'cordyceps') return (<svg {...props}><path d="M12 4 v 16" /><path d="M8 8 q 4 -3 8 0" /><path d="M9 12 q 3 -2 6 0" /></svg>);
  if (slug === 'ganoderma') return (<svg {...props}><path d="M4 12 a 8 8 0 0 1 16 0 v 1 H 4 v -1 z" /><path d="M10 13 v 6 a 2 2 0 0 0 4 0 v -6" /></svg>);
  return null;
}
