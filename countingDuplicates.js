function duplicateCount(text) {
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
