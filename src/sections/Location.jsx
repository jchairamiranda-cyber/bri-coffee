import SectionTitle from '@/components/SectionTitle';
import Button, { WhatsAppIcon } from '@/components/Button';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useWhatsApp } from '@/hooks/useWhatsApp';
import { contact, hours } from '@/data/config';
import { location } from '@/data/content';

/**
 * Location — final conversion gate.
 * Two columns on desktop, stacked on mobile (info first → map below).
 * Closes with the biggest WhatsApp CTA on the page (last touchpoint)
 * and a direct "Ver ubicación" button that opens the real Google Maps pin.
 */
export default function Location() {
  const ref = useScrollReveal();
  const { openGeneric } = useWhatsApp();
  const link = openGeneric();

  // Embedded map uses the search query (works without API key)
  const mapsEmbed = `https://www.google.com/maps?q=${contact.address.mapsQuery}&output=embed`;
  // The big "Ver ubicación" button uses the real BRIG pin link
  const mapsLink = contact.address.mapsUrl;

  return (
    <section
      id="ubicacion"
      className="relative py-16 sm:py-24 lg:py-28 bg-brand-cream"
    >
      <div className="container-x">
        <SectionTitle
          eyebrow={location.eyebrow}
          headline={location.headline}
          align="center"
          className="mb-10 sm:mb-14"
        />

        <div
          ref={ref}
          className="reveal grid lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-stretch"
        >
          {/* Info column */}
          <div className="lg:col-span-5 flex flex-col gap-5 p-6 sm:p-8 lg:p-9 bg-brand-ink text-brand-cream rounded-3xl">
            <div>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-brand text-brand-caramel">
                Dirección
              </span>
              <p className="mt-2 text-xl sm:text-2xl font-display font-bold leading-snug">
                {contact.address.line1}
              </p>
              <p className="mt-1 text-brand-cream/70 text-sm sm:text-base">
                {contact.address.line2}
              </p>
            </div>

            <hr className="border-brand-cream/10" />

            <div>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-brand text-brand-caramel">
                Horarios
              </span>
              <ul className="mt-3 flex flex-col gap-2">
                {hours.map((h) => (
                  <li
                    key={h.days}
                    className="flex items-center justify-between text-sm sm:text-base gap-3"
                  >
                    <span className="text-brand-cream/80">{h.days}</span>
                    <span className="font-semibold tabular-nums whitespace-nowrap">
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-brand-cream/55 leading-relaxed">
                Atención todos los días, sin descanso.
              </p>
            </div>

            <hr className="border-brand-cream/10" />

            <p className="text-sm text-brand-cream/70 leading-relaxed">
              {location.delivery}
            </p>

            <div className="mt-auto pt-2 flex flex-col gap-3">
              <Button
                variant="whatsapp"
                size="lg"
                href={link}
                external
                icon={<WhatsAppIcon />}
                className="w-full"
              >
                {location.ctaText}
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href={mapsLink}
                external
                icon={<PinIcon className="h-5 w-5" />}
                className="w-full !text-brand-cream hover:!bg-brand-cream/10 border border-brand-cream/20"
              >
                Ver ubicación
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-brand-coffee/15 shadow-card min-h-[280px] sm:min-h-[360px] lg:min-h-[460px]">
            <iframe
              title="Ubicación BRIG Coffee"
              src={mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full block"
              style={{ border: 0, minHeight: '280px' }}
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PinIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s7-7.16 7-12a7 7 0 1 0-14 0c0 4.84 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
