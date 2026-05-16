import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { intensity } from '@/data/content';

/**
 * IntensityShowcase — interactive Suave / Intenso explainer.
 *
 * Matches the mockup: dark panel, a glowing coffee bean in the center,
 * two columns of text around it. The two labels are clickable — selecting
 * one shifts the glow + intensifies one side, dims the other.
 *
 * Pure visual feedback (no form, no commit, no toggle elsewhere) — this is
 * a brand explainer, not a configurator.
 */
export default function IntensityShowcase() {
  const [active, setActive] = useState('suave');
  const ref = useScrollReveal();

  return (
    <section className="relative py-14 sm:py-20 bg-brand-cream">
      <div className="container-x">
        <div
          ref={ref}
          className="
            reveal
            relative overflow-hidden
            bg-brand-ink text-brand-cream
            rounded-3xl
            p-6 sm:p-10 lg:p-12
            border border-brand-coffee/30
          "
        >
          {/* Decorative grain */}
          <span aria-hidden className="absolute inset-0 bg-grain opacity-25 mix-blend-screen" />
          {/* Warm spotlight that follows the active side */}
          <span
            aria-hidden
            className={`
              absolute inset-0 transition-all duration-700 ease-out
              bg-[radial-gradient(45%_55%_at_var(--glow-x)_55%,rgba(200,162,75,0.22),transparent_70%)]
            `}
            style={{ ['--glow-x']: active === 'suave' ? '25%' : '75%' }}
          />

          <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: copy */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <span className="eyebrow !text-brand-caramel before:!bg-brand-caramel">
                {intensity.eyebrow}
              </span>
              <h2 className="h-display text-3xl sm:text-4xl lg:text-5xl text-brand-cream">
                {intensity.headline}
              </h2>
              <p className="text-brand-cream/70 text-base sm:text-lg leading-relaxed max-w-md">
                {intensity.subheadline}
              </p>
            </div>

            {/* Right: interactive panel */}
            <div className="lg:col-span-7">
              <div
                role="radiogroup"
                aria-label="Elige intensidad"
                className="
                  relative
                  flex items-stretch
                  rounded-3xl
                  border border-brand-caramel/25
                  bg-black/40
                  p-4 sm:p-6
                  overflow-hidden
                "
              >
                {/* Center glowing bean — sits behind, visually anchors the choice */}
                <CenterBean active={active} />

                {/* Suave side */}
                <IntensityCol
                  data={intensity.options[0]}
                  active={active === 'suave'}
                  onSelect={() => setActive('suave')}
                  align="left"
                />

                {/* Center column spacer for the bean */}
                <div className="w-[80px] sm:w-[120px] shrink-0" aria-hidden />

                {/* Intenso side */}
                <IntensityCol
                  data={intensity.options[1]}
                  active={active === 'intenso'}
                  onSelect={() => setActive('intenso')}
                  align="right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntensityCol({ data, active, onSelect, align }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={active}
      onClick={onSelect}
      className={`
        flex-1
        flex flex-col gap-2
        min-h-[140px] sm:min-h-[180px]
        rounded-2xl
        px-3 sm:px-5 py-4
        transition-all duration-500 ease-out
        text-${align}
        ${align === 'left' ? 'items-start' : 'items-end'}
        ${active ? 'opacity-100' : 'opacity-50 hover:opacity-80'}
      `}
    >
      <span
        className={`
          text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em]
          transition-colors duration-500
          ${active ? 'text-brand-caramel' : 'text-brand-cream/55'}
        `}
      >
        {data.label}
      </span>
      <ul
        className={`
          flex flex-col gap-1
          text-sm sm:text-base
          ${align === 'right' ? 'items-end text-right' : 'items-start text-left'}
          ${active ? 'text-brand-cream' : 'text-brand-cream/65'}
        `}
      >
        {data.lines.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
      <span
        aria-hidden
        className={`
          mt-auto h-px transition-all duration-500
          ${active ? 'w-12 bg-brand-caramel' : 'w-6 bg-brand-cream/15'}
        `}
      />
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* CenterBean — glowing coffee bean SVG, centered between the columns   */
/* ------------------------------------------------------------------ */
function CenterBean({ active }) {
  // Glow intensity changes with active option
  const isIntense = active === 'intenso';
  return (
    <div
      aria-hidden
      className="
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        h-24 w-24 sm:h-32 sm:w-32 lg:h-36 lg:w-36
        pointer-events-none
      "
    >
      {/* Outer halo */}
      <span
        className={`
          absolute inset-0 rounded-full blur-2xl
          transition-all duration-700 ease-out
          ${isIntense ? 'opacity-90 scale-110 bg-[#E0B260]' : 'opacity-60 scale-95 bg-brand-caramel'}
        `}
      />
      {/* Inner halo */}
      <span
        className={`
          absolute inset-3 rounded-full blur-md
          transition-opacity duration-500
          ${isIntense ? 'opacity-95 bg-[#F0C97A]' : 'opacity-70 bg-brand-caramel'}
        `}
      />
      {/* Bean shape */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <radialGradient id="bean-grad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#6F4A22" />
            <stop offset="60%" stopColor="#2E1A0E" />
            <stop offset="100%" stopColor="#150A05" />
          </radialGradient>
        </defs>
        <ellipse cx="50" cy="50" rx="32" ry="40" fill="url(#bean-grad)" />
        {/* Bean center groove */}
        <path
          d="M50 12 Q 44 50 50 88 Q 56 50 50 12 Z"
          fill="#0A0606"
          opacity="0.85"
        />
      </svg>
    </div>
  );
}
