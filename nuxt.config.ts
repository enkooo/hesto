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
    'shadcn-nuxt',
    '@formkit/auto-animate/nuxt',
  ],

  typescript: {
    typeCheck: true,
  },

  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
      },
      {
        code: 'pl',
        name: 'Polski',
      },
    ],
    defaultLocale: 'pl',
    customRoutes: 'config',
    pages: {
      'project-pricing': {
        en: '/project-pricing',
        pl: '/wycena-projektu',
      },
    },
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
})
