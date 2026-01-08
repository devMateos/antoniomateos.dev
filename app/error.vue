<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{
  error: NuxtError;
}>();

const { t } = useI18n();
const localePath = useLocalePath();

const is404 = computed(() => props.error.statusCode === 404);
</script>

<template>
  <main class="error-page">
    <h1 class="error-page__title">
      {{ is404 ? t("error.404.title") : props.error.statusCode }}
    </h1>

    <AboutPolaroidCard
      v-if="is404"
      class="error-page__polaroid"
      text=""
      :rotation="2"
    >
      <template #default>
        <img
          src="/img/404-cat.png"
          :alt="t('error.404.heading')"
          class="error-page__cat-image"
        />
      </template>
      <template #text>
        <s class="strikethrough">{{ t("error.404.polaroidStrikethrough") }}</s>&nbsp;{{ t("error.404.polaroidText") }}
      </template>
    </AboutPolaroidCard>

    <p v-if="!is404" class="error-page__message">
      {{ props.error.message || t("error.404.heading") }}
    </p>

    <NuxtLink
      :to="localePath('/')"
      class="error-page__button"
    >
      {{ t("error.404.backHome") }}
    </NuxtLink>
  </main>
</template>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100dvh;
  padding: var(--spacing-l);
  background-color: var(--color-bg);
  gap: var(--spacing-xxl);
}

.error-page__title {
  font-family: var(--font-family-raleway);
  font-size: clamp(20rem, min(30dvh, 25dvw), 37rem);
  font-weight: 700;
  color: var(--color-brown);
  line-height: 1;
  margin-top: -2rem;
}

.error-page__polaroid {
  max-width: 280px;

  @media (width >= 768px) {
    max-width: 340px;
  }
}

.error-page__polaroid :deep(.strikethrough) {
  position: relative;
  display: inline-block;
  text-decoration: none;
  
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 55%;
    width: 100%;
    height: 2px;
    background-color: currentColor;
  }
}

.error-page__cat-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.error-page__message {
  font-family: var(--font-family-raleway);
  font-size: var(--fs-m);
  color: var(--color-text);
  text-align: center;
  max-width: 40ch;
}

.error-page__button {
  display: inline-block;
  font-family: var(--font-family-raleway);
  font-size: var(--fs-l);
  font-weight: 700;
  color: var(--color-text);
  background-color: var(--color-brown);
  border: var(--border-width) solid var(--color-border);
  border-radius: var(--border-radius-s);
  padding: var(--spacing-s) var(--spacing-l);
  text-decoration: none;
  cursor: pointer;
  transition: 
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
  box-shadow: var(--shadow);

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: var(--shadow-md);
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: none;
  }
}
</style>

