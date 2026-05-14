import Button, { ArrowRightIcon, WhatsAppIcon } from '@/components/Button';
import Logo from '@/components/Logo';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useWhatsApp } from '@/hooks/useWhatsApp';
import { hero } from '@/data/content';

/**
 * Hero — first impression, primary conversion zone.
 *
 * Conversion stack:
 *   1. Eyebrow → tells city + category fast
 *   2. Big headline → emotional hook
 *   3. Subheadline → clarifies offer + intensity option
 *   4. Two CTAs → primary (WhatsApp = $$$), secondary (Menu)
 *   5. Highlights bar → trust signals at a glance
 */
export default function Hero() {
  const ref = useScrollReveal();
  const { openExplore } = useWhatsApp();

  return (
    <section
      id="top"
      className="
        relative isolate overflow-hidden
        pt-[calc(var(--header-h)+24px)] pb-16
        sm:pt-[calc(var(--header-h)+40px)] sm:pb-24
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
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Copy */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 text-center lg:text-left items-center lg:items-start">
            <span className="eyebrow !text-brand-mocha">
              {hero.eyebrow}
            </span>

            <h1 className="h-display text-[44px] leading-[0.95] sm:text-6xl lg:text-[80px] text-brand-ink">
              {hero.headline}
            </h1>

            <p className="lead max-w-xl">
              {hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto pt-2">
              <Button
                variant="whatsapp"
                size="lg"
                href={openExplore()}
                external
                icon={<WhatsAppIcon />}
                className="w-full sm:w-auto"
              >
                {hero.ctaPrimary}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#menu"
                iconRight={<ArrowRightIcon />}
                className="w-full sm:w-auto"
              >
                {hero.ctaSecondary}
              </Button>
            </div>

            {/* Trust strip */}
            <ul className="
              flex flex-wrap justify-center lg:justify-start
              gap-x-5 gap-y-2 pt-6 sm:pt-8
              text-sm text-brand-coffee/80
            ">
              {hero.highlights.map((h) => (
                <li key={h.label} className="inline-flex items-center gap-1.5">
                  <span aria-hidden className="text-base">{h.icon}</span>
                  <span className="font-medium">{h.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo / visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
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
    <div className="relative w-[280px] sm:w-[360px] lg:w-[420px] aspect-square flex items-center justify-center">
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
      className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-24 opacity-60"
      viewBox="0 0 100 100"
    >
      <g
        stroke="currentColor"
        className="text-brand-mocha"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      >
        <path d="M30 80 q-6 -16 0 -32 q6 -16 0 -32" className="animate-steam" style={{ animationDelay: '0s' }} />
        <path d="M50 80 q6 -16 0 -32 q-6 -16 0 -32" className="animate-steam" style={{ animationDelay: '0.7s' }} />
        <path d="M70 80 q-6 -16 0 -32 q6 -16 0 -32" className="animate-steam" style={{ animationDelay: '1.4s' }} />
      </g>
    </svg>
  );
}
