/* A Vector is an array of numbers that can be added, subtracted, dotted, and normed. */
class Vector {
  constructor(arr) {
    /**
     * The constructor function takes an array as an argument and assigns it to the property arr.
     * @param arr - The array to be sorted.
     */
    this.arr = arr;
  }

  toString() {
    return "(" + this.arr.join(",") + ")";
  }

  equals(calledEquals) {
    calledEquals = calledEquals.arr;
    let result = true;

    if (calledEquals.length !== this.arr.length) {
      return false;
    }

    for (let i = 0; i < calledEquals.length; i++) {
      if (calledEquals[i] !== this.arr[i]) {
        result = false;
      }
    }
    return result;
  }

  add(calledAdd) {
    calledAdd = calledAdd.arr;
    let result = [];

    if (calledAdd.length !== this.arr.length) {
      throw new Error("Error");
    }

    for (let i = 0; i < calledAdd.length; i++) {
      result[i] = this.arr[i] + calledAdd[i];
    }
    return new Vector(result);
  }

  subtract(calledSubtract) {
    calledSubtract = calledSubtract.arr;
    let result = [];

    if (calledSubtract.length !== this.arr.length) {
      throw new Error("Error");
    }

    for (let i = 0; i < calledSubtract.length; i++) {
      result[i] = this.arr[i] - calledSubtract[i];
    }
    return new Vector(result);
  }

  dot(calledDot) {
    calledDot = calledDot.arr;
    let result = 0;

    if (calledDot.length !== this.arr.length) {
      throw new Error("Error");
    }

    for (let i = 0; i < calledDot.length; i++) {
      result += this.arr[i] * calledDot[i];
    }
    return result;
  }

  norm() {
    let result = 0;
    for (let i = 0; i < this.arr.length; i++) {
      result += this.arr[i] * this.arr[i];
    }
    return Math.sqrt(result);
  }
}

let a = new Vector([1, 2, 3]);
let b = new Vector([3, 4, 5]);
let c = new Vector([5, 6, 7, 8]);

console.log(a.add(b)); // should return Vector([4,6,8])
console.log(a.subtract(b)); // should return Vector([-2,-2,-2])
console.log(a.dot(b)); // should return 1*3+2*4+3*5 = 26
console.log(a.norm()); // should return sqrt(1^2+2^2+3^2)=sqrt(14)
console.log(a.equals(new Vector([4, 6]))); // should return false
console.log(a.add(c)); // throws an error
