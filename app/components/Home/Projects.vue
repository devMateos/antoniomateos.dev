<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <section class="projects">
    <NuxtLink :to="localePath('/portfolio')" class="projects__link">
      <div class="projects__background">
        <div class="projects__row projects__row--right"></div>
        <div class="projects__row projects__row--left"></div>
        <div class="projects__row projects__row--right"></div>
        <div class="projects__overlay"></div>
      </div>
      <img 
        src="~/assets/svg/projects-cursor.svg" 
        alt="" 
        class="projects__cursor-image"
        aria-hidden="true"
      />
    </NuxtLink>
  </section>
</template>

<style scoped>
.projects {
  position: relative;
  height: 500px;
  margin-bottom: var(--spacing-xxl);
  overflow: hidden;

  @media (width > 992px) {
    height: 720px;
  }
}

.projects__link {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
  cursor: url(~/assets/svg/projects-cursor.svg), pointer;
}

.projects__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.projects__row {
  width: 200%;
  height: calc(100% / 3);
  background-image: url('/img/projects-row.png');
  background-repeat: repeat-x;
  background-size: auto 100%;
  will-change: transform;
}

.projects__row--right {
  animation: scroll-right 20s linear infinite;

  &:nth-child(3) {
    background-position-x: center;
  }
}

.projects__row--left {
  animation: scroll-left 20s linear infinite;
}
@media (width > 992px) {
  .projects__row--right {
    animation: scroll-right 60s linear infinite;
  }

  .projects__row--left {
    animation: scroll-left 60s linear infinite;
  }
}

.projects__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(243, 243, 243, 0.60);
  pointer-events: none;
}

.projects__cursor-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(180px, 40vw, 280px);
  height: auto;
  pointer-events: none;
  z-index: 2;
  
}

@media (width >= 768px) {
  .projects__cursor-image {
    display: none;
  }
}

@keyframes scroll-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
