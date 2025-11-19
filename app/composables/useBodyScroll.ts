/**
 * Composable para controlar el scroll del body
 * Útil para modales, menús móviles, etc.
 *
 * @returns Objeto con funciones `lock` y `unlock` para controlar el scroll
 */
export const useBodyScroll = (): {
  lock: () => void;
  unlock: () => void;
} => {
  /**
   * Bloquea el scroll del body estableciendo overflow: hidden
   */
  const lock = (): void => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  /**
   * Desbloquea el scroll del body restaurando el overflow original
   */
  const unlock = (): void => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  };

  // Cleanup on unmount - asegura que el scroll se restaure
  onUnmounted(() => {
    unlock();
  });

  return {
    lock,
    unlock,
  };
};

