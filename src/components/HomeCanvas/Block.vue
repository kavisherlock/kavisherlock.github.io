<script>
import Colour from './Colour';
import EventBus from '../../event-bus';

export default {
  inject: ['provider'],
  props: {
    // Start coordinates (percentage of canvas dimensions).
    x: {
      type: Number,
      default: 0,
    },
    y: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      xPixels: this.x * 31,
      yPixels: this.y * 31,
    };
  },

  computed: {
    rotation() {
      return this.$store.state.grid[this.y][this.x].rotation;
    },
    ink() {
      return this.$store.state.grid[this.y][this.x].ink;
    },
    colour() {
      return this.$store.state.grid[this.y][this.x].colour;
    },
    neighbours() {
      const neighbours = [];
      if (this.x < 15) {
        neighbours.push(this.$store.state.grid[this.y][this.x + 1]);
      }
      if (this.y < 15) {
        neighbours.push(this.$store.state.grid[this.y + 1][this.x]);
      }
      if (this.x > 0) {
        neighbours.push(this.$store.state.grid[this.y][this.x - 1]);
      }
      if (this.y > 0) {
        neighbours.push(this.$store.state.grid[this.y - 1][this.x]);
      }
      return neighbours;
    },
  },

  created() {
    EventBus.$on('redraw-canvas', () => {
      this.updateInkAndColour();
      this.draw();
    });
  },

  methods: {
    updateInkAndColour() {
      const bestNeighbour = this.getBestNeightbour();
      if (bestNeighbour.ink > this.ink && bestNeighbour.ink > 1) {
        this.$store.commit('stepTowardsColour', { x: this.x, y: this.y, targetColour: bestNeighbour.colour });
        this.$store.commit('updateInk', { x: this.x, y: this.y, ink: bestNeighbour.ink * 0.7 });
        this.$store.commit('updateInk', {
          x: bestNeighbour.x,
          y: bestNeighbour.y,
          ink: Math.max(0, (bestNeighbour.ink - Math.round(this.ink / 50))),
        });
      } else if (this.ink > 0) {
        this.$store.commit('updateInk', { x: this.x, y: this.y, ink: this.ink - 1 });
      }

      if (this.ink < 10 && !this.colour.equals(new Colour(255, 240, 245))) {
        this.$store.commit('stepTowardsColour', { x: this.x, y: this.y, targetColour: new Colour(255, 240, 245) });
      }
    },

    draw() {
      // Since the parent canvas has to mount first, it's *possible* that the context may not be
      // injected by the time this render function runs the first time.
      if (!this.provider.context) return;
      const ctx = this.provider.context;

      const borderColour = new Colour(this.colour.r, this.colour.g, this.colour.b);
      borderColour.add(-60);

      ctx.fillStyle = this.colour.toRgba(1);
      ctx.strokeStyle = borderColour.toRgba(0.5);

      ctx.save();

      ctx.translate(((this.xPixels) + 15), ((this.yPixels) + 15));
      if (this.rotation > 0) {
        ctx.rotate((Math.PI / 180) * this.rotation);
      }
      ctx.fillRect(-15, -15, 30, 30);

      const sizeDiff = Math.round((Math.floor(30 / 2)) * (this.ink / 200));

      ctx.lineWidth = sizeDiff;

      if (sizeDiff > 0) {
        ctx.strokeRect(-15 + (sizeDiff / 2), -15 + (sizeDiff / 2), 30 - (sizeDiff), 30 - (sizeDiff));
      }

      if (this.rotation > 0) {
        this.$store.commit('updateRotation', { x: this.x, y: this.y, rotation: this.rotation + 30 });
      }
      if (this.rotation > 90) {
        this.$store.commit('updateRotation', { x: this.x, y: this.y, rotation: 0 });
      }

      if (this.ink > 0) {
        this.$store.commit('updateInk', { x: this.x, y: this.y, ink: this.ink - 10 });
      }
      ctx.restore();
    },

    getBestNeightbour() {
      let bestNeighbour = this.neighbours[0];
      this.neighbours.forEach((neighbour) => {
        if (neighbour.ink > bestNeighbour.ink) {
          bestNeighbour = neighbour;
        }
      });
      return bestNeighbour;
    },
  },
  render() {}, // eslint-disable-line vue/require-render-return
};
</script>
