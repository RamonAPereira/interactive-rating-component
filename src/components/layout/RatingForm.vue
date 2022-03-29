<template>
  <form @click.prevent="">
    <div class="form-control">
      <ul>
        <li><button class="rate">1</button></li>
        <li><button class="rate">2</button></li>
        <li><button class="rate">3</button></li>
        <li><button class="rate">4</button></li>
        <li><button class="rate">5</button></li>
      </ul>
    </div>
    <div class="form-control">
      <base-button>Submit</base-button>
    </div>
  </form>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
export default {
  components: { BaseButton },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rate {
  background-color: hsl(213, 19%, 18%);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: hsl(217, 12%, 63%);
}
</style>
