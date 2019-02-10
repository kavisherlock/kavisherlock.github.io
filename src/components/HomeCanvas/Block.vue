<script>
import Colour from './Colour';

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
    isHit: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      colour: new Colour(220, 208, 255),
      ink: 0,
      rotate: 0,
      xPixels: this.x * 31,
      yPixels: this.y * 31,
    };
  },

  computed: {},

  render() { // eslint-disable-line vue/require-render-return
    // Since the parent canvas has to mount first, it's *possible* that the context may not be
    // injected by the time this render function runs the first time.
    if (!this.provider.context) return;
    const ctx = this.provider.context;

    const borderColour = new Colour(this.colour.r, this.colour.g, this.colour.b);
    borderColour.add(30);

    ctx.fillStyle = this.colour.toRgba(1);
    ctx.strokeStyle = 'rgba(255,255,255, 0.2)';

    ctx.save();

    ctx.translate(((this.xPixels) + 15), ((this.yPixels) + 15));
    if (this.rotate > 0) {
      ctx.rotate((Math.PI / 180) * this.rotate);
    }
    ctx.fillRect(-15, -15, 30, 30);

    const sizeDiff = Math.round((Math.floor(30 / 2)) * (this.ink / 200));

    ctx.lineWidth = sizeDiff;

    if (sizeDiff > 0) {
      ctx.strokeRect(-15 + (sizeDiff / 2), -15 + (sizeDiff / 2), 30 - (sizeDiff), 30 - (sizeDiff));
    }

    if (this.rotate > 0) {
      this.rotate += 10;
    }
    if (this.rotate > 90) {
      this.rotate = 0;
    }
    ctx.restore();
  },
};
</script>
