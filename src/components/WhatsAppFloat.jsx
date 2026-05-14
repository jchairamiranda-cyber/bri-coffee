import { useEffect, useState } from 'react';
import { useWhatsApp } from '@/hooks/useWhatsApp';
import { WhatsAppIcon } from './Button';

/**
 * Floating WhatsApp button — always-visible conversion shortcut.
 * Hidden until the user has scrolled past the hero (so it doesn't compete
 * with the hero CTA on first paint).
 *
 * A subtle pulse animation re-attracts attention without being annoying.
 */
export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const { openGeneric } = useWhatsApp();
  const link = openGeneric();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir por WhatsApp"
      className={`
        fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50
        inline-flex items-center justify-center
        h-14 w-14 sm:h-16 sm:w-16
        rounded-full
        bg-[#25D366] text-white
        shadow-card hover:shadow-cardHover
        transition-all duration-300
        hover:scale-105 active:scale-95
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}
      `}
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-soft -z-10" />
      <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  );
}
