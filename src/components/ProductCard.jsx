import { useState } from 'react';
import { useWhatsApp } from '@/hooks/useWhatsApp';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Button, { WhatsAppIcon } from './Button';

/**
 * ProductCard — single product on the menu.
 *
 * Conversion-focused features:
 *  - Highlight badge surfaces top sellers / specialties
 *  - "fire" tone (most-sold) gets an extra subtle ring + warm glow
 *  - User picks intensity (suave/intenso) before pressing CTA
 *  - CTA generates WhatsApp link with the EXACT product + intensity prefilled
 *
 * Mobile-first:
 *  - Tap targets ≥ 48px (intensity toggles, CTA)
 *  - Prices always visible above the fold of the card
 *  - Large, bold pricing for instant scannability
 */

const TONE_STYLES = {
  fire:   { bg: 'bg-[#FFF1E6]', text: 'text-[#C2410C]', icon: '🔥', accentRing: true },
  energy: { bg: 'bg-[#FEF3C7]', text: 'text-[#92400E]', icon: '⚡' },
  mind:   { bg: 'bg-[#EDE9FE]', text: 'text-[#5B21B6]', icon: '🧠' },
  detox:  { bg: 'bg-[#DCFCE7]', text: 'text-[#166534]', icon: '🌿' },
  cool:   { bg: 'bg-[#DBEAFE]', text: 'text-[#1E40AF]', icon: '❄️' },
  value:  { bg: 'bg-brand-paper', text: 'text-brand-coffee', icon: '💎' },
  cream:  { bg: 'bg-brand-milk',  text: 'text-brand-coffee', icon: '✨' },
};

export default function ProductCard({ producto, index = 0 }) {
  const [intensidad, setIntensidad] = useState('suave');
  const { openProduct } = useWhatsApp();

  // Stagger reveal — gives the grid a polished cascade feel
  const ref = useScrollReveal({ delay: Math.min(index * 60, 360) });

  const precio = intensidad === 'intenso' ? producto.intenso : producto.suave;
  const tone = producto.destacado
    ? TONE_STYLES[producto.destacado.tone] || TONE_STYLES.fire
    : null;
  const isHero = tone?.accentRing; // bestseller gets premium treatment

  const link = openProduct({
    producto: producto.nombre,
    intensidad,
  });

  return (
    <article
      ref={ref}
      className={`
        reveal
        group relative flex flex-col
        bg-brand-milk
        border rounded-2xl
        p-5 sm:p-6
        shadow-soft
        transition-all duration-300 ease-out
        will-change-transform
        hover:-translate-y-1 hover:shadow-cardHover
        ${
          isHero
            ? 'border-[#F0B27A]/60 ring-1 ring-[#F0B27A]/30'
            : 'border-brand-coffee/10 hover:border-brand-coffee/25'
        }
      `}
    >
      {/* Subtle warm glow for hero card */}
      {isHero && (
        <div
          aria-hidden
          className="absolute -inset-px rounded-2xl pointer-events-none
            bg-[radial-gradient(closest-side,rgba(240,178,122,0.18),transparent_70%)]
            opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      )}

      {/* Badge */}
      {producto.destacado && tone && (
        <span
          className={`
            absolute -top-3 left-5
            inline-flex items-center gap-1
            text-[11px] font-bold uppercase tracking-wide
            ${tone.bg} ${tone.text}
            px-2.5 py-1 rounded-full
            ring-1 ring-inset ring-current/15
            shadow-sm
          `}
        >
          <span aria-hidden>{tone.icon}</span>
          {producto.destacado.label}
        </span>
      )}

      {/* Header: name + price */}
      <header className="flex items-start justify-between gap-3 mb-2 relative">
        <h3 className="font-display font-bold text-lg sm:text-xl text-brand-ink leading-tight">
          {producto.nombre}
          {producto.size === 'grande' && (
            <span className="ml-1.5 text-xs font-medium text-brand-mocha align-middle">
              · Grande
            </span>
          )}
        </h3>
        <div className="text-right shrink-0">
          <div
            className="font-display font-black text-[28px] sm:text-3xl text-brand-ink leading-none tabular-nums transition-colors"
            aria-live="polite"
          >
            <span className="text-base font-semibold text-brand-mocha mr-0.5">
              Bs
            </span>
            {precio}
          </div>
        </div>
      </header>

      {/* Description */}
      {producto.descripcion && (
        <p className="text-sm text-brand-coffee/75 leading-relaxed mb-4 relative">
          {producto.descripcion}
        </p>
      )}

      {/* Intensity toggle */}
      <div className="mt-auto relative">
        <div
          role="radiogroup"
          aria-label="Elige intensidad"
          className="flex p-1 bg-brand-paper rounded-full mb-3"
        >
          <IntensityOption
            value="suave"
            current={intensidad}
            onChange={setIntensidad}
            label="Suave"
            price={producto.suave}
          />
          <IntensityOption
            value="intenso"
            current={intensidad}
            onChange={setIntensidad}
            label="Intenso"
            price={producto.intenso}
          />
        </div>

        {/* CTA */}
        <Button
          variant="whatsapp"
          size="md"
          href={link}
          external
          icon={<WhatsAppIcon className="h-4 w-4" />}
          className="w-full !min-h-12"
        >
          Pedir {producto.nombre}
        </Button>
      </div>
    </article>
  );
}

function IntensityOption({ value, current, onChange, label, price }) {
  const active = current === value;
  return (
    <button
      type="button"
      role="radio"
      aria-checked={active}
      onClick={() => onChange(value)}
      className={`
        flex-1 flex items-center justify-center gap-1.5
        text-xs sm:text-sm font-semibold
        rounded-full
        min-h-11 px-3
        transition-all duration-300 ease-out
        ${
          active
            ? 'bg-brand-ink text-brand-cream shadow-sm scale-[1.02]'
            : 'text-brand-coffee/70 hover:text-brand-ink active:scale-95'
        }
      `}
    >
      <span>{label}</span>
      <span className={`tabular-nums ${active ? 'opacity-90' : 'opacity-60'}`}>
        Bs {price}
      </span>
    </button>
  );
}
