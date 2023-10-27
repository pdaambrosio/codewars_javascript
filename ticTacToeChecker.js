function isSolved(board) {
  /**
   * We loop through the board and push all the values into an array. Then we loop through the win
   * conditions and check if the values in the array match the win conditions. If they do, we return the
   * winner. If not, we return -1
   * @param board - a 2D array of the entire tic-tac-toe board
   * @returns the winner of the game.
   */
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];
  let array = [];
  let winner = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      array.push(board[i][j]);
    }
  }

  for (let [a, b, c] of winConditions) {
    if (array[a] && array[a] === array[b] && array[a] === array[c]) {
      return array[a];
    }
    if (array[a] * array[b] * array[c] == 0) {
      winner = -1;
    }
  }

  return winner;
}

console.log(
  isSolved([
    [0, 0, 1],
    [0, 1, 2],
    [2, 1, 0],
  ])
); // -1
console.log(
  isSolved([
    [0, 1, 1],
    [0, 1, 2],
    [2, 1, 0],
  ])
); // 1
console.log(
  isSolved([
    [0, 1, 1],
    [0, 1, 2],
    [2, 2, 2],
  ])
); // 2
console.log(
  isSolved([
    [2, 1, 2],
    [2, 1, 1],
    [1, 2, 1],
  ])
); // 0
