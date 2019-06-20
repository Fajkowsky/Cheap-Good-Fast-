<template>
  <div id="element-item">
    element-item {{value}} {{state}}
  </div>
</template>

<script>
export default {
  name: 'ElementItem',
  props: {
    value: {
      type: String,
      required: true,
    },
    state: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  #element-item {
  }
</style>
