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

export { addKeyboardRotation, removeKeyboardRotation };
