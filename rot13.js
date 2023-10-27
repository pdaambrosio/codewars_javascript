const rot13 = (message) => {
  /**
   * It takes a string, splits it into an array of characters, maps each character to its corresponding
   * character in the ROT13 alphabet, and then joins the array back into a string
   * @param message - the string to be encrypted
   * @returns a string that is the result of the message being passed through the rot13 cipher.
   */
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabetRot13 = "NOPQRSTUVWXYZABCDEFGHIJKLM";
  return message
    .split("")
    .map((char) => {
      if (char.toUpperCase() === char) {
        const index = alphabet.indexOf(char);
        return index === -1 ? char : alphabetRot13[index];
      } else {
        const index = alphabet.indexOf(char.toUpperCase());
        return index === -1 ? char : alphabetRot13[index].toLowerCase();
      }
    })
    .join("");
};

console.log(rot13("test")); // grfg
console.log(rot13("Test")); // Grfg
console.log(rot13("Codewars")); // Pbzcnalrf
console.log(rot13("Ruby is cool!")); // Ehol vf pbby!
console.log(rot13("10+2 is twelve.")); // 10+2 vf gjryir.
console.log(rot13("abcdefghijklmnopqrstuvwxyz")); // nopqrstuvwxyzabcdefghijklm
