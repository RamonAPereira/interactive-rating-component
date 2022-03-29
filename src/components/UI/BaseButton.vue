<template>
  <button>
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  border-radius: 20px;
  background: hsl(25, 97%, 53%);
  width: 100%;
  border: none;
  height: 40px;
  text-transform: uppercase;
  color: hsl(0, 0%, 100%);
  font-family: "Overpass", sans-serif;
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: 2px;
}
</style>
