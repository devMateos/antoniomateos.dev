---
description: Estándares para componentes Vue con Composition API y script setup
globs:
  - "**/*.vue"
alwaysApply: false
---

# Componentes Vue

## Estructura del Archivo

```vue
<template>
  <!-- 1. Template primero -->
</template>

<script setup lang="ts">
// 2. Script setup con TypeScript
</script>

<style scoped>
/* 3. Estilos con scoped */
</style>
```

## Orden del Script Setup

1. **Composables y hooks** (useI18n, useLocalePath, custom)
2. **Props y Emits**
3. **Estado reactivo** (ref, reactive)
4. **Computed properties**
5. **Funciones y métodos**
6. **Lifecycle hooks** (onMounted, onUnmounted)

## Ejemplo de Componente

```vue
<template>
  <article class="card">
    <NuxtLink :to="localePath(props.to)" class="card__link">
      {{ $t(props.labelKey) }}
    </NuxtLink>
    <button 
      type="button" 
      class="card__button"
      :class="{ 'card__button--active': isActive }"
      @click="handleClick"
    >
      {{ buttonText }}
    </button>
  </article>
</template>

<script setup lang="ts">
// 1. Composables
const localePath = useLocalePath();

// 2. Props y Emits
interface Props {
  to: string;
  labelKey: string;
}
const props = defineProps<Props>();
const emit = defineEmits<{
  click: [value: boolean];
}>();

// 3. Estado reactivo
const isActive = ref(false);

// 4. Computed
const buttonText = computed(() => 
  isActive.value ? 'Activo' : 'Inactivo'
);

// 5. Funciones
const handleClick = () => {
  isActive.value = !isActive.value;
  emit('click', isActive.value);
};

// 6. Lifecycle
onMounted(() => {
  // Inicialización
});
</script>
```

## Reglas de Template

| Hacer | No hacer |
|-------|----------|
| `<NuxtLink :to="localePath('/about')">` | `<a href="/about">` |
| `{{ $t('nav.about') }}` | Texto hardcodeado |
| `@click="handleClick"` | `@click="() => { ... }"` inline |
| `:class="{ active: isActive }"` | `:class="isActive ? 'active' : ''"` |

## Convenciones de Nombres

- **Componentes**: PascalCase (`NavButton.vue`, `MobileMenu.vue`)
- **Props**: camelCase (`isOpen`, `labelKey`)
- **Eventos**: kebab-case en template (`@language-change`)
- **Clases CSS**: kebab-case con BEM (`nav-button__icon--active`)

## Accesibilidad

- Usar `type="button"` en botones que no son submit
- Incluir `aria-label` en botones con solo iconos
- Usar `aria-expanded` para elementos colapsables
- Manejar navegación por teclado (Escape para cerrar modales)

