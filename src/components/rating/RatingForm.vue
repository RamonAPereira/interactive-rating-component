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
  align-items: center;
  display: flex;
  justify-content: space-between;
  list-style: none;
}

.rate {
  align-items: center;
  background-color: hsl(213, 19%, 18%);
  border-radius: 50%;
  border: none;
  color: hsl(217, 12%, 63%);
  cursor: pointer;
  display: flex;
  font-size: 1.2rem;
  height: 50px;
  justify-content: center;
  width: 50px;

  &:hover {
    background-color: hsl(216, 12%, 54%);
    color: hsl(0, 0%, 100%);
    transition: 0.2s all ease-in;
  }
  &:focus {
    background-color: hsl(25, 97%, 53%);
    color: hsl(0, 0%, 100%);
    transition: 0.1s all ease-in;
  }
}
</style>
