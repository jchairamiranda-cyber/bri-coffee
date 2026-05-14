import { useMemo, useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import ProductCard from '@/components/ProductCard';
import { menu } from '@/data/menu';
import { menuSection } from '@/data/content';

/**
 * Menu — main browsing surface.
 *
 * UX choices:
 *  - Category chips on top (sticky-like behavior). Mobile-friendly horizontal scroll.
 *  - "Todos" filter for first-time visitors who want to scan everything.
 *  - Card grid: 1 col mobile, 2 tablet, 3 desktop. Keeps prices scannable.
 *  - Each card lets the user pick intensity BEFORE pressing the WhatsApp CTA,
 *    so the prefilled message arrives correctly = fewer back-and-forth msgs.
 */
const ALL = 'todos';

export default function Menu() {
  const [active, setActive] = useState(ALL);

  const categorias = useMemo(
    () => [{ slug: ALL, categoria: 'Todos', icon: '✨' }, ...menu],
    []
  );

  const visibles = useMemo(() => {
    if (active === ALL) return menu;
    return menu.filter((c) => c.slug === active);
  }, [active]);

  return (
    <section
      id="menu"
      className="relative py-20 sm:py-28 bg-brand-cream"
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
          className="mb-10 sm:mb-14"
        />

        {/* Category filter */}
        <div
          role="tablist"
          aria-label={menuSection.filtersLabel}
          className="
            flex gap-2 mb-10 sm:mb-12
            overflow-x-auto pb-2 -mx-5 px-5
            sm:overflow-visible sm:mx-0 sm:px-0 sm:justify-center
            scrollbar-none snap-x
          "
        >
          {categorias.map((c) => {
            const isActive = c.slug === active;
            return (
              <button
                key={c.slug}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(c.slug)}
                className={`
                  shrink-0 snap-start
                  inline-flex items-center gap-2
                  px-4 sm:px-5 py-2.5
                  rounded-full text-sm font-semibold
                  transition-all duration-200
                  ${
                    isActive
                      ? 'bg-brand-ink text-brand-cream shadow-soft'
                      : 'bg-brand-milk text-brand-coffee/80 border border-brand-coffee/10 hover:border-brand-coffee/30 hover:text-brand-ink'
                  }
                `}
              >
                <span aria-hidden>{c.icon}</span>
                <span>{c.categoria}</span>
              </button>
            );
          })}
        </div>

        {/* Categories with products */}
        <div className="flex flex-col gap-16">
          {visibles.map((cat) => (
            <CategoryBlock key={cat.slug} category={cat} />
          ))}
        </div>

        {/* Suave/Intenso explainer */}
        <div className="
          mt-16 sm:mt-20
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
    <div>
      <header className="flex items-baseline gap-3 mb-6 sm:mb-8">
        <span aria-hidden className="text-2xl sm:text-3xl">
          {category.icon}
        </span>
        <div>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-brand-ink leading-none">
            {category.categoria}
          </h3>
          <p className="text-sm text-brand-coffee/70 mt-1">
            {category.description}
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {category.productos.map((p) => (
          <ProductCard key={p.id} producto={p} />
        ))}
      </div>
    </div>
  );
}
