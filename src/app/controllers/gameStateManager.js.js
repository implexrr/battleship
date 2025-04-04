const gameStateManager = (() => {
  const playerFleets = {};
  let gameWinner = null;

  function recordShipCoord(player, row, col, orientation, shipType) {
    if (!playerFleets[player]) { playerFleets[player] = {}; }
    if (!playerFleets[player][shipType]) {
      playerFleets[player][shipType] = { orientation, row, col };
    }
  }

  function getPlayerFleets() {
    return playerFleets;
  }

  function resetPlayerFleets() {
    Object.keys(playerFleets).forEach((key) => {
      delete playerFleets[key];
    });
  }

  function setWinner(winner) {
    gameWinner = winner;
  }

  function getWinner() {
    return gameWinner;
  }

  function resetWinner() {
    gameWinner = null;
  }

  return {
    recordShipCoord,
    getPlayerFleets,
    resetPlayerFleets,
    resetWinner,
    getWinner,
    setWinner,
  };
})();

export default gameStateManager;
