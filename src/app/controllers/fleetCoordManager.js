const fleetCoordManager = (() => {
  const playerFleets = {};

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

  return {
    recordShipCoord,
    getPlayerFleets,
    resetPlayerFleets,
  };
})();

export default fleetCoordManager;
