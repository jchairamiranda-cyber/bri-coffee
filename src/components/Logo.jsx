/**
 * Logo — BRIG Coffee
 *
 * Inline SVG recreation of the brand logo (coffee tamper + wordmark).
 * Inline because:
 *   - Crisp at any size, no PNG artifacts.
 *   - No extra HTTP request, ships in the JS bundle.
 *   - Color via `currentColor` so it adapts to dark/light surfaces.
 *
 * Variants:
 *   - 'full'    : tamper + "BRIG" + "COFFEE" (default)
 *   - 'mark'    : tamper only (for favicon-like uses)
 *   - 'wordmark': "BRIG COFFEE" only (no icon)
 */
export default function Logo({
  variant = 'full',
  className = '',
  title = 'BRIG Coffee',
}) {
  if (variant === 'mark') {
    return (
      <svg
        viewBox="0 0 80 80"
        className={className}
        role="img"
        aria-label={title}
      >
        <Tamper />
      </svg>
    );
  }

  if (variant === 'wordmark') {
    return (
      <svg
        viewBox="0 0 280 90"
        className={className}
        role="img"
        aria-label={title}
      >
        <Wordmark />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 280 200"
      className={className}
      role="img"
      aria-label={title}
    >
      {/* Tamper centered horizontally on top */}
      <g transform="translate(100, 0)">
        <Tamper />
      </g>
      {/* Wordmark below */}
      <g transform="translate(0, 95)">
        <Wordmark />
      </g>
    </svg>
  );
}

/** Coffee tamper silhouette */
function Tamper() {
  return (
    <g fill="currentColor">
      {/* Handle (curved top) */}
      <path d="M40 6 C 28 6, 28 14, 40 14 L 44 14 L 44 38 L 36 38 L 36 14 L 40 14 Z" />
      {/* Base disc */}
      <rect x="12" y="38" width="56" height="12" rx="2" />
      {/* Tamper bottom */}
      <path d="M18 50 L 62 50 L 58 60 L 22 60 Z" />
    </g>
  );
}

/** "BRIG" + "COFFEE" wordmark */
function Wordmark() {
  return (
    <g fill="currentColor">
      <text
        x="140"
        y="58"
        textAnchor="middle"
        fontFamily="Inter, Helvetica, sans-serif"
        fontWeight="900"
        fontSize="64"
        letterSpacing="-1"
      >
        BRIG
      </text>
      <text
        x="140"
        y="84"
        textAnchor="middle"
        fontFamily="Inter, Helvetica, sans-serif"
        fontWeight="500"
        fontSize="13"
        letterSpacing="6"
      >
        COFFEE
      </text>
    </g>
  );
}
