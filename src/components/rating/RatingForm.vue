<template>
  <form @click.prevent="">
    <div class="form-control">
      <ul>
        <li>
          <button class="rate" value="1" type="button" @click="activeButton(1)">
            1
          </button>
        </li>
        <li>
          <button class="rate" value="2" type="button" @click="activeButton(2)">
            2
          </button>
        </li>
        <li>
          <button class="rate" value="3" type="button" @click="activeButton(3)">
            3
          </button>
        </li>
        <li>
          <button class="rate" value="4" type="button" @click="activeButton(4)">
            4
          </button>
        </li>
        <li>
          <button class="rate" value="5" type="button" @click="activeButton(5)">
            5
          </button>
        </li>
      </ul>
    </div>
    <div class="form-control">
      <base-button :disabled="rate === 0" @click="emitRate">Submit</base-button>
    </div>
  </form>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      rate: 0,
    };
  },
  methods: {
    activeButton(option) {
      this.rate = option;
    },
    emitRate() {
      this.$emit("emit-rate", this.rate);
    },
  },
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
