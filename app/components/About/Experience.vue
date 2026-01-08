<script setup lang="ts">
const { t } = useI18n();

interface DescriptionHighlights {
  [key: string]: string[];
}

const experiences = [
  {
    key: "odin",
    descriptions: [
      { key: "desc1", highlights: ["h1", "h2", "h3"] },
      { key: "desc2", highlights: ["h1", "h2"] },
      { key: "desc3", highlights: ["h1"] },
      { key: "desc4", highlights: ["h1", "h2", "h3"] },
    ],
  },
  {
    key: "cozar",
    descriptions: [{ key: "desc1", highlights: ["h1", "h2", "h3", "h4"] }],
  },
];
</script>

<template>
  <section class="experience">
    <div class="container">
      <h2 class="experience__title">{{ t("about.experience.title") }}</h2>

      <div class="experience__list">
        <article
          v-for="exp in experiences"
          :key="exp.key"
          class="experience__item"
        >
          <div class="experience__header">
            <h3 class="experience__company">
              {{ t(`about.experience.${exp.key}.company`) }}
            </h3>
            <span class="experience__period">
              {{ t(`about.experience.${exp.key}.period`) }}
            </span>
          </div>

          <div class="experience__content">
            <h4 class="experience__role">
              {{ t(`about.experience.${exp.key}.role`) }}
            </h4>
            <div class="experience__descriptions">
              <p v-for="desc in exp.descriptions" :key="desc.key">
                <i18n-t
                  :keypath="`about.experience.${exp.key}.${desc.key}`"
                  tag="span"
                >
                  <template v-for="h in desc.highlights" :key="h" #[h]>
                    <strong>{{
                      t(`about.experience.${exp.key}.${desc.key}_${h}`)
                    }}</strong>
                  </template>
                </i18n-t>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience {
  padding: var(--spacing-xxl) var(--spacing-l);
  padding-bottom: 120px;

  @media (width >= 992px) {
    padding: var(--spacing-huge) var(--spacing-xxl);
    padding-bottom: 120px;
  }
}

.container {
  max-width: var(--container-max-width);
  margin: 0 auto;
}

.experience__title {
  font-family: var(--font-family-raleway);
  font-size: var(--fs-xxl);
  font-weight: bold;
  color: var(--color-text);
  margin-bottom: var(--spacing-xxl);

  @media (width >= 992px) {
    margin-bottom: var(--spacing-huge);
  }
}

.experience__list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xxxl);

  @media (width >= 992px) {
    gap: var(--spacing-huge);
  }
}

.experience__item {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l);

  @media (width >= 992px) {
    flex-direction: row;
    gap: var(--spacing-huge);
  }
}

.experience__header {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);

  @media (width >= 992px) {
    flex-shrink: 0;
    width: 280px;
  }
}

.experience__company {
  font-family: var(--font-family-raleway);
  font-size: var(--fs-l);
  font-weight: bold;
  color: var(--color-text);
  line-height: 1.2;
}

.experience__period {
  font-family: var(--font-family-raleway);
  font-size: var(--fs-s);
  color: var(--color-text);
  opacity: 0.8;
}

.experience__content {
  flex: 1;
}

.experience__role {
  font-family: var(--font-family-raleway);
  font-size: var(--fs-l);
  font-weight: bold;
  color: var(--color-accent);
  margin-bottom: var(--spacing-m);
  line-height: 1.3;
}

.experience__descriptions {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);

  p {
    font-family: var(--font-family-raleway);
    font-size: var(--fs-m);
    line-height: 1.7;
    color: var(--color-text);

    :deep(strong) {
      font-weight: bold;
    }
  }
}
</style>
