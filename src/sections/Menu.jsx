import { useEffect, useMemo, useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import ProductCard from '@/components/ProductCard';
import { menu } from '@/data/menu';
import { menuShowcase } from '@/data/content';

/**
 * Menu — visual catalog (brand-mode, no ordering CTAs).
 *
 * Three categories shown via tabs. Each tab anchors a sub-section so the
 * 3 category cards in the Categories section can deep-link to a specific tab.
 *
 * On hash change (#menu-caliente / #menu-frio / #menu-con-leche) the matching
 * tab activates and scrolls into view.
 */
export default function Menu() {
  const [active, setActive] = useState(menu[0].slug);
  const categorias = useMemo(() => menu, []);

  // React to hash anchors from Categories section
  useEffect(() => {
    const apply = () => {
      const h = (window.location.hash || '').replace('#menu-', '');
      const match = menu.find((c) => c.slug === h);
      if (match) {
        setActive(match.slug);
        // Smooth scroll to the menu section
        const node = document.getElementById('menu');
        node?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    apply();
    window.addEventListener('hashchange', apply);
    return () => window.removeEventListener('hashchange', apply);
  }, []);

  const visible = useMemo(
    () => menu.find((c) => c.slug === active) || menu[0],
    [active]
  );

  return (
    <section
      id="menu"
      className="relative py-16 sm:py-24 lg:py-28 bg-brand-paper"
    >
      <div className="container-x">
        <SectionTitle
          eyebrow={menuShowcase.eyebrow}
          headline={menuShowcase.headline}
          description={menuShowcase.description}
          align="center"
          className="mb-10 sm:mb-14"
        />

        {/* Tabs — refined for catalog (sticky just below navbar) */}
        <div
          role="tablist"
          aria-label="Categorías del menú"
          className="
            sticky top-[var(--header-h)] z-20
            -mx-4 sm:mx-0
            px-4 sm:px-0
            py-3
            mb-8 sm:mb-12
            bg-brand-paper/90 backdrop-blur-md
            border-y border-brand-coffee/10 sm:border-0
          "
        >
          <div className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-none snap-x sm:justify-center sm:overflow-visible">
            {categorias.map((c) => {
              const isActive = c.slug === active;
              return (
                <button
                  key={c.slug}
                  id={`menu-${c.slug}`}
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
        <div key={visible.slug} className="animate-fade-up">
          <header className="flex items-baseline gap-3 mb-6 sm:mb-8">
            <span aria-hidden className="text-3xl sm:text-4xl">
              {visible.icon}
            </span>
            <div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-brand-ink leading-none">
                {visible.categoria}
              </h3>
              <p className="text-sm text-brand-coffee/70 mt-1.5 max-w-md">
                {visible.description}
              </p>
            </div>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {visible.productos.map((p, i) => (
              <ProductCard key={p.id} producto={p} index={i} />
            ))}
          </div>
        </div>

        {/* Suave/Intenso reminder (subtle) */}
        <div className="
          mt-14 sm:mt-16
          mx-auto max-w-3xl
          p-5 sm:p-6
          bg-brand-milk
          border border-brand-coffee/10
          rounded-2xl
          text-sm text-brand-coffee/80 text-center
        ">
          <p>
            <strong className="text-brand-ink font-semibold">Suave</strong> = media dosis · sabor sutil.
            <span className="divider-dot" />
            <strong className="text-brand-ink font-semibold">Intenso</strong> = dosis completa · todo el efecto.
          </p>
        </div>
      </div>
    </section>
  );
}
