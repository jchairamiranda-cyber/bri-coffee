/**
 * BRIG Coffee — Functional ingredients showcase.
 *
 * Three DXN superfoods that anchor the brand promise. Educational, not
 * transactional — copy is designed to build desire, not push a purchase.
 *
 * Each entry:
 *   slug         : unique
 *   name         : display name (also used as alt-text)
 *   tagline      : 8–14 words, includes 1–2 **bold keywords** (wrapped in `**`)
 *   accentColor  : Tailwind class for the icon container tint
 *   gradient     : background gradient for the visual area
 *   illustration : pure-SVG illustration component (rendered in Ingredients.jsx)
 */

export const ingredients = [
  {
    slug: 'spirulina',
    name: 'Spirulina',
    tagline: 'Energía **natural** y antioxidantes que revitalizan tu cuerpo.',
    accent: 'green',
    gradient:
      'radial-gradient(120% 90% at 30% 25%, #335B30 0%, #1B2E18 60%, #0A100A 100%)',
  },
  {
    slug: 'cordyceps',
    name: 'Cordyceps',
    tagline: 'Mejora tu **rendimiento físico** y mental de forma natural.',
    accent: 'gold',
    gradient:
      'radial-gradient(120% 90% at 30% 25%, #6F4A22 0%, #2C1C0E 60%, #0E0805 100%)',
  },
  {
    slug: 'ganoderma',
    name: 'Ganoderma',
    tagline: 'Fortalece tu sistema inmune y mejora tu **bienestar**.',
    accent: 'red',
    gradient:
      'radial-gradient(120% 90% at 30% 25%, #6E2A1F 0%, #2A0F0A 60%, #100604 100%)',
  },
];
