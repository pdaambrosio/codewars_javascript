/**
 * The `accum` function takes a string as input and returns a modified version of the string where each
 * character is repeated a number of times based on its position in the original string, with each
 * repetition separated by a hyphen.
 * @param s - The parameter `s` is a string that represents the input value.
 * @returns The function `accum` returns a string where each character in the input string `s` is
 * repeated a number of times based on its position in the string. The repeated characters are
 * separated by hyphens.
 */
function accum(s) {
    let arr = s.split('')
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i].toUpperCase()
        for (let j = 0; j < i; j++) {
            temp += arr[i].toLowerCase()
        }
        result.push(temp)
    }

    return result.join('-')
}

console.log(accum('abcd'))
console.log(accum('RqaEzty'))
console.log(accum('cwAt'))

// Path: codewars_javascript/accum.js
// The best solution from codewars_javascript/accum.js:
// function accum(s) {
// 	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }
