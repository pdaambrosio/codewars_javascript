function count(string) {
  /**
   * For each character in the string, if the character is not in the result object, add it to the result
   * object with a value of 1, otherwise increment the value of the character in the result object.
   * @param string - the string to be counted
   * @returns an object with the keys being the characters in the string and the values being the number
   * of times that character appears in the string.
   */
  let result = {};
  for (let letter of string) {
    if (result[letter] === undefined) {
      result[letter] = 1;
    } else {
      result[letter]++;
    }
  }
  return result;
}

console.log(count("aba")); // { a: 2, b: 1 }
console.log(count(""));
