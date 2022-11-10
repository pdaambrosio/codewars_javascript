function toCamelCase(str) {
  /**
   * Using a regular expression to find all instances of a hyphen or underscore followed by a character.
   * It then replaces that with the character that was matched, but in upper case.
   * @param {string} str - The string to convert to camel case.
   * @return {string} - The string converted to camel case.
   * @example
   * toCamelCase("the-stealth-warrior"); // returns "theStealthWarrior"
   * toCamelCase("The_Stealth_Warrior"); // returns "TheStealthWarrior"
   */
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

console.log(toCamelCase("the-stealth-warrior")); // "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")); // "TheStealthWarrior"
console.log(toCamelCase("A-B-C")); // "ABC"
console.log(toCamelCase("")); // ""
