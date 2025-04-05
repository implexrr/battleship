import { placementOptionsManager } from '../../../controllers';

// Switches placement shipType option
export default function switchShipOption(newShipType) {
  placementOptionsManager.setShipType(newShipType);
  document.querySelector(`#${newShipType}-option`).checked = true;
}
