<script setup lang="ts">
const { t } = useI18n();

const skills = [
  {
    key: "uiux",
    color: "pink",
  },
  {
    key: "responsive",
    color: "green",
  },
  {
    key: "designSystems",
    color: "brown",
  },
  {
    key: "reactive",
    color: "blue",
  },
];
</script>

<template>
  <section class="skills">
    <div class="container">
      <h2 class="skills__title">{{ t("skills.title") }}</h2>
      <div class="skills__grid">
        <HomeWindowCard
          class="skills__card"
          v-for="skill in skills"
          :key="skill.key"
          :color="skill.color"
        >
          <h3 class="skills__card-title">
            {{ t(`skills.${skill.key}.title`) }}
          </h3>
          <p class="skills__card-description">
            <i18n-t :keypath="`skills.${skill.key}.description`" tag="span">
              <template #highlight1>
                <strong>{{ t(`skills.${skill.key}.highlight1`) }}</strong>
              </template>
              <template #highlight2>
                <strong>{{ t(`skills.${skill.key}.highlight2`) }}</strong>
              </template>
              <template #highlight3>
                <strong>{{ t(`skills.${skill.key}.highlight3`) }}</strong>
              </template>
              <template #highlight4>
                <strong>{{ t(`skills.${skill.key}.highlight4`) }}</strong>
              </template>
            </i18n-t>
          </p>
        </HomeWindowCard>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding: var(--spacing-xxl) var(--spacing-l);

  @media (width > 992px) {
    padding: var(--spacing-huge) var(--spacing-xxl);
  }

  .container {
    max-width: var(--container-max-width);
    margin: 0 auto;
  }

  .skills__title {
    font-family: var(--font-family-raleway);
    font-size: var(--fs-xl);
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: var(--spacing-xl);
  }

  .skills__grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: var(--spacing-l);

    @media (width > 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: var(--spacing-xl);
    }

    @media (width > 992px) {
      height: clamp(800px, 90dvh, 1000px);
      position: relative;

      .skills__card {
        position: absolute;
        max-width: clamp(350px, 40dvw, 650px);
        min-height: 300px;
        height: auto;
        cursor: url(~/assets/svg/grab-cursor.svg), grab;

        &:active {
          cursor: url(~/assets/svg/grabbing-cursor.svg), grabbing;
        }

        &:nth-child(1) {
          left: var(--spacing-xxl);
          top: var(--spacing-xxl);
          rotate: -2.6deg;
        }
        &:nth-child(2) {
          right: var(--spacing-xxl);
          top: var(--spacing-xxl);
          rotate: 4deg;
        }
        &:nth-child(3) {
          left: var(--spacing-xxl);
          bottom: var(--spacing-xxl);
          rotate: -4.72deg;
        }
        &:nth-child(4) {
          right: var(--spacing-xxl);
          bottom: var(--spacing-xxl);
          rotate: 2.53deg;
        }
      }
    }
  }

  .skills__card-title {
    font-family: var(--font-family-raleway);
    font-size: var(--fs-l);
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: var(--spacing-m);
  }

  .skills__card-description {
    font-family: var(--font-family-raleway);
    font-size: var(--fs-m);
    font-weight: 400;
    color: var(--color-text);

    :deep(strong) {
      font-weight: 700;
      color: var(--color-text);
    }
  }
}
</style>
