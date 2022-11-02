function addBinary(a, b) {
  /* A function that takes two arguments, a and b. */
  const sumNum = a + b;
  return sumNum.toString(2);
}

console.log(addBinary(1, 1)); // 10
console.log(addBinary(5, 9)); // 1110
