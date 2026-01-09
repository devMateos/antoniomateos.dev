# antoniomateos.dev

> A frontend developer who sometimes designs

[![Nuxt](https://img.shields.io/badge/Nuxt-4.2-00DC82?logo=nuxt.js&logoColor=white)](https://nuxt.com)
[![Vue](https://img.shields.io/badge/Vue-3.5-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red.svg)](LICENSE)

Sitio web personal de Antonio Mateos, desarrollador frontend. Un portfolio moderno y multiidioma construido con Nuxt 4, presentando proyectos destacados y experiencia profesional con un diseño inspirado en el estilo neobrutalista.

🌐 **[antoniomateos.dev](https://www.antoniomateos.dev)**

## ✨ Características

- 🎨 **Diseño Neobrutalista** - Interfaz moderna y llamativa con diseño único
- 🌍 **Multiidioma** - Español e inglés con detección automática del idioma del navegador
- 📱 **Responsive** - Diseño mobile-first optimizado para todos los dispositivos
- ⚡ **SSG/SSR** - Generación estática para máximo rendimiento
- 🔍 **SEO Optimizado** - Meta tags y estructura optimizada para motores de búsqueda
- 🖼️ **Optimización de Imágenes** - Carga eficiente con Nuxt Image

## 🚀 Stack Tecnológico

- **Framework:** [Nuxt 4](https://nuxt.com) - El framework de Vue intuitivo
- **Frontend:** [Vue 3](https://vuejs.org) - El framework progresivo de JavaScript
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org) - JavaScript con tipos
- **Estilos:** CSS puro - Sin dependencias adicionales
- **Animaciones:** CSS puro - Transiciones y animaciones nativas
- **i18n:** [@nuxtjs/i18n](https://i18n.nuxtjs.org) - Internacionalización para Nuxt
- **Linting:** [ESLint](https://eslint.org) - Código limpio y consistente
- **Imágenes:** [@nuxt/image](https://image.nuxt.com) - Optimización automática de imágenes
- **Gestor de Paquetes:** [pnpm](https://pnpm.io) - Rápido y eficiente

## 📁 Estructura del Proyecto

```
antoniomateos.dev/
├── app/                    # Código fuente de la aplicación
│   ├── components/         # Componentes Vue reutilizables
│   ├── pages/             # Páginas de la aplicación
│   │   ├── index.vue      # Página de inicio (/)
│   │   ├── about.vue      # Sobre mí (/about, /en/about)
│   │   └── portfolio.vue  # Portfolio (/portfolio, /en/portfolio)
│   ├── layouts/           # Layouts de la aplicación
│   ├── composables/       # Composables de Vue
│   ├── assets/            # Recursos (CSS, imágenes)
│   └── locales/           # Archivos de traducción (es, en)
├── public/                # Archivos estáticos
├── data/                  # Datos de proyectos (JSON)
├── nuxt.config.ts        # Configuración de Nuxt
├── tsconfig.json         # Configuración de TypeScript
├── eslint.config.mjs     # Configuración de ESLint
└── package.json          # Dependencias del proyecto
```

## 📄 Páginas

El sitio cuenta con las siguientes páginas:

- **Inicio** (`/`) - Página principal con presentación llamativa
- **Sobre mí** (`/about`) - Experiencia profesional y trayectoria
- **Portfolio** (`/portfolio`) - Proyectos destacados con tecnologías e imágenes
- **404** - Página de error personalizada

## 🌐 Internacionalización

El sitio está disponible en dos idiomas:

- **Español** (por defecto) - Rutas: `/`, `/about`, `/portfolio`
- **English** - Rutas: `/en`, `/en/about`, `/en/portfolio`

La aplicación detecta automáticamente el idioma del navegador del usuario y redirige a la versión correspondiente. El selector de idioma en el header permite cambiar entre idiomas manualmente.

## 🎨 Sistema de Diseño

El diseño está inspirado en el estilo **neobrutalista**, caracterizado por:

- Bordes gruesos y contrastes marcados
- Sombras pronunciadas
- Tipografía bold y llamativa
- Diseño mobile-first y completamente responsive

## 🛠️ Requisitos Previos

- **Node.js** >= 18.x
- **pnpm** >= 8.x (recomendado)

## 📦 Instalación

```bash
# Clonar el repositorio (si aplica)
git clone https://github.com/devMateos/antoniomateos.dev.git
cd antoniomateos.dev

# Instalar dependencias
pnpm install
```

## 🚀 Desarrollo

Inicia el servidor de desarrollo en `http://localhost:3000`:

```bash
pnpm dev
```

## 🏗️ Build

### Generación Estática (SSG)

Genera el sitio estático para producción:

```bash
pnpm generate
```

Los archivos generados estarán en el directorio `.output/public/`.

### Server-Side Rendering (SSR)

Compila la aplicación para producción con SSR:

```bash
pnpm build
```

### Vista Previa

Previsualiza la build de producción localmente:

```bash
pnpm preview
```

## 🌐 Deployment

El sitio está configurado para desplegarse en **Vercel** (o Netlify como alternativa).

### Despliegue en Vercel

1. Conecta tu repositorio con Vercel
2. Configura el proyecto:
   - **Framework Preset:** Nuxt.js
   - **Build Command:** `pnpm generate` (para SSG) o `pnpm build` (para SSR)
   - **Output Directory:** `.output/public` (para SSG)
3. Despliega

### Despliegue en Netlify

1. Conecta tu repositorio con Netlify
2. Configura el build:
   - **Build Command:** `pnpm generate`
   - **Publish Directory:** `.output/public`
3. Despliega

## 🔍 SEO

El sitio está optimizado para motores de búsqueda con:

- Meta tags dinámicos por página
- Open Graph tags para redes sociales
- Sitemap automático
- Robots.txt configurado
- URLs semánticas y limpias
- Optimización de imágenes con lazy loading

## 📊 Gestión de Contenido

Los proyectos del portfolio se gestionan mediante archivos JSON en el directorio `data/`. Cada proyecto incluye:

- **Título** - Nombre del proyecto
- **Descripción** - Breve descripción del proyecto
- **Tecnologías** - Stack tecnológico utilizado
- **Imágenes** - Screenshots o mockups del proyecto

## 🧪 Linting

Ejecuta ESLint para verificar la calidad del código:

```bash
pnpm lint
```

## 📝 Scripts Disponibles

```json
{
  "dev": "Inicia el servidor de desarrollo",
  "build": "Compila la aplicación para producción (SSR)",
  "generate": "Genera el sitio estático (SSG)",
  "preview": "Previsualiza la build de producción",
  "postinstall": "Prepara el entorno de Nuxt"
}
```

## 🗺️ Roadmap

Funcionalidades planificadas para el futuro:

- [ ] Páginas de detalle individuales para proyectos
- [ ] Sección de blog/artículos
- [ ] Formulario de contacto
- [ ] Integración con analytics
- [ ] Más páginas y contenido

## 📄 Licencia

© 2025 Antonio Mateos. Todos los derechos reservados.

Este proyecto es privado y no acepta contribuciones externas.

## 👤 Autor

**Antonio Mateos**

- Website: [antoniomateos.dev](https://www.antoniomateos.dev)
- GitHub: [@devMateos](https://github.com/devMateos)

---

Desarrollado con 💚 usando Nuxt 4
