import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  // DEV-Tools
  devtools: { enabled: true },

  // Typescript
  typescript: { strict: true },

  // Directories
  srcDir: 'src/',
  dir: {
    layouts: 'vue/layouts',
    pages: 'vue/pages'
  },
  components: {
    dirs: [
      'vue/components',
      { path: 'vue/components/global', global: true }
    ]
  },

  // Styling
  css: [ '/assets/scss/main.scss' ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "./src/assets/scss/_presets.scss" as *;
            @use "./src/assets/scss/_fontCfg.scss" as *;
            `
        }
      }
    }
  },

  // App settings
  app: {
    pageTransition: {},
    head: {
      title: 'RiotGames Login', /* <-- replace `undefined` with your individual site-name */
      script: [
        { src: 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js', type: 'module' },
        { src: 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js', nomodule: true }
      ]
    }
  },

  // Custom elements (enabling `ion-icon`)
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag === 'ion-icon'
    }
  }

});