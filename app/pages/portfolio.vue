<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: () => t("seo.portfolio.title"),
  description: () => t("seo.portfolio.description"),
  ogTitle: () => t("seo.portfolio.title"),
  ogDescription: () => t("seo.portfolio.description"),
  // TODO: Añadir imagen OG cuando esté disponible
  // ogImage: "https://antoniomateos.dev/og-portfolio.jpg",
  ogUrl: "https://antoniomateos.dev/portfolio",
});
</script>

<template>
  <div class="portfolio-page">
    <PortfolioProjectOdin />
    <PortfolioProjectPistachio />
    <PortfolioProjectShoppingList />

    <section class="portfolio-cta">
      <p>
        <i18n-t keypath="portfolio.githubCta" tag="span">
          <template #github>
            <a
              href="https://github.com/devMateos"
              target="_blank"
              rel="noopener noreferrer"
              class="portfolio-cta__link"
            >
              {{ t("portfolio.githubLink") }}
            </a>
          </template>
        </i18n-t>
      </p>
    </section>
  </div>
</template>

<style scoped>
.portfolio-page {
  display: flex;
  flex-direction: column;
}

.portfolio-cta {
  padding: var(--spacing-xxl) var(--spacing-l);
  text-align: center;

  @media (width >= 992px) {
    padding: var(--spacing-huge) var(--spacing-xxl);
  }

  p {
    font-family: var(--font-family-raleway);
    font-size: var(--fs-m);
    color: var(--color-text);
  }
}

.portfolio-cta__link {
  color: var(--color-text);
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color var(--transition);

  &:hover {
    color: var(--color-accent);
  }
}
</style>
