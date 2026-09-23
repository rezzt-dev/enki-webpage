/**
 * Endpoint del formulario "avísame" (D8: Buttondown). `null` mientras no se configure
 * `PUBLIC_BUTTONDOWN_USER`: el formulario se sigue pintando y avisa en desarrollo de que falta.
 */
export function notifyAction(): string | null {
  const user = import.meta.env.PUBLIC_BUTTONDOWN_USER;
  return user ? `https://buttondown.com/api/emails/embed-subscribe/${encodeURIComponent(user)}` : null;
}
