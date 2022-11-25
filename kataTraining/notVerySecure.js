function alphanumeric(string) {
  /**
   * If the string is alphanumeric, return true, else return false.
   * @param string - the string to be tested
   * @returns A boolean value.
   */
  return /^[a-z0-9]+$/i.test(string);
}

console.log(alphanumeric("Mazinkaiser")); // true
console.log(alphanumeric("hello world_")); // false
console.log(alphanumeric("PassW0rd")); // true
console.log(alphanumeric("     ")); // false
