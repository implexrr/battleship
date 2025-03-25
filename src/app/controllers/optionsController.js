let currentOrientation = 'horizontal';
let currentShipType = 'carrier';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input[name="orientation"]').forEach((input) => input.addEventListener('change', (e) => {
    currentOrientation = e.target.value;
  }));

  document.querySelectorAll('input[name="shipType"]').forEach((input) => input.addEventListener('change', (e) => {
    currentShipType = e.target.value;
  }));
});

function getPlacementState() {
  return {
    orientation: currentOrientation,
    shipType: currentShipType,
  };
}

export default getPlacementState;
