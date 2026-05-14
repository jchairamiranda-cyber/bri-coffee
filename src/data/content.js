/**
 * BRIG Coffee — Marketing copy
 * --------------------------------------------------------------
 * All user-facing strings live here. Three benefits:
 *   1. Editable without touching components.
 *   2. Easy to A/B test (swap a constant).
 *   3. Future i18n-ready (turn into a function later).
 *
 * Headlines provided as alternatives — change `hero.headline` to swap.
 * --------------------------------------------------------------
 */

export const hero = {
  eyebrow: 'Café funcional · Tarija',

  // Three options — currently using #1. Change export to switch.
  headlineOptions: [
    'Cada café, una experiencia que te despierta diferente.',
    'Café funcional con DXN. Energía real, sin fórmulas mágicas.',
    'Tu café favorito. Ahora con beneficios reales para tu cuerpo.',
  ],
  headline: 'Cada café, una experiencia que te despierta diferente.',

  subheadline:
    'Cappuccinos preparados al momento con ingredientes funcionales DXN. Suaves o intensos, a tu medida. En el corazón del Mercado Municipal de Tarija.',

  // CTA labels
  ctaPrimary: 'Pedir por WhatsApp',
  ctaSecondary: 'Ver el menú',

  // Quick highlights below hero
  highlights: [
    { label: 'Recién preparado', icon: '☕' },
    { label: 'Suave o intenso', icon: '⚡' },
    { label: 'Ingredientes funcionales', icon: '🌿' },
  ],
};

export const menuSection = {
  eyebrow: 'Menú completo',
  headline: 'Elige tu café. Elige tu intensidad.',
  description:
    'Cada bebida se prepara en dos versiones. *Suave* con media dosis para un sabor sutil. *Intenso* con dosis completa para todo el efecto.',
  filtersLabel: 'Filtrar por categoría',
};

export const about = {
  eyebrow: '¿Por qué DXN?',
  headline: 'No es solo café. Es café con propósito.',
  paragraphs: [
    'DXN es una empresa pionera mundial en cultivo orgánico de Ganoderma (Reishi), Cordyceps, Espirulina y otros superalimentos. Sus extractos se integran a cada uno de nuestros cappuccinos sin alterar el sabor que ya amas.',
    'El resultado: un café que disfrutás igual o mejor, pero que además aporta energía limpia, antioxidantes y nutrientes funcionales con cada taza.',
  ],
  benefits: [
    {
      title: 'Energía sostenida',
      desc: 'Sin el bajón del café común. Cordyceps y Ganoderma estabilizan tu energía durante horas.',
      icon: 'energy',
    },
    {
      title: 'Antioxidantes reales',
      desc: 'Espirulina y Reishi neutralizan radicales libres y apoyan tu sistema inmune.',
      icon: 'shield',
    },
    {
      title: 'Claridad mental',
      desc: 'Melena de León estimula factores de crecimiento neuronal. Foco que se nota.',
      icon: 'brain',
    },
    {
      title: 'Cultivo orgánico',
      desc: 'Ingredientes certificados orgánicamente, libres de pesticidas y aditivos.',
      icon: 'leaf',
    },
  ],
};

export const differentiators = {
  eyebrow: 'Por qué BRIG',
  headline: 'Lo que nos hace diferentes.',
  items: [
    {
      title: 'Preparado al momento',
      desc: 'Cada bebida se prepara cuando la pides. Nada de termos, nada de pre-hecho. Calidad en cada sorbo.',
      icon: 'clock',
    },
    {
      title: 'Tú eliges la intensidad',
      desc: 'Suave para una experiencia ligera. Intenso para todo el sabor y efecto. Tu café, tu medida.',
      icon: 'tune',
    },
    {
      title: 'Ingredientes funcionales',
      desc: 'Ganoderma, Cordyceps, Espirulina, Melena de León. Súper alimentos en cada taza.',
      icon: 'mushroom',
    },
    {
      title: 'Hecho en Tarija',
      desc: 'Negocio local, atendido con cariño. Apoyas a tu ciudad con cada pedido.',
      icon: 'pin',
    },
  ],
};

export const location = {
  eyebrow: 'Visitanos',
  headline: 'Dónde encontrarnos.',
  ctaText: 'Pedir ahora por WhatsApp',
  delivery: 'También coordinamos pedidos por WhatsApp y entregas en Tarija.',
};

export const footer = {
  tagline: 'Café funcional preparado al momento.',
  rights: 'Todos los derechos reservados.',
  navLinks: [
    { label: 'Menú', href: '#menu' },
    { label: 'Sobre DXN', href: '#dxn' },
    { label: 'Por qué BRIG', href: '#diferencial' },
    { label: 'Ubicación', href: '#ubicacion' },
  ],
};
