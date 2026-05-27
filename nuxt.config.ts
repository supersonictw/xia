// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s - Web-Tech-TW',
      title: 'Xia',
    },
  },

  compatibilityDate: '2025-07-15',

  devtools: {enabled: true},
  nitro: {preset: 'bun'},

  colorMode: {preference: 'light'},
  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxt/test-utils',
  ],

  runtimeConfig: {
    public: {
      homeInteHost: 'https://web-tech.tw',
      saraInteHost: 'https://web-tech.tw/sara',
      saraTokenName: 'unified_token',
    },
  },
});
