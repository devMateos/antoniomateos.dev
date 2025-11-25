<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="header">
    <div class="container">
      <!-- Logo -->
      <NuxtLink :to="localePath('/')" class="logo">Antonio Mateos</NuxtLink>

      <div class="desktop-container">
        <!-- Desktop Navigation -->
        <nav class="nav-desktop">
          <ul class="nav-list">
            <li class="nav-item">
              <NavButton1 :to="localePath('/portfolio')">
                {{ $t("nav.portfolio") }}
              </NavButton1>
            </li>
            <li class="nav-item">
              <NavButton2 href="" download>
                {{ $t("nav.resume") }}
              </NavButton2>
            </li>
            <li class="nav-item">
              <NavButton3 :to="localePath('/about')">
                {{ $t("nav.about") }}
              </NavButton3>
            </li>
          </ul>
        </nav>

        <!-- Language Selector Desktop -->
        <LanguageSelector
          class="language-selector-desktop"
          @change="switchLanguage"
        />
      </div>

      <!-- Mobile Menu Button -->
      <button
        type="button"
        class="menu-toggle"
        :class="{ 'menu-toggle--active': isMenuOpen }"
        aria-label="Toggle menu"
        :aria-expanded="isMenuOpen"
        @click="toggleMenu"
      >
        <div class="hamburger-line hamburger-line--1" />
        <div class="hamburger-line hamburger-line--2" />
        <div class="hamburger-line hamburger-line--3" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <MobileMenu
      :is-open="isMenuOpen"
      @close="closeMenu"
      @language-change="switchLanguage"
    />
  </header>
</template>

<script setup lang="ts">
const { setLocale } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const isMenuOpen = ref(false);
// eslint-disable-next-line no-undef
const { lock, unlock } = useBodyScroll();

const switchLanguage = (lang: string) => {
  setLocale(lang);
  navigateTo(switchLocalePath(lang));
  closeMenu();
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  isMenuOpen.value ? lock() : unlock();
};

const closeMenu = () => {
  isMenuOpen.value = false;
  unlock();
};

// Close menu on escape key
onMounted(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape" && isMenuOpen.value) {
      closeMenu();
    }
  };
  window.addEventListener("keydown", handleEscape);

  onUnmounted(() => {
    window.removeEventListener("keydown", handleEscape);
  });
});
</script>

<style scoped>
.header {
  background-color: var(--color-bg);
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  padding: var(--spacing-m) var(--spacing-xl);

  @media (width > 992px) {
    padding: var(--spacing-l) var(--spacing-xxl);
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--container-max-width);
    margin: 0 auto;
  }

  .logo {
    font-family: var(--font-family-caprasimo);
    font-size: var(--fs-xl);
    text-decoration: none;
    transition: transform var(--transition);

    &:hover {
      transform: scale(1.02);
    }
  }

  .desktop-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (width > 992px) {
      gap: var(--spacing-xxl);
    }
  }

  .nav-desktop {
    display: none;

    @media (width > 992px) {
      display: flex;
      align-items: center;
      gap: var(--spacing-xxl);
    }

    & ul {
      height: fit-content;
    }
  }

  .nav-list {
    display: flex;
    gap: var(--spacing-s);
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .language-selector-desktop {
    display: none;

    @media (width > 992px) {
      display: flex;
    }
  }

  .menu-toggle {
    background: none;
    border: none;
    padding: var(--spacing-s);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    width: var(--spacing-xxl);
    height: var(--spacing-xxl);
    justify-content: center;
    position: relative;

    @media (width > 992px) {
      display: none;
    }

    @media (width > 1024px) {
      display: none;
    }
  }

  .hamburger-line {
    width: 100%;
    height: var(--border-width-thick);
    background: var(--color-text);
    border-radius: var(--border-radius-s);
    transition: all var(--transition-slow);
    transform-origin: center;
  }

  .menu-toggle--active {
    .hamburger-line--1 {
      transform: translateY(calc(var(--spacing-xs) + var(--border-width-thick)))
        rotate(45deg);
    }

    .hamburger-line--2 {
      opacity: 0;
      transform: scale(0);
    }

    .hamburger-line--3 {
      transform: translateY(
          calc(-1 * (var(--spacing-xs) + var(--border-width-thick)))
        )
        rotate(-45deg);
    }
  }
}
</style>
