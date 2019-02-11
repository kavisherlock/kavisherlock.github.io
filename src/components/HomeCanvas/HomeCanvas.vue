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
import letters from './letters';

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
      startMessageIndex: 0,
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
    this.interval = setInterval(this.tick, 30);

    this.startTimer = setInterval(this.startMessage, 300);
  },

  beforeDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    window.removeEventListener('keypress', this.handleKeyPress);
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

    handleKeyPress(e) {
      this.renderLetter(String.fromCharCode(e.which));
    },

    startMessage() {
      const message = 'welcome';
      if (message[this.startMessageIndex].match(/[a-z]/i) || message[this.startMessageIndex].match(/[0-9]/i)) {
        this.renderLetter(message[this.startMessageIndex]);
      }
      this.startMessageIndex += 1;

      if (this.startMessageIndex >= message.length) {
        clearInterval(this.startTimer);
        window.addEventListener('keypress', this.handleKeyPress);
      }
    },

    tick() {
      this.provider.context.clearRect(0, 0, 600, 600);
      this.provider.context.save();
      EventBus.$emit('redraw-canvas');

      this.provider.context.restore();
    },

    renderLetter(letter) {
      const toRender = letters[letter];
      for (let row = 0; row < 16; row += 1) {
        for (let col = 0; col < 16; col += 1) {
          if ((toRender[row] & 2 ** col) > 0) { // eslint-disable-line no-bitwise
            EventBus.$emit('block-hit', { x: col, y: row });
          }
        }
      }
    },
  },
};
</script>

<style>
  #subtext {
    margin-top: -5px;
  }
</style>
