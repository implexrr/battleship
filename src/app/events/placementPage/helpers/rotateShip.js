import { placementOptionsManager } from '../../../controllers';
import switchOrientationHover from './switchOrientationHover';
import switchOrientationOption from './switchOrientationOption';
import mousePosition from '../../../controllers/mousePosition';

// Changes placement orientation of ship
export default function rotateShip() {
  const oldOrientation = placementOptionsManager.getPlacementState().orientation;
  const oldShipType = placementOptionsManager.getPlacementState().shipType;
  const { mouseX, mouseY } = mousePosition.getMousePosition();
  switchOrientationOption(oldOrientation);
  switchOrientationHover(mouseX, mouseY, oldOrientation, oldShipType);
}
