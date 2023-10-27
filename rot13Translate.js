const rot13 = (message) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabetRot13 = "NOPQRSTUVWXYZABCDEFGHIJKLM";
  return message
    .split("")
    .map((char) => {
      if (char.toUpperCase() === char) {
        const index = alphabetRot13.indexOf(char);
        return index === -1 ? char : alphabet[index];
      } else {
        const index = alphabetRot13.indexOf(char.toUpperCase());
        return index === -1 ? char : alphabet[index].toLowerCase();
      }
    })
    .join("");
};

console.log(rot13("grfg")); // test
console.log(rot13("Grfg")); // Test
console.log(rot13("Pbzcnalrf")); // Codewars
console.log(rot13("Ehol vf pbby!")); // Ruby is cool!
console.log(rot13("10+2 vf gjryir..")); // 10+2 is twelve.
console.log(rot13("nopqrstuvwxyzabcdefghijklm")); // abcdefghijklmnopqrstuvwxyz
