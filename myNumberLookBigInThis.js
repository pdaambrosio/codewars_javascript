function narcissistic(value) {
  /**
   * Determine if a number is narcissistic
   * @param {number} value
   * @return {boolean}
   * @example
   * narcissistic(7) // returns true
   * narcissistic(371) // returns true
   * narcissistic(122) // returns false
   */
  let sum = 0;
  let num = value;
  let length = num.toString().length;
  while (num > 0) {
    sum += Math.pow(num % 10, length);
    num = Math.floor(num / 10);
  }
  return sum === value;
}

console.log(narcissistic(7));
console.log(narcissistic(371));
console.log(narcissistic(122));
console.log(narcissistic(4887));
