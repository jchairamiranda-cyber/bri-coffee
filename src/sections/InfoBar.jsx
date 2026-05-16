import { useScrollReveal } from '@/hooks/useScrollReveal';
import Button from '@/components/Button';
import { contact } from '@/data/config';
import { infoBar } from '@/data/content';

/**
 * InfoBar — three-column practical info card.
 *
 *   Ubícanos · Horario · Síguenos
 *
 * Sits between BrandStory and Footer to give the user the practical
 * information they need at the end of the page (where to go, when, social).
 *
 * Mobile: 3 stacked rows; sm+: 3 columns inside one rounded card.
 */
export default function InfoBar() {
  const ref = useScrollReveal();
  const tiktokUrl = contact.social.tiktok.url;
  const mapsUrl = contact.address.mapsUrl;

  return (
    <section
      id="ubicacion"
      className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 bg-brand-cream"
    >
      <div className="container-x">
        <div
          ref={ref}
          className="
            reveal
            relative
            bg-brand-milk
            border border-brand-coffee/12
            rounded-3xl
            shadow-card
            overflow-hidden
            grid grid-cols-1 sm:grid-cols-3
            divide-y sm:divide-y-0 sm:divide-x divide-brand-coffee/10
          "
        >
          {/* Ubicación */}
          <Column>
            <Header icon={<PinIcon />} eyebrow={infoBar.ubicacion.eyebrow} />
            <p className="text-base sm:text-lg font-semibold text-brand-ink leading-snug">
              {infoBar.ubicacion.body}
            </p>
            <Button
              variant="primary"
              size="sm"
              href={mapsUrl}
              external
              iconRight={<MapIcon className="h-4 w-4" />}
              className="!min-h-11 mt-3 self-start uppercase tracking-wider text-[12px] font-bold"
            >
              {infoBar.ubicacion.ctaLabel}
            </Button>
          </Column>

          {/* Horario */}
          <Column align="center">
            <Header icon={<ClockIcon />} eyebrow={infoBar.horario.eyebrow} center />
            <p className="text-sm text-brand-coffee/75">{infoBar.horario.days}</p>
            <p className="font-display font-black text-2xl sm:text-3xl text-brand-ink tabular-nums">
              {infoBar.horario.time}
            </p>
            <p className="text-xs text-brand-coffee/55 mt-1">
              Atendemos todos los días.
            </p>
          </Column>

          {/* Síguenos */}
          <Column align="end">
            <Header icon={<TikTokIcon />} eyebrow={infoBar.social.eyebrow} alignEnd />
            <p className="text-base sm:text-lg font-semibold text-brand-ink leading-snug">
              {infoBar.social.handle}
            </p>
            <Button
              variant="primary"
              size="sm"
              href={tiktokUrl}
              external
              iconRight={<ArrowRight className="h-4 w-4" />}
              className="!min-h-11 mt-3 self-start sm:self-end uppercase tracking-wider text-[12px] font-bold"
            >
              {infoBar.social.ctaLabel}
            </Button>
          </Column>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Layout helpers                                                      */
/* ------------------------------------------------------------------ */
function Column({ children, align = 'start' }) {
  const alignment =
    align === 'center'
      ? 'items-center text-center'
      : align === 'end'
      ? 'items-start sm:items-end sm:text-right'
      : 'items-start';
  return (
    <div className={`flex flex-col gap-2 p-6 sm:p-8 ${alignment}`}>
      {children}
    </div>
  );
}

function Header({ icon, eyebrow, center, alignEnd }) {
  const placement = center
    ? 'justify-center'
    : alignEnd
    ? 'justify-start sm:justify-end'
    : 'justify-start';
  return (
    <div className={`mb-2 flex items-center gap-2.5 w-full ${placement}`}>
      <span
        className="
          inline-flex items-center justify-center
          h-9 w-9 rounded-full
          bg-brand-ink text-brand-cream
          shadow-soft
        "
      >
        {icon}
      </span>
      <span className="text-[11px] font-semibold uppercase tracking-brand text-brand-mocha">
        {eyebrow}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Icons                                                               */
/* ------------------------------------------------------------------ */
function PinIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22s7-7.16 7-12a7 7 0 1 0-14 0c0 4.84 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.5 2h2.7c.18 1.6 1 3.06 2.32 4.07 1.15.88 2.6 1.4 4.18 1.4l-.07 3.05c-2.07 0-4.04-.62-5.7-1.7l-.02 7.55a6.6 6.6 0 1 1-6.6-6.6c.39 0 .76.03 1.13.1v3.18c-.36-.1-.74-.16-1.13-.16a3.5 3.5 0 1 0 3.5 3.5V2Z" />
    </svg>
  );
}
function MapIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 4l-6 2v14l6-2 6 2 6-2V4l-6 2-6-2z" />
      <path d="M9 4v14M15 6v14" />
    </svg>
  );
}
function ArrowRight({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 0 1 .75-.75h10.94l-3.97-3.97a.75.75 0 1 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06l3.97-3.97H3.75A.75.75 0 0 1 3 10Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
