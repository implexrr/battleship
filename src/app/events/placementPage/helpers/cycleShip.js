import { placementOptionsManager } from '../../../controllers';
import mod from '../../../utils/lazyMath';
import switchShipOption from './switchShipOption';
import changeHoveredShipLength from './switchShipHover';

// Ordered list of ship types for cycling
const shipsCycle = ['carrier', 'battleship', 'cruiser', 'submarine', 'destroyer'];
const numOfShips = shipsCycle.length;

// Map ship names to their corresponding index for quick lookup
const shipIndices = {};
for (let i = 0; i < numOfShips; i += 1) {
  shipIndices[shipsCycle[i]] = i;
}

// Gets the next ship in the cycle (wraps around to the beginning if needed)
function getNextShip(curShip) {
  const curInd = shipIndices[curShip];
  const nextShip = shipsCycle[mod(curInd + 1, numOfShips)];
  return nextShip;
}

// Gets the prev ship in the cycle (wraps around to the end if needed)
function getPrevShip(curShip) {
  const curInd = shipIndices[curShip];
  const nextShip = shipsCycle[mod(curInd - 1, numOfShips)];
  return nextShip;
}

// Changes the currently selected ship to the next one
function changeToNextShip(curShip) {
  const nextShip = getNextShip(curShip);
  switchShipOption(nextShip);
}

// Changes the currently selected ship to the prev one
function changeToPrevShip(curShip) {
  const nextShip = getPrevShip(curShip);
  switchShipOption(nextShip);
}

// Cycles ship based on direction, then updates hover state to reflect new ship length
export default function cycleShip(direction) {
  const curShip = placementOptionsManager.getPlacementState().shipType;
  const { orientation } = placementOptionsManager.getPlacementState();
  if (direction === 'backward') { changeToPrevShip(curShip); changeHoveredShipLength(curShip, getPrevShip(curShip), orientation); }
  if (direction === 'forward') { changeToNextShip(curShip); changeHoveredShipLength(curShip, getNextShip(curShip), orientation); }
}
