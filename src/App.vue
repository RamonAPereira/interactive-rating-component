<template>
  <the-rating></the-rating>
</template>

<script>
import TheRating from "./components/layout/TheRating.vue";
export default {
  components: {
    TheRating,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap");
:root {
  font-size: 15px;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: "Overpass", sans-serif;
}

#app {
  align-items: center;
  background-color: #000;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
}
</style>
