/**
 * BRIG Coffee — Category showcase data.
 *
 * Used by the Categories section (3 photo-style cards in the home).
 *  - `slug`     : matches menu.js slugs (filters Menu section when clicked)
 *  - `tagline`  : short emotional line shown on the card
 *  - `icon`     : single emoji / glyph used inside the rounded badge
 *  - `gradient` : CSS gradient used as visual background (no photo dependency)
 *
 * Photos can be swapped later by adding an `image` URL and prioritizing it
 * in CategoryCard.jsx — keeping gradients as fallback.
 */

export const categories = [
  {
    slug: 'caliente',
    label: 'Caliente',
    tagline: 'Clásicos que reconfortan tu día.',
    icon: '☕',
    gradient:
      'radial-gradient(120% 80% at 30% 20%, #5C3320 0%, #2B1810 55%, #0A0606 100%)',
  },
  {
    slug: 'frio',
    label: 'Frío',
    tagline: 'Frescos, funcionales y deliciosos.',
    icon: '🧊',
    gradient:
      'radial-gradient(120% 80% at 30% 20%, #3D2C24 0%, #1A1410 55%, #0A0707 100%)',
  },
  {
    slug: 'con-leche',
    label: 'Con leche',
    tagline: 'Suavidad y sabor en cada sorbo.',
    icon: '🥛',
    gradient:
      'radial-gradient(120% 80% at 30% 20%, #6B4F3C 0%, #2E2018 55%, #100A07 100%)',
  },
];
