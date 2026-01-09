<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <article class="project project--shopping">
    <div class="project__visual">
      <NuxtImg
        src="/img/shopping_list_app_img.png"
        alt="Shopping List App mobile mockup showing categories interface with a red background"
        class="project__image"
        fill
        loading="lazy"
        decoding="async"
      />
    </div>
    <div class="project__content project__content--white">
      <h2 class="project__title">{{ t("portfolio.projects.shoppingList.title") }}</h2>
      <p class="project__description">
        {{ t("portfolio.projects.shoppingList.description") }}
      </p>
      <p class="project__link">
        <a
          :href="t('portfolio.projects.shoppingList.prototypeLink')"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ t("portfolio.projects.shoppingList.viewPrototype") }}
        </a>
      </p>
    </div>
  </article>
</template>

<style scoped>
/* Specific styles for Shopping List project */
.project--shopping {
  --project-visual-height-desktop: 650px;
}

.project__visual {
  background: #d77979;
  align-items: end;
  gap: var(--spacing-xl);
  position: relative;

  @media (width >= 992px) {
    padding: var(--spacing-huge);
    padding-bottom: 0;
  }
}

.project__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project__link {
  font-family: var(--font-family-raleway);
  font-size: var(--fs-m);
  font-weight: 600;
  color: var(--color-text);
  text-decoration: none;
  margin-top: var(--spacing-m);
}
</style>

