function zero(func) {
  /* Checking if the function is defined. If it is, it will return the function with the argument 0. If
    it is not, it will return 0. */
  return func ? func(0) : 0;
}

function one(func) {
  /* Checking if the function is defined. If it is, it will return the function with the argument 1. If
    not, it will return 1. */
  return func ? func(1) : 1;
}

function two(func) {
  /* Checking if the function is defined. If it is, it will return the function with the argument 2. If
    it is not, it will return 2. */
  return func ? func(2) : 2;
}

function three(func) {
  /* Checking if the function is defined. If it is, it will return the function with the argument 3. If
    it is not, it will return 3. */
  return func ? func(3) : 3;
}

function four(func) {
  /* Checking if the function is defined. If it is, it will return the function with the argument 4. If
    it is not, it will return 4. */
  return func ? func(4) : 4;
}

function five(func) {
  /* Checking if the function is defined. If it is, it will return the function with the argument 5. If
    it is not, it will return 5. */
  return func ? func(5) : 5;
}

function six(func) {
  /* Checking if the function is defined. If it is, it will return the function with the argument 6. If
    it is not, it will return 6. */
  return func ? func(6) : 6;
}

function seven(func) {
  /* Checking if the function is defined. If it is, it will return the function with the argument 7. If
    it is not, it will return 7. */
  return func ? func(7) : 7;
}

function eight(func) {
  /* Checking if the function is defined. If it is, it will return the function with the argument 8. If
    it is not, it will return 8. */
  return func ? func(8) : 8;
}

function nine(func) {
  /* Checking if the function is defined. If it is, it will return the function with the argument 9. If
    it is not, it will return 9. */
  return func ? func(9) : 9;
}

function plus(b) {
  /**
   * Plus is a function that takes a number b and returns a function that takes a number a and returns a
   * + b.
   * @param b - The number to add to the parameter a.
   * @returns A function that takes a parameter and adds it to the parameter passed to the outer
   * function.
   */
  return function (a) {
    return a + b;
  };
}

function minus(b) {
  /**
   * Minus returns a function that takes a parameter and subtracts b from it.
   * @param b - The number to subtract from the parameter a.
   * @returns A function that takes a parameter and subtracts it from the parameter passed to the outer
   * function.
   */
  return function (a) {
    return a - b;
  };
}

function times(b) {
  /**
   * Times returns a function that takes a parameter a and returns a * b.
   * @param b - The number to multiply by
   * @returns A function that takes a parameter and multiplies it by b.
   */
  return function (a) {
    return a * b;
  };
}

function dividedBy(b) {
  /**
   * It returns a function that takes a number as an argument and returns the result of dividing that
   * number by the number that was passed into the outer function.
   * @param b - the number to divide by
   * @returns A function that takes a parameter and divides it by the parameter passed into the function.
   */
  return function (a) {
    return Math.floor(a / b);
  };
}

console.log(seven(times(five()))); // 35
console.log(four(plus(nine()))); // 13
console.log(eight(minus(three()))); // 5
console.log(six(dividedBy(two()))); // 3
console.log(seven(times(one()))); // 7
console.log(four(plus(zero()))); // 4
