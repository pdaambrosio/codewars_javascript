function order(words) {
  /**
   * A function that takes a string of words.
   * The function returns the string of words in order.
   * @param {string} words
   * @return {string}
   * @example
   * order('is2 Thi1s T4est 3a') // returns 'Thi1s is2 3a T4est'
   * order('4of Fo1r pe6ople g3ood th5e the2') // returns 'Fo1r the2 g3ood 4of th5e pe6ople'
   */
  if (words.length === 0) return "";
  let arr = words.split(" ");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (Number(arr[i][j])) {
        result[arr[i][j] - 1] = arr[i];
      }
    }
  }
  return result.join(" ");
}

console.log(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // "Fo1r the2 g3ood 4of th5e pe6ople"
console.log(order("")); // ""
