<template>
  <base-card>
    <div>
      <img src="../../assets/illustration-thank-you.svg" alt="" />
      <span>Your selected {{ rate }} of 5</span>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  </base-card>
</template>

<script>
export default {
  props: ["rate"],
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1.5rem;
}
img {
  width: 13rem;
}
span {
  display: inline-block;
  background-color: hsl(213, 19%, 18%);
  color: hsl(25, 97%, 53%);
  border-radius: 20px;
  padding: 0.5rem 1rem;
}
h2 {
  color: hsl(0, 0%, 100%);
}
p {
  color: hsl(217, 12%, 63%);
}
</style>
