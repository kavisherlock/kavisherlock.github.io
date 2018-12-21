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

  stepTowardsColour(other) {
    if (this.r < other.r) this.r += 1;
    else if (this.r > other.r) this.r -= 1;

    if (this.g < other.g) this.g += 1;
    else if (this.g > other.g) this.g -= 1;

    if (this.b < other.b) this.b += 1;
    else if (this.b > other.b) this.b -= 1;
  }
}

export default Colour;
