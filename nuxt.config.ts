import { defineNuxtConfig } from 'nuxt/config';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ['nuxt-vite', '@nuxtjs/tailwindcss', '@pinia/nuxt'],
  typescript: {
    shim: false,
    strict: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import '@/assets/scss/styles.scss';",
        },
      },
    },
    server: {
      hmr: {
        protocol: 'wss',
        clientPort: 443,
      },
      proxy: {
        '/_nuxt': 'http://localhost:24678/_nuxt',
      },
    },
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: ['~/assets/css/tailwind.css'],
});
