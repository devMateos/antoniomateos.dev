<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="footer">
    <div class="container">
      <!-- Header section -->
      <div class="header">
        <h2 class="name">Antonio Mateos</h2>

        <!-- Navigation -->
        <nav class="nav" :aria-label="$t('nav.footerNavAria')">
          <ul class="nav-list">
            <li class="nav-item">
              <NuxtLink :to="localePath('/portfolio')" class="nav-link">
                {{ $t("nav.portfolio") }}
              </NuxtLink>
            </li>
            <li class="nav-item">
              <a href="" download class="nav-link">
                {{ $t("nav.resume") }}
              </a>
            </li>
            <li class="nav-item">
              <NuxtLink :to="localePath('/about')" class="nav-link">
                {{ $t("nav.about") }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Divider -->
      <div class="divider" />

      <!-- Social section -->
      <div class="social-section">
        <div class="social-icons">
          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/antoniomateosmariscal/"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            :aria-label="$t('footer.linkedinAria')"
          >
            <IconLinkedIn class="social-icon" />
          </a>

          <!-- GitHub -->
          <a
            href="https://github.com/antoniomateosmariscal"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            :aria-label="$t('footer.githubAria')"
          >
            <IconGitHub class="social-icon" />
          </a>

          <!-- Email (mobile only) -->
          <a
            href="mailto:antoniomateosmariscal@gmail.com"
            class="social-link social-link--mobile"
            :aria-label="$t('footer.emailAria')"
          >
            <IconEmail class="social-icon" />
          </a>
        </div>

        <!-- Email (desktop) -->
        <a
          href="mailto:antoniomateosmariscal@gmail.com"
          class="email email--desktop"
        >
          {{ $t("footer.email") }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>

<style scoped>
.footer {
  background-color: var(--color-bg);
  border-radius: 40px 40px 0 0;
  padding: var(--spacing-xxl) var(--spacing-xl);

  @media (width > 850px) {
    border-radius: 60px 60px 0 0;
    padding: var(--spacing-huge) var(--spacing-xxl);
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-xxl);
    max-width: var(--container-max-width);
    margin: 0 auto;

    @media (width > 850px) {
      gap: var(--spacing-xxxl);
    }
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-xl);
    width: 100%;

    @media (width > 850px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .name {
    font-family: var(--font-family-caprasimo);
    font-size: var(--fs-xl);
    margin: 0;
    text-align: center;

    @media (width > 850px) {
      text-align: left;
    }
  }

  .nav {
    display: flex;
    justify-content: center;
    width: 100%;

    @media (width > 850px) {
      width: auto;
    }
  }

  .nav-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (width > 850px) {
      width: auto;
      gap: var(--spacing-xxl);
    }
  }

  .nav-link {
    font-family: var(--font-family-raleway);
    font-size: var(--fs-m);
    font-weight: 700;
    color: var(--color-text);
    text-decoration: none;
    transition: color var(--transition);

    &:hover {
      color: var(--color-accent);
    }
  }

  .divider {
    width: 100%;
    height: var(--border-width-thick);
    background-color: var(--color-border);
  }

  .social-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-l);

    @media (width > 850px) {
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: var(--spacing-xxl);

    @media (width > 850px) {
      gap: var(--spacing-m);
    }
  }

  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text);
    transition: color var(--transition), transform var(--transition);

    &:hover {
      color: var(--color-accent);
      transform: scale(1.1);
    }

    &.social-link--mobile {
      @media (width > 850px) {
        display: none;
      }
    }
  }

  .social-icon {
    width: clamp(3.5rem, 3dvw, 4.5rem);
    height: clamp(3.5rem, 3dvw, 4.5rem);
  }

  .email {
    font-family: var(--font-family-raleway);
    font-size: var(--fs-s);
    color: var(--color-text);
    text-decoration: none;
    transition: color var(--transition);

    &:hover {
      color: var(--color-accent);
    }

    &.email--desktop {
      display: none;

      @media (width > 850px) {
        display: block;
      }
    }
  }
}
</style>
