---
description: Accesibilidad web (a11y) para asegurar que el portafolio sea usable por todos
globs:
  - "**/*.vue"
alwaysApply: false
---

# Accesibilidad (a11y)

## Principios WCAG

1. **Perceptible**: Contenido visible y audible
2. **Operable**: Navegable con teclado y otros dispositivos
3. **Comprensible**: Contenido claro y predecible
4. **Robusto**: Compatible con tecnologías asistivas

## Navegación por Teclado

### Focus visible

```css
/* Nunca ocultar el focus sin alternativa */
:focus {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

/* Si se oculta outline, proporcionar alternativa visual */
button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px var(--color-accent);
}
```

### Escape para cerrar

Patrón ya usado en `Header.vue`:

```typescript
onMounted(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isMenuOpen.value) {
      closeMenu();
    }
  };
  window.addEventListener('keydown', handleEscape);

  onUnmounted(() => {
    window.removeEventListener('keydown', handleEscape);
  });
});
```

### Focus trapping en modales

```typescript
// Mantener el focus dentro del modal/menú
const trapFocus = (element: HTMLElement) => {
  const focusables = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const first = focusables[0] as HTMLElement;
  const last = focusables[focusables.length - 1] as HTMLElement;

  element.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;
    
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
};
```

## Texto Alternativo

### Imágenes decorativas

```vue
<!-- Decorativa: alt vacío -->
<img src="/sticker.svg" alt="" aria-hidden="true" />

<!-- Informativa: alt descriptivo -->
<img src="/proyecto.jpg" alt="Captura del proyecto mostrando el dashboard" />

<!-- NuxtImage -->
<NuxtImg src="/foto.jpg" alt="Antonio Mateos, desarrollador frontend" />
```

### Iconos

```vue
<!-- Icono decorativo (acompañado de texto) -->
<button>
  <IconGitHub aria-hidden="true" />
  <span>GitHub</span>
</button>

<!-- Icono solo (sin texto visible) -->
<a href="https://github.com/..." aria-label="Visitar perfil de GitHub">
  <IconGitHub aria-hidden="true" />
</a>
```

## Clase Screen Reader Only

Definir globalmente en `reset.css` o `typography.css`:

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

Uso:

```vue
<h2 class="sr-only">Navegación principal</h2>
<nav>...</nav>
```

## Atributos ARIA

### Botones con estado

```vue
<button
  type="button"
  :aria-expanded="isMenuOpen"
  :aria-controls="menuId"
  aria-label="Abrir menú de navegación"
>
  <span class="hamburger-line" />
</button>
```

### Navegación

```vue
<nav aria-label="Navegación principal">
  <ul role="list">
    <li><NuxtLink :to="localePath('/')">Inicio</NuxtLink></li>
  </ul>
</nav>
```

### Regiones

```vue
<header role="banner">...</header>
<main role="main">...</main>
<footer role="contentinfo">...</footer>
```

## Semántica HTML

| Evitar | Usar |
|--------|------|
| `<div onclick>` | `<button type="button">` |
| `<div class="header">` | `<header>` |
| `<span class="link">` | `<a href="...">` |
| `<div class="list">` | `<ul>` o `<ol>` |
| Múltiples `<h1>` | Un solo `<h1>` por página |

## Jerarquía de Encabezados

```vue
<!-- ✓ Correcto -->
<h1>Antonio Mateos</h1>
  <h2>Sobre mí</h2>
  <h2>Habilidades</h2>
    <h3>Frontend</h3>
    <h3>Diseño</h3>
  <h2>Proyectos</h2>

<!-- ✗ Incorrecto: saltar niveles -->
<h1>Antonio Mateos</h1>
  <h3>Sobre mí</h3>  <!-- Salta h2 -->
```

## Contraste de Color

| Elemento | Ratio mínimo |
|----------|--------------|
| Texto normal | 4.5:1 |
| Texto grande (≥18px bold, ≥24px) | 3:1 |
| Iconos y elementos UI | 3:1 |

Verificar con: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## Checklist por Componente

- [ ] ¿Los botones tienen `type="button"` o `type="submit"`?
- [ ] ¿Los enlaces tienen texto descriptivo o `aria-label`?
- [ ] ¿Los iconos solos tienen `aria-hidden` y el padre `aria-label`?
- [ ] ¿El componente es navegable con Tab?
- [ ] ¿Los estados (hover, focus, active) son visibles?
- [ ] ¿Los modales/menús se cierran con Escape?
- [ ] ¿Las imágenes tienen `alt` apropiado?

