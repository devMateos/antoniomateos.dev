// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxtjs/i18n"],

  app: {
    head: {
      htmlAttrs: { lang: "es" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "author", content: "Antonio Mateos" },
        // Open Graph base
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Antonio Mateos" },
        { property: "og:locale", content: "es_ES" },
        { property: "og:locale:alternate", content: "en_US" },
        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
      ],
    },
  },

  css: [
    "~/assets/css/fonts.css",
    "~/assets/css/tokens.css",
    "~/assets/css/reset.css",
    "~/assets/css/typography.css",
    "~/assets/css/portfolio.css",
  ],

  image: {
    formats: ["webp", "avif", "png"],
    quality: 85,
  },

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
      redirectOn: "no prefix",
      alwaysRedirect: false,
      fallbackLocale: "es",
    },
  },
});
