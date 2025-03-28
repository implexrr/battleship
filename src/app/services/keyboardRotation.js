import { setOrientationState, getPlacementState } from '../controllers/optionsController';

// Rotates ship if "r" key is pressed (case insensitive)
function rotateShip(e) {
  if (e.key.toLowerCase() === 'r') {
    if (getPlacementState().orientation === 'horizontal') {
      console.log('rotating to vertical');
      setOrientationState('vertical');
      document.querySelector('#vertical-option').checked = true;
    } else {
      console.log('rotating to horizontal');
      setOrientationState('horizontal');
      document.querySelector('#horizontal-option').checked = true;
    }
  }
}

function addKeyboardRotation() {
  document.addEventListener('keydown', rotateShip);
}
function removeKeyboardRotation() {
  document.removeEventListener('keydown', rotateShip);
}

export { addKeyboardRotation, removeKeyboardRotation };
