<script setup lang="ts">
interface Props {
  color?: "pink" | "green" | "brown" | "blue" | string;
}

withDefaults(defineProps<Props>(), {
  color: "pink",
});
</script>

<template>
  <article class="window-card" :class="`${color}`">
    <div class="window-card__header">
      <span class="window-card__dot"></span>
      <span class="window-card__dot"></span>
      <span class="window-card__dot"></span>
    </div>
    <div class="window-card__content">
      <slot />
    </div>
  </article>
</template>

<style scoped>
.window-card {
  background-color: var(--color-bg-alt);
  border: var(--border-width) solid var(--color-border);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  overflow: hidden;

  .window-card__header {
    display: flex;
    align-items: center;
    gap: var(--spacing-s);
    padding: var(--spacing-s) var(--spacing-m);
    border-bottom: var(--border-width) solid var(--color-border);
  }

  &.pink .window-card__header {
    background-color: var(--color-pink);
  }

  &.green .window-card__header {
    background-color: var(--color-green);
  }

  &.brown .window-card__header {
    background-color: var(--color-brown);
  }

  &.blue .window-card__header {
    background-color: var(--color-blue);
  }

  .window-card__dot {
    width: 1.2rem;
    height: 1.2rem;
    background-color: var(--color-border);
    border-radius: var(--border-radius-full);
  }

  .window-card__content {
    padding: var(--spacing-l) var(--spacing-m);
    background-color: var(--color-bg-alt);
    border-radius: 0 0 var(--border-radius-l) var(--border-radius-l);
  }
}
</style>
