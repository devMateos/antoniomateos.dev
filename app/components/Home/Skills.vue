<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

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

const skillsSectionRef = ref<HTMLElement | null>(null);
const isDragging = ref(false);
const currentDragElement = ref<HTMLElement | null>(null);
const dragOffset = ref({ x: 0, y: 0 });
const hasStartedDragging = ref(false);

const handleMouseDown = (event: MouseEvent) => {
  // Solo permitir drag en desktop
  if (window.innerWidth <= 992) return;

  const target = event.target as HTMLElement;
  const card = target.closest(".skills__card") as HTMLElement;

  if (!card || !skillsSectionRef.value) return;

  isDragging.value = true;
  hasStartedDragging.value = false;
  currentDragElement.value = card;

  // Aplicar z-index: 1 para que quede por encima
  card.style.zIndex = "1";

  const rect = card.getBoundingClientRect();
  dragOffset.value = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };

  event.preventDefault();
};

const handleMouseMove = (event: MouseEvent) => {
  if (!isDragging.value || !currentDragElement.value || !skillsSectionRef.value)
    return;

  const container = skillsSectionRef.value;
  const element = currentDragElement.value;

  // Normalizar posición solo en el primer movimiento
  if (!hasStartedDragging.value) {
    hasStartedDragging.value = true;
    // Eliminar right/bottom para evitar conflictos de posicionamiento
    element.style.right = "auto";
    element.style.bottom = "auto";
  }

  const containerRect = container.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();

  // Calcular nueva posición
  let newX = event.clientX - containerRect.left - dragOffset.value.x;
  let newY = event.clientY - containerRect.top - dragOffset.value.y;

  // Restringir dentro de los límites del contenedor
  const minX = 0;
  const minY = 0;
  const maxX = containerRect.width - elementRect.width;
  const maxY = containerRect.height - elementRect.height;

  newX = Math.max(minX, Math.min(newX, maxX));
  newY = Math.max(minY, Math.min(newY, maxY));

  // Aplicar la posición
  element.style.left = `${newX}px`;
  element.style.top = `${newY}px`;
};

const handleMouseUp = () => {
  if (isDragging.value) {
    isDragging.value = false;
    hasStartedDragging.value = false;
    currentDragElement.value = null;
  }
};

onMounted(() => {
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);
});

onUnmounted(() => {
  document.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("mouseup", handleMouseUp);
});
</script>

<template>
  <section ref="skillsSectionRef" class="skills" @mousedown="handleMouseDown">
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
    position: relative;
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
      display: block;
      min-height: clamp(800px, 90dvh, 1000px);

      .skills__card {
        --distance: max(32px, calc((100vw - 1680px) / 2));

        position: absolute;
        max-width: clamp(350px, 40dvw, 650px);
        min-height: 300px;
        height: auto;
        cursor: url(~/assets/svg/grab-cursor.svg), grab;

        &:active {
          cursor: url(~/assets/svg/grabbing-cursor.svg), grabbing;
        }

        &:nth-child(1) {
          left: var(--distance);
          top: calc(
            var(--spacing-huge) + var(--fs-xl) + var(--spacing-xl) +
              var(--spacing-xxl)
          );
          rotate: -2.6deg;
        }
        &:nth-child(2) {
          right: var(--distance);
          top: calc(
            var(--spacing-huge) + var(--fs-xl) + var(--spacing-xl) +
              var(--spacing-xxl)
          );
          rotate: 4deg;
        }
        &:nth-child(3) {
          left: var(--distance);
          bottom: var(--spacing-xxl);
          rotate: -4.72deg;
        }
        &:nth-child(4) {
          right: var(--distance);
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
