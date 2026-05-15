import Logo from '@/components/Logo';
import { contact, business } from '@/data/config';
import { footer } from '@/data/content';

/**
 * Footer — minimal, brand-anchored, with quick nav + social.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  const { instagram, tiktok } = contact.social;

  return (
    <footer className="relative bg-brand-ink text-brand-cream">
      <div className="container-x py-12 sm:py-16">
        <div className="grid sm:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="sm:col-span-5 flex flex-col gap-4">
            <Logo variant="wordmark" className="h-7 w-auto text-brand-cream" />
            <p className="text-sm text-brand-cream/70 max-w-sm leading-relaxed">
              {footer.tagline} {business.city}, {business.region}, {business.country}.
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <SocialLink
                href={instagram.url}
                icon={<InstagramIcon className="h-4 w-4" />}
                label={instagram.handle}
              />
              <SocialLink
                href={tiktok.url}
                icon={<TikTokIcon className="h-4 w-4" />}
                label={`${tiktok.displayName} · ${tiktok.handle}`}
              />
            </div>
          </div>

          {/* Nav */}
          <div className="sm:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-brand text-brand-caramel">
              Navegación
            </span>
            <ul className="mt-4 flex flex-col gap-2">
              {footer.navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-brand-cream/80 hover:text-brand-cream transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-4">
            <span className="text-xs font-semibold uppercase tracking-brand text-brand-caramel">
              Contacto
            </span>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-brand-cream/80">
              <li>{contact.address.line1}</li>
              <li>{contact.address.line2}</li>
              <li>
                <a
                  href={`https://wa.me/${contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-cream transition-colors"
                >
                  WhatsApp: {contact.whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-brand-cream/10 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-brand-cream/60">
          <p>
            © {year} {business.name}. {footer.rights}
          </p>
          <p>Hecho con ☕ en {business.city}.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center gap-2
        text-sm text-brand-cream/80 hover:text-brand-cream
        transition-colors w-fit
      "
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon({ className }) {
  // Single-color minimalist TikTok glyph (works at any size)
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.5 2h2.7c.18 1.6 1 3.06 2.32 4.07 1.15.88 2.6 1.4 4.18 1.4l-.07 3.05c-2.07 0-4.04-.62-5.7-1.7l-.02 7.55a6.6 6.6 0 1 1-6.6-6.6c.39 0 .76.03 1.13.1v3.18c-.36-.1-.74-.16-1.13-.16a3.5 3.5 0 1 0 3.5 3.5V2Z" />
    </svg>
  );
}
