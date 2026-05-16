import SectionTitle from '@/components/SectionTitle';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { categories } from '@/data/categories';
import { categoriesSection } from '@/data/content';

/**
 * Categories — visual entry points to the menu.
 *
 * Three photo-style cards with gradient backgrounds (placeholder until real
 * imagery arrives). Each card links to the menu anchor with `?cat=slug` so
 * the Menu section can default to the chosen category.
 *
 * Mobile: snap-scroll carousel (matches the mockup's "scroll vertical o
 * carrusel" instruction). Desktop: 3-column grid.
 */
export default function Categories() {
  return (
    <section
      id="nuestro-cafe"
      className="relative py-16 sm:py-24 lg:py-28 bg-brand-cream"
    >
      <div className="container-x">
        <SectionTitle
          eyebrow={categoriesSection.eyebrow}
          headline={categoriesSection.headline}
          align="center"
          className="mb-10 sm:mb-14"
        />

        {/* Mobile: horizontal snap-scroll; Desktop: 3-col grid */}
        <div
          className="
            -mx-4 sm:mx-0
            flex sm:grid sm:grid-cols-3
            gap-4 sm:gap-5 lg:gap-6
            overflow-x-auto sm:overflow-visible
            snap-x snap-mandatory sm:snap-none
            scrollbar-none
            px-4 sm:px-0
            pb-2 sm:pb-0
          "
        >
          {categories.map((c, i) => (
            <CategoryCard key={c.slug} category={c} index={i} />
          ))}
        </div>

        {/* Mobile carousel dots */}
        <div className="mt-5 flex sm:hidden justify-center gap-1.5" aria-hidden>
          {categories.map((_, i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-brand-coffee/25"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ category, index }) {
  const ref = useScrollReveal({ delay: index * 90 });
  const href = `#menu-${category.slug}`;

  return (
    <a
      ref={ref}
      href={href}
      className="
        reveal
        group relative
        snap-start shrink-0
        w-[78%] xs:w-[68%] sm:w-auto
        aspect-[4/5]
        rounded-3xl overflow-hidden
        ring-1 ring-brand-ink/10
        shadow-card hover:shadow-cardHover
        transition-all duration-500 ease-out
        hover:-translate-y-1
      "
      style={{ background: category.gradient }}
      aria-label={`Ver categoría ${category.label}`}
    >
      {/* Decorative inner grain */}
      <span
        aria-hidden
        className="absolute inset-0 bg-grain opacity-25 mix-blend-screen"
      />

      {/* Bottom-up gradient for text legibility */}
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
      />

      {/* Decorative oversized icon (background) */}
      <span
        aria-hidden
        className="
          absolute right-[-10px] top-[-10px]
          text-[140px] sm:text-[160px] leading-none
          opacity-[0.07]
          transition-transform duration-700 ease-out
          group-hover:scale-110 group-hover:rotate-[-6deg]
        "
      >
        {category.icon}
      </span>

      {/* Content */}
      <div className="relative h-full p-5 sm:p-6 flex flex-col justify-end text-brand-cream">
        {/* Icon badge */}
        <span
          className="
            inline-flex items-center justify-center
            h-10 w-10 rounded-full mb-3
            bg-brand-cream/10 border border-brand-cream/20
            backdrop-blur-sm
            text-xl
            transition-transform duration-300
            group-hover:scale-110
          "
        >
          {category.icon}
        </span>

        <h3 className="font-display font-black text-2xl sm:text-3xl leading-none mb-1.5">
          {category.label}
        </h3>
        <p className="text-sm text-brand-cream/75 leading-snug max-w-[26ch]">
          {category.tagline}
        </p>

        {/* Bottom-right arrow CTA */}
        <span
          aria-hidden
          className="
            absolute bottom-5 right-5 sm:bottom-6 sm:right-6
            inline-flex items-center justify-center
            h-10 w-10 rounded-full
            bg-brand-caramel text-brand-ink
            shadow-soft
            transition-transform duration-300 ease-out
            group-hover:translate-x-1 group-hover:scale-105
          "
        >
          <ArrowRight />
        </span>
      </div>
    </a>
  );
}

function ArrowRight() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 0 1 .75-.75h10.94l-3.97-3.97a.75.75 0 1 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06l3.97-3.97H3.75A.75.75 0 0 1 3 10Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
