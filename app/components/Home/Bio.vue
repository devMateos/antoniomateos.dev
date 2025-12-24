<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <section class="bio">
    <div class="container">
      <p class="bio-text">
        <i18n-t keypath="home.bio" tag="span">
          <template #awesome>
            <span class="bio-text__highlight">
              {{ t("home.bioAwesome") }}
              <svg
                class="bio-text__underline"
                viewBox="0 0 539 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2.5 21.3785C174.466 16.0185 346.754 12.6734 518.621 4.17761C524.187 3.90249 540.831 2.7556 535.262 2.56503C515.738 1.89694 464.507 6.52569 450.595 7.94032C425.709 10.4709 400.878 13.5261 376.046 16.5408C354.967 19.0997 250.591 31.2806 222.953 38.7139C161.509 55.2395 349.015 55.7983 412.255 62.4995"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </template>
        </i18n-t>
      </p>
    </div>
  </section>
</template>

<style scoped>
.bio {
  background-color: var(--color-bg);
  padding: var(--spacing-m) var(--spacing-l) var(--spacing-xxl) var(--spacing-l);
  border-radius: 0 0 40px 40px;

  @media (width > 992px) {
    padding: 120px var(--spacing-xxl) 120px var(--spacing-xxl);
    border-radius: 0 0 60px 60px;
  }

  .container {
    max-width: var(--container-max-width);
    margin: 0 auto;
  }

  .bio-text {
    font-family: var(--font-family-raleway);
    font-size: var(--fs-intro);
    font-weight: 600;
    line-height: 1.6;
    text-align: center;
    color: var(--color-text);

    .bio-text__highlight {
      color: var(--color-accent);
      rotate: -2deg;
      position: relative;
      display: inline-block;
    }

    .bio-text__underline {
      position: absolute;
      bottom: -70%;
      left: 0;
      height: 100%;
      width: 100%;
      overflow: visible;
      pointer-events: none;
    }
  }
}
</style>
