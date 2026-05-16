/**
 * BRIG Coffee — Marketing copy
 * --------------------------------------------------------------
 * All user-facing strings live here. Three benefits:
 *   1. Editable without touching components.
 *   2. Easy to A/B test (swap a constant).
 *   3. Future i18n-ready (turn into a function later).
 *
 * Strategy: brand-led, NOT transactional. Copy is designed to build
 * desire and emotional connection, not push orders.
 * --------------------------------------------------------------
 */

export const hero = {
  // Two-tone headline. The first part stays in ink/cream, `accent` part is highlighted.
  headlineLines: [
    { text: 'No es solo café.', tone: 'ink' },
    { text: 'Es energía real.', tone: 'accent' },
  ],
  subheadline:
    'Cappuccinos funcionales con ingredientes naturales que elevan tu día.',

  // Small icons row below the subheadline
  highlights: [
    { label: 'Energía natural', icon: 'energy' },
    { label: 'Enfoque', icon: 'brain' },
    { label: 'Bienestar', icon: 'leaf' },
  ],

  ctaPrimary: 'Conoce nuestro menú',
  ctaPrimaryHref: '#menu',
};

export const categoriesSection = {
  eyebrow: 'Elige tu estilo',
  headline: 'Explora nuestras categorías',
  // The arrow CTAs on each card link to the menu anchor with the slug
  cardCtaLabel: 'Ver',
};

export const intensity = {
  eyebrow: 'Tú eliges',
  headline: 'Suave o Intenso',
  subheadline: 'Cada bebida, en la intensidad que va contigo.',
  options: [
    {
      key: 'suave',
      label: 'Suave',
      lines: ['Media dosis', 'Sabor sutil'],
    },
    {
      key: 'intenso',
      label: 'Intenso',
      lines: ['Dosis completa', 'Todo el efecto.'],
    },
  ],
};

export const ingredientsSection = {
  eyebrow: 'Ingredientes que transforman',
  headline: 'Funcionalidad en cada taza',
};

export const menuShowcase = {
  eyebrow: 'Carta completa',
  headline: 'Todo lo que preparamos',
  description:
    'Cada bebida está disponible en versión suave o intensa. Los precios son referenciales.',
};

export const brandStory = {
  eyebrow: 'Más que café',
  headline: 'Somos BRIG',
  paragraphs: [
    'Combinamos lo mejor del café con ingredientes funcionales DXN para ofrecerte bebidas que no solo saben bien, también te hacen bien.',
  ],
  pillars: [
    {
      title: 'Preparado al momento',
      icon: 'cup',
    },
    {
      title: 'Ingredientes de calidad',
      icon: 'leaf',
    },
    {
      title: 'Hecho con pasión',
      icon: 'heart',
    },
  ],
};

export const infoBar = {
  ubicacion: {
    icon: 'pin',
    eyebrow: 'Ubícanos',
    body: 'San Julián, Santa Cruz, Bolivia',
    ctaLabel: 'Ver en mapa',
  },
  horario: {
    icon: 'clock',
    eyebrow: 'Horario',
    days: 'Lunes a Domingo',
    time: '08:00 – 18:00',
  },
  social: {
    icon: 'tiktok',
    eyebrow: 'Síguenos',
    handle: 'TikTok: bri DXN',
    ctaLabel: 'Ir a TikTok',
  },
};

export const footer = {
  tagline: 'Café funcional. Energía real. Hecho para ti.',
  rights: 'Todos los derechos reservados.',
  // Used by navbar AND footer
  navLinks: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nuestro café', href: '#nuestro-cafe' },
    { label: 'Menú', href: '#menu' },
    { label: 'Sobre BRIG', href: '#sobre-brig' },
    { label: 'Ubicación', href: '#ubicacion' },
  ],
};
