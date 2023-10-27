function duplicateEncode(word) {
  /**
   * We loop through the word, and if the index of the current letter is the same as the last index of
   * the current letter, we add an open parenthesis to the result string, otherwise we add a closed
   * parenthesis
   * @param word - the word to encode
   * @returns a string of parentheses.
   */
  word = word.toLowerCase();
  let result = "";
  for (let i = 0; i < word.length; i++) {
    if (word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
      result += "(";
    } else {
      result += ")";
    }
  }
  return result;
}

console.log(duplicateEncode("din")); // (((
console.log(duplicateEncode("recede")); // ()()()
console.log(duplicateEncode("Success")); // )())())
console.log(duplicateEncode("(( @")); // ))((
console.log(duplicateEncode("(( @")); // ))((
