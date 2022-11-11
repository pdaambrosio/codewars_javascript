const maxSequence = function (arr) {
  /**
   * For each item in the array, add it to the previous item if it's greater than 0, otherwise start a
   * new sequence.
   * @param arr - an array of integers
   * @returns The maximum sum of a subarray.
   */
  let preValue = 0;
  let maxValue = 0;
  for (let i = 0; i < arr.length; i++) {
    preValue = Math.max(0, preValue + arr[i]);
    maxValue = Math.max(maxValue, preValue);
  }
  return maxValue;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSequence([])); // 0
console.log(maxSequence([-1, -2, -3])); // 0
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSequence([11])); // 11
console.log(maxSequence([-32])); // 0
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
