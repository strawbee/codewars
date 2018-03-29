/*
Connect Four: Who Won?
https://www.codewars.com/kata/connect-four-who-won

"Connect Four is a game in which two players take turns dropping red or yellow colored ds into a vertically suspended 7 x 6 grid. ds fall to the bottom of the grid, occupying the next available space.

A player wins by connecting four of their ds horizontally, vertically or diagonally.

Given a multidimensional array representing a Connect Four board, your task is to create a function which can determine who won the game.

Your connectFour function will be passed an array matrix similar to this:

[['-','-','-','-','-','-','-'],
 ['-','-','-','-','-','-','-'],
 ['-','-','-','R','R','R','R'],
 ['-','-','-','Y','Y','R','Y'],
 ['-','-','-','Y','R','Y','Y'],
 ['-','-','Y','Y','R','R','R']];

'R' represents a red d

'Y' represents a yellow d

'-' represents an unoccupied space

In this example the red player won by making a horizontal line of 4 red ds.

If the red player won, your connectFour function should return 'R'. If the yellow player won, it should return 'Y'. If the board is full and no one won it should return 'draw'. If the game is still in progress it should return 'in progress'."
*/

const connectFour = arr => {
  let full = true;
  for (let h = 0; h < arr.length; h++) {
    for (let w = 0; w < arr[0].length; w++) {
      if (arr[h][w] === '-') {
        full = false;
        continue;
      }
      let d = arr[h][w];
      if (h < arr.length - 3) { // vertical
        if (d === arr[h + 1][w] && d === arr[h + 2][w] && d === arr[h + 3][w]) return d;
      }
      if (w < arr[0].length - 3) { // horizontal
        if (d === arr[h][w + 1] && d === arr[h][w + 2] && d === arr[h][w + 3]) return d;
      }
      if (h < arr.length - 3  && w < arr[0].length - 3) { // diag right
        if (d === arr[h + 1][w + 1] && d === arr[h + 2][w + 2] && d === arr[h + 3][w + 3]) return d;
      }
      if (h < arr.length - 3 && w >= 3) { // diag left
        if (d === arr[h + 1][w - 1] && d === arr[h + 2][w - 2] && d === arr[h + 3][w - 3]) return d;
      }
    }
  }
  return full ? 'draw' : 'in progress';
};
