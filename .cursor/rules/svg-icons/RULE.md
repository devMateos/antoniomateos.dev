---
description: Estándares para componentes de iconos SVG
globs:
  - "app/components/Icon/**"
alwaysApply: false
---

# Iconos SVG

## Estructura de Carpeta

```
app/components/Icon/
├── IconEmail.vue
├── IconGitHub.vue
├── IconLemon.vue
├── IconLinkedIn.vue
└── IconNuevoIcono.vue
```

## Anatomía de un Componente de Icono

```vue
<template>
  <svg
    class="icon-nombre"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="..."
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<style scoped>
.icon-nombre {
  width: 100%;
  height: 100%;
}
</style>
```

## Reglas Clave

### 1. Usar `currentColor`

Permite que el icono herede el color del texto padre:

```vue
<!-- ✓ Correcto -->
<path stroke="currentColor" />
<path fill="currentColor" />

<!-- ✗ Evitar -->
<path stroke="#000000" />
<path fill="var(--color-text)" />
```

Uso:

```vue
<a href="..." class="social-link">
  <IconGitHub />  <!-- Hereda el color del enlace -->
</a>

<style scoped>
.social-link {
  color: var(--color-text);
  
  &:hover {
    color: var(--color-accent);  /* El icono cambia también */
  }
}
</style>
```

### 2. Sizing con `width: 100%; height: 100%`

El icono llena su contenedor, permitiendo control externo:

```vue
<!-- Componente padre controla el tamaño -->
<IconGitHub class="icon-small" />
<IconGitHub class="icon-large" />

<style scoped>
.icon-small {
  width: var(--spacing-l);   /* 24px */
  height: var(--spacing-l);
}

.icon-large {
  width: var(--spacing-xxl);  /* 40px */
  height: var(--spacing-xxl);
}
</style>
```

### 3. `viewBox` consistente

- Mantener el `viewBox` original del SVG
- No añadir `width` ni `height` en el SVG

```vue
<!-- ✓ Correcto -->
<svg viewBox="0 0 43 43" ...>

<!-- ✗ Evitar -->
<svg width="43" height="43" viewBox="0 0 43 43" ...>
```

### 4. `aria-hidden="true"`

Los iconos son decorativos, el texto accesible va en el padre:

```vue
<!-- En el icono -->
<svg aria-hidden="true">...</svg>

<!-- En el componente que lo usa -->
<a href="..." aria-label="Visitar perfil de GitHub">
  <IconGitHub />
</a>
```

### 5. Nomenclatura

| Patrón | Ejemplo |
|--------|---------|
| Archivo | `IconNombre.vue` (PascalCase con prefijo Icon) |
| Clase CSS | `.icon-nombre` (kebab-case) |
| Uso | `<IconNombre />` |

## Ejemplo Completo

Referencia: @app/components/Icon/IconGitHub.vue

```vue
<template>
  <svg
    class="icon-github"
    viewBox="0 0 43 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M11.6763 30.6608C12.384..."
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<style scoped>
.icon-github {
  width: 100%;
  height: 100%;
}
</style>
```

## Optimización de SVGs

Antes de crear el componente, optimizar el SVG:

1. **Eliminar metadatos**: `<title>`, `<desc>`, comentarios
2. **Eliminar atributos innecesarios**: `id`, `data-name`, `xmlns:xlink`
3. **Simplificar paths**: Usar herramientas como SVGO
4. **Colores**: Reemplazar con `currentColor`

### Herramientas

- [SVGOMG](https://jakearchibald.github.io/svgomg/) - Optimización online
- [SVG to Vue](https://svg-to-vue.vercel.app/) - Convertir SVG a componente Vue

## Creación de Nuevo Icono

1. Exportar SVG optimizado del diseño
2. Crear `app/components/Icon/IconNombre.vue`
3. Pegar SVG y ajustar:
   - Añadir `class="icon-nombre"`
   - Añadir `aria-hidden="true"`
   - Cambiar colores a `currentColor`
   - Eliminar `width` y `height` del SVG
4. Añadir estilos scoped
5. Usar en componentes: `<IconNombre />`

## Checklist

- [ ] Nombre con prefijo `Icon` (PascalCase)
- [ ] `viewBox` presente y correcto
- [ ] Sin `width`/`height` en el SVG
- [ ] Colores usando `currentColor`
- [ ] `aria-hidden="true"` añadido
- [ ] `width: 100%; height: 100%` en estilos
- [ ] SVG optimizado (sin metadatos)

