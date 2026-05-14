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
  city: 'Tarija',
  country: 'Bolivia',
  currency: 'Bs',
};

export const contact = {
  // International format, no spaces, no '+'. Used for wa.me links.
  whatsappNumber: '59171368659',
  // Pretty format, used for display only.
  whatsappDisplay: '+591 71368659',
  instagram: {
    handle: '@briDXN',
    url: 'https://instagram.com/briDXN',
  },
  address: {
    line: 'Mercado Municipal — pasillo Tarija, caseta N330',
    city: 'Tarija, Bolivia',
    // Replace with actual coordinates if you want to embed a map
    mapsQuery: 'Mercado+Municipal+Tarija+Bolivia',
  },
};

export const hours = [
  { days: 'Lunes – Sábado', time: '08:00 – 20:00' },
  { days: 'Domingo', time: '09:00 – 14:00' },
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
