import { GAMEBOARD_LENGTH } from '../gameMechanics/gameBoard';

const aiShooter = (() => {
  let coordinates = [];

  function shuffleCoordinates() {
    const len = coordinates.length;
    for (let i = 0; i < len; i += 1) {
      // FY shuffle
      const j = i + Math.floor(Math.random() * (len - i));

      // Swap
      const temp = coordinates[j];
      coordinates[j] = coordinates[i];
      coordinates[i] = temp;
    }
  }

  function initializeCoordinates() {
    for (let row = 0; row < GAMEBOARD_LENGTH; row += 1) {
      for (let col = 0; col < GAMEBOARD_LENGTH; col += 1) {
        coordinates.push([row, col]);
      }
    }
    shuffleCoordinates();
  }

  function clearCoordinates() {
    coordinates.splice(0, coordinates.length);
  }

  function resetCoordinates() {
    clearCoordinates();
    initializeCoordinates();
    shuffleCoordinates();
  }

  function getNextShot() {
    const coord = coordinates.pop();
    return coord;
  }

  return {
    resetCoordinates,
    getNextShot,
  };
})();

export default aiShooter;
