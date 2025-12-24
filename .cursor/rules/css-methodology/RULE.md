---
description: Metodología CSS con nesting nativo y design tokens
globs:
  - "**/*.vue"
  - "**/*.css"
alwaysApply: false
---

# Metodología CSS

Documentación completa: @docs/CSS_METHODOLOGY.md

## Principios Fundamentales

1. **Variables CSS siempre** - Nunca valores hardcodeados
2. **CSS Nesting nativo** - Máximo 3-4 niveles
3. **Media queries anidadas** - Dentro de su selector
4. **BEM Light** - `.block__element--modifier`
5. **Mobile-first** - Estilos base para móvil

## Design Tokens

### Espaciado

```css
--spacing-xs: 0.4rem; /* 4px */
--spacing-s: 0.8rem; /* 8px */
--spacing-m: 1.6rem; /* 16px */
--spacing-l: 2.4rem; /* 24px */
--spacing-xl: 3.2rem; /* 32px */
--spacing-xxl: 4rem; /* 40px */
--spacing-huge: 6.4rem; /* 64px */
```

### Colores

```css
--color-bg: #f3f3f3;
--color-bg-alt: #fff;
--color-text: #000;
--color-accent: #c85314;
--color-pink: #fabada;
--color-green: #74d289;
--color-blue: #9fbfff;
--color-brown: #d77a48;
```

### Tipografía

```css
--font-family-caprasimo: "Caprasimo", cursive;  /* Títulos */
--font-family-raleway: "Raleway", sans-serif;   /* Cuerpo */
--fs-xs a --fs-hero  /* Tamaños fluidos con clamp() */
```

### Otros Tokens

```css
--border-radius-s/m/l/xl/full
--shadow-sm/md/lg/xl          /* Estilo neobrutalist */
--transition-fast/normal/slow
--z-base/dropdown/sticky/fixed/modal
```

## Estructura de Estilos

```css
.component {
  /* 1. Variables locales */
  --local-padding: var(--spacing-m);

  /* 2. Layout */
  display: flex;
  gap: var(--spacing-s);

  /* 3. Box model */
  padding: var(--local-padding);
  margin: 0;

  /* 4. Visual */
  background: var(--color-bg-alt);
  border: var(--border-width-thick) solid var(--color-border);
  border-radius: var(--border-radius-l);

  /* 5. Tipografía */
  font-family: var(--font-family-raleway);
  font-size: var(--fs-m);

  /* 6. Transiciones */
  transition: transform var(--transition);

  /* 7. Media queries */
  @media (width > 992px) {
    --local-padding: var(--spacing-xl);
    gap: var(--spacing-l);
  }

  /* 8. Estados */
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  &.active {
    background: var(--color-accent);
  }

  /* 9. Elementos hijos */
  .component__title {
    font-family: var(--font-family-caprasimo);
    font-size: var(--fs-l);

    @media (width > 992px) {
      font-size: var(--fs-xl);
    }
  }

  .component__icon {
    width: var(--spacing-l);
    height: var(--spacing-l);
  }
}
```

## Media Queries

### Breakpoints Flexibles

Los breakpoints se adaptan al diseño de cada componente. No hay breakpoints fijos obligatorios.

```css
/* Breakpoints comunes (referencia, no obligatorios) */
@media (width > 768px) {
  /* Tablet - referencia común */
}
@media (width > 992px) {
  /* Desktop - referencia común */
}
@media (width > 1024px) {
  /* Large desktop - referencia común */
}

/* Breakpoints específicos según el diseño */
@media (width > 850px) {
  /* Si el diseño lo requiere */
}
@media (width > 1200px) {
  /* Para layouts específicos */
}
@media (width > 600px) {
  /* Para componentes pequeños */
}
```

### Principio: Diseño sobre Convención

Si un componente funciona mejor con un breakpoint a `850px` en lugar de `768px` o `992px`, usar `850px`. El diseño dicta el breakpoint, no al revés.

```css
/* ✓ Correcto - Breakpoint adaptado al diseño */
.card {
  display: block;

  @media (width > 850px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}

/* ✓ También correcto - Breakpoint estándar si funciona */
.header {
  padding: var(--spacing-m);

  @media (width > 992px) {
    padding: var(--spacing-xl);
  }
}
```

### Sintaxis Moderna

```css
/* ✓ Sintaxis moderna - NO usar min-width */
@media (width > 850px) {
}
@media (width > 992px) {
}

/* ✗ Evitar sintaxis antigua */
@media (min-width: 850px) {
}
```

## Anti-patrones

| Evitar              | Usar                         |
| ------------------- | ---------------------------- |
| `color: #c85314`    | `color: var(--color-accent)` |
| `padding: 16px`     | `padding: var(--spacing-m)`  |
| `font-size: 1.5rem` | `font-size: var(--fs-m)`     |
| Nesting > 4 niveles | Refactorizar componente      |
| `!important`        | Especificidad correcta       |
