import { getPlacementState } from './optionsController';
import switchOrientationOption from './helpers/switchOrientationOption';
import switchHoverOrientation from './helpers/switchHoverOrientation';

// Initializes mouseX and mouseY positions
let mouseX = 0;
let mouseY = 0;

// Changes mouseX and mouseY positions, can as long as add/remove keyboardRotation fxns are called
function handleMouseMove(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

// Changes placement orientation of ship
function rotateShip(e) {
  if (e.key.toLowerCase() === 'r') {
    const oldOrientation = getPlacementState().orientation;
    const oldShipType = getPlacementState().shipType;
    switchOrientationOption(oldOrientation);
    switchHoverOrientation(mouseX, mouseY, oldOrientation, oldShipType);
  }
}

function addKeyboardRotation() {
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('keydown', rotateShip);
}

function removeKeyboardRotation() {
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('keydown', rotateShip);
}

export { addKeyboardRotation, removeKeyboardRotation };
