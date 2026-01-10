<script setup lang="ts">
const { t } = useI18n();

// Datos de los hobbies
const hobbies = [
  { video: '/video/hobby-bowling.mp4', textKey: 'about.hobby1', rotation: -3 },
  { video: '/video/hobby-cat.mp4', textKey: 'about.hobby2', rotation: 2 },
  { video: '/video/hobby-videogames.mp4', textKey: 'about.hobby3', rotation: -2 },
];

// Referencias a los videos
const videoRefs = ref<(HTMLVideoElement | null)[]>([]);

// Configurar Intersection Observer
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          // Solo reproducir si está visible
          video.play().catch(() => {
            // Silenciar errores de autoplay (políticas del navegador)
          });
        } else {
          // Pausar cuando sale del viewport
          video.pause();
        }
      });
    },
    {
      threshold: 0.3,  // 30% visible para activar
      rootMargin: '50px' // Pre-cargar un poco antes
    }
  );

  videoRefs.value.forEach((video: HTMLVideoElement | null) => {
    if (video) observer.observe(video);
  });

  // Cleanup al desmontar el componente
  onUnmounted(() => observer.disconnect());
});

// Función para asignar refs dinámicamente
const setVideoRef = (el: HTMLVideoElement | null, index: number) => {
  videoRefs.value[index] = el;
};
</script>

<template>
  <section class="hobbies">
    <div class="container">
      <h2 class="hobbies__title">{{ t("about.hobbiesTitle") }}</h2>

      <div class="hobbies__grid">
        <AboutPolaroidCard
          v-for="(hobby, index) in hobbies"
          :key="hobby.video"
          :text="t(hobby.textKey)"
          :rotation="hobby.rotation"
        >
          <video
            :ref="(el) => setVideoRef(el as HTMLVideoElement, index)"
            :src="hobby.video"
            loop
            muted
            playsinline
            preload="metadata"
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

