/**
* Function: evenOrOdd
* Description: Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
* @param number - the number we're trying to find the number of ways to sum to
* @returns "Even" if the number is even, "Odd" if the number is odd
*/

function evenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}

console.log(evenOrOdd(2)); // "Even"
console.log(evenOrOdd(0)); // "Even"
console.log(evenOrOdd(7)); // "Odd"
console.log(evenOrOdd(1)); // "Odd"
console.log(evenOrOdd(-1)); // "Odd"
console.log(evenOrOdd(-2)); // "Even"