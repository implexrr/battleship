// Create "empty" matrix full of water to represent an empty board in the gameboard object
export default function createEmptyBoard(length) {
  const board = [];
  for (let i = 0; i < length; i += 1) {
    board[i] = [];
    for (let j = 0; j < length; j += 1) {
      board[i][j] = 'water';
    }
  }
  return board;
}
