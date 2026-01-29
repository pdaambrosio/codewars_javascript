const digitalRoot = (n) => {
  /**
   * We take the sum of the digits of a number until we get a single digit
   * @param n - the number to be reduced
   * @returns The digital root of the number.
   */
  while (n > 9) {
    n = n
      .toString()
      .split("")
      .reduce((a, b) => parseInt(a) + parseInt(b));
  }
  return n;
};

console.log(digitalRoot(16)); // 7
console.log(digitalRoot(456)); // 6
console.log(digitalRoot(132189)); // 6
console.log(digitalRoot(493193)); // 2
