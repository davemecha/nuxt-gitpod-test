import { defineNuxtConfig } from 'nuxt/config';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ['nuxt-vite', '@nuxtjs/tailwindcss', '@pinia/nuxt'],
  typescript: {
    shim: false,
    strict: true,
  },
  // proxy: {
  //   '/hmr': {
  //     target: 'http://localhost:1337/',
  //     changeOrigin: true,
  //   //   secure: false,
  //     ws: true,
  //   },
  // },
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
        // host: '0.0.0.0',
        port: 1337,
        protocol: 'wss',
        clientPort: 443,
      },
      // proxy: {
      //   '/_nuxt': {
      //     target: 'http://localhost:1337',
      //     changeOrigin: true,
      //     // secure: false,
      //     ws: true,
      //   },
      // },
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
