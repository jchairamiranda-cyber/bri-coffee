/**
 * BRIG Coffee — Menu data
 * --------------------------------------------------------------
 * Single source of truth for all products on the menu.
 *
 * Schema:
 *   categoria: string                  ("Caliente" | "Frío" | "Con leche")
 *   icon:     string (emoji)           Visual cue for category chip
 *   description: short blurb
 *   productos: [
 *     {
 *       id:       slug-style unique id (used for keys / WhatsApp prefills)
 *       nombre:   display name
 *       suave:    price in Bs for "media dosis"
 *       intenso:  price in Bs for "dosis completa"
 *       descripcion: 1-line product blurb (shown on card)
 *       destacado: optional badge -> { label, tone }
 *                  tones: 'fire' | 'energy' | 'mind' | 'detox' | 'cool' | 'value' | 'cream'
 *       size: optional ('regular' | 'grande')
 *     }
 *   ]
 *
 * Add/remove products freely — the UI auto-renders them. Do NOT inline data
 * in JSX components.
 * --------------------------------------------------------------
 */

export const menu = [
  {
    categoria: 'Caliente',
    slug: 'caliente',
    icon: '☕',
    description: 'Cappuccinos clásicos servidos calientes, recién preparados.',
    productos: [
      {
        id: 'caliente-3en1',
        nombre: '3 en 1',
        suave: 9,
        intenso: 16,
        descripcion: 'El clásico que enamora. Café, crema y azúcar en perfecto balance.',
        destacado: { label: 'Más vendido', tone: 'fire' },
      },
      {
        id: 'caliente-2en1',
        nombre: '2 en 1',
        suave: 9,
        intenso: 16,
        descripcion: 'Café y crema, sin azúcar. Para los que prefieren puro sabor.',
      },
      {
        id: 'caliente-spirulina',
        nombre: 'Spirulina',
        suave: 9,
        intenso: 18,
        descripcion: 'Súper alimento con proteína vegetal y antioxidantes.',
        destacado: { label: 'Detox natural', tone: 'detox' },
      },
      {
        id: 'caliente-coffee',
        nombre: 'Coffee',
        suave: 9,
        intenso: 18,
        descripcion: 'Café DXN puro. Aroma y carácter en cada sorbo.',
      },
      {
        id: 'caliente-vita',
        nombre: 'Vita Café',
        suave: 9,
        intenso: 18,
        descripcion: 'Mezcla vitalizante con extractos botánicos selectos.',
      },
      {
        id: 'caliente-cordyceps',
        nombre: 'Cordyceps',
        suave: 9,
        intenso: 18,
        descripcion: 'Energía limpia y resistencia con el hongo de los atletas.',
        destacado: { label: 'Energía natural', tone: 'energy' },
      },
      {
        id: 'caliente-zhi-mocha',
        nombre: 'Zhi Mocha',
        suave: 9,
        intenso: 18,
        descripcion: 'Chocolate, café y Ganoderma. Indulgente y funcional.',
      },
      {
        id: 'caliente-melena-leon',
        nombre: 'Melena de León',
        suave: 9,
        intenso: 18,
        descripcion: 'El hongo del enfoque. Claridad mental y memoria.',
        destacado: { label: 'Enfoque mental', tone: 'mind' },
      },
      {
        id: 'caliente-spirulina-grande',
        nombre: 'Spirulina Grande',
        suave: 12,
        intenso: 24,
        descripcion: 'Versión grande del clásico verde. Más nutrientes, más energía.',
        size: 'grande',
      },
      {
        id: 'caliente-3en1-lite',
        nombre: '3 en 1 Lite',
        suave: 8,
        intenso: 16,
        descripcion: 'La versión ligera del 3 en 1. Menos calorías, mismo sabor.',
      },
      {
        id: 'caliente-lemonzhi',
        nombre: 'Lemonzhi',
        suave: 7,
        intenso: 14,
        descripcion: 'Limón con Ganoderma. Refrescante incluso en taza caliente.',
        destacado: { label: 'Mejor precio', tone: 'value' },
      },
      {
        id: 'caliente-cocozhi',
        nombre: 'Cocozhi',
        suave: 9,
        intenso: 18,
        descripcion: 'Cacao con Ganoderma. El reconfort que tu día necesita.',
      },
    ],
  },
  {
    categoria: 'Frío',
    slug: 'frio',
    icon: '🧊',
    description: 'Versiones frías para los días calientes. Servidas con hielo.',
    productos: [
      {
        id: 'frio-3en1',
        nombre: '3 en 1',
        suave: 10,
        intenso: 18,
        descripcion: 'El 3 en 1 frío y cremoso. Tu favorito en versión refrescante.',
        destacado: { label: 'Refrescante', tone: 'cool' },
      },
      {
        id: 'frio-2en1',
        nombre: '2 en 1',
        suave: 10,
        intenso: 18,
        descripcion: 'Café y crema, frío y sin azúcar. Limpio y directo.',
      },
      {
        id: 'frio-spirulina',
        nombre: 'Spirulina',
        suave: 13,
        intenso: 24,
        descripcion: 'Verde, frío y lleno de vida. Nutrición refrescante.',
        destacado: { label: 'Detox natural', tone: 'detox' },
      },
      {
        id: 'frio-3en1-lite',
        nombre: '3 en 1 Lite',
        suave: 9,
        intenso: 18,
        descripcion: 'Versión ligera y fría. Perfecto para la tarde.',
      },
      {
        id: 'frio-cocozhi',
        nombre: 'Cocozhi',
        suave: 10,
        intenso: 20,
        descripcion: 'Frappé de cacao con Ganoderma. Postre y bebida en uno.',
      },
    ],
  },
  {
    categoria: 'Con leche',
    slug: 'con-leche',
    icon: '🥛',
    description: 'Cremoso y suave. Preparados con leche entera para máxima textura.',
    productos: [
      {
        id: 'leche-3en1',
        nombre: '3 en 1',
        suave: 10,
        intenso: 20,
        descripcion: 'El 3 en 1 con leche entera. Más cremoso, más reconfortante.',
        destacado: { label: 'Recomendado', tone: 'cream' },
      },
      {
        id: 'leche-spirulina',
        nombre: 'Spirulina',
        suave: 14,
        intenso: 26,
        descripcion: 'Spirulina suavizada con leche. Verde, cremoso, nutritivo.',
      },
      {
        id: 'leche-3en1-lite',
        nombre: '3 en 1 Lite',
        suave: 10,
        intenso: 20,
        descripcion: 'Versión lite con leche. Equilibrio perfecto.',
      },
      {
        id: 'leche-cocozhi',
        nombre: 'Cocozhi',
        suave: 10,
        intenso: 20,
        descripcion: 'Cacao + Ganoderma + leche. El abrazo en taza.',
      },
    ],
  },
];

/**
 * Helpers — keep query logic out of components.
 */
export const getCategorias = () => menu.map((c) => c.categoria);

export const getDestacados = () =>
  menu.flatMap((c) =>
    c.productos
      .filter((p) => p.destacado)
      .map((p) => ({ ...p, categoria: c.categoria }))
  );

export const findProductById = (id) => {
  for (const c of menu) {
    const found = c.productos.find((p) => p.id === id);
    if (found) return { ...found, categoria: c.categoria };
  }
  return null;
};
