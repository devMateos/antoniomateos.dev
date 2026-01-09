<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <article class="project project--pistachio">
    <div class="project__content project__content--left">
      <h2 class="project__title">{{ t("portfolio.projects.pistachio.title") }}</h2>
      <p class="project__description">
        {{ t("portfolio.projects.pistachio.description") }}
      </p>
    </div>
    <div class="project__visual project__visual--right">
      <NuxtImg
        src="/img/pistachiocss_img.png"
        alt="PistachioCSS logo and tagline: Create your design system for CSS"
        class="project__image"
        fill
        loading="lazy"
        decoding="async"
      />
    </div>
  </article>
</template>

<style scoped>
/* Specific styles for Pistachio project */
.project--pistachio {
  --project-visual-height-desktop: 650px;
  background-color: var(--color-bg-alt);
}

.project__visual {
  background: #f8f9fa;
  align-items: center;

  @media (width >= 992px) {
    padding: var(--spacing-huge);
  }
}

.project__image {
  width: 100%;
  height: auto;
  object-fit: contain;
}
</style>


