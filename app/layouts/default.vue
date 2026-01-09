<template>
  <div class="layout">
    <Header />
    <main class="main">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}

.main {
  flex: 1;
}

.layout:has(.about-page) {
  background-color: var(--color-bg);
}
</style>
