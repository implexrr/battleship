import placementOptionsManager from '../../../controllers/placementOptionsManager';

// Switches placement shipType option
export default function switchShipOption(newShipType) {
  placementOptionsManager.setShipType(newShipType);
  document.querySelector(`#${newShipType}-option`).checked = true;
}
