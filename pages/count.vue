<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>

<script>
export default {
  setup() {
    const { count, increment } = useCount();

    return {
      count,
      increment,
    };
  },
};
</script>

<style lang="">
/*  */
</style>
