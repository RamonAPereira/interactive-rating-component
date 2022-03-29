<template>
  <button>
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  background: hsl(25, 97%, 53%);
  border-radius: 20px;
  border: none;
  color: hsl(0, 0%, 100%);
  font-family: "Overpass", sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  height: 40px;
  letter-spacing: 2px;
  text-transform: uppercase;
  width: 100%;

  &:focus {
    background-color: hsl(0, 0%, 100%);
    color: hsl(25, 97%, 53%);
    transition: 0.2s all ease-in;
  }
}
</style>
