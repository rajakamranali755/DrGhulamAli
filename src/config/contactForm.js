/**
 * Contact-form delivery.
 *
 * The original site posted this form to WordPress (Elementor Pro) which then e-mailed the site owner.
 * A React site has no server, so submissions are sent to an endpoint you configure in `.env`:
 *
 *   VITE_FORM_ENDPOINT   URL that receives the submission (required)
 *   VITE_FORM_MODE       "json"       (default) POST application/json - Formspree, Web3Forms, Getform, your own API
 *                        "wordpress"  POST multipart FormData in Elementor's format to a WordPress admin-ajax.php
 *
 * Messages are the ones configured in Elementor for this form.
 */
export const FORM_MESSAGES = {
  success: 'Your submission was successful.',
  error: 'Your submission failed because of an error.',
  server: 'Your submission failed because of a server error.',
  invalid: 'Your submission failed because the form is invalid.',
};

const endpoint = import.meta.env.VITE_FORM_ENDPOINT;
const mode = import.meta.env.VITE_FORM_MODE || 'json';

/** Rejection carrying the message to show, plus optional per-field messages (Elementor's `data.errors`). */
export class FormError extends Error {
  constructor(message, fieldErrors = {}) {
    super(message);
    this.fieldErrors = fieldErrors && typeof fieldErrors === 'object' ? fieldErrors : {};
  }
}

/**
 * Sends the form. Resolves with the success message; rejects with a FormError.
 *
 * Understands Elementor's response shape `{ success, data: { message, errors } }` as well as the plain
 * `{ ok }` / `{ error }` shapes of typical form services.
 */
export async function submitContactForm(formElement) {
  if (!endpoint) {
    // eslint-disable-next-line no-console
    console.warn('[ContactForm] VITE_FORM_ENDPOINT is not set - see README ("Contact form").');
    throw new FormError(FORM_MESSAGES.server);
  }

  const data = new FormData(formElement);
  let response;
  try {
    if (mode === 'wordpress') {
      data.append('action', 'elementor_pro_forms_send_form');
      data.append('referrer', window.location.toString());
      response = await fetch(endpoint, { method: 'POST', body: data });
    } else {
      const fields = {};
      data.forEach((value, key) => {
        fields[key.replace(/^form_fields\[(.*)\]$/, '$1')] = value;
      });
      fields.referrer = window.location.toString();
      response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(fields),
      });
    }
  } catch {
    throw new FormError(FORM_MESSAGES.server);
  }

  let payload = null;
  try {
    payload = await response.json();
  } catch {
    /* some endpoints return an empty body */
  }

  const message = payload?.data?.message || payload?.message || payload?.error;
  const fieldErrors = payload?.data?.errors;
  if (!response.ok) throw new FormError(message || FORM_MESSAGES.server, fieldErrors);
  if (payload && (payload.success === false || payload.ok === false)) {
    throw new FormError(message || FORM_MESSAGES.error, fieldErrors);
  }
  return payload?.data?.message || FORM_MESSAGES.success;
}
