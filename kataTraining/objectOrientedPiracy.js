/* A Ship has a draft and a crew, and can be sunk if its draft is too high for its crew. */
class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
  }
  isWorthIt() {
    return this.draft - this.crew * 1.5 > 20;
  }
}

console.log(new Ship(15, 10).isWorthIt()); // false
console.log(new Ship(12, 5).isWorthIt()); // false
console.log(new Ship(30, 5).isWorthIt()); // true
console.log(new Ship(31, 5).isWorthIt()); // true
console.log(new Ship(25, 3).isWorthIt()); // true
