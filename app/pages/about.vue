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

onMounted(() => {
  document.body.classList.add("page-about");
});

onUnmounted(() => {
  document.body.classList.remove("page-about");
});
</script>

<template>
  <AboutBio />
  <AboutHobbies />
  <AboutExperience />
</template>

<style>
body.page-about {
  background-color: var(--color-bg);
}
</style>
