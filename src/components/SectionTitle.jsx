import { useScrollReveal } from '@/hooks/useScrollReveal';

/**
 * SectionTitle — consistent eyebrow + headline + optional description.
 *
 * Forces visual hierarchy across all sections so the page feels coherent
 * instead of like a collage of components.
 */
export default function SectionTitle({
  eyebrow,
  headline,
  description,
  align = 'left', // 'left' | 'center'
  as: Heading = 'h2',
  className = '',
}) {
  const ref = useScrollReveal();

  const alignment =
    align === 'center'
      ? 'text-center items-center mx-auto max-w-2xl'
      : 'text-left items-start';

  return (
    <div
      ref={ref}
      className={`reveal flex flex-col gap-4 ${alignment} ${className}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Heading className="h-display text-3xl sm:text-4xl lg:text-5xl text-brand-ink">
        {headline}
      </Heading>
      {description && (
        <p className="lead max-w-xl">
          {description}
        </p>
      )}
    </div>
  );
}
