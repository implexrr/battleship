import placementOptionsManager from '../../../controllers/placementOptionsManager';
import mod from '../../../utils/lazyMath';

const shipsCycle = ['carrier', 'battleship', 'cruiser', 'submarine', 'destroyer'];
const numOfShips = shipsCycle.length;
const shipIndices = {};
for (let i = 0; i < numOfShips; i += 1) {
  shipIndices[shipsCycle[i]] = i;
}

function changeToNextShip(curShip) {
  const curInd = shipIndices[curShip];
  const nextShip = shipsCycle[mod(curInd + 1, numOfShips)];
  placementOptionsManager.setShipType(nextShip);
}

function changeToPrevShip(curShip) {
  const curInd = shipIndices[curShip];
  const nextShip = shipsCycle[mod(curInd - 1, numOfShips)];
  placementOptionsManager.setShipType(nextShip);
}

export default function cycleShip(direction) {
  const curShip = placementOptionsManager.getPlacementState().shipType;
  if (direction === 'backward') { changeToPrevShip(curShip); }
  if (direction === 'forward') { changeToNextShip(curShip); }
}
