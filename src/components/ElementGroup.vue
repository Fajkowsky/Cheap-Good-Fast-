<template>
  <div id="element-group">
    <p>element-group</p>
    <element-item
      v-for="key in getKeys()"
      :key="key"
      :value="key"
      :state="state[key]"
      @click.native="click(key)"
    />
  </div>
</template>

<script>
import ElementItem from '@/components/ElementItem.vue';
import computeState from '@/utils';

export default {
  name: 'ElementGroup',
  components: { ElementItem },
  data() {
    return {
      state: {
        cheap: false,
        good: false,
        fast: false,
      },
    };
  },
  methods: {
    getKeys() {
      return Object.keys(this.state);
    },
    click(value) {
      this.state = computeState(value, this.state);
    },
  },
};
</script>

<style lang="scss">
  #element-group {
  }
</style>
