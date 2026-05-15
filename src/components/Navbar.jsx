import { useEffect, useState } from 'react';
import Logo from './Logo';
import Button, { WhatsAppIcon } from './Button';
import { useWhatsApp } from '@/hooks/useWhatsApp';
import { footer } from '@/data/content';

/**
 * Navbar — sticky, transparent at top, solid on scroll.
 * Mobile: hamburger -> full-screen sheet with large tap targets.
 *
 * Conversion choice: WhatsApp button always visible on desktop AND mobile.
 * Even when the sheet is closed, the user can tap-to-buy.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openGeneric } = useWhatsApp();
  const waLink = openGeneric();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-40
        transition-all duration-300
        ${
          scrolled || open
            ? 'bg-brand-cream/90 backdrop-blur-lg border-b border-brand-coffee/10 shadow-soft'
            : 'bg-transparent border-b border-transparent'
        }
      `}
      style={{ height: 'var(--header-h)' }}
    >
      <div className="container-x h-full flex items-center justify-between gap-3">
        {/* Logo */}
        <a
          href="#top"
          className="inline-flex items-center text-brand-ink min-h-12 -ml-1 px-1"
          aria-label="BRIG Coffee — inicio"
        >
          <Logo variant="wordmark" className="h-6 sm:h-7 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {footer.navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-brand-ink/75 hover:text-brand-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="whatsapp"
            size="sm"
            href={waLink}
            external
            icon={<WhatsAppIcon className="h-4 w-4" />}
            className="hidden xs:inline-flex !min-h-11"
          >
            Pedir
          </Button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-full text-brand-ink hover:bg-brand-ink/5 transition-colors"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={`
          md:hidden fixed inset-x-0 top-[var(--header-h)] bottom-0
          bg-brand-cream
          transition-all duration-300 ease-out
          ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}
        `}
      >
        <nav className="container-x py-6 flex flex-col gap-1">
          {footer.navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="
                py-4 text-2xl font-display font-bold text-brand-ink
                border-b border-brand-coffee/10
                transition-all duration-300
                hover:text-brand-coffee hover:translate-x-1
              "
              style={{
                transitionDelay: open ? `${i * 40}ms` : '0ms',
              }}
            >
              {l.label}
            </a>
          ))}
          <Button
            variant="whatsapp"
            size="lg"
            href={waLink}
            external
            icon={<WhatsAppIcon />}
            className="mt-6 !min-h-14"
            onClick={() => setOpen(false)}
          >
            Pedir por WhatsApp
          </Button>
        </nav>
      </div>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeWidth="2" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
