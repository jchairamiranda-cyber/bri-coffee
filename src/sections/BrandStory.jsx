import { useScrollReveal } from '@/hooks/useScrollReveal';
import { brandStory } from '@/data/content';

/**
 * BrandStory — "Somos BRIG" cinematic section.
 *
 * Dark, brand-led, emotional close. Two columns on desktop:
 *   - Left:  eyebrow + headline + paragraph + 3 small pillars (icons)
 *   - Right: stylized cluster of 3 cup illustrations with steam (frappé,
 *            espresso, cappuccino) — matches the mockup's drink trio.
 *
 * Visual is pure SVG so no photo dependency. Photos can be added later
 * without changing the section structure.
 */
export default function BrandStory() {
  const ref = useScrollReveal();

  return (
    <section
      id="sobre-brig"
      className="relative py-16 sm:py-24 lg:py-28 bg-brand-ink text-brand-cream overflow-hidden"
    >
      {/* Background layers */}
      <span aria-hidden className="absolute inset-0 bg-grain opacity-25 mix-blend-screen" />
      <span
        aria-hidden
        className="
          absolute -left-32 top-1/2 -translate-y-1/2
          w-[500px] h-[500px] rounded-full
          bg-[radial-gradient(closest-side,rgba(168,124,79,0.22),transparent_70%)]
          blur-2xl
        "
      />

      <div className="container-x relative">
        <div ref={ref} className="reveal grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <span className="eyebrow !text-brand-caramel before:!bg-brand-caramel">
              {brandStory.eyebrow}
            </span>
            <h2 className="h-display text-4xl sm:text-5xl lg:text-6xl text-brand-cream">
              {brandStory.headline}
            </h2>
            {brandStory.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base sm:text-lg text-brand-cream/75 leading-relaxed max-w-xl"
              >
                {highlightBold(p)}
              </p>
            ))}

            {/* Pillars row */}
            <ul className="grid grid-cols-3 gap-3 sm:gap-5 mt-4 sm:mt-6">
              {brandStory.pillars.map((p) => (
                <li
                  key={p.title}
                  className="flex flex-col items-start gap-2"
                >
                  <span
                    className="
                      inline-flex items-center justify-center
                      h-8 w-8 sm:h-9 sm:w-9 rounded-lg
                      bg-brand-cream/8 border border-brand-cream/15
                      text-brand-caramel
                    "
                  >
                    <PillarIcon name={p.icon} />
                  </span>
                  <span className="text-xs sm:text-sm text-brand-cream/75 font-medium leading-snug">
                    {p.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual: trio of cups */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <CupsTrio />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Highlight **bold** keywords in paragraph copy                        */
/* ------------------------------------------------------------------ */
function highlightBold(text) {
  // Wrap with bolded brand-cream when between ** markers
  if (!text.includes('**')) return text;
  const parts = text.split('**');
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-brand-cream font-semibold">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

/* ------------------------------------------------------------------ */
/* CupsTrio — stylized 3 cups with steam (frappé / espresso / cappuc.)  */
/* ------------------------------------------------------------------ */
function CupsTrio() {
  return (
    <div className="relative w-full max-w-[520px] aspect-[5/4]">
      {/* Halo */}
      <span
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(200,162,75,0.22),transparent_70%)] blur-2xl"
      />

      <svg
        viewBox="0 0 500 400"
        className="relative w-full h-full text-brand-cream"
        aria-label="Trío de cafés BRIG"
      >
        {/* Steam wisps over the three cups */}
        <g
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        >
          <path d="M120 130 q -10 -28 0 -55 q 10 -28 0 -55" className="animate-steam" style={{ animationDelay: '0s' }} />
          <path d="M260 110 q 10 -30 0 -60 q -10 -30 0 -60" className="animate-steam" style={{ animationDelay: '0.7s' }} />
          <path d="M395 130 q -10 -28 0 -55 q 10 -28 0 -55" className="animate-steam" style={{ animationDelay: '1.4s' }} />
        </g>

        {/* Saucer ground shadow */}
        <ellipse cx="250" cy="370" rx="220" ry="14" fill="rgba(0,0,0,0.45)" />

        {/* LEFT cup — frappé / tall glass with cream top */}
        <g transform="translate(50,150)">
          <path d="M0 30 L 140 30 L 130 200 Q 70 215 10 200 Z" fill="#2A1810" stroke="#3D2418" strokeWidth="2" />
          <ellipse cx="70" cy="30" rx="70" ry="10" fill="#0A0606" stroke="#3D2418" strokeWidth="2" />
          {/* Cream top */}
          <ellipse cx="70" cy="22" rx="62" ry="14" fill="#F5EFE6" />
          <ellipse cx="70" cy="14" rx="40" ry="10" fill="#FFFFFF" />
          {/* Straw */}
          <rect x="105" y="-15" width="5" height="55" fill="#A87C4F" />
          {/* BRIG label */}
          <text x="70" y="120" textAnchor="middle" fontFamily="Inter" fontWeight="900" fontSize="22" fill="#F5EFE6" opacity="0.85">BRIG</text>
        </g>

        {/* CENTER cup — classic espresso (slightly elevated) */}
        <g transform="translate(195,130)">
          <path d="M0 30 L 130 30 L 120 195 Q 65 210 10 195 Z" fill="#1A0F0A" stroke="#3D2418" strokeWidth="2" />
          <ellipse cx="65" cy="30" rx="65" ry="10" fill="#0A0606" stroke="#3D2418" strokeWidth="2" />
          <ellipse cx="65" cy="28" rx="58" ry="8" fill="#3D2418" />
          <ellipse cx="55" cy="26" rx="30" ry="3" fill="#A87C4F" opacity="0.5" />
          {/* Handle */}
          <path d="M130 70 q 30 0 30 30 q 0 30 -32 30" fill="none" stroke="#1A0F0A" strokeWidth="10" strokeLinecap="round" />
          {/* BRIG label */}
          <text x="65" y="120" textAnchor="middle" fontFamily="Inter" fontWeight="900" fontSize="22" fill="#F5EFE6" opacity="0.9">BRIG</text>
          <text x="65" y="135" textAnchor="middle" fontFamily="Inter" fontWeight="500" fontSize="7" fill="#F5EFE6" opacity="0.7" letterSpacing="3">COFFEE</text>
        </g>

        {/* RIGHT cup — cappuccino with foam swirl */}
        <g transform="translate(335,150)">
          <path d="M0 30 L 140 30 L 130 200 Q 70 215 10 200 Z" fill="#2A1810" stroke="#3D2418" strokeWidth="2" />
          <ellipse cx="70" cy="30" rx="70" ry="10" fill="#0A0606" stroke="#3D2418" strokeWidth="2" />
          {/* Foam */}
          <ellipse cx="70" cy="22" rx="62" ry="14" fill="#F5EFE6" />
          <ellipse cx="70" cy="18" rx="50" ry="10" fill="#FFFFFF" />
          {/* Chocolate drizzle */}
          <path d="M30 16 q 12 8 25 0 q 13 -8 25 0 q 13 8 25 0" stroke="#3D2418" strokeWidth="2" fill="none" />
          {/* BRIG label */}
          <text x="70" y="120" textAnchor="middle" fontFamily="Inter" fontWeight="900" fontSize="22" fill="#F5EFE6" opacity="0.85">BRIG</text>
        </g>
      </svg>
    </div>
  );
}

function PillarIcon({ name }) {
  const props = {
    className: 'h-4 w-4',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };
  if (name === 'cup') return (<svg {...props}><path d="M4 8 h 13 v 6 a 5 5 0 0 1 -5 5 H 9 a 5 5 0 0 1 -5 -5 z" /><path d="M17 10 h 2 a 2 2 0 0 1 0 4 h -2" /><path d="M8 5 q 2 -2 4 0" /></svg>);
  if (name === 'leaf') return (<svg {...props}><path d="M3 21 c 0 -9 8 -15 18 -16 c -1 11 -7 17 -15 17 c -1 0 -2 0 -3 -1 z" /></svg>);
  if (name === 'heart') return (<svg {...props}><path d="M20.84 4.61 a 5.5 5.5 0 0 0 -7.78 0 L 12 5.67 l -1.06 -1.06 a 5.5 5.5 0 0 0 -7.78 7.78 l 1.06 1.06 L 12 21.23 l 7.78 -7.78 1.06 -1.06 a 5.5 5.5 0 0 0 0 -7.78 z" /></svg>);
  return null;
}
