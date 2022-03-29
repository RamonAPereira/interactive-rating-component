<template>
  <the-rating v-if="rate === 0" @emit-rate="setRate"></the-rating>
  <the-feedback v-else :rate="rate"></the-feedback>
</template>

<script>
import TheRating from "./components/rating/TheRating.vue";
import TheFeedback from "./components/feedback/TheFeedback.vue";
export default {
  emits: ["emit-rate"],
  components: {
    TheRating,
    TheFeedback,
  },
  data() {
    return {
      rate: 0,
    };
  },
  methods: {
    setRate(rate) {
      this.rate = rate;
    },
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
