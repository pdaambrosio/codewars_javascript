function duplicateCount(text) {
  /**
   * The function counts the number of duplicate characters in a string.
   * @param {string} text
   * return {number}
   * @example
   * duplicateCount('abcde') // returns 0
   * duplicateCount('aabbcde') // returns 2
   */
  let count = 0;
  let duplicate = [];
  text = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    if (
      text.indexOf(text[i]) !== text.lastIndexOf(text[i]) &&
      duplicate.indexOf(text[i]) === -1
    ) {
      count++;
      duplicate.push(text[i]);
    }
  }
  return count;
}

console.log(duplicateCount("")); // 0
console.log(duplicateCount("abcde")); // 0
console.log(duplicateCount("aabbcde")); // 2
console.log(duplicateCount("aabBcde")); // 2
console.log(duplicateCount("Indivisibility")); // 1
console.log(duplicateCount("Indivisibilities")); // 2
console.log(duplicateCount("aA11")); // 2
console.log(duplicateCount("ABBA")); // 2
