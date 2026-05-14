import { useScrollReveal } from '@/hooks/useScrollReveal';

/**
 * BenefitCard — generic feature/benefit card.
 * Used by About (DXN benefits) and Differentiators sections.
 *
 * Icon is rendered via the small library below — no external icon deps,
 * keeps the bundle tiny and the brand consistent.
 */
export default function BenefitCard({ icon, title, desc, index = 0 }) {
  // Stagger reveal slightly per card for a polished feel
  const ref = useScrollReveal({ delay: index * 80 });

  return (
    <div
      ref={ref}
      className="
        reveal
        group relative h-full
        bg-brand-milk
        border border-brand-coffee/10
        rounded-2xl p-6 sm:p-7
        transition-all duration-300
        hover:border-brand-coffee/25
        hover:-translate-y-0.5
        hover:shadow-card
      "
    >
      <div
        className="
          inline-flex items-center justify-center
          h-11 w-11 rounded-xl
          bg-brand-ink text-brand-cream
          mb-4
          transition-transform duration-300
          group-hover:scale-105 group-hover:rotate-[-2deg]
        "
      >
        <BenefitIcon name={icon} className="h-5 w-5" />
      </div>
      <h3 className="font-display font-bold text-lg sm:text-xl text-brand-ink mb-2">
        {title}
      </h3>
      <p className="text-sm sm:text-[15px] leading-relaxed text-brand-coffee/75">
        {desc}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Tiny inline icon set — no external deps                             */
/* Add new ones here if a section needs them.                          */
/* ------------------------------------------------------------------ */
function BenefitIcon({ name, className }) {
  const icons = {
    energy: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
    shield: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
    brain: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 4a3 3 0 0 0-3 3v2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm6 0a3 3 0 0 1 3 3v2a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z"
      />
    ),
    leaf: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 21c0-9 8-15 18-16-1 11-7 17-15 17-1 0-2 0-3-1zm6-7c2-3 5-5 9-6"
      />
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" strokeWidth="2" />
        <path strokeLinecap="round" strokeWidth="2" d="M12 7v5l3 2" />
      </>
    ),
    tune: (
      <path
        strokeLinecap="round"
        strokeWidth="2"
        d="M4 6h10M14 6h6M4 12h6M10 12h10M4 18h14M18 18h2M14 4v4M10 10v4M18 16v4"
      />
    ),
    mushroom: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 11a8 8 0 0 1 16 0v1H4v-1zm6 1v6a2 2 0 0 0 4 0v-6"
      />
    ),
    pin: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 22s7-7.16 7-12a7 7 0 1 0-14 0c0 4.84 7 12 7 12z"
        />
        <circle cx="12" cy="10" r="2.5" strokeWidth="2" />
      </>
    ),
  };

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      {icons[name] || icons.energy}
    </svg>
  );
}
