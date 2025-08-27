// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Configuración para GitHub Pages y dominio personalizado
  site: 'https://ismaelhda.dev', // Tu dominio personalizado
  // base: '/Portafolio', // Comentado para dominio personalizado
  output: 'static',
  build: {
    assets: '_astro'
  }
});
