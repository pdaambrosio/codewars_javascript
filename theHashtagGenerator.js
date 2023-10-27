function generateHashtag(str) {
  /**
   * If the string is empty or contains only whitespace, return false. Otherwise, capitalize the first
   * letter of each word, add a # to the beginning, and return the result
   * @param str - the string to be converted into a hashtag
   * @returns a string that is the hashtag of the input string.
   */
  if (/^\s*$/.test(str)) return false;
  let result = "#";
  str.split(" ").forEach((word) => {
    result += word.charAt(0).toUpperCase() + word.slice(1);
  });
  return result.length > 140 ? false : result;
}

console.log(generateHashtag("")); // false
console.log(generateHashtag(" ".repeat(200))); // false
console.log(generateHashtag("Do We have A Hashtag")); // #DoWeHaveAHashtag
console.log(generateHashtag("Codewars")); // #Codewars
console.log(generateHashtag("Codewars Is Nice")); // #CodewarsIsNice
console.log(generateHashtag("Codewars is nice")); // #CodewarsIsNice
console.log(generateHashtag("code" + " ".repeat(140) + "wars")); // #CodeWars
console.log(generateHashtag("c n i")); // #CNI
