function addBinary(a, b) {
  /**
   * A function that takes two arguments, a and b.
   * Both arguments are integers.
   * The function returns the sum of a and b in binary form.
   * @param {number} a
   * @param {number} b
   * @return {string}
   * @example
   * addBinary(1, 2) // returns '11'
   * addBinary(5, 9) // returns '1110'
   */
  const sumNum = a + b;
  return sumNum.toString(2);
}

console.log(addBinary(1, 1)); // 10
console.log(addBinary(5, 9)); // 1110
