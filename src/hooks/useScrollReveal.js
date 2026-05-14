import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — adds `.is-visible` to an element when it enters the viewport.
 * Pair with the `.reveal` utility in index.css.
 *
 * Usage:
 *   const ref = useScrollReveal();
 *   <div ref={ref} className="reveal">...</div>
 *
 * Options:
 *   threshold (0–1)  : fraction of element visible to trigger (default 0.15)
 *   rootMargin       : IntersectionObserver root margin
 *   once             : if true (default) reveals only once
 *   delay (ms)       : optional delay before adding the class (stagger)
 */
export function useScrollReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
  once = true,
  delay = 0,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // SSR safety / no IO support → reveal immediately
    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => node.classList.add('is-visible'), delay);
            } else {
              node.classList.add('is-visible');
            }
            if (once) observer.unobserve(node);
          } else if (!once) {
            node.classList.remove('is-visible');
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once, delay]);

  return ref;
}
