// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Configuración para GitHub Pages y dominio personalizado
  site: 'https://portafolio-ismael.com', // Cambiar por tu dominio de Porkbun
  // base: '/Portafolio', // Comentar esta línea para dominio personalizado
  output: 'static',
  build: {
    assets: '_astro'
  }
});
