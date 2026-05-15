/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        // Extra-small phones (320–474px) → use `xs:` to opt in
        xs: '475px',
      },
      colors: {
        // Brand palette — extracted from logo + premium coffee aesthetic
        brand: {
          ink: '#0A0A0A',          // primary black (logo / text)
          espresso: '#1A0F0A',     // deepest brown
          coffee: '#3D2418',       // rich brown
          mocha: '#6B4423',        // mid coffee
          caramel: '#A87C4F',      // warm accent
          cream: '#F5EFE6',        // paper-like background (matches menu)
          milk: '#FBF7F1',         // off-white surface
          paper: '#EFE7DA',        // softer cream
        },
        // Functional accents (very subtle — keep coffee-forward)
        accent: {
          green: '#4A6B3A',        // spirulina / natural
          gold: '#C8A24B',          // premium highlight
        },
      },
      fontFamily: {
        display: ['"Inter"', '"Helvetica Neue"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', '"Helvetica Neue"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Courier New"', 'monospace'],
      },
      letterSpacing: {
        brand: '0.35em',
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(10,10,10,0.04), 0 8px 24px -12px rgba(10,10,10,0.10)',
        card: '0 2px 4px rgba(10,10,10,0.04), 0 12px 32px -16px rgba(10,10,10,0.18)',
        cardHover: '0 4px 8px rgba(10,10,10,0.06), 0 24px 48px -20px rgba(10,10,10,0.28)',
        focus: '0 0 0 3px rgba(168,124,79,0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.04)', opacity: '0.9' },
        },
        // Periodic "ping" — expand + fade once, then long pause.
        // 5s total cycle, only the first 1.4s is animated visibly.
        'ping-soft': {
          '0%':   { transform: 'scale(1)', opacity: '0.55' },
          '28%':  { transform: 'scale(1.7)', opacity: '0' },
          '100%': { transform: 'scale(1.7)', opacity: '0' },
        },
        'steam': {
          '0%':   { opacity: '0', transform: 'translateY(0) scaleX(1)' },
          '50%':  { opacity: '0.6' },
          '100%': { opacity: '0', transform: 'translateY(-24px) scaleX(1.4)' },
        },
        // Subtle attention nudge for the bestseller badge — runs once on reveal.
        'shine': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.8s ease-out both',
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
        'ping-soft': 'ping-soft 5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'steam': 'steam 3s ease-in-out infinite',
        'shine': 'shine 2.4s ease-in-out infinite',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.6 0 0 0 0 0.45 0 0 0 0 0.3 0 0 0 0.06 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
