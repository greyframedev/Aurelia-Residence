import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    open: false,
    host: true
  },
  assetsInclude: ['**/*.mp4', '**/*.jpg', '**/*.webp'],
  build: {
    assetsInlineLimit: 0,
    target: 'esnext'
  }
});
