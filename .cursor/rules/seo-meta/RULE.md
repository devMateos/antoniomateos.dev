---
description: SEO y meta tags para optimizar el portafolio en buscadores y redes sociales
globs:
  - "app/pages/**"
  - "app/layouts/**"
  - "nuxt.config.ts"
alwaysApply: false
---

# SEO y Meta Tags

## Configuración Global

En `nuxt.config.ts`, definir meta tags base:

```typescript
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: "es" },
      title: "Antonio Mateos | Desarrollador Frontend",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Desarrollador Frontend especializado en Vue.js y Nuxt",
        },
        { name: "author", content: "Antonio Mateos" },
        // Open Graph
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Antonio Mateos" },
        { property: "og:locale", content: "es_ES" },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://antoniomateos.dev" },
      ],
    },
  },
});
```

## Meta Tags por Página

Usar `useHead` o `useSeoMeta` en cada página:

```vue
<script setup lang="ts">
const { t } = useI18n();

// Opción 1: useSeoMeta (recomendada)
useSeoMeta({
  title: () => t("about.title") + " | Antonio Mateos",
  description: () => t("about.description"),
  ogTitle: () => t("about.title"),
  ogDescription: () => t("about.description"),
  ogImage: "https://antoniomateos.dev/og-about.jpg",
  ogUrl: "https://antoniomateos.dev/about",
});

// Opción 2: useHead (más control)
useHead({
  title: t("about.title") + " | Antonio Mateos",
  meta: [{ name: "description", content: t("about.description") }],
});
</script>
```

## Checklist por Página

| Meta Tag         | Requerido      | Ejemplo                      |
| ---------------- | -------------- | ---------------------------- |
| `title`          | ✅ Sí          | `Sobre mí \| Antonio Mateos` |
| `description`    | ✅ Sí          | 150-160 caracteres           |
| `og:title`       | ✅ Sí          | Mismo que title              |
| `og:description` | ✅ Sí          | Mismo que description        |
| `og:image`       | ✅ Sí          | 1200x630px, < 8MB            |
| `og:url`         | ✅ Sí          | URL canónica                 |
| `twitter:card`   | ⚠️ Recomendado | `summary_large_image`        |

## Open Graph Images

Crear imágenes OG para cada página principal:

```
public/
├── og-home.jpg      # 1200x630px - Página principal
├── og-about.jpg     # 1200x630px - Sobre mí
├── og-portfolio.jpg # 1200x630px - Portfolio
└── og-default.jpg   # 1200x630px - Fallback
```

## i18n + SEO

Para páginas multiidioma, incluir `hreflang`:

```vue
<script setup lang="ts">
const { locale } = useI18n();
const localePath = useLocalePath();

useHead({
  link: [
    {
      rel: "alternate",
      hreflang: "es",
      href: "https://antoniomateos.dev" + localePath("/"),
    },
    {
      rel: "alternate",
      hreflang: "en",
      href: "https://antoniomateos.dev" + localePath("/", "en"),
    },
    {
      rel: "alternate",
      hreflang: "x-default",
      href: "https://antoniomateos.dev",
    },
  ],
});
</script>
```

## Structured Data (JSON-LD)

Para un portafolio, usar schema `Person`:

```vue
<script setup lang="ts">
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Antonio Mateos",
        jobTitle: "Frontend Developer",
        url: "https://antoniomateos.dev",
        sameAs: [
          "https://linkedin.com/in/tuLinkedIn",
          "https://github.com/tuGitHub",
        ],
        knowsAbout: ["Vue.js", "Nuxt", "TypeScript", "CSS"],
      }),
    },
  ],
});
</script>
```

## robots.txt

Contenido recomendado para `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://antoniomateos.dev/sitemap.xml
```

## Anti-patrones

| Evitar                                | Usar                    |
| ------------------------------------- | ----------------------- |
| Título duplicado en todas las páginas | Título único por página |
| Descripción > 160 caracteres          | 150-160 caracteres      |
| Imagen OG < 600px                     | Mínimo 1200x630px       |
| Meta tags hardcodeados                | `useSeoMeta` con i18n   |
| Olvidar `og:image`                    | Siempre incluir imagen  |
