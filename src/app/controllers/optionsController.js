// Default placement settings
let currentOrientation = 'horizontal';
let currentShipType = 'carrier';

document.addEventListener('DOMContentLoaded', () => {
  // Listen for changes to orientation radio buttons
  document.querySelectorAll('input[name="orientation"]').forEach((input) => input.addEventListener('change', (e) => {
    currentOrientation = e.target.value;
  }));

  // Listen for changes to ship type radio buttons
  document.querySelectorAll('input[name="ship-type"]').forEach((input) => input.addEventListener('change', (e) => {
    currentShipType = e.target.value;
  }));
});

// Provide the current selected orientation and ship type
function getPlacementState() {
  return {
    orientation: currentOrientation,
    shipType: currentShipType,
  };
}

export default getPlacementState;
