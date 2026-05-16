import { useEffect, useState } from 'react';
import Logo from './Logo';
import { contact } from '@/data/config';
import { footer } from '@/data/content';

/**
 * Navbar — sticky, transparent over the dark hero, solid on scroll.
 *
 * Right side: a black "TikTok · bri DXN" pill (matches mockup).
 *
 * Mobile: hamburger that opens a full-sheet menu with large tap targets and
 * staggered link reveals.
 *
 * Adapts color to the section behind it: starts in cream (visible over dark
 * hero) and morphs to ink (visible over cream sections) once scrolled.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const tiktok = contact.social.tiktok;

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

  // Color tokens shift based on scroll state
  const onDark = !scrolled && !open;
  const textCls = onDark ? 'text-brand-cream' : 'text-brand-ink';
  const subtleText = onDark ? 'text-brand-cream/75' : 'text-brand-ink/75';
  const subtleHover = onDark ? 'hover:text-brand-cream' : 'hover:text-brand-ink';

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
          href="#inicio"
          className={`inline-flex items-center transition-colors ${textCls} min-h-12 -ml-1 px-1`}
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
              className={`
                relative px-3 py-2 text-sm font-medium uppercase tracking-wider
                transition-colors
                ${subtleText} ${subtleHover}
              `}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          {/* TikTok pill (matches mockup) */}
          <a
            href={tiktok.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Seguinos en TikTok: ${tiktok.handle}`}
            className={`
              hidden xs:inline-flex items-center gap-2
              h-11 sm:h-12 pl-3 pr-4
              rounded-full
              ${onDark ? 'bg-brand-cream text-brand-ink hover:bg-white' : 'bg-brand-ink text-brand-cream hover:bg-brand-coffee'}
              transition-all duration-300
              shadow-soft
            `}
          >
            <span
              className={`
                inline-flex items-center justify-center
                h-7 w-7 rounded-full
                ${onDark ? 'bg-brand-ink text-brand-cream' : 'bg-brand-cream text-brand-ink'}
              `}
            >
              <TikTokIcon className="h-3.5 w-3.5" />
            </span>
            <span className="hidden sm:flex flex-col items-start leading-tight">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] opacity-70">
                TikTok
              </span>
              <span className="text-xs font-bold">{tiktok.displayName}</span>
            </span>
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`
              md:hidden inline-flex items-center justify-center
              h-11 w-11 rounded-full
              transition-colors
              ${textCls}
              ${onDark ? 'hover:bg-brand-cream/10' : 'hover:bg-brand-ink/5'}
            `}
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
              style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={tiktok.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="
              mt-6 inline-flex items-center justify-center gap-2
              min-h-14 rounded-full
              bg-brand-ink text-brand-cream
              font-semibold uppercase tracking-wider text-sm
            "
          >
            <TikTokIcon className="h-4 w-4" />
            Seguinos en TikTok
          </a>
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
function TikTokIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.5 2h2.7c.18 1.6 1 3.06 2.32 4.07 1.15.88 2.6 1.4 4.18 1.4l-.07 3.05c-2.07 0-4.04-.62-5.7-1.7l-.02 7.55a6.6 6.6 0 1 1-6.6-6.6c.39 0 .76.03 1.13.1v3.18c-.36-.1-.74-.16-1.13-.16a3.5 3.5 0 1 0 3.5 3.5V2Z" />
    </svg>
  );
}
