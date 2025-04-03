import gameStateManager from '../controllers/gameStateManager.js';

export default function repopulate(gameboard, player) {
  const fleetCoord = gameStateManager.getPlayerFleets()[player];
  Object.keys(fleetCoord).forEach((ship) => {
    gameboard.placeShip(
      fleetCoord[ship].row,
      fleetCoord[ship].col,
      fleetCoord[ship].orientation,
      ship,
    );
  });
}
