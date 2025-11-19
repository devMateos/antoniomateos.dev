<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <transition name="menu">
    <div v-if="isOpen" class="mobile-menu">
      <nav class="mobile-nav">
        <ul class="mobile-nav-list">
          <li class="mobile-nav-item">
            <NuxtLink
              :to="localePath('/portfolio')"
              class="mobile-nav-link"
              @click="handleClose"
            >
              {{ $t("nav.portfolio") }}
            </NuxtLink>
          </li>
          <li class="mobile-nav-item">
            <a
              href="/cv.pdf"
              class="mobile-nav-link"
              download
              @click="handleClose"
            >
              {{ $t("nav.resume") }}
            </a>
          </li>
          <li class="mobile-nav-item">
            <NuxtLink
              :to="localePath('/about')"
              class="mobile-nav-link"
              @click="handleClose"
            >
              {{ $t("nav.about") }}
            </NuxtLink>
          </li>
        </ul>

        <LanguageSelector variant="mobile" @change="handleLanguageChange" />
      </nav>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["close", "language-change"]);

const localePath = useLocalePath();

const handleClose = () => {
  emit("close");
};

const handleLanguageChange = (lang) => {
  emit("language-change", lang);
};
</script>

<style scoped>
.mobile-menu {
  position: fixed;
  top: 80px;
  left: var(--spacing-l);
  right: var(--spacing-l);
  background-color: var(--color-bg);
  border: var(--border-width-thick) solid var(--color-border);
  border-radius: var(--border-radius-l);
  padding: var(--spacing-xl) var(--spacing-l);
  box-shadow: var(--shadow-lg);
  z-index: var(--z-dropdown);

  .mobile-nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .mobile-nav-item {
    margin-bottom: var(--spacing-m);
  }

  .mobile-nav-link {
    font-family: var(--font-family-raleway);
    font-size: var(--fs-l);
    font-weight: 700;
    color: var(--color-text);
    text-decoration: none;
    display: block;
    transition: color var(--transition);

    &:hover {
      color: var(--color-accent);
    }
  }
}

/* Menu Transition */
.menu-enter-active,
.menu-leave-active {
  transition: all var(--transition-slow);
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(calc(var(--spacing-l) * -1));
}
</style>
