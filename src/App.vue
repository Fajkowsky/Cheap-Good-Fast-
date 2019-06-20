<template>
  <div id="app">
    <ElementGroup/>
  </div>
</template>

<script>
import ElementGroup from './components/ElementGroup.vue';

export default {
  name: 'app',
  components: {
    ElementGroup,
  },
};
</script>

<style lang="scss">
  @import '~normalize.css/normalize.css';

  #app {
    height: 100vh;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
