import placementOptionsManager from '../../controllers/placementOptionsManager';
import switchOrientationOption from './helpers/switchOrientationOptions';
import switchHoverOrientation from './helpers/switchHoverOrientation';
import mousePosition from '../../controllers/mouse/mousePosition';
import cycleShips from './helpers/cycleShip';

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

function addKeyboardShipChange() {
  document.addEventListener('keydown', cycleShips);
}

function removeKeyboardShipChange() {
  document.removeEventListener('keydown', cycleShips);
}

// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------- //

function handleKeyDown() {

}

export {
  addKeyboardRotation, removeKeyboardRotation, addKeyboardShipChange, removeKeyboardShipChange,
};
