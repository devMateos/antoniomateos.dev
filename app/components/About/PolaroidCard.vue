<script setup lang="ts">
interface Props {
  text: string;
  rotation?: number;
}

withDefaults(defineProps<Props>(), {
  rotation: 0,
});
</script>

<template>
  <article
    class="polaroid"
    :style="{ '--rotation': `${rotation}deg` }"
  >
    <!-- Cinta adhesiva izquierda -->
    <svg
      class="polaroid__tape polaroid__tape--left"
      width="146"
      height="113"
      viewBox="0 0 146 113"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M132.347 1.81665L128.609 6.85991L127.99 7.696L129.029 7.65688L134.816 7.44322L129.589 12.1667L128.354 13.2832L130 13.0317L133.396 12.5133L131.541 15.5531L131.085 16.3001L131.96 16.3137L135.799 16.3722L131.647 21.0484L130.84 21.9579L132.053 21.8791L136.616 21.5851L132.494 27.1879L131.612 28.3875L133.039 27.9635L137.105 26.7561L133.624 32.1863L133.165 32.9007L134.012 32.9546L137.976 33.2101L136.613 34.5387L135.494 35.6295L137.039 35.3909L142.716 34.513L19.987 111.302L22.9923 106.897L23.3859 106.321L22.7142 106.134L20.618 105.55L22.5905 102.983L22.8597 102.632L22.5453 102.321L20.0433 99.8558L22.3235 95.5727L22.7457 94.7789L21.8486 94.8388L16.6402 95.1866L16.129 92.1597L16.0465 91.6749L15.5608 91.7487L12.5012 92.2147L13.0789 89.594L13.2508 88.8159L12.4751 89.0004L8.98849 89.8281L9.34101 88.2249L9.49314 87.535L8.79112 87.6218L5.29186 88.0546L5.89581 85.9447L6.02255 85.502L5.59177 85.3391L1.12222 83.6494L132.347 1.81665Z"
        fill="#FDEA97"
        fill-opacity="0.9"
        stroke="black"
      />
    </svg>

    <!-- Cinta adhesiva derecha -->
    <svg
      class="polaroid__tape polaroid__tape--right"
      width="125"
      height="107"
      viewBox="0 0 125 107"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M122.905 83.1183L117.615 81.7908L116.764 81.5774L117.014 82.4176L118.481 87.3624L113.18 84.6417L111.927 83.9992L112.494 85.2882L113.705 88.0435L110.585 87.5846L109.855 87.4769L110.025 88.194L110.825 91.5679L105.788 89.749L104.822 89.3995L105.143 90.3761L106.413 94.2318L100.551 92.7855L99.3335 92.4845L100.01 93.5402L101.971 96.5983L96.3861 95.6367L95.6803 95.5148L95.8088 96.2195L96.4599 99.7785L94.9965 99.1068L93.7974 98.5561L94.331 99.7637L96.3588 104.35L1.90001 27.5975L6.47003 28.5344L7.05351 28.6549L7.07069 28.059L7.12801 25.9799L9.82486 26.7137L10.2117 26.8187L10.3985 26.4645L12.0425 23.3468L16.3143 23.6991L17.0689 23.7612L16.8301 23.0435L15.3843 18.6865L17.9789 17.0825L18.3492 16.854L18.1742 16.4567L17.0902 13.9863L19.5785 13.4877L20.2486 13.3536L19.9164 12.7551L18.4248 10.0644L19.9668 9.75427L20.5565 9.63535L20.3325 9.07716L19.1783 6.20918L21.221 5.92939L21.6057 5.87641L21.6497 5.49019L22.1651 0.965784L122.905 83.1183Z"
        fill="#FDEA97"
        fill-opacity="0.9"
        stroke="black"
      />
    </svg>

    <!-- Contenedor de la tarjeta -->
    <div class="polaroid__frame">
      <!-- Slot para imagen/gif -->
      <div class="polaroid__media">
        <slot />
      </div>

      <!-- Texto manuscrito -->
      <p class="polaroid__text">
        <slot name="text">{{ text }}</slot>
      </p>
    </div>
  </article>
</template>

<style scoped>
.polaroid {
  position: relative;
  height: 100%;
  transform: rotate(var(--rotation, 0deg));
  transition: transform var(--transition-slow);
}

.polaroid__tape {
  position: absolute;
  z-index: 2;
  pointer-events: none;
}

.polaroid__tape--left {
  top: -25px;
  left: -30px;
  width: 100px;
  height: auto;

  @media (width >= 768px) {
    top: -30px;
    left: -35px;
    width: 130px;
  }
}

.polaroid__tape--right {
  top: -25px;
  right: -25px;
  width: 90px;
  height: auto;

  @media (width >= 768px) {
    top: -30px;
    right: -30px;
    width: 115px;
  }
}

.polaroid__frame {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-bg-alt);
  padding: var(--spacing-s);
  padding-bottom: var(--spacing-m);
  border: var(--border-width) solid var(--color-border);
  
  /* Borde irregular hand-drawn effect */
  border-radius: 2px 4px 3px 5px / 5px 3px 4px 2px;
  box-shadow: 
    1px 1px 0 var(--color-border),
    2px 2px 0 var(--color-border);

  @media (width >= 768px) {
    padding: var(--spacing-m);
    padding-bottom: var(--spacing-l);
  }
}

.polaroid__media {
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background-color: var(--color-bg);
  border: var(--border-width-thin) solid var(--color-border);
}

/* Asegura que el contenido del slot llene el espacio */
.polaroid__media :deep(img),
.polaroid__media :deep(video),
.polaroid__media :deep(picture) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.polaroid__text {
  flex: 1;
  display: flex;
  align-items: flex-start;
  font-family: var(--font-family-handwritten);
  font-size: var(--fs-m);
  line-height: 1.4;
  color: var(--color-text);
  margin-top: var(--spacing-s);
  text-align: left;

  @media (width >= 768px) {
    margin-top: var(--spacing-m);
  }
}
</style>

