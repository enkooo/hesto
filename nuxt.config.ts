// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxtjs/i18n',
  ],

  typescript: {
    typeCheck: true,
  },

  i18n: {
    locales: ['en', 'pl'],
    defaultLocale: 'pl',
  },
})
