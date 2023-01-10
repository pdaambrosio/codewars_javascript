class Vector {
  constructor(arr) {
    this.arr = arr;
  }

  add(calledAdd) {
    calledAdd = calledAdd.arr;
    let result = [];
    if (calledAdd.length !== this.arr.length) {
      throw new Error("Error");
    }

    for (let i = 0; i < calledAdd.length; i++) {
      result[i] = this.arr[i] += calledAdd[i];
    }
    return new Vector(result);
  }
}

let caller_array = new Vector([3, 6, 0]);
let called_array = new Vector([1, 5, 0]);

console.log(caller_array.add(called_array).arr);
