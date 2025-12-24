<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

useSeoMeta({
  title: () => t("seo.portfolio.title"),
  description: () => t("seo.portfolio.description"),
  ogTitle: () => t("seo.portfolio.title"),
  ogDescription: () => t("seo.portfolio.description"),
  // TODO: Añadir imagen OG cuando esté disponible
  // ogImage: "https://antoniomateos.dev/og-portfolio.jpg",
  ogUrl: "https://antoniomateos.dev/portfolio",
});
</script>

<template>
  <section class="portfolio">
    <div class="container">
      <h1>{{ t("portfolio.title") }}</h1>
    </div>
  </section>
</template>

<style scoped>
.portfolio {
  padding: var(--spacing-xxl) var(--spacing-l);

  @media (width > 992px) {
    padding: var(--spacing-huge) var(--spacing-xxl);
  }

  .container {
    max-width: var(--container-max-width);
    margin: 0 auto;
  }

  h1 {
    font-family: var(--font-family-caprasimo);
    font-size: var(--fs-xxl);
    color: var(--color-text);
  }
}
</style>
