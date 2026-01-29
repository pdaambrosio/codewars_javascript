class Student {
  /* Student is a class that has a constructor that takes in a name, fives, tens, and twenties, and has a
    static method called mostMoney that takes in an array of students and returns the name of the
    student with the most money. */
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }

  static mostMoney(students) {
    /**
     * It loops through the array of students, and for each student, it calculates the total amount of
     * money they have, and compares it to the current maximum amount of money. If the current student has
     * more money than the current maximum, it updates the maximum amount of money and the name of the
     * student with the maximum amount of money. If the current student has the same amount of money as the
     * current maximum, it updates the name of the student with the maximum amount of money to "all"
     * @param students - an array of objects. Each object in the array represents a student and their
     * money.
     * @returns The name of the student with the most money.
     */
    let max = 0;
    let maxName = "";
    for (let i = 0; i < students.length; i++) {
      let sum =
        students[i].fives * 5 +
        students[i].tens * 10 +
        students[i].twenties * 20;
      if (sum > max) {
        max = sum;
        maxName = students[i].name;
      } else if (sum === max) {
        maxName = "all";
      }
    }
    return maxName;
  }
}

const phill = new Student("Phill", 2, 2, 1);
const cam = new Student("Cameron", 2, 2, 0);
const geoff = new Student("Geoff", 0, 3, 0);

console.log(Student.mostMoney([phill, cam, geoff]));
console.log(Student.mostMoney([cam, geoff]));
