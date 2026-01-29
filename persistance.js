/**
 * The persistence function calculates the number of times the digits of a given number need to be
 * multiplied together until the result is a single digit.
 * @param num - The parameter `num` represents a positive integer for which we want to calculate its
 * persistence.
 * @returns the number of times it takes to reduce the given number to a single digit through
 * multiplication.
 */
function persistence(num) {
  let count = 0;
  while (num > 9) {
    num = num.toString().split('').reduce((a, b) => a * b);
    count++;
  }

  return count;
}

console.log(persistence(39)); // 3
console.log(persistence(999)); // 4
console.log(persistence(4)); // 0

/**
 * The best solution on codewars:
 * function persistence(num) {
 *    var times = 0;
 *    num = num.toString();
 *    while (num.length > 1) {
 *      times++;
 *      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
 *    }
 *    return times;
 * }
 */