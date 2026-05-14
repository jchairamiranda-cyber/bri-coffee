import SectionTitle from '@/components/SectionTitle';
import Button, { WhatsAppIcon } from '@/components/Button';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useWhatsApp } from '@/hooks/useWhatsApp';
import { contact, hours } from '@/data/config';
import { location } from '@/data/content';

/**
 * Location — final conversion gate.
 * Two columns: address + hours on one side, embedded map on the other.
 * Closes with the biggest WhatsApp CTA on the page (last touchpoint).
 */
export default function Location() {
  const ref = useScrollReveal();
  const { openGeneric } = useWhatsApp();
  const link = openGeneric();

  const mapsEmbed = `https://www.google.com/maps?q=${contact.address.mapsQuery}&output=embed`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${contact.address.mapsQuery}`;

  return (
    <section
      id="ubicacion"
      className="relative py-20 sm:py-28 bg-brand-cream"
    >
      <div className="container-x">
        <SectionTitle
          eyebrow={location.eyebrow}
          headline={location.headline}
          align="center"
          className="mb-12 sm:mb-14"
        />

        <div
          ref={ref}
          className="reveal grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
        >
          {/* Info column */}
          <div className="lg:col-span-5 flex flex-col gap-5 p-7 sm:p-9 bg-brand-ink text-brand-cream rounded-2xl">
            <div>
              <span className="text-xs font-semibold uppercase tracking-brand text-brand-caramel">
                Dirección
              </span>
              <p className="mt-2 text-xl sm:text-2xl font-display font-bold leading-snug">
                {contact.address.line}
              </p>
              <p className="mt-1 text-brand-cream/70">
                {contact.address.city}
              </p>
            </div>

            <hr className="border-brand-cream/10" />

            <div>
              <span className="text-xs font-semibold uppercase tracking-brand text-brand-caramel">
                Horarios
              </span>
              <ul className="mt-3 flex flex-col gap-2">
                {hours.map((h) => (
                  <li
                    key={h.days}
                    className="flex items-center justify-between text-sm sm:text-base"
                  >
                    <span className="text-brand-cream/80">{h.days}</span>
                    <span className="font-semibold tabular-nums">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <hr className="border-brand-cream/10" />

            <p className="text-sm text-brand-cream/70 leading-relaxed">
              {location.delivery}
            </p>

            <div className="mt-auto pt-2 flex flex-col sm:flex-row gap-3">
              <Button
                variant="whatsapp"
                size="lg"
                href={link}
                external
                icon={<WhatsAppIcon />}
                className="w-full sm:w-auto"
              >
                {location.ctaText}
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href={mapsLink}
                external
                className="w-full sm:w-auto !text-brand-cream hover:!bg-brand-cream/10"
              >
                Ver en Google Maps
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-brand-coffee/15 shadow-card min-h-[320px] lg:min-h-[460px]">
            <iframe
              title="Ubicación BRIG Coffee"
              src={mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full block"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
