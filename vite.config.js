import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// `npm run build`         -> normal site build (clean URLs such as /about, needs the SPA rewrite on the host)
// `npm run build:preview` -> relative, hash-routed build (/#/about) that runs from any folder or file host
export default defineConfig(({ mode }) => ({
  base: mode === 'preview' ? './' : '/',
  plugins: [react()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
}));
