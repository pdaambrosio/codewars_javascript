class Primes {
  /* "It's a generator that yields prime numbers."
      The class has a single static method, stream, which is a generator. The generator yields prime
      numbers */
  static *stream() {
    yield 2;
    let num = 3;
    while (true) {
      if (isPrime(num)) {
        yield num;
      }
      num += 2;
    }
  }
}

function isPrime(num) {
  /**
   * "If the number is divisible by any odd number between 3 and the square root of the number, then it's
   * not prime."
   *
   * The function isPrime() is a good example of a function that is not recursive. It does not call
   * itself
   * @param num - The number to check if it's prime.
   * @returns the boolean value of whether or not the number is prime.
   */
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let prime of Primes.stream()) {
  console.log(prime);
  if (prime > 10) break;
}
