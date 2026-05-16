import { useCallback } from 'react';
import { buildWhatsAppLink, whatsappTemplates } from '@/data/config';

/**
 * useWhatsApp — composes WhatsApp URLs with optional pre-filled messages.
 *
 * Brand-led mode: prefer `openContact` (soft, neutral message) over `openProduct`
 * (transactional). Both still available for flexibility.
 *
 * Usage:
 *   const { openContact } = useWhatsApp();
 *   <a href={openContact()}>Escribinos</a>
 */
export function useWhatsApp() {
  /** Generic link (no message) */
  const link = buildWhatsAppLink();

  /** Soft "let's talk" message — brand mode default */
  const openContact = useCallback(() => {
    return buildWhatsAppLink(whatsappTemplates.contact);
  }, []);

  /** Generic order — uses the original template */
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

  return {
    link,
    openContact,
    openGeneric,
    openProduct,
    openExplore,
    openCustom,
  };
}
