import Logo from '@/components/Logo';
import { business } from '@/data/config';
import { footer } from '@/data/content';

/**
 * Footer — slim, brand-anchored close.
 *
 * Matches the mockup: BRIG wordmark left · short tagline + copyright center ·
 * subtle "smiley" mark right (subtle nod to the cup logo on the website).
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-ink text-brand-cream">
      <div className="container-x py-8 sm:py-10">
        <div className="
          flex flex-col sm:flex-row
          items-center sm:items-center
          justify-between
          gap-5 sm:gap-6
          text-center sm:text-left
        ">
          {/* Logo */}
          <Logo variant="wordmark" className="h-7 w-auto text-brand-cream" />

          {/* Tagline + rights */}
          <div className="flex flex-col items-center gap-1 text-xs sm:text-[13px] text-brand-cream/65">
            <p className="font-medium text-brand-cream/85">{footer.tagline}</p>
            <p>
              © {year} {business.name}. {footer.rights}
            </p>
          </div>

          {/* Mini smiley mark */}
          <span className="text-brand-cream/55" aria-hidden>
            <SmileyMark />
          </span>
        </div>
      </div>
    </footer>
  );
}

function SmileyMark() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14 q 4 3 8 0" />
      <circle cx="9" cy="10" r="0.6" fill="currentColor" />
      <circle cx="15" cy="10" r="0.6" fill="currentColor" />
    </svg>
  );
}
