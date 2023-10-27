/* "A Block is a rectangular solid with a width, length, and height."

The constructor takes an array of three numbers as an argument. The first number is the width, the
second is the length, and the third is the height */
class Block {
  constructor(data) {
    this.data = data;
    this.width = data[0];
    this.length = data[1];
    this.height = data[2];
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getHeight() {
    return this.height;
  }

  getVolume() {
    return this.width * this.length * this.height;
  }

  getSurfaceArea() {
    return (
      2 * this.width * this.length +
      2 * this.width * this.height +
      2 * this.length * this.height
    );
  }
}

let b = new Block([2, 4, 6]);
console.log(b.getWidth()); // 2
console.log(b.getLength()); // 4
console.log(b.getHeight()); // 6
console.log(b.getVolume()); // 48
console.log(b.getSurfaceArea()); // 88
