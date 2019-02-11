<template>
  <div>
    <canvas
      ref="my-canvas"
      id="my-canvas"
      width="500"
      height="500"
      @click="handleMouseClick"
      @mousemove="handleMouseMove"
      @mouseover="handleMouseOver"
      @mouseleave="handleMouseLeave"
    >
      <Grid />
    </canvas>
    <p id="subtext">Try moving your mouse over it, clicking, or typing</p>
  </div>
</template>

<script>
import Grid from './Grid.vue';
import EventBus from '../../event-bus';

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
      interval: null,
      currX: undefined,
      currY: undefined,
      lastX: undefined,
      lastY: undefined,
    };
  },

  provide() {
    return {
      provider: this.provider,
    };
  },

  mounted() {
    this.provider.context = this.$refs['my-canvas'].getContext('2d');
    EventBus.$emit('redraw-canvas');
    setInterval(this.tick, 30);
  },

  methods: {
    handleMouseClick(e) {
      this.currX = Math.floor(e.offsetX / 31);
      this.currY = Math.floor(e.offsetY / 31);
      this.lastX = this.currX;
      this.lastY = this.currY;

      EventBus.$emit('block-hit', { x: this.currX, y: this.currY });
    },

    handleMouseMove(e) {
      this.currX = Math.floor(e.offsetX / 31);
      this.currY = Math.floor(e.offsetY / 31);

      if ((this.lastX === undefined && this.lastY === undefined)
        || (this.currX !== this.lastX || this.currY !== this.lastY)) {
        EventBus.$emit('block-hit', { x: this.currX, y: this.currY });
        this.lastX = this.currX;
        this.lastY = this.currY;
      }
    },

    handleMouseOver() {
      // this.interval = setInterval(this.tick, 30);
    },

    handleMouseLeave() {
      this.lastX = undefined;
      this.lastY = undefined;
    },

    tick() {
      this.provider.context.clearRect(0, 0, 600, 600);
      this.provider.context.save();
      EventBus.$emit('redraw-canvas');

      this.provider.context.restore();
    },
  },
};
</script>

<style>
  #subtext {
    margin-top: -5px;
  }
</style>
