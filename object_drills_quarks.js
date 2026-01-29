/* A Quark is a particle with a color, flavor, and baryon number, and can interact with other Quarks. */
class Quark {
  constructor(color, flavor) {
    this.color = color;
    this.flavor = flavor;
    this.baryon_number = 1 / 3;
  }

  interact(other) {
    [this.color, other.color] = [other.color, this.color];
  }
}

const q1 = new Quark("red", "up");
const q2 = new Quark("blue", "stange");
console.log(q1.color);
console.log(q2.color);
q2.interact(q1);
console.log(q1.color);
console.log(q2.color);
