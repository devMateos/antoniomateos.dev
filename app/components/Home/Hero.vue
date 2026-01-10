<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="content">
        <h1 class="heading">
          {{ t("home.greeting") }} <br />
          {{ t("home.name") }}
        </h1>

        <p class="subtitle">
          <i18n-t keypath="home.subtitle" tag="span">
            <template #frontend>
              <span class="accent">{{ t("home.frontend") }}</span>
            </template>
            <template #designs>
              <span class="accent">{{ t("home.designs") }}</span>
            </template>
          </i18n-t>
        </p>

        <!-- Location -->
        <div class="location">
          <span class="location-line">
            <IconLemon class="location-icon" />
            {{ t("home.locationBased") }} {{ t("home.locationCity") }}
          </span>
          <span class="location-line">{{ t("home.locationCountry") }}</span>
        </div>
      </div>
    </div>
    <HomeBrushSticker class="sticker brush-sticker" />
    <HomeMouseSticker class="sticker mouse-sticker" />
    <HomeLaptopSticker class="sticker laptop-sticker" />
    <HomePageSticker class="sticker page-sticker" />
    <HomeWheelSticker class="wheel-sticker" />
  </section>
</template>

<style scoped>
.hero {
  --header-height: 72px;

  background-color: var(--color-bg);
  min-height: calc(100dvh - var(--header-height));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-l);
  position: relative;

  @media (width > 992px) {
    --header-height: 112px;
    padding: var(--spacing-xxl);
  }

  *:not(.sticker) {
    z-index: var(--z-base);
  }

  .container {
    max-width: var(--container-max-width);
    margin: 0 auto;
    margin-bottom: calc(var(--header-height) / 2);
    width: fit-content;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);

    @media (width > 992px) {
      gap: var(--spacing-s);
    }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .heading {
    display: flex;
    flex-direction: column;
    font-size: var(--fs-hero);
    font-family: var(--font-family-caprasimo);
    text-align: left;
    line-height: 1;
    color: var(--color-text);
  }

  .subtitle {
    font-family: var(--font-family-raleway);
    font-size: var(--fs-hero-sub);
    font-weight: 600;
    line-height: 1.3;
    color: var(--color-text);

    .accent {
      color: var(--color-accent);
    }
  }

  .location {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-family: var(--font-family-raleway);
    font-size: var(--fs-hero-loc);
    font-style: italic;
    font-weight: 500;
    color: var(--color-text);
    line-height: 1.4;

    @media (width > 768px) {
      align-items: flex-end;
    }
  }

  .location-line {
    display: flex;
    align-items: center;
  }

  .location-icon {
    width: clamp(2.2rem, 3dvw, 4rem);
    height: clamp(2.2rem, 3dvw, 4rem);
    flex-shrink: 0;
  }

  .sticker {
    --sticker-scale: clamp(0.7, calc(calc(110dvw / 1000px)), 1);
    scale: var(--sticker-scale);
    position: absolute;
    animation: float 3s ease-in-out infinite;
  }
  .brush-sticker {
    left: calc(-1 * calc(2rem * var(--sticker-scale)));
    top: 18%;
    transform-origin: left center;
    animation-delay: 0s;
  }
  .mouse-sticker {
    left: 81%;
    top: 20%;
    transform-origin: left center;
    animation-delay: 0.75s;
  }
  .laptop-sticker {
    right: calc(-1 * calc(1.6rem * var(--sticker-scale)));
    top: 68%;
    transform-origin: right center;
    rotate: -17.65deg;
    animation: float 3s ease-in-out infinite;
    animation-delay: 1.5s;
  }
  .page-sticker {
    left: 7%;
    top: 75%;
    transform-origin: left center;
    rotate: -13deg;
    animation: float 3s ease-in-out infinite;
    animation-delay: 2.25s;
  }
  .wheel-sticker {
    position: absolute;
    right: 12%;
    top: 80%;
    transform-origin: left center;
    animation: float-wheel 3s ease-in-out infinite;
    animation-delay: 2.25s;
    display: none;

    @media (width > 992px) {
      display: block;
    }
  }
}
</style>

<style>
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

</style>
