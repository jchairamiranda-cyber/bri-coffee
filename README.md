# BRIG Coffee — Web

Sitio oficial de **BRIG Coffee** (Tarija, Bolivia). Cappuccinos funcionales con DXN, pedidos por WhatsApp.

Construido con **React + Vite + Tailwind CSS**. Arquitectura modular, lista para escalar a carrito, panel admin y futuro app móvil (React Native).

---

## 🚀 Cómo correrlo

```bash
# 1. Instalar dependencias
cd brig-web
npm install

# 2. Modo desarrollo (abre http://localhost:5173)
npm run dev

# 3. Build de producción
npm run build

# 4. Previsualizar el build
npm run preview
```

Requiere **Node.js 18+** (recomendado 20+).

---

## 🌐 Cómo publicarlo (gratis)

### Opción A — Vercel (recomendado, 2 min)
1. Subí esta carpeta a un repo en GitHub.
2. Entrá a [vercel.com](https://vercel.com) → "New Project" → importá el repo.
3. Vercel detecta Vite automáticamente. Click en "Deploy".
4. Listo. URL pública instantánea, con HTTPS y CDN global.

### Opción B — Netlify
Mismo flujo, pero en [netlify.com](https://netlify.com). Build command: `npm run build`, publish dir: `dist`.

---

## 🧱 Estructura

```
brig-web/
├── public/                 # Assets estáticos (favicon)
├── src/
│   ├── components/         # UI reutilizable, agnóstica de datos
│   │   ├── Button.jsx          (+ ícono WhatsApp y flecha)
│   │   ├── BenefitCard.jsx     (+ set inline de íconos)
│   │   ├── Logo.jsx            (SVG inline, 3 variantes)
│   │   ├── Navbar.jsx          (sticky, mobile sheet)
│   │   ├── ProductCard.jsx     (precio + toggle intensidad + CTA)
│   │   ├── SectionTitle.jsx
│   │   └── WhatsAppFloat.jsx   (botón flotante con pulso)
│   ├── sections/           # Composiciones de página
│   │   ├── Hero.jsx
│   │   ├── Menu.jsx            (filtros + grid de productos)
│   │   ├── About.jsx           (explicación DXN)
│   │   ├── Differentiators.jsx
│   │   ├── Location.jsx        (info + mapa embebido)
│   │   └── Footer.jsx
│   ├── data/               # Single source of truth — sin hardcode en JSX
│   │   ├── config.js           (WhatsApp, dirección, IG, horarios, plantillas)
│   │   ├── menu.js             (productos por categoría, precios, badges)
│   │   └── content.js          (todos los textos de marketing)
│   ├── hooks/              # Lógica reutilizable
│   │   ├── useWhatsApp.js      (genera enlaces con mensaje prellenado)
│   │   └── useScrollReveal.js  (fade-in al scroll con IntersectionObserver)
│   ├── assets/             # (Para futuras imágenes optimizadas)
│   ├── App.jsx             # Composición de secciones
│   ├── index.css           # Tailwind + componentes base + utilidades reveal
│   └── main.jsx            # Entry point
├── index.html              # Meta tags SEO + JSON-LD LocalBusiness
├── tailwind.config.js      # Paleta de marca + animaciones custom
├── vite.config.js          # Alias @/ → src/, code splitting
└── package.json
```

---

## ✏️ Cómo editar contenido (sin tocar componentes)

Toda la información del negocio vive en **3 archivos**:

### `src/data/config.js` — Datos del negocio
- Número de WhatsApp (formato internacional sin `+` ni espacios)
- Dirección, Instagram, horarios
- Plantillas de mensajes prellenados de WhatsApp

### `src/data/menu.js` — Menú
Agregar un producto:
```js
{
  id: 'caliente-nuevo-cafe',     // único — usado en keys y links
  nombre: 'Nuevo café',
  suave: 10,
  intenso: 18,
  descripcion: 'Una línea corta para la card',
  destacado: { label: 'Nuevo', tone: 'fire' }, // opcional
}
```
Tonos disponibles: `fire`, `energy`, `mind`, `detox`, `cool`, `value`, `cream`.

### `src/data/content.js` — Textos
Headlines, subtítulos, descripciones, copys de CTAs. Todo en español.
Incluye **3 opciones de headline** en `hero.headlineOptions` — cambiá `hero.headline` para A/B testear.

---

## 📱 Cómo funciona el WhatsApp dinámico

El hook `useWhatsApp` construye el enlace `wa.me/...` con el mensaje prellenado:

```jsx
const { openProduct } = useWhatsApp();

<a href={openProduct({ producto: 'Cordyceps', intensidad: 'intenso' })}>
  Pedir
</a>
```
El cliente abre WhatsApp con:
> Hola BRIG! Quiero pedir un **Cordyceps** intenso ☕ ¿Lo tienen disponible?

La plantilla se edita en `config.js → whatsappTemplates`.

---

## 🎨 Paleta de marca

Definida en `tailwind.config.js` bajo `colors.brand`:

| Token             | Hex       | Uso |
|-------------------|-----------|-----|
| `brand-ink`       | `#0A0A0A` | Texto, fondos oscuros, logo |
| `brand-espresso`  | `#1A0F0A` | Marrón más profundo |
| `brand-coffee`    | `#3D2418` | Marrón rico |
| `brand-mocha`     | `#6B4423` | Marrón medio (eyebrows) |
| `brand-caramel`   | `#A87C4F` | Acento cálido |
| `brand-cream`     | `#F5EFE6` | Fondo principal (papel) |
| `brand-milk`      | `#FBF7F1` | Superficie de tarjetas |
| `brand-paper`     | `#EFE7DA` | Fondo alternativo |

---

## 🚀 Performance

- **Code splitting** manual: `vendor-react`, `vendor-motion` (vite.config.js).
- **Lazy loading** del mapa de Google (iframe `loading="lazy"`).
- **SVG inline** para logo e íconos → 0 requests adicionales.
- **Fuente Inter** preconectada y precargada.
- **No imágenes pesadas** en hero → uso de SVG + gradientes CSS.
- **`prefers-reduced-motion`** respetado: animaciones desactivadas para usuarios sensibles.

Lighthouse esperado: **95+ en Performance, Accessibility, Best Practices y SEO**.

---

## 📦 Cómo escalar

La arquitectura ya está preparada para:

### Agregar carrito de compras
1. Crear `/src/contexts/CartContext.jsx` con React Context.
2. Crear hook `useCart()`.
3. Agregar botón "Agregar al carrito" en `ProductCard.jsx`.
4. Agregar componente `/src/components/CartDrawer.jsx`.
5. Al finalizar pedido, construir mensaje WhatsApp consolidado con `useWhatsApp().openCustom(message)`.

### Integrar pagos
- Cuando llegue: agregar `/src/services/payments.js` con la integración del proveedor (Stripe / Tigo Money / QR).
- Reutilizar `useWhatsApp` para enviar comprobante al negocio.

### Conectar backend
- Convertir `/src/data/menu.js` en función async que pegue a una API.
- Agregar `/src/hooks/useMenu.js` con loading/error states.
- El resto del UI no cambia — esa es la ventaja de centralizar datos.

### Convertir a app móvil (React Native)
- Los componentes están separados por responsabilidad.
- Hooks (`useWhatsApp`, `useScrollReveal`) son agnósticos de DOM.
- Capa `/data` es 100% reutilizable.
- Habría que reescribir `/components` y `/sections` con `react-native` + `nativewind` (Tailwind para RN).

---

## 💡 Sugerencias de mejora (próximos pasos)

1. **Fotos reales de productos** — reemplazar el visual del Hero por una foto bien iluminada del cappuccino estrella. Aumenta conversión 30%+.
2. **Testimonios de clientes** — agregar sección de 3-4 reseñas reales con foto. Prueba social = más confianza.
3. **Badge "Recién hecho hace X minutos"** — dato falso de tiempo en el hero. Sentido de urgencia.
4. **Promo del día** — banner top con descuento o producto destacado rotativo. Aumenta ticket promedio.
5. **Pixel de Meta / Google Analytics** — agregar en `index.html` para medir conversiones reales de WhatsApp.
6. **Página de "Sobre nosotros"** — historia del negocio. Construye marca en mediano plazo.
7. **Programa de referidos** — "Trae a un amigo, llévate un café gratis". Crece orgánicamente.
8. **Versión PWA** — instalable como app desde el navegador, con caché offline del menú.
9. **Newsletter / WhatsApp broadcast** — captar email/WhatsApp con descuento de bienvenida.
10. **Modo oscuro** — opcional, pero el inverso ya se ve genial en la sección DXN.

---

## 🛠️ Stack

| Capa | Tecnología | Versión |
|------|------------|---------|
| Build | Vite | 5.3 |
| UI | React | 18.3 |
| Estilos | Tailwind CSS | 3.4 |
| Animación | Framer Motion (disponible) + IntersectionObserver nativo | 11 |
| Fuente | Inter (Google Fonts) | – |

---

## 📞 Soporte

Si necesitás:
- Cambiar el WhatsApp → `src/data/config.js`
- Cambiar un precio → `src/data/menu.js`
- Cambiar un texto → `src/data/content.js`

Para cualquier otra cosa, todos los componentes están comentados con su propósito y decisiones de diseño.

Hecho con ☕ para BRIG Coffee.
#   b r i - c o f f e e  
 #   b r i - c o f f e e  
 