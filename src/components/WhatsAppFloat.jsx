import { useEffect, useState } from 'react';
import { useWhatsApp } from '@/hooks/useWhatsApp';

/**
 * WhatsAppFloat — soft "Escribinos" floater (brand mode).
 *
 * Removed:
 *   - Aggressive pulse rings
 *   - Loud green CTA color
 *
 * Kept:
 *   - Reachable from every page section
 *   - Subtle entrance after a small scroll, fades in gracefully
 *   - Quiet hover reveal of "Escribinos" label
 */
export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const { openContact } = useWhatsApp();
  const link = openContact();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className={`
        group fixed z-50
        bottom-5 right-5 sm:bottom-6 sm:right-6
        inline-flex items-center
        h-12 sm:h-14
        rounded-full
        bg-brand-ink text-brand-cream
        border border-brand-cream/15
        shadow-card hover:shadow-cardHover
        transition-all duration-500 ease-out
        hover:scale-[1.04] active:scale-95
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}
      `}
    >
      {/* Optional reveal label */}
      <span
        aria-hidden
        className="
          hidden sm:inline-block
          overflow-hidden whitespace-nowrap
          font-medium text-sm
          max-w-0 px-0 opacity-0
          transition-all duration-300 ease-out
          group-hover:max-w-[120px] group-hover:pl-5 group-hover:pr-2 group-hover:opacity-100
        "
      >
        Escribinos
      </span>

      {/* Icon */}
      <span className="
        relative
        flex items-center justify-center
        h-12 w-12 sm:h-14 sm:w-14
      ">
        <WhatsAppGlyph className="h-5 w-5 sm:h-6 sm:w-6 text-brand-cream" />
      </span>
    </a>
  );
}

function WhatsAppGlyph({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01ZM12.05 20.13h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.36c0-4.54 3.69-8.23 8.24-8.23a8.21 8.21 0 0 1 5.83 2.42 8.21 8.21 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23Zm4.51-6.16c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.99-1.22-.74-.66-1.23-1.47-1.37-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42-.14 0-.31-.02-.48-.02-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.12.16 1.74 2.65 4.21 3.72.59.25 1.05.4 1.41.51.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.18-.48-.3Z" />
    </svg>
  );
}
