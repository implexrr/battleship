import { initializeGameboard } from '../gameMechanics/gameBoard';
import { SHIP_LENGTHS } from '../gameMechanics/ships';

const gameManager = (() => {
  const gameData = {
    boards: {
      player: initializeGameboard('player'),
      ai: initializeGameboard('ai'),
    },
    cellMaps: {
      player: {},
      ai: {},
    },
    winner: null,
  };

  function updateCellMap(player, row, col, cell) {
    const cellMap = gameData.cellMaps[player];
    // eslint-disable-next-line no-param-reassign
    if (!cellMap[row]) cellMap[row] = {};
    // eslint-disable-next-line no-param-reassign
    cellMap[row][col] = cell;
  }

  function populateGameboardMatrix(player) {
    const gameboard = gameData.boards[player];
    // Create a mutable copy of ship types to track what's left to place
    const shipLengthsCopy = Object.keys({ ...SHIP_LENGTHS });
    const orientations = ['horizontal', 'vertical'];
    // Attempts to place each ship one by one
    while (shipLengthsCopy.length > 0) {
      const row = Math.floor(Math.random() * 10);
      const col = Math.floor(Math.random() * 10);
      const orientation = orientations[Math.floor(Math.random() * 2)];
      try {
        // Try placing the next ship in a random location/orientation
        gameboard.placeShip(row, col, orientation, shipLengthsCopy[0]);
        shipLengthsCopy.shift();
      } catch (err) {
        // Placement failed (e.g., overlap or out-of-bounds) — try again
        console.error(`${err}`);
      }
    }
  }

  function setWinner(winner) {
    gameData.winner = winner;
  }

  function resetGame() {
    gameData.boards.ai = initializeGameboard('ai');
    gameData.boards.player = initializeGameboard('player');
    gameData.cellMaps.ai = {};
    gameData.cellMaps.player = {};
    gameData.winner = null;
  }

  function getWinner() {
    return gameData.winner;
  }

  function getBoardMatrix(player) {
    return gameData.boards[player].getBoard();
  }

  function getBoard(player) {
    return gameData.boards[player];
  }

  function getCellMap(player) {
    return gameData.cellMaps[player];
  }

  return {
    populateGameboardMatrix,
    updateCellMap,
    setWinner,
    getWinner,
    getBoard,
    getBoardMatrix,
    getCellMap,
    resetGame,
  };
})();

export default gameManager;
