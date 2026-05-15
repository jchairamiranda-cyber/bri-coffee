import { useMemo, useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import ProductCard from '@/components/ProductCard';
import { menu } from '@/data/menu';
import { menuSection } from '@/data/content';

/**
 * Menu — main browsing surface.
 *
 * UX choices:
 *  - Filters limited to actual categories (Caliente / Frío / Con leche).
 *  - Default category is the first one (Caliente) — no "Todos" overload.
 *  - Filter bar is sticky just under the navbar so users always know where
 *    they are while scrolling a category. Snap-scrolls horizontally on mobile.
 *  - Card grid: 1 col mobile, 2 tablet, 3 desktop. Keeps prices scannable.
 *  - Each card lets the user pick intensity BEFORE pressing the WhatsApp CTA,
 *    so the prefilled message arrives correctly = fewer back-and-forth msgs.
 */
export default function Menu() {
  // Default to first category — no "Todos" option.
  const [active, setActive] = useState(menu[0].slug);

  const categorias = useMemo(() => menu, []);
  const visible = useMemo(
    () => menu.find((c) => c.slug === active) || menu[0],
    [active]
  );

  return (
    <section
      id="menu"
      className="relative pt-14 pb-20 sm:pt-20 sm:pb-28 bg-brand-cream"
    >
      <div className="container-x">
        <SectionTitle
          eyebrow={menuSection.eyebrow}
          headline={menuSection.headline}
          description={menuSection.description.split('*').map((part, i) =>
            i % 2 === 1 ? (
              <strong key={i} className="text-brand-ink font-semibold">
                {part}
              </strong>
            ) : (
              part
            )
          )}
          align="center"
          className="mb-8 sm:mb-12"
        />

        {/* Sticky category filter — mobile-friendly horizontal scroll */}
        <div
          role="tablist"
          aria-label={menuSection.filtersLabel}
          className="
            sticky top-[var(--header-h)] z-20
            -mx-5 sm:mx-0
            px-5 sm:px-0
            py-3
            mb-8 sm:mb-12
            bg-brand-cream/90 backdrop-blur-md
            border-y border-brand-coffee/10 sm:border-0
          "
        >
          <div
            className="
              flex gap-2 sm:gap-3
              overflow-x-auto scrollbar-none
              snap-x snap-mandatory
              sm:justify-center sm:overflow-visible
              -mx-1 px-1
            "
          >
            {categorias.map((c) => {
              const isActive = c.slug === active;
              return (
                <button
                  key={c.slug}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(c.slug)}
                  className={`
                    shrink-0 snap-start
                    inline-flex items-center gap-2
                    min-h-12 px-5 sm:px-6
                    rounded-full text-sm sm:text-[15px] font-semibold
                    transition-all duration-300 ease-out
                    ${
                      isActive
                        ? 'bg-brand-ink text-brand-cream shadow-soft scale-[1.02]'
                        : 'bg-brand-milk text-brand-coffee/80 border border-brand-coffee/10 hover:border-brand-coffee/30 hover:text-brand-ink active:scale-95'
                    }
                  `}
                >
                  <span aria-hidden className="text-base">
                    {c.icon}
                  </span>
                  <span>{c.categoria}</span>
                  <span
                    className={`
                      ml-1 text-[11px] tabular-nums px-2 py-0.5 rounded-full
                      ${
                        isActive
                          ? 'bg-brand-cream/15 text-brand-cream/90'
                          : 'bg-brand-coffee/10 text-brand-coffee/70'
                      }
                    `}
                  >
                    {c.productos.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active category */}
        <CategoryBlock category={visible} />

        {/* Suave/Intenso explainer */}
        <div className="
          mt-14 sm:mt-20
          mx-auto max-w-3xl
          p-5 sm:p-6
          bg-brand-milk
          border border-brand-coffee/10
          rounded-2xl
          text-sm text-brand-coffee/80
        ">
          <p>
            <strong className="text-brand-ink font-semibold">Suave</strong> = preparado con media dosis (ligero y sutil).
            <span className="divider-dot" />
            <strong className="text-brand-ink font-semibold">Intenso</strong> = preparado con dosis completa (más sabor y efecto).
          </p>
        </div>
      </div>
    </section>
  );
}

function CategoryBlock({ category }) {
  return (
    <div key={category.slug} className="animate-fade-up">
      <header className="flex items-baseline gap-3 mb-6 sm:mb-8">
        <span aria-hidden className="text-3xl sm:text-4xl">
          {category.icon}
        </span>
        <div>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-brand-ink leading-none">
            {category.categoria}
          </h3>
          <p className="text-sm text-brand-coffee/70 mt-1.5 max-w-md">
            {category.description}
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {category.productos.map((p, i) => (
          <ProductCard key={p.id} producto={p} index={i} />
        ))}
      </div>
    </div>
  );
}
