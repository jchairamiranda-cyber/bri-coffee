import { useScrollReveal } from '@/hooks/useScrollReveal';

/**
 * ProductCard — catalog mode (brand landing, NOT e-commerce).
 *
 * Shows the product as an elegant menu item with:
 *  - Name (bold)
 *  - Optional badge (subtle, single chip)
 *  - Description (short emotional copy)
 *  - Suave / Intenso prices side-by-side as plain labels
 *
 * No CTA button, no intensity toggle. Conversion-style affordances were
 * intentionally removed per brand-landing direction.
 */
export default function ProductCard({ producto, index = 0 }) {
  const ref = useScrollReveal({ delay: Math.min(index * 50, 300) });

  return (
    <article
      ref={ref}
      className="
        reveal
        group relative
        bg-brand-milk
        border border-brand-coffee/10
        rounded-2xl
        p-5 sm:p-6
        transition-all duration-300 ease-out
        hover:-translate-y-0.5 hover:border-brand-coffee/25 hover:shadow-card
      "
    >
      {/* Badge */}
      {producto.destacado && (
        <span
          className="
            inline-flex items-center gap-1
            text-[10px] font-semibold uppercase tracking-[0.18em]
            text-brand-mocha
            mb-3
          "
        >
          <span
            aria-hidden
            className="h-1 w-1 rounded-full bg-brand-caramel"
          />
          {producto.destacado.label}
        </span>
      )}

      {/* Header: name + size hint */}
      <header className="mb-2 flex items-baseline gap-2">
        <h4 className="font-display font-bold text-lg sm:text-xl text-brand-ink leading-tight">
          {producto.nombre}
        </h4>
        {producto.size === 'grande' && (
          <span className="text-xs font-medium text-brand-mocha">· Grande</span>
        )}
      </header>

      {/* Description */}
      {producto.descripcion && (
        <p className="text-sm text-brand-coffee/70 leading-relaxed mb-4">
          {producto.descripcion}
        </p>
      )}

      {/* Prices — Suave / Intenso side by side */}
      <dl className="flex items-end gap-5 pt-3 border-t border-brand-coffee/10">
        <div className="flex flex-col gap-0.5">
          <dt className="text-[10px] font-semibold uppercase tracking-wider text-brand-mocha">
            Suave
          </dt>
          <dd className="font-display font-bold text-lg text-brand-ink tabular-nums">
            <span className="text-xs font-semibold text-brand-mocha mr-0.5">
              Bs
            </span>
            {producto.suave}
          </dd>
        </div>
        <span aria-hidden className="h-6 w-px bg-brand-coffee/15 mb-1" />
        <div className="flex flex-col gap-0.5">
          <dt className="text-[10px] font-semibold uppercase tracking-wider text-brand-mocha">
            Intenso
          </dt>
          <dd className="font-display font-bold text-lg text-brand-ink tabular-nums">
            <span className="text-xs font-semibold text-brand-mocha mr-0.5">
              Bs
            </span>
            {producto.intenso}
          </dd>
        </div>
      </dl>
    </article>
  );
}
