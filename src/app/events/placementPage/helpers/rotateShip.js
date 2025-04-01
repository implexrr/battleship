import placementOptionsManager from '../../../controllers/placementOptionsManager';
import switchOrientationHover from './switchOrientationHover';
import switchOrientationOption from './switchOrientationOption';
import mousePosition from '../../../controllers/mouse/mousePosition';

// Changes placement orientation of ship
export default function rotateShip() {
  const oldOrientation = placementOptionsManager.getPlacementState().orientation;
  const oldShipType = placementOptionsManager.getPlacementState().shipType;
  const { mouseX, mouseY } = mousePosition.getMousePosition();
  switchOrientationOption(oldOrientation);
  switchOrientationHover(mouseX, mouseY, oldOrientation, oldShipType);
}
