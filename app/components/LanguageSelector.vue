<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div :class="['language-selector', `language-selector--${variant}`]">
    <button
      v-for="lang in languages"
      :key="lang.code"
      type="button"
      :class="['language-btn', { active: locale === lang.code }]"
      :aria-label="lang.ariaLabel"
      @click="$emit('change', lang.code)"
    >
      {{ lang.code.toUpperCase() }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: "desktop",
    validator: (value) => ["desktop", "mobile"].includes(value),
  },
});

defineEmits(["change"]);

const { locale } = useI18n();

const languages = [
  { code: "en", ariaLabel: "Switch to English" },
  { code: "es", ariaLabel: "Cambiar a Español" },
];
</script>

<style scoped>
.language-selector {
  display: flex;
  gap: var(--spacing-s);

  &--mobile {
    margin-top: var(--spacing-xl);

    .language-btn {
      flex: 1;
    }
  }
}

.language-btn {
  font-family: var(--font-family-raleway);
  font-size: 1.6rem;
  font-weight: 700;
  padding: var(--spacing-s);
  border: none;
  background-color: transparent;
  color: var(--color-text);
  cursor: pointer;
  transition: background-color var(--transition);
  border-radius: var(--border-radius);

  &.active {
    background-color: var(--color-brown);
    color: var(--color-text);
  }
}
</style>

