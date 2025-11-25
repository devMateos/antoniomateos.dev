<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <component
    :is="componentType"
    :to="to"
    :href="href"
    :download="download"
    class="nav-button"
    :class="{ 'nav-button--active': isActive }"
  >
    <svg
      class="nav-button__svg"
      viewBox="0 0 138 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.43211 3.91952C37.0643 4.41032 164.715 1.03069 130.107 2.27837C97.6558 3.44828 65.8288 9.01252 33.5495 10.8293C7.68925 12.2848 85.3643 11.8982 111.276 11.8982C131.509 11.8982 70.8103 11.8982 50.5773 11.8982C36.2029 11.8982 -6.4804 10.8524 7.50706 13.7984C15.9411 15.5747 25.7801 14.9584 34.2841 15.0454C54.3778 15.2508 74.4875 15.163 94.5824 15.1048C103.013 15.0803 114.019 16.3003 122.294 14.0359C130.293 11.8472 105.526 13.4641 97.1867 14.0953C75.0286 15.7722 52.911 17.9278 30.745 19.499C21.7515 20.1365 18.5104 20.2571 10.1781 20.4491C9.12598 20.4733 3.8009 19.9778 2.43211 21.0429C0.989243 22.1656 3.5726 22.5764 4.16828 22.5868C13.3304 22.7466 22.517 22.5868 31.6798 22.5868C54.4519 22.5868 77.3619 22.9824 100.058 21.0429C109.357 20.2483 118.666 18.3113 128.037 18.3113C141.913 18.3113 100.285 18.8553 86.4358 19.6177C69.0152 20.5767 51.8659 23.3985 34.4844 24.487C33.9005 24.5236 18.645 25.6364 25.0023 25.7934C43.3573 26.2468 61.8007 25.7934 80.1589 25.7934C91.6888 25.7934 103.219 25.7934 114.749 25.7934C117.103 25.7934 125.465 25.7934 116.952 25.7934C80.3989 25.7934 43.1642 23.8506 6.97285 29"
        stroke="var(--color-brown)"
        stroke-width="4"
        stroke-linecap="round"
      />
    </svg>
    <span class="nav-button__text">
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  to?: string | null;
  href?: string | null;
  download?: boolean;
  isActive?: boolean;
}>();

const componentType = computed(() => {
  if (props.to) return resolveComponent("NuxtLink");
  return "a";
});
</script>

<style scoped>
.nav-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  min-width: 150px;
  height: 64px;
  font-family: var(--font-family-raleway);
  font-size: var(--fs-m);
  font-weight: 700;
  color: var(--color-text);
  text-decoration: none;
  cursor: pointer;
  transition: color var(--transition);
  padding: 0 var(--spacing-m);

  @media (width > 768px) {
    width: auto;
    min-width: 180px;
  }

  &:hover {
    .nav-button__svg path {
      stroke-dashoffset: 0;
    }
  }

  .nav-button__svg {
    position: absolute;
    z-index: -1;
    pointer-events: none;
    width: clamp(11.5rem, 10vw, 13.8rem);
    height: auto;

    & path {
      transition: all 800ms ease-in-out;
      stroke-dasharray: 1200px;
      stroke-dashoffset: 1200px;
    }
  }

  .nav-button__text {
    position: relative;
    z-index: 1;
  }
}
</style>
