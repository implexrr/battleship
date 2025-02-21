export default function createEmptyBoard(length) {
  const board = [];
  for (let i = 0; i < length; i += 1) {
    board[i] = [];
    for (let j = 0; j < length; j += 1) {
      board[i][j] = 'water';
    }
  }
}
