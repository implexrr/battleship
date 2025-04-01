import placementOptionsManager from '../../../controllers/placementOptionsManager';
import mod from '../../../utils/lazyMath';
import switchShipOption from './switchShipOption';
import changeHoveredShipLength from './switchShipHover';

const shipsCycle = ['carrier', 'battleship', 'cruiser', 'submarine', 'destroyer'];
const numOfShips = shipsCycle.length;
const shipIndices = {};
for (let i = 0; i < numOfShips; i += 1) {
  shipIndices[shipsCycle[i]] = i;
}

function getNextShip(curShip) {
  const curInd = shipIndices[curShip];
  const nextShip = shipsCycle[mod(curInd + 1, numOfShips)];
  return nextShip;
}

function getPrevShip(curShip) {
  const curInd = shipIndices[curShip];
  const nextShip = shipsCycle[mod(curInd - 1, numOfShips)];
  return nextShip;
}

function changeToNextShip(curShip) {
  const nextShip = getNextShip(curShip);
  switchShipOption(nextShip);
}

function changeToPrevShip(curShip) {
  const nextShip = getPrevShip(curShip);
  switchShipOption(nextShip);
}

export default function cycleShip(direction) {
  const curShip = placementOptionsManager.getPlacementState().shipType;
  const { orientation } = placementOptionsManager.getPlacementState();
  if (direction === 'backward') { changeToPrevShip(curShip); changeHoveredShipLength(curShip, getPrevShip(curShip), orientation); }
  if (direction === 'forward') { changeToNextShip(curShip); changeHoveredShipLength(curShip, getNextShip(curShip), orientation); }
}
