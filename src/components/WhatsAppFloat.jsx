import { useEffect, useState } from 'react';
import { useWhatsApp } from '@/hooks/useWhatsApp';
import { WhatsAppIcon } from './Button';

/**
 * Floating WhatsApp button — always-visible conversion shortcut.
 *
 * Two layers of polish:
 *  1. A periodic "ping" ring expands every 5s to gently re-attract attention
 *     (not a constant pulse — that becomes noise).
 *  2. After ~2s on the page, a small label slides in next to the button on
 *     desktop ("Pedí ahora"), then fades back. Keeps the button friendly.
 *
 * Always visible, including above the fold — the brief explicitly asks for it.
 */
export default function WhatsAppFloat() {
  const [labelOpen, setLabelOpen] = useState(false);
  const { openGeneric } = useWhatsApp();
  const link = openGeneric();

  // Show label after page settles, hide after a few seconds
  useEffect(() => {
    const showT = setTimeout(() => setLabelOpen(true), 2000);
    const hideT = setTimeout(() => setLabelOpen(false), 7000);
    return () => {
      clearTimeout(showT);
      clearTimeout(hideT);
    };
  }, []);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir por WhatsApp"
      className="
        group fixed z-50
        bottom-5 right-5 sm:bottom-6 sm:right-6
        inline-flex items-center
        h-14 sm:h-16
        rounded-full
        bg-[#25D366] hover:bg-[#1FBA57]
        text-white
        shadow-card hover:shadow-cardHover
        transition-all duration-300 ease-out
        hover:scale-105 active:scale-95
      "
    >
      {/* Periodic ping rings — fire every 5s, no constant noise */}
      <span
        aria-hidden
        className="
          absolute inset-0 rounded-full bg-[#25D366]
          animate-ping-soft
          opacity-0
        "
      />
      <span
        aria-hidden
        className="
          absolute inset-0 rounded-full bg-[#25D366]
          animate-ping-soft opacity-0
        "
        style={{ animationDelay: '0.4s' }}
      />

      {/* Optional label (desktop only, auto-hides) */}
      <span
        aria-hidden
        className={`
          hidden sm:inline-block
          overflow-hidden whitespace-nowrap
          font-semibold text-sm
          transition-all duration-300 ease-out
          ${labelOpen ? 'max-w-[120px] pl-5 pr-2 opacity-100' : 'max-w-0 px-0 opacity-0'}
          group-hover:max-w-[120px] group-hover:pl-5 group-hover:pr-2 group-hover:opacity-100
        `}
      >
        Pedí ahora
      </span>

      {/* Icon */}
      <span className="
        relative
        flex items-center justify-center
        h-14 w-14 sm:h-16 sm:w-16
      ">
        <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
      </span>
    </a>
  );
}
