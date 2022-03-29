<template>
  <section>
    <slot></slot>
  </section>
</template>

<style scoped>
section {
  background-color: hsl(216, 12%, 8%);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 0 0.5rem;
  max-width: 30rem;
  padding: 1.5rem;
}
@media (min-width: 800px) {
  section {
    padding: 2rem;
    max-width: 26rem;
  }
}
</style>
