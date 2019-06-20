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
    <p>{{ meaning }}</p>
  </div>
</template>

<script>
import ElementItem from '@/components/ElementItem.vue';
import { computeState, createState } from '@/state';
import getMeaning from '@/meaning';

export default {
  name: 'ElementGroup',
  components: { ElementItem },
  data() {
    return {
      state: createState(),
      meaning: getMeaning(),
    };
  },
  methods: {
    getKeys() {
      return Object.keys(this.state);
    },
    click(value) {
      this.stateChange(value);
      this.meaningChange();
    },
    stateChange(value) {
      this.state = computeState(value, this.state);
    },
    meaningChange() {
      this.meaning = getMeaning(this.state);
    },
  },
};
</script>

<style lang="scss">
  #element-group {
  }
</style>
