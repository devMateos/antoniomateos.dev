---
description: Estándares de TypeScript para Nuxt 4
globs:
  - "**/*.ts"
  - "**/*.vue"
alwaysApply: false
---

# TypeScript

## Reglas Fundamentales

1. **Nunca usar `any`** - Tipar explícitamente
2. **Preferir `interface`** sobre `type` para objetos
3. **Tipos de retorno explícitos** en funciones públicas
4. **Aprovechar auto-imports** de Nuxt

## Auto-imports Disponibles

Nuxt auto-importa estos sin necesidad de `import`:

### Vue
```typescript
ref, reactive, computed, watch, watchEffect
toRef, toRefs, unref
onMounted, onUnmounted, onBeforeMount, onBeforeUnmount
nextTick
```

### Nuxt
```typescript
useRoute, useRouter, navigateTo
useFetch, useAsyncData, useLazyFetch
useState, useRuntimeConfig
definePageMeta, defineNuxtComponent
```

### i18n
```typescript
useI18n, useLocalePath, useSwitchLocalePath
```

## Definición de Tipos

### Interfaces para objetos
```typescript
interface NavItem {
  label: string;
  to: string;
  icon?: string;
  isExternal?: boolean;
}

interface User {
  id: number;
  name: string;
  email: string;
}
```

### Types para uniones y utilidades
```typescript
type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type Nullable<T> = T | null;
type NavItemWithIcon = NavItem & { icon: string };
```

## Props y Emits Tipados

```typescript
// Props con interface
interface Props {
  title: string;
  items: NavItem[];
  isOpen?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
});

// Emits tipados
const emit = defineEmits<{
  close: [];
  select: [item: NavItem];
  update: [value: string, index: number];
}>();
```

## Funciones Tipadas

```typescript
// Función con tipos explícitos
const formatDate = (date: Date, locale: string = 'es-ES'): string => {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Función async
const fetchData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  return response.json();
};

// Event handlers
const handleClick = (event: MouseEvent): void => {
  event.preventDefault();
  // ...
};

const handleKeydown = (event: KeyboardEvent): void => {
  if (event.key === 'Escape') {
    // ...
  }
};
```

## Refs Tipados

```typescript
// Ref con tipo inferido
const count = ref(0);  // Ref<number>

// Ref con tipo explícito
const user = ref<User | null>(null);
const items = ref<NavItem[]>([]);

// Template ref
const inputRef = ref<HTMLInputElement | null>(null);
```

## Anti-patrones

| Evitar | Usar |
|--------|------|
| `const data: any = ...` | `const data: User = ...` |
| `function fn(x) { }` | `function fn(x: string): void { }` |
| `ref()` sin tipo para objetos | `ref<Type>(initial)` |
| `// @ts-ignore` | Resolver el error de tipos |
| `as any` | Type guards o tipos correctos |

## Type Guards

```typescript
const isNavItem = (item: unknown): item is NavItem => {
  return (
    typeof item === 'object' &&
    item !== null &&
    'label' in item &&
    'to' in item
  );
};

// Uso
if (isNavItem(data)) {
  console.log(data.label); // TypeScript sabe que es NavItem
}
```

