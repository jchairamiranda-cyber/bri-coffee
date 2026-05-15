import Button, { ArrowRightIcon, WhatsAppIcon } from '@/components/Button';
import Logo from '@/components/Logo';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useWhatsApp } from '@/hooks/useWhatsApp';
import { hero } from '@/data/content';

/**
 * Hero — first impression, primary conversion zone.
 *
 * Mobile-first treatment:
 *  - Compact eyebrow + tight headline at 38–44px (320–430px screens).
 *  - Single-column layout below lg:; visual hidden on the smallest phones
 *    so copy + CTAs fit above the fold.
 *  - Both CTAs are full-width on mobile with ≥ 48px height.
 *  - Trust strip wraps cleanly into 3 columns on phones.
 */
export default function Hero() {
  const ref = useScrollReveal();
  const { openExplore } = useWhatsApp();

  return (
    <section
      id="top"
      className="
        relative isolate overflow-hidden
        pt-[calc(var(--header-h)+16px)] pb-12
        sm:pt-[calc(var(--header-h)+32px)] sm:pb-20
        lg:pt-[calc(var(--header-h)+64px)] lg:pb-32
        bg-brand-cream
      "
    >
      {/* Subtle texture for warmth */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grain opacity-40 mix-blend-multiply"
      />
      {/* Soft radial spotlight */}
      <div
        aria-hidden
        className="absolute inset-x-0 -top-48 -z-10 h-[600px]
          bg-[radial-gradient(60%_50%_at_50%_30%,rgba(168,124,79,0.18),transparent_70%)]"
      />

      <div ref={ref} className="reveal container-x">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          {/* Copy */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 text-center lg:text-left items-center lg:items-start">
            <span className="eyebrow !text-brand-mocha">{hero.eyebrow}</span>

            <h1
              className="
                h-display
                text-[40px] leading-[0.96]
                xs:text-[44px]
                sm:text-6xl
                lg:text-[80px]
                text-brand-ink
              "
            >
              {hero.headline}
            </h1>

            <p className="lead max-w-xl text-[15px] sm:text-lg">
              {hero.subheadline}
            </p>

            {/* CTAs — full width on mobile, inline ≥ sm */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-1 sm:pt-2">
              <Button
                variant="whatsapp"
                size="lg"
                href={openExplore()}
                external
                icon={<WhatsAppIcon />}
                className="w-full sm:w-auto !min-h-14"
              >
                {hero.ctaPrimary}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#menu"
                iconRight={<ArrowRightIcon />}
                className="w-full sm:w-auto !min-h-14"
              >
                {hero.ctaSecondary}
              </Button>
            </div>

            {/* Trust strip */}
            <ul
              className="
                grid grid-cols-3 gap-2 sm:flex sm:flex-wrap
                w-full sm:w-auto
                justify-items-center sm:justify-center lg:justify-start
                gap-x-5 gap-y-2
                pt-5 sm:pt-7
                text-xs sm:text-sm text-brand-coffee/80
              "
            >
              {hero.highlights.map((h) => (
                <li
                  key={h.label}
                  className="inline-flex items-center gap-1.5 text-center"
                >
                  <span aria-hidden className="text-base">
                    {h.icon}
                  </span>
                  <span className="font-medium leading-tight">{h.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual — show smaller on mobile, full size on desktop */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-first lg:order-last">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * HeroVisual — large brand mark with soft animated halo + floating "steam".
 * Pure CSS/SVG, no external assets, no layout shift.
 */
function HeroVisual() {
  return (
    <div
      className="
        relative
        w-[200px] xs:w-[240px] sm:w-[320px] lg:w-[420px]
        aspect-square flex items-center justify-center
      "
    >
      {/* Glow ring */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgba(168,124,79,0.25),transparent_70%)] blur-2xl"
      />
      {/* Concentric ring */}
      <div
        aria-hidden
        className="absolute inset-6 rounded-full border border-brand-coffee/15"
      />
      <div
        aria-hidden
        className="absolute inset-14 rounded-full border border-brand-coffee/10"
      />

      {/* Steam wisps */}
      <Steam />

      {/* Logo */}
      <Logo
        variant="full"
        className="relative z-10 w-[70%] h-auto text-brand-ink drop-shadow-sm"
      />
    </div>
  );
}

function Steam() {
  return (
    <svg
      aria-hidden
      className="absolute top-2 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-20 sm:h-24 opacity-60"
      viewBox="0 0 100 100"
    >
      <g
        stroke="currentColor"
        className="text-brand-mocha"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      >
        <path
          d="M30 80 q-6 -16 0 -32 q6 -16 0 -32"
          className="animate-steam"
          style={{ animationDelay: '0s' }}
        />
        <path
          d="M50 80 q6 -16 0 -32 q-6 -16 0 -32"
          className="animate-steam"
          style={{ animationDelay: '0.7s' }}
        />
        <path
          d="M70 80 q-6 -16 0 -32 q6 -16 0 -32"
          className="animate-steam"
          style={{ animationDelay: '1.4s' }}
        />
      </g>
    </svg>
  );
}
