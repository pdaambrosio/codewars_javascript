function solution(number) {
  /**
   * We loop through the romanNumerals object, and for each key, we add the key to the result string as
   * many times as the number divided by the value of the key
   * @param number - the number to be converted to a roman numeral
   * @returns the roman numeral equivalent of the number passed in.
   */
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = "";
  for (let key in romanNumerals) {
    result += key.repeat(Math.floor(number / romanNumerals[key]));
    number %= romanNumerals[key];
  }
  return result;
}

console.log(solution(1)); // I
console.log(solution(4)); // IV
console.log(solution(6)); // VI
console.log(solution(14)); // XIV
console.log(solution(21)); // XXI
console.log(solution(89)); // LXXXIX
