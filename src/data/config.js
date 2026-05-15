/**
 * BRIG Coffee — Single source of truth for business configuration.
 * Keep all contact info, links and brand metadata here so the rest of the
 * app stays decoupled from "where" the data lives.
 *
 * To change WhatsApp, address, IG, hours, etc. — edit this file only.
 */

export const business = {
  name: 'BRIG Coffee',
  tagline: 'Café funcional preparado al momento',
  city: 'San Julián',
  region: 'Santa Cruz',
  country: 'Bolivia',
  currency: 'Bs',
};

export const contact = {
  // International format, no spaces, no '+'. Used for wa.me links.
  whatsappNumber: '59171368659',
  // Pretty format, used for display only.
  whatsappDisplay: '+591 71368659',

  social: {
    instagram: {
      handle: '@briDXN',
      url: 'https://instagram.com/briDXN',
    },
    tiktok: {
      handle: '@brigidamirandadxn',
      displayName: 'bri DXN',
      url: 'https://www.tiktok.com/@brigidamirandadxn',
    },
  },

  address: {
    line1: 'Mercado Municipal — pasillo Tarija, caseta N330',
    line2: 'San Julián, Santa Cruz, Bolivia',
    // Real Google Maps short link — opens directly to BRIG location
    mapsUrl: 'https://maps.app.goo.gl/RiptwUhjBuAs413H9',
    // Used for the embedded iframe (search query fallback)
    mapsQuery: 'Mercado+Municipal+San+Julian+Santa+Cruz+Bolivia',
  },
};

export const hours = [
  { days: 'Lunes a Domingo', time: '08:00 – 18:00' },
];

/**
 * WhatsApp message templates. Use {{product}} and {{intensity}} placeholders.
 * Centralized so marketing copy can be tuned without touching components.
 */
export const whatsappTemplates = {
  generic: 'Hola BRIG! Quiero hacer un pedido 👋',
  productPrefill:
    'Hola BRIG! Quiero pedir un *{{product}}* {{intensity}} ☕ ¿Lo tienen disponible?',
  menuExplore:
    'Hola BRIG! Estoy viendo el menú en la web y me gustaría que me recomienden algo ✨',
};

/**
 * Build a wa.me link with optional pre-filled message.
 * Kept here (not in the hook) so it can also be used in static contexts.
 */
export const buildWhatsAppLink = (message) => {
  const base = `https://wa.me/${contact.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};
