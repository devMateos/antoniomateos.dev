<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <section class="about-bio">
    <div class="container">
      <div class="about-bio__content">
        <div class="about-bio__text">
          <h1 class="about-bio__title">{{ t("about.title") }}</h1>
          <div class="about-bio__paragraphs">
            <p>{{ t("about.paragraph1") }}</p>
            <p>{{ t("about.paragraph2") }}</p>
            <p>{{ t("about.paragraph3") }}</p>
          </div>
        </div>
        <div class="about-bio__image">
          <div class="about-bio__image-wrapper">
            <NuxtImg
              src="/img/about-portrait.png"
              alt="Antonio Mateos"
              sizes="(max-width: 768px) 320px, 580px"
              quality="80"
              fit="cover"
              class="about-bio__portrait"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-bio {
  padding: var(--spacing-xxl) var(--spacing-l);

  @media (width > 992px) {
    padding: var(--spacing-huge) var(--spacing-xxl);
  }
}

.container {
  max-width: var(--container-max-width);
  margin: 0 auto;
}

.about-bio__content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xxl);

  @media (width > 992px) {
    flex-direction: row;
    align-items: flex-start;
    gap: var(--spacing-huge);
  }
}

.about-bio__text {
  flex: 1;

  @media (width > 992px) {
    max-width: 50%;
  }
}

.about-bio__title {
  font-family: var(--font-family-raleway);
  font-size: var(--fs-xxl);
  font-weight: bold;
  color: var(--color-text);
  margin-bottom: var(--spacing-m);

  @media (width > 992px) {
    margin-bottom: var(--spacing-l);
  }
}

.about-bio__paragraphs {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);

  @media (width > 992px) {
    gap: var(--spacing-l);
  }

  p {
    font-family: var(--font-family-raleway);
    font-size: var(--fs-m);
    line-height: 1.7;
    color: var(--color-text);
  }
}

.about-bio__image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (width > 992px) {
    margin: auto;
    align-items: center;
    justify-content: center;
  }
}

.about-bio__image-wrapper {
  position: relative;
  width: fit-content;
  height: fit-content;
}

.about-bio__portrait {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>

