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
      viewBox="0 0 211 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M153.131 59.6355C148.493 62.2637 141.075 61.9478 136.007 61.9478C116.802 61.9478 97.2727 62.3728 78.2436 59.4392C69.7421 58.1285 61.0797 57.12 52.6557 55.3818C45.5433 53.9141 38.4979 51.8115 31.6269 49.4701C28.2621 48.3235 24.0724 47.4128 21.4616 44.8019C19.4147 42.755 18.487 39.4243 18.4512 36.5998C18.3687 30.0807 19.5198 24.3878 24.8646 19.9339C32.0629 13.9353 41.7183 11.376 50.4961 8.7869C67.0569 3.90206 85.2755 2.52109 102.479 2.32994C129.573 2.0289 157.221 0.880759 183.976 5.842C192.511 7.42461 202.061 10.6318 205.092 19.5849C207.067 25.4161 205.159 32.873 200.337 36.7744C193.547 42.2674 183.697 44.1547 175.534 46.6561C170.415 48.225 165.155 49.2402 160.046 50.8226C155.505 52.2291 151.069 53.3829 146.369 54.1383C133.335 56.2332 119.911 55.1964 106.776 54.7273C93.4802 54.2525 80.3994 54.6878 67.1838 52.7641C56.819 51.2553 46.6471 49.7848 36.5569 46.8961C28.6147 44.6223 18.8938 43.0411 11.8634 38.4322C5.90544 34.5265 -3.01031 25.4146 5.51548 19.1704C9.97659 15.9031 15.9379 14.6016 21.1562 13.1279C33.5197 9.63635 46.0721 8.68096 58.7636 7.06359C71.7756 5.40539 84.6682 4.66039 97.7235 3.61697C105.868 2.96607 113.852 2.30813 122.024 2.30813C136.94 2.30813 151.587 4.63621 166.394 6.23466C173.738 7.02746 181.097 7.93283 188.296 9.63765C193.559 10.8844 199.051 12.3304 203.216 15.9637C206.496 18.8249 207.856 22.7794 208.626 26.9798C209.066 29.3763 209.217 32.4661 208.583 34.8329C207.472 38.9775 201.64 42.3337 198.265 44.3002C192.95 47.3963 186.782 48.7659 180.857 50.1682C172.601 52.1221 164.268 52.9814 155.858 53.9638C139.732 55.8478 123.737 57.9065 107.474 57.6504C95.1151 57.4558 82.8966 54.5193 70.5432 53.833C61.5111 53.3312 52.5521 53.0619 43.5374 52.2623C36.19 51.6107 28.7676 51.6482 21.4616 50.6045C18.063 50.119 14.4077 50.1634 11.0781 49.3393"
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
    width: clamp(15rem, 12vw, 18rem);
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
