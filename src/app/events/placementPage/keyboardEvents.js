import placementOptionsManager from '../../controllers/placementOptionsManager';
import switchOrientationOption from './helpers/switchOrientationOptions';
import switchHoverOrientation from './helpers/switchHoverOrientation';
import mousePosition from '../../controllers/mouse/mousePosition';
import mod from '../../utils/lazyMath';

// Changes placement orientation of ship
function rotateShip(e) {
  if (e.key.toLowerCase() === 'r') {
    const oldOrientation = placementOptionsManager.getPlacementState().orientation;
    const oldShipType = placementOptionsManager.getPlacementState().shipType;
    const { mouseX, mouseY } = mousePosition.getMousePosition();
    switchOrientationOption(oldOrientation);
    switchHoverOrientation(mouseX, mouseY, oldOrientation, oldShipType);
  }
}

function addKeyboardRotation() {
  document.addEventListener('keydown', rotateShip);
}

function removeKeyboardRotation() {
  document.removeEventListener('keydown', rotateShip);
}

// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //

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

function cycleShips(e) {
  const curShip = placementOptionsManager.getPlacementState().shipType;
  if (e.key.toLowerCase() === 'q') { changeToPrevShip(curShip); }
  if (e.key.toLowerCase() === 'e') { changeToNextShip(curShip); }
}

function addKeyboardShipChange() {
  document.addEventListener('keydown', cycleShips);
}

function removeKeyboardShipChange() {
  document.removeEventListener('keydown', cycleShips);
}

export { addKeyboardRotation, removeKeyboardRotation, addKeyboardShipChange, removeKeyboardShipChange };
