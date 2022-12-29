function splitTheBill(group) {
  /**
   * We first calculate the total amount spent by the group, then the average amount spent by each
   * person, then we subtract the average from each person's amount spent and round the result to the
   * nearest cent
   * @param group - an object with the names of the people as keys and their paid amount as values.
   * @returns the average of the values in the object.
   */
  const total = Object.values(group).reduce((a, b) => a + b);
  const average = total / Object.keys(group).length;
  const result = {};
  for (let key in group) {
    result[key] = Math.round((group[key] - average) * 100) / 100;
  }
  return result;
}

console.log(splitTheBill({ A: 20, B: 15, C: 10 })); // {A: 5, B: 0, C: -5}
console.log(splitTheBill({ A: 40, B: 25, X: 10 })); // {A: 15, B: 0, X: -15}
