/**
 * Function hero to check if the player has enough bullets to kill the dragon or not.
 * @param {*} bullets 
 * @param {*} dragons 
 * @returns boolean
 */
function hero(bullets, dragons){
    return bullets/2 >= dragons;
}

console.log(hero(10, 5));
console.log(hero(7, 4));
console.log(hero(4, 5));
console.log(hero(100, 40));
console.log(hero(1500, 751));
console.log(hero(0, 1));
