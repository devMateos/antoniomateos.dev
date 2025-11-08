// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxtjs/i18n"],

  css: [
    "~/assets/css/fonts.css",
    "~/assets/css/tokens.css",
    "~/assets/css/reset.css",
    "~/assets/css/typography.css",
  ],

  i18n: {
    locales: [
      {
        code: "es",
        iso: "es-ES",
        file: "es.json",
        name: "Español",
      },
      {
        code: "en",
        iso: "en-US",
        file: "en.json",
        name: "English",
      },
    ],
    lazy: true,

    defaultLocale: "es",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      alwaysRedirect: false,
      fallbackLocale: "es",
    },
  },
});
