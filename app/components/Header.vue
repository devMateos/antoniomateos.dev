<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">{{ $t("nav.home") }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">{{ $t("nav.about") }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/portfolio">{{ $t("nav.portfolio") }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="language-selector">
      <button
        type="button"
        :class="{ active: locale === 'en' }"
        @click="switchLanguage('en')"
      >
        EN
      </button>
      <button
        type="button"
        :class="{ active: locale === 'es' }"
        @click="switchLanguage('es')"
      >
        ES
      </button>
    </div>
  </header>
</template>

<script setup>
const { locale, setLocale } = useI18n();

const switchLocalePath = useSwitchLocalePath();

const switchLanguage = (lang) => {
  setLocale(lang);
  navigateTo(switchLocalePath(lang));
};
</script>
