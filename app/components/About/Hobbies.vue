<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <section class="hobbies">
    <div class="container">
      <h2 class="hobbies__title">{{ t("about.hobbiesTitle") }}</h2>

      <div class="hobbies__grid">
        <AboutPolaroidCard
          :text="t('about.hobby1')"
          :rotation="-3"
        >
          <video
            src="/video/hobby-bowling.mp4"
            autoplay
            loop
            muted
            playsinline
            preload="none"
          />
        </AboutPolaroidCard>

        <AboutPolaroidCard
          :text="t('about.hobby2')"
          :rotation="2"
        >
          <video
            src="/video/hobby-cat.mp4"
            autoplay
            loop
            muted
            playsinline
            preload="none"
          />
        </AboutPolaroidCard>

        <AboutPolaroidCard
          :text="t('about.hobby3')"
          :rotation="-2"
        >
          <video
            src="/video/hobby-videogames.mp4"
            autoplay
            loop
            muted
            playsinline
            preload="none"
          />
        </AboutPolaroidCard>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hobbies {
  padding: var(--spacing-xxl) var(--spacing-l);

  @media (width >= 992px) {
    padding: var(--spacing-huge) var(--spacing-xxl);
  }
}

.container {
  max-width: var(--container-max-width);
  margin: 0 auto;
}

.hobbies__title {
  font-family: var(--font-family-raleway);
  font-size: var(--fs-xxl);
  font-weight: bold;
  color: var(--color-text);
  margin-bottom: var(--spacing-xxl);

  @media (width >= 992px) {
    margin-bottom: var(--spacing-huge);
  }
}

.hobbies__grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xxxl);
  padding: var(--spacing-xl) 0;

  @media (width >= 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;
    gap: var(--spacing-xl);
  }

  @media (width >= 992px) {
    gap: var(--spacing-xxl);
  }
}

.hobbies__grid > * {
  width: 100%;
  max-width: 80vw;

  @media (width >= 992px) {
    max-width: 400px;
  }
}
</style>

