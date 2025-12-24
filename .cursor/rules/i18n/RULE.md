---
description: Internacionalización con @nuxtjs/i18n
globs:
  - "i18n/**"
  - "**/*.vue"
alwaysApply: false
---

# Internacionalización (i18n)

## Configuración

| Parámetro | Valor |
|-----------|-------|
| Idioma por defecto | `es` (español) |
| Idioma secundario | `en` (inglés) |
| Estrategia | `prefix_except_default` |
| Detección | Cookie `i18n_redirected` |

## Archivos de Traducción

```
i18n/locales/
├── es.json    # Español (principal)
└── en.json    # English
```

## Estructura de Claves

Organizar por sección de la aplicación:

```json
{
  "nav": {
    "home": "Inicio",
    "about": "Sobre mí",
    "portfolio": "Portfolio"
  },
  "home": {
    "greeting": "¡Hey! Soy",
    "subtitle": "Un desarrollador {frontend} que {designs}"
  },
  "about": {
    "title": "Sobre mí"
  },
  "skills": {
    "title": "¿Qué puedo hacer?",
    "uiux": {
      "title": "Diseño UI/UX",
      "description": "Descripción..."
    }
  }
}
```

## Uso en Componentes

### Template
```vue
<template>
  <!-- Traducción simple -->
  <h1>{{ $t('home.greeting') }}</h1>
  
  <!-- Con interpolación -->
  <p>{{ $t('home.subtitle', { 
    frontend: $t('home.frontend'),
    designs: $t('home.designs')
  }) }}</p>
  
  <!-- Rutas con i18n -->
  <NuxtLink :to="localePath('/')">
    {{ $t('nav.home') }}
  </NuxtLink>
</template>
```

### Script Setup
```typescript
// Composables disponibles
const { t, locale, setLocale } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

// Cambiar idioma
const switchLanguage = (lang: string) => {
  setLocale(lang);
  navigateTo(switchLocalePath(lang));
};

// Acceder a traducción en script
const greeting = computed(() => t('home.greeting'));
```

## Interpolación

### Variables simples
```json
{ "greeting": "Hola, {name}" }
```
```vue
{{ $t('greeting', { name: 'Antonio' }) }}
```

### HTML (usar con cuidado)
```json
{ "message": "Visita {0} para más info" }
```
```vue
<i18n-t keypath="message">
  <NuxtLink :to="localePath('/about')">esta página</NuxtLink>
</i18n-t>
```

## Checklist para Nuevos Textos

1. [ ] Añadir clave en `es.json`
2. [ ] Añadir traducción en `en.json`
3. [ ] Usar estructura de sección (`nav.`, `home.`, etc.)
4. [ ] Usar `$t('key')` en template, nunca texto hardcodeado
5. [ ] Verificar en ambos idiomas

## Anti-patrones

| Evitar | Usar |
|--------|------|
| `<p>Hola mundo</p>` | `<p>{{ $t('greeting') }}</p>` |
| `href="/about"` | `:to="localePath('/about')"` |
| Claves planas: `aboutTitle` | Claves anidadas: `about.title` |

