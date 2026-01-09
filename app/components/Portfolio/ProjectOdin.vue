<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <article class="project project--odin">
    <div class="project__visual">
      <NuxtImg
        src="/img/odins_logo.png"
        alt="Odin Solutions company logo"
        class="project__image"
        fill
        decoding="async"
      />

    </div>
    <div class="project__content">
      <h2 class="project__title">{{ t("portfolio.projects.odin.title") }}</h2>
      <div class="project__description project__description--multi">
        <p>
          <i18n-t keypath="portfolio.projects.odin.description1" tag="span">
            <template #wiinspire>
              <strong>{{ t("portfolio.projects.odin.wiinspire") }}</strong>
            </template>
            <template #wicube>
              <strong>{{ t("portfolio.projects.odin.wicube") }}</strong>
            </template>
            <template #wikeeper>
              <strong>{{ t("portfolio.projects.odin.wikeeper") }}</strong>
            </template>
          </i18n-t>
        </p>
        <p>{{ t("portfolio.projects.odin.description2") }}</p>
      </div>
    </div>
  </article>
</template>

<style scoped>
/* Specific styles for Odin project */
.project--odin {
  --project-visual-height-desktop: 550px;
}

.project__visual {
  background: #f7f7f7;
  align-items: center;

  @media (width >= 992px) {
    padding: var(--spacing-huge);
  }
}

.project__image {
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: contain;

  @media (width >= 992px) {
    max-width: 400px;
  }
}
</style>

