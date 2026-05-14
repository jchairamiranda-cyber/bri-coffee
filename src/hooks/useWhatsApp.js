import { useCallback } from 'react';
import { buildWhatsAppLink, whatsappTemplates } from '@/data/config';

/**
 * useWhatsApp — composes WhatsApp URLs with optional pre-filled messages.
 *
 * Usage:
 *   const { link, openProduct, openGeneric } = useWhatsApp();
 *
 *   <a href={openProduct({ producto: 'Cordyceps', intensidad: 'intenso' })}>
 *     Pedir
 *   </a>
 *
 *   // Or imperative:
 *   <button onClick={() => openGeneric()}>Hablanos</button>
 */
export function useWhatsApp() {
  /** Generic link (no message) */
  const link = buildWhatsAppLink();

  /** Generic order — uses default template */
  const openGeneric = useCallback(() => {
    return buildWhatsAppLink(whatsappTemplates.generic);
  }, []);

  /** Pre-filled with product name + intensity */
  const openProduct = useCallback(({ producto, intensidad = 'suave' }) => {
    const msg = whatsappTemplates.productPrefill
      .replace('{{product}}', producto)
      .replace('{{intensity}}', intensidad);
    return buildWhatsAppLink(msg);
  }, []);

  /** Recommended-style message (for "ask for advice" CTA) */
  const openExplore = useCallback(() => {
    return buildWhatsAppLink(whatsappTemplates.menuExplore);
  }, []);

  /** Custom message (escape hatch) */
  const openCustom = useCallback((message) => {
    return buildWhatsAppLink(message);
  }, []);

  return { link, openGeneric, openProduct, openExplore, openCustom };
}
