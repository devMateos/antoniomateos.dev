---
description: Estándares para composables de Vue/Nuxt
globs:
  - "app/composables/**"
alwaysApply: false
---

# Composables

## Convenciones

| Aspecto | Estándar |
|---------|----------|
| Ubicación | `app/composables/` |
| Nomenclatura | Prefijo `use`: `useFeatureName.ts` |
| Export | Named export (no default) |
| Documentación | JSDoc completo |
| Tipado | Retorno explícito |

## Estructura Base

```typescript
/**
 * Descripción breve del composable
 * 
 * @example
 * const { value, action } = useFeatureName();
 * action();
 * 
 * @returns Objeto con estado y acciones
 */
export const useFeatureName = (): {
  value: Ref<boolean>;
  action: () => void;
} => {
  // Estado
  const value = ref(false);

  // Acciones
  const action = (): void => {
    value.value = !value.value;
  };

  // Cleanup
  onUnmounted(() => {
    // Limpiar recursos
  });

  return {
    value,
    action,
  };
};
```

## Ejemplo Real del Proyecto

Referencia: @app/composables/useBodyScroll.ts

```typescript
/**
 * Composable para controlar el scroll del body
 * Útil para modales, menús móviles, etc.
 *
 * @returns Objeto con funciones lock y unlock
 */
export const useBodyScroll = (): {
  lock: () => void;
  unlock: () => void;
} => {
  const lock = (): void => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const unlock = (): void => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  };

  onUnmounted(() => {
    unlock();
  });

  return { lock, unlock };
};
```

## Checklist

- [ ] Nombre con prefijo `use`
- [ ] JSDoc con descripción y @example
- [ ] Tipo de retorno explícito
- [ ] Verificación SSR: `typeof document !== "undefined"`
- [ ] Cleanup en `onUnmounted` si hay side effects
- [ ] Named export

## Patrones Comunes

### Estado con persistencia
```typescript
export const usePersistedState = <T>(key: string, initial: T) => {
  const state = ref<T>(initial);
  
  onMounted(() => {
    const stored = localStorage.getItem(key);
    if (stored) state.value = JSON.parse(stored);
  });

  watch(state, (val) => {
    localStorage.setItem(key, JSON.stringify(val));
  }, { deep: true });

  return state;
};
```

### Event listener con cleanup
```typescript
export const useKeyboard = (key: string, callback: () => void) => {
  const handler = (e: KeyboardEvent) => {
    if (e.key === key) callback();
  };

  onMounted(() => {
    window.addEventListener('keydown', handler);
  });

  onUnmounted(() => {
    window.removeEventListener('keydown', handler);
  });
};
```

