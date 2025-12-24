---
description: Contexto general del proyecto antoniomateos.dev - portafolio personal
alwaysApply: true
---

# Proyecto antoniomateos.dev

Portafolio personal de Antonio Mateos, desarrollador frontend.

## Stack Tecnológico

- **Framework**: Nuxt 4 + Vue 3
- **Lenguaje**: TypeScript
- **Gestor de paquetes**: pnpm (nunca npm ni yarn)
- **Estilos**: CSS nativo con nesting (sin preprocesadores)
- **i18n**: @nuxtjs/i18n (español por defecto)
- **Linting**: ESLint con configuración de Nuxt

## Comandos Principales

```bash
pnpm dev        # Servidor de desarrollo
pnpm build      # Build de producción
pnpm generate   # Generación estática
pnpm preview    # Preview del build
```

## Estructura del Proyecto

```
app/
├── components/     # Componentes Vue
├── composables/    # Lógica reutilizable
├── layouts/        # Layouts de página
├── pages/          # Rutas automáticas
└── assets/
    └── css/        # Tokens, reset, tipografía
i18n/
└── locales/        # Traducciones (es.json, en.json)
```

## Convenciones Generales

1. **Idioma del código**: Inglés para variables, funciones y componentes
2. **Idioma de la UI**: Español como idioma principal
3. **Respuestas del asistente**: Siempre en español
4. **Arquitectura**: Mobile-first, componentes pequeños y enfocados
5. **Estilo visual**: Neobrutalist con bordes sólidos y sombras duras

## Archivos de Referencia

- @nuxt.config.ts - Configuración de Nuxt
- @app/assets/css/tokens.css - Design tokens
- @docs/CSS_METHODOLOGY.md - Metodología CSS completa
