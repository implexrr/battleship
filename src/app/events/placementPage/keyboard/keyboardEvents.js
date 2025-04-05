import rotateShip from '../helpers/rotateShip';
import cycleShip from '../helpers/cycleShip';

// Cycles or rotates ship based on keypress
function handleKeyDown(e) {
  if (e.key.toLowerCase() === 'r') {
    rotateShip();
  } else if (e.key.toLowerCase() === 'q') {
    cycleShip('backward');
  } else if (e.key.toLowerCase() === 'e') {
    cycleShip('forward');
  }
}

// Add/remove keyboard listeners to document
function addKeyboardListeners() {
  document.addEventListener('keydown', handleKeyDown);
}
function removeKeyboardListeners() {
  document.removeEventListener('keydown', handleKeyDown);
}

export {
  addKeyboardListeners, removeKeyboardListeners,
};
