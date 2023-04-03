function reverseWords(str) {
  /**
   * Split the string into an array of words, reverse each word, then join the array back into a string
   * @param str - the string to be reversed
   * @returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   */
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords("This is an example!"));
console.log(reverseWords("double  spaces"));
