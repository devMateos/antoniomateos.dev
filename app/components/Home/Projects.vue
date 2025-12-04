<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <section class="projects">
    <NuxtLink :to="localePath('/portfolio')" class="projects__link">
      <!-- Aquí irá el contenido de la sección -->
    </NuxtLink>
  </section>
</template>

<style scoped>
.projects {
  position: relative;
  height: 800px;
  background-color: lightgrey;
  margin-bottom: var(--spacing-xxl);
}

.projects__link {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
  cursor: url(~/assets/svg/projects-cursor.svg), pointer;
}
</style>
