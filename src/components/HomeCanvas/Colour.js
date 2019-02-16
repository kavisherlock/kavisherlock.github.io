/* Colour */
class Colour {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  copy(other) {
    this.r = other.r;
    this.g = other.g;
    this.b = other.b;
  }

  equals(other) {
    return ((this.r === other.r) && (this.g === other.g) && (this.b === other.b));
  }

  add(n) {
    this.r = Math.min(255, this.r + n);
    this.g = Math.min(255, this.g + n);
    this.b = Math.min(255, this.b + n);
  }

  toRgba(alpha) {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${alpha})`;
  }

  stepTowardsColour(other, step = 1) {
    if (this.r < other.r) this.r += step;
    else if (this.r > other.r) this.r -= step;

    if (this.g < other.g) this.g += step;
    else if (this.g > other.g) this.g -= step;

    if (this.b < other.b) this.b += step;
    else if (this.b > other.b) this.b -= step;
  }
}

export default Colour;
