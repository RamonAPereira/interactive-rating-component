<template>
  <section>
    <slot></slot>
  </section>
</template>

<style scoped>
section {
  background-color: hsl(216, 12%, 8%);
  max-width: 30rem;
  padding: 1.5rem;
  margin: 0 0.5rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
