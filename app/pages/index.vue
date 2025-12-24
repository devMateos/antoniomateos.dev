<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: () => t("seo.home.title"),
  description: () => t("seo.home.description"),
  ogTitle: () => t("seo.home.title"),
  ogDescription: () => t("seo.home.description"),
  // TODO: Añadir imagen OG cuando esté disponible
  // ogImage: "https://antoniomateos.dev/og-home.jpg",
  ogUrl: "https://antoniomateos.dev",
});
</script>

<template>
  <HomeHero />
  <HomeBio />
  <HomeSkills />
  <HomeProjects />
</template>
