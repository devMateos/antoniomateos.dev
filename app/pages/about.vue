<script setup lang="ts">
const { t } = useI18n();

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
  <div class="about-page">
    <AboutBio />
    <AboutHobbies />
    <AboutExperience />
  </div>
</template>

<style>
</style>
