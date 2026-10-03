/**
 * Builds the URL of a photograph in public/img (produced by tools/prepare-photos.py).
 * Uses Vite's BASE_URL so the site works both at the domain root ("/") and from a sub-folder
 * or relative build ("./").
 */
export const img = (file) => `${import.meta.env.BASE_URL}img/${file}`;
