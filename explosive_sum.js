/**
 * For each number from 1 to num, add the number of ways to reach that number to the number of ways to
 * reach the previous number.
 * @param num - the number we're trying to find the number of ways to sum to
 * @returns [1, 1, 2, 4, 8, 16, 32, 64, 128, 256]
 */
const sum = (num) => {
  const result = [1, ...new Array(num).fill(0)];

  for (let i = 1; i <= num; i++) {
    for (let j = i; j <= num; j++) {
      result[j] += result[j - i];
    }
  }

  return result[num];
};

console.log(sum(1));
console.log(sum(2));
console.log(sum(3));
console.log(sum(4));
console.log(sum(5));
console.log(sum(6));
console.log(sum(7));
