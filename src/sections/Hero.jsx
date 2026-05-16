import Button from '@/components/Button';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { hero } from '@/data/content';

/**
 * Hero — cinematic brand opener.
 *
 * Visual recipe (no photo deps):
 *   - Dark gradient background (espresso → ink) for cinematic depth
 *   - Soft warm spotlight from upper-right (suggests sunset/light)
 *   - Center-right: stylized coffee cup SVG with rising steam
 *   - Left: two-tone headline (ink on light bg → cream + accent on dark)
 *   - Subheadline + 3 small icon highlights + single caramel CTA
 *
 * Mobile-first: stack vertically, visual smaller, CTA full-width.
 */
export default function Hero() {
  const ref = useScrollReveal();

  return (
    <section
      id="inicio"
      className="
        relative isolate overflow-hidden
        bg-brand-ink text-brand-cream
        pt-[calc(var(--header-h)+24px)] pb-16
        sm:pt-[calc(var(--header-h)+40px)] sm:pb-24
        lg:pt-[calc(var(--header-h)+72px)] lg:pb-32
      "
    >
      {/* Cinematic background layers (no photo) */}
      <BackgroundLayers />

      <div ref={ref} className="reveal container-x relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Copy column */}
          <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6">
            <h1 className="h-display text-[44px] xs:text-5xl sm:text-6xl lg:text-[80px] leading-[0.95]">
              {hero.headlineLines.map((line, i) => (
                <span
                  key={i}
                  className={`block ${
                    line.tone === 'accent' ? 'text-brand-caramel' : 'text-brand-cream'
                  }`}
                >
                  {line.text}
                </span>
              ))}
            </h1>

            <p className="text-base sm:text-lg text-brand-cream/75 max-w-md leading-relaxed">
              {hero.subheadline}
            </p>

            {/* Decorative divider */}
            <div className="h-px w-12 bg-brand-cream/25 my-1" />

            {/* Highlights row */}
            <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm">
              {hero.highlights.map((h) => (
                <li key={h.label} className="inline-flex items-center gap-2 text-brand-cream/85">
                  <span
                    className="
                      inline-flex items-center justify-center
                      h-7 w-7 rounded-full
                      bg-brand-cream/8 border border-brand-cream/15
                      text-brand-caramel
                    "
                  >
                    <HighlightIcon name={h.icon} />
                  </span>
                  <span className="font-medium">{h.label}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="pt-2 sm:pt-3">
              <Button
                variant="caramel"
                size="lg"
                href={hero.ctaPrimaryHref}
                iconRight={<ArrowDownIcon className="h-4 w-4" />}
                className="w-full sm:w-auto !min-h-14 uppercase tracking-wider text-[13px] sm:text-sm font-bold"
              >
                {hero.ctaPrimary}
              </Button>
            </div>
          </div>

          {/* Visual column */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end order-first lg:order-last">
            <HeroVisual />
          </div>
        </div>

        {/* Right-edge "DESLIZA" vertical hint (desktop only) */}
        <div
          className="
            hidden lg:flex flex-col items-center gap-3
            absolute top-1/2 right-3 -translate-y-1/2
            text-[10px] tracking-[0.4em] font-semibold uppercase text-brand-cream/40
          "
          aria-hidden
        >
          <span className="rotate-180" style={{ writingMode: 'vertical-rl' }}>
            Desliza
          </span>
          <span className="h-12 w-px bg-brand-cream/20" />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Background layers — pure CSS, no image deps                          */
/* ------------------------------------------------------------------ */
function BackgroundLayers() {
  return (
    <>
      {/* Base radial — warm bottom-left spotlight */}
      <div
        aria-hidden
        className="
          absolute inset-0 -z-10
          bg-[radial-gradient(70%_60%_at_20%_85%,rgba(168,124,79,0.18),transparent_60%)]
        "
      />
      {/* Soft warm glow upper-right */}
      <div
        aria-hidden
        className="
          absolute inset-0 -z-10
          bg-[radial-gradient(45%_45%_at_75%_20%,rgba(200,162,75,0.20),transparent_70%)]
        "
      />
      {/* Grain texture */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grain opacity-30 mix-blend-screen"
      />
      {/* Bottom gradient fade for depth */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-black/40 to-transparent"
      />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* HeroVisual — stylized steaming cup, no photo                         */
/* ------------------------------------------------------------------ */
function HeroVisual() {
  return (
    <div
      className="
        relative
        w-[260px] xs:w-[320px] sm:w-[400px] lg:w-[480px]
        aspect-square
        flex items-center justify-center
      "
    >
      {/* Outer warm glow */}
      <div
        aria-hidden
        className="
          absolute inset-0 rounded-full
          bg-[radial-gradient(closest-side,rgba(200,162,75,0.30),transparent_70%)]
          blur-2xl
        "
      />
      {/* Concentric rings */}
      <div aria-hidden className="absolute inset-6 rounded-full border border-brand-caramel/20" />
      <div aria-hidden className="absolute inset-16 rounded-full border border-brand-caramel/10" />

      <svg
        viewBox="0 0 400 400"
        className="relative z-10 w-full h-full text-brand-cream"
        aria-label="Café BRIG con vapor"
      >
        {/* Steam paths — animated */}
        <g
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.55"
        >
          <path d="M155 145 q-10 -28 0 -55 q10 -28 0 -55" className="animate-steam" style={{ animationDelay: '0s', transformOrigin: 'center' }} />
          <path d="M200 135 q12 -28 0 -55 q-12 -28 0 -55" className="animate-steam" style={{ animationDelay: '0.7s' }} />
          <path d="M245 145 q-10 -28 0 -55 q10 -28 0 -55" className="animate-steam" style={{ animationDelay: '1.4s' }} />
        </g>

        {/* Saucer */}
        <ellipse cx="200" cy="320" rx="135" ry="14" fill="rgba(245,239,230,0.12)" />
        <ellipse cx="200" cy="316" rx="125" ry="10" fill="rgba(245,239,230,0.20)" />

        {/* Cup body */}
        <path
          d="M110 170 L 290 170 L 280 305 Q 200 325 120 305 Z"
          fill="#1A0F0A"
          stroke="#3D2418"
          strokeWidth="2"
        />
        {/* Cup rim ellipse (top opening) */}
        <ellipse cx="200" cy="170" rx="90" ry="14" fill="#0A0606" stroke="#3D2418" strokeWidth="2" />
        {/* Coffee surface */}
        <ellipse cx="200" cy="168" rx="80" ry="10" fill="#3D2418" />
        {/* Crema highlight */}
        <ellipse cx="190" cy="166" rx="40" ry="4" fill="#A87C4F" opacity="0.6" />
        {/* Handle */}
        <path
          d="M290 200 q 40 0 40 35 q 0 35 -42 35"
          fill="none"
          stroke="#1A0F0A"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M290 200 q 40 0 40 35 q 0 35 -42 35"
          fill="none"
          stroke="#3D2418"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* BRIG monogram on the cup */}
        <text
          x="200"
          y="255"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontWeight="900"
          fontSize="34"
          letterSpacing="-1"
          fill="#F5EFE6"
          opacity="0.92"
        >
          BRIG
        </text>
        <text
          x="200"
          y="275"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontWeight="500"
          fontSize="9"
          letterSpacing="4"
          fill="#F5EFE6"
          opacity="0.7"
        >
          COFFEE
        </text>
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Tiny icon set for the highlights row                                 */
/* ------------------------------------------------------------------ */
function HighlightIcon({ name }) {
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
  if (name === 'energy') return (<svg {...props}><path d="M13 2 L 4 14 h 7 l -1 8 l 9 -12 h -7 z" /></svg>);
  if (name === 'brain')  return (<svg {...props}><path d="M9 3 a 3 3 0 0 0 -3 3 v 1 a 3 3 0 0 0 -3 3 a 3 3 0 0 0 3 3 a 3 3 0 0 0 3 3 a 3 3 0 0 0 3 -3 V 6 a 3 3 0 0 0 -3 -3 z" /><path d="M15 3 a 3 3 0 0 1 3 3 v 1 a 3 3 0 0 1 3 3 a 3 3 0 0 1 -3 3 a 3 3 0 0 1 -3 3 a 3 3 0 0 1 -3 -3 V 6 a 3 3 0 0 1 3 -3 z" /></svg>);
  if (name === 'leaf')   return (<svg {...props}><path d="M3 21 c 0 -9 8 -15 18 -16 c -1 11 -7 17 -15 17 c -1 0 -2 0 -3 -1 z" /><path d="M9 14 c 2 -3 5 -5 9 -6" /></svg>);
  return null;
}

function ArrowDownIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M10 3a.75.75 0 0 1 .75.75v10.69l3.97-3.97a.75.75 0 1 1 1.06 1.06l-5.25 5.25a.75.75 0 0 1-1.06 0L4.22 11.53a.75.75 0 1 1 1.06-1.06l3.97 3.97V3.75A.75.75 0 0 1 10 3Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
