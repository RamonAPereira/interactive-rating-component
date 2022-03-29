<template>
  <base-card>
    <base-icon></base-icon>
    <h1>How did we do?</h1>
    <p>
      Please let us know how we did with your support request. All feedback is
      appreciated to help us improve our offering!
    </p>
    <rating-form></rating-form>
  </base-card>
</template>

<script>
import RatingForm from "./RatingForm.vue";
export default {
  components: { RatingForm },
};
</script>

<style lang="scss" scoped>
h1 {
  color: hsl(0, 0%, 100%);
}
p {
  color: hsl(217, 12%, 63%);
}
</style>
