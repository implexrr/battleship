import { GAMEBOARD_LENGTH } from '../gameMechanics/gameBoard';

const aiShooter = (() => {
  const coordinates = [];

  // Shuffles coordinates array
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

  // Creates coordinate array with all possible coordinates, then shuffles them
  function initializeCoordinates() {
    for (let row = 0; row < GAMEBOARD_LENGTH; row += 1) {
      for (let col = 0; col < GAMEBOARD_LENGTH; col += 1) {
        coordinates.push([row, col]);
      }
    }
    shuffleCoordinates();
  }

  // Clears coordinate array
  function clearCoordinates() {
    coordinates.splice(0, coordinates.length);
  }

  // Clears, then reinitializes coordinates array
  function resetCoordinates() {
    clearCoordinates();
    initializeCoordinates();
    shuffleCoordinates();
  }

  // Gives random coordinate pair to shoot with
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
