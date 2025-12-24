<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

useSeoMeta({
  title: () => t("seo.about.title"),
  description: () => t("seo.about.description"),
  ogTitle: () => t("seo.about.title"),
  ogDescription: () => t("seo.about.description"),
  // TODO: Añadir imagen OG cuando esté disponible
  // ogImage: "https://antoniomateos.dev/og-about.jpg",
  ogUrl: "https://antoniomateos.dev/about",
});
</script>

<template>
  <section class="about">
    <div class="container">
      <h1>{{ t("about.title") }}</h1>
    </div>
  </section>
</template>

<style scoped>
.about {
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
