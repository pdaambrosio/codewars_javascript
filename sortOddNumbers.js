const array1 = [7, 1];
const array2 = [5, 8, 6, 3, 4];
const array3 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function sortArray(array) {
    const odds = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);
    console.log(odds);

    return array.map(num => {
        if (num % 2 !== 0) {
            return odds.shift();
        }
        return num;
    });
}

console.log(sortArray(array1));
// console.log(sortArray(array2));
// console.log(sortArray(array3));
