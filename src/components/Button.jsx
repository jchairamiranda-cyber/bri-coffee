/**
 * Button — single source of truth for all CTAs.
 *
 * Variants:
 *   - 'primary'   : black solid (main conversion)
 *   - 'whatsapp'  : WhatsApp green (action-specific)
 *   - 'secondary' : outlined dark
 *   - 'ghost'     : transparent dark
 *
 * Sizes: 'sm' | 'md' | 'lg'
 *
 * Renders <a> when `href` is provided, otherwise <button>.
 * Pass `external` to add target/rel.
 */

const VARIANTS = {
  primary:
    'bg-brand-ink text-brand-cream hover:bg-brand-coffee active:bg-brand-espresso',
  caramel:
    'bg-brand-caramel text-brand-ink hover:bg-[#B88A57] active:bg-[#A07647] shadow-soft',
  cream:
    'bg-brand-cream text-brand-ink hover:bg-white active:bg-brand-paper shadow-soft',
  whatsapp:
    'bg-[#25D366] text-white hover:bg-[#1FBA57] active:bg-[#178A41] shadow-soft',
  secondary:
    'bg-transparent text-brand-ink border border-brand-ink hover:bg-brand-ink hover:text-brand-cream',
  outlineLight:
    'bg-transparent text-brand-cream border border-brand-cream/30 hover:bg-brand-cream/10',
  ghost:
    'bg-transparent text-brand-ink hover:bg-brand-ink/5',
};

const SIZES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-[15px]',
  lg: 'px-7 py-4 text-base sm:text-[17px]',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  icon,
  iconRight,
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight',
    'transition-all duration-200 ease-out',
    'focus-visible:outline-none focus-visible:shadow-focus',
    'active:scale-[0.98] will-change-transform',
    'whitespace-nowrap',
    VARIANTS[variant] || VARIANTS.primary,
    SIZES[size] || SIZES.md,
    className,
  ].join(' ');

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {iconRight && (
        <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
          {iconRight}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}

/* Icon helpers for common uses (small, no extra deps) */
export const ArrowRightIcon = ({ className = 'h-4 w-4' }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M3 10a.75.75 0 0 1 .75-.75h10.94l-3.97-3.97a.75.75 0 1 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06l3.97-3.97H3.75A.75.75 0 0 1 3 10Z"
      clipRule="evenodd"
    />
  </svg>
);

export const WhatsAppIcon = ({ className = 'h-5 w-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01ZM12.05 20.13h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.36c0-4.54 3.69-8.23 8.24-8.23a8.21 8.21 0 0 1 5.83 2.42 8.21 8.21 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23Zm4.51-6.16c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.99-1.22-.74-.66-1.23-1.47-1.37-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42-.14 0-.31-.02-.48-.02-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.12.16 1.74 2.65 4.21 3.72.59.25 1.05.4 1.41.51.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.18-.48-.3Z" />
  </svg>
);
