<template>
  <div id="element-group">
    <p>element-group</p>
    <element-item v-for="key in keys" :key="key"/>
  </div>
</template>

<script>
import ElementItem from '@/components/ElementItem.vue';

export default {
  name: 'ElementGroup',
  components: { ElementItem },
  data() {
    return {
      keys: [1, 2],
    };
  },
};
</script>

<style lang="scss">
  #element-group {
  }
</style>
