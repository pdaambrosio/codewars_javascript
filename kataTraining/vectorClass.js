class Vector {
  constructor(arr) {
    this.arr = arr;

    this.toString = function () {
      return "(" + this.arr.join(",") + ")";
    };

    this.equals = function (calledEquals) {
      return this.arr.length === calledEquals.length;
    };
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
    return new Vector(result).arr;
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
    return new Vector(result).arr;
  }

  dot(calledDot) {
    calledDot = calledDot.arr;
    let result = 0;

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

// var a = new Vector([1, 2, 3]);
// var b = new Vector([3, 4, 5]);
// var c = new Vector([5, 6, 7, 8]);

// console.log(a.add(b));
// console.log(a.subtract(b));
// console.log(a.dot(b));
// console.log(a.norm());
// console.log(a.equals(new Vector([4, 6])));
// console.log(a.add(c));

var a = new Vector([1, 2]);
var b = new Vector([3, 4]);

console.log(a.add(b).equals(new Vector([4, 6])));
