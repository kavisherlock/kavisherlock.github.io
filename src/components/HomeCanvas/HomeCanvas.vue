<template>
  <div>
    <canvas
      ref="my-canvas"
      id="my-canvas"
      width="500"
      height="500"
    >
      <Grid />
    </canvas>
    <p id="subtext">Try moving your mouse over it, clicking, or typing</p>
  </div>
</template>

<script>
import Grid from './Grid.vue';

export default {
  name: 'my-canvas',
  components: {
    Grid,
  },

  data() {
    return {
      provider: {
        context: null,
      },
    };
  },

  provide() {
    return {
      provider: this.provider,
    };
  },

  mounted() {
    this.provider.context = this.$refs['my-canvas'].getContext('2d');

    // console.log('this.provider.context', this.provider.context);
  },
};
</script>

<style>
  #subtext {
    margin-top: -5px;
  }
</style>
