# Metodología CSS - CSS Semántico con Nesting Nativo

Este proyecto utiliza **CSS Nesting Nativo** como metodología para organizar y escribir estilos, garantizando compatibilidad con un amplio rango de navegadores.

## Características Principales

### 1. **CSS Nesting Nativo** - Anidación

Utilizamos el anidado nativo de CSS para facilitar la lectura y escritura del código, manteniendo la jerarquía visual:

```css
.header {
  background-color: var(--color-bg);
  position: sticky;

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    font-family: var(--font-family-caprasimo);

    &:hover {
      transform: scale(1.02);
    }
  }
}
```

### 2. **Variables CSS** - Tokens de Diseño

Todas las variables CSS están centralizadas en `app/assets/css/tokens.css`:

- **Colores**: `--color-bg`, `--color-text`, `--color-accent`, `--color-brown`, etc.
- **Espaciado**: `--spacing-xs`, `--spacing-s`, `--spacing-m`, `--spacing-l`, etc.
- **Tipografía**: `--font-family-raleway`, `--font-family-caprasimo`, `--fs-*`
- **Transiciones**: `--transition`, `--transition-slow`
- **Bordes**: `--border-radius`, `--border-width-*`
- **Sombras**: `--shadow`, `--shadow-lg`
- **Z-index**: `--z-sticky`, `--z-dropdown`

### 3. **Media Queries Anidadas**

Las media queries se escriben dentro del selector correspondiente para mantener el contexto:

```css
.header {
  padding: var(--spacing-m);

  @media (width > 768px) {
    padding: var(--spacing-l) var(--spacing-huge);
  }

  .nav-desktop {
    display: none;

    @media (width > 768px) {
      display: flex;
      gap: var(--spacing-xxl);
    }
  }
}
```

### 4. **Pseudoclases y Estados con &**

Usamos el selector `&` para referir al selector padre en pseudoclases y estados:

```css
.button {
  color: var(--color-text);
  transition: color var(--transition);

  &:hover {
    color: var(--color-accent);
  }

  &.active {
    background-color: var(--color-brown);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
```

### 5. **Nomenclatura BEM Light**

Utilizamos una versión ligera de BEM para componentes complejos:

- **Bloque**: `.nav-button`
- **Elemento**: `.nav-button__svg`, `.nav-button__text`
- **Modificador**: `&.active`, `&--active`

## Estructura de un Componente

```vue
<template>
  <div class="component-name">
    <div class="component-name__element">
      <span class="component-name__text">Contenido</span>
    </div>
  </div>
</template>

<style scoped>
.component-name {
  /* Variables locales (opcional) */
  --local-spacing: 1rem;

  /* Estilos del componente raíz */
  display: flex;
  padding: var(--local-spacing);

  /* Media queries anidadas */
  @media (width > 768px) {
    gap: var(--spacing-xxl);
    padding: calc(var(--local-spacing) * 2);
  }

  /* Estados con & */
  &:hover {
    transform: scale(1.02);
  }

  &.active {
    background-color: var(--color-brown);
  }

  /* Elementos hijos anidados */
  .component-name__element {
    position: relative;

    .component-name__text {
      color: var(--color-text);
      font-weight: 700;

      &:hover {
        color: var(--color-accent);
      }
    }
  }
}
</style>
```

## Beneficios

1. ✅ **Mejor organización**: El código CSS está estructurado jerárquicamente
2. ✅ **Más legible**: El anidado refleja la estructura HTML
3. ✅ **Mantenible**: Las variables centralizadas facilitan cambios globales
4. ✅ **Compatible**: Funciona en navegadores modernos (Firefox 112+, Chrome 112+, Safari 16.5+)
5. ✅ **Sin preprocesadores**: Utiliza características nativas de CSS
6. ✅ **Vue scoped**: Se combina perfectamente con el sistema de scoped de Vue

## Ejemplos en el Proyecto

### Header.vue

```css
.header {
  background-color: var(--color-bg);
  position: sticky;
  top: 0;
  padding: var(--spacing-m) var(--spacing-xl);

  @media (width > 768px) {
    padding: var(--spacing-l) var(--spacing-huge);
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-family: var(--font-family-caprasimo);
    font-size: var(--fs-xl);
    transition: transform var(--transition);

    &:hover {
      transform: scale(1.02);
    }
  }

  .language-btn {
    font-family: var(--font-family-raleway);
    padding: var(--spacing-s);
    transition: background-color var(--transition);

    &.active {
      background-color: var(--color-brown);
    }
  }
}
```

### MobileMenu.vue

```css
.mobile-menu {
  position: fixed;
  background-color: var(--color-bg-alt);
  border: var(--border-width-thick) solid var(--color-border);
  box-shadow: var(--shadow-lg);

  .mobile-nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .mobile-nav-link {
    font-family: var(--font-family-raleway);
    font-weight: 700;
    color: var(--color-text);
    transition: color var(--transition);

    &:hover {
      color: var(--color-accent);
    }
  }
}
```

### NavButton.vue

```css
.nav-button {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-weight: 700;
  transition: color var(--transition);

  @media (width > 768px) {
    width: auto;
    min-width: 180px;
  }

  &:hover {
    .nav-button__svg path {
      stroke-dashoffset: 0;
    }
  }

  .nav-button__svg {
    position: absolute;
    z-index: -1;

    & path {
      transition: all 800ms ease-in-out;
      stroke-dasharray: 1200px;
      stroke-dashoffset: 1200px;
    }
  }

  .nav-button__text {
    position: relative;
    z-index: 1;
  }
}
```

## Patrones Comunes

### Anidación de selectores hijos

```css
.card {
  padding: var(--spacing-l);

  .card-header {
    margin-bottom: var(--spacing-m);

    .card-title {
      font-size: var(--fs-xl);
      font-weight: 700;
    }
  }

  .card-body {
    .card-text {
      line-height: 1.6;
    }
  }
}
```

### Estados y modificadores

```css
.button {
  padding: var(--spacing-s) var(--spacing-m);
  border-radius: var(--border-radius);
  transition: all var(--transition);

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &.primary {
    background-color: var(--color-accent);
  }

  &.secondary {
    background-color: var(--color-brown);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
```

### Media queries responsive

```css
.section {
  padding: var(--spacing-m);

  @media (width > 768px) {
    padding: var(--spacing-l);
  }

  @media (width > 1024px) {
    padding: var(--spacing-xl);
  }

  .section-title {
    font-size: var(--fs-l);

    @media (width > 768px) {
      font-size: var(--fs-xl);
    }
  }
}
```

## Compatibilidad

### CSS Nesting Nativo

- **Chrome/Edge**: 112+ (abril 2023)
- **Firefox**: 117+ (agosto 2023)
- **Safari**: 16.5+ (mayo 2023)

### Características usadas

- ✅ CSS Variables (Custom Properties)
- ✅ CSS Nesting
- ✅ Media Queries anidadas
- ✅ Selector `&` para estados y modificadores

## Recursos

- [Metodologías CSS - LenguajeCSS](https://lenguajecss.com/css/calidad-de-codigo/metodologias-css/)
- [CSS Nesting - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting)
- [CSS Variables - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [CSS Nesting Browser Support - Can I Use](https://caniuse.com/css-nesting)

## Buenas Prácticas

1. **Variables CSS primero**: Usa siempre variables en lugar de valores hardcodeados
2. **Anidación máxima**: Limita el anidado a 3-4 niveles para mantener especificidad baja
3. **Media queries con contexto**: Agrupa las media queries con sus selectores correspondientes
4. **Selector `&` para estados**: Usa `&` para pseudoclases (`:hover`, `:focus`) y modificadores (`.active`)
5. **Vue scoped**: Combina con `<style scoped>` de Vue para encapsular estilos por componente
6. **BEM Light**: Usa nomenclatura BEM para componentes complejos con múltiples elementos
7. **Organización lógica**: Ordena propiedades de forma consistente (layout → visual → tipografía)

## Ejemplo Completo

```vue
<template>
  <article class="blog-post">
    <header class="blog-post__header">
      <h2 class="blog-post__title">Título del Post</h2>
      <time class="blog-post__date">2024-01-01</time>
    </header>
    <div class="blog-post__content">
      <p>Contenido del post...</p>
    </div>
    <footer class="blog-post__footer">
      <button class="blog-post__btn blog-post__btn--primary">Leer más</button>
    </footer>
  </article>
</template>

<style scoped>
.blog-post {
  background-color: var(--color-bg-alt);
  border: var(--border-width-thick) solid var(--color-border);
  border-radius: var(--border-radius-l);
  padding: var(--spacing-l);
  transition: transform var(--transition);

  @media (width > 768px) {
    padding: var(--spacing-xl);
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  .blog-post__header {
    margin-bottom: var(--spacing-m);
    border-bottom: var(--border-width) solid var(--color-border);
    padding-bottom: var(--spacing-s);
  }

  .blog-post__title {
    font-family: var(--font-family-caprasimo);
    font-size: var(--fs-l);
    margin-bottom: var(--spacing-xs);

    @media (width > 768px) {
      font-size: var(--fs-xl);
    }
  }

  .blog-post__date {
    font-size: var(--fs-s);
    color: var(--color-text);
    opacity: 0.7;
  }

  .blog-post__content {
    margin-bottom: var(--spacing-m);
    line-height: 1.6;
  }

  .blog-post__footer {
    display: flex;
    justify-content: flex-end;
  }

  .blog-post__btn {
    font-family: var(--font-family-raleway);
    font-weight: 700;
    padding: var(--spacing-s) var(--spacing-m);
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: all var(--transition);

    &--primary {
      background-color: var(--color-accent);
      color: var(--color-text-inverse);

      &:hover {
        background-color: color-mix(in srgb, var(--color-accent), #000 10%);
      }
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}
</style>
```

## Migración desde otros enfoques

### Desde CSS tradicional

```css
/* Antes */
.header {
  background: white;
}
.header .logo {
  font-size: 2rem;
}
.header .logo:hover {
  transform: scale(1.1);
}

/* Después */
.header {
  background: white;

  .logo {
    font-size: 2rem;

    &:hover {
      transform: scale(1.1);
    }
  }
}
```

### Desde Sass/SCSS

El código de Sass/SCSS con nesting es casi idéntico, solo necesitas eliminar las características específicas de Sass (como `@mixin`, `@include`, `@extend`) y usar características nativas de CSS.

---

**Nota**: Esta metodología combina lo mejor del CSS moderno con la encapsulación de Vue, resultando en código limpio, mantenible y compatible con navegadores modernos.
