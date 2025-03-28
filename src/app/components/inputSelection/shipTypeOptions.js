import synthesizeElement from '../../utils/synthesizeElement';
import { SHIP_LENGTHS } from '../../gameMechanics/ships';
import { setShipType } from '../../controllers/optionsController';

// Initializes objects to hold radio input elements and their corresponding labels
const options = {};
const labels = {};
const ships = Object.keys(SHIP_LENGTHS); // Gets ship names from the SHIP_LENGTHS constant

// Dynamically generates a radio button and label for each ship type
for (let i = 0; i < ships.length; i += 1) {
  options[ships[i]] = synthesizeElement('input', {
    id: `${ships[i]}-option`,
    type: 'radio',
    name: 'ship-type',
    value: ships[i],
  });
  labels[ships[i]] = synthesizeElement('label', { for: `${ships[i]}-option` });

  // Capitalizes first letter of the ship name for label text
  labels[ships[i]].textContent = ships[i].charAt(0).toUpperCase() + ships[i].slice(1);

  // Changes type of ship that will be placed
  (options[ships[i]]).addEventListener('change', () => { setShipType(ships[i]); });
}

// Set the default ship that gets placed to "carrier"
function setDefaultShip() {
  options.carrier.checked = true;
  setShipType('carrier');
}

// Creates and returns a container <div> holding all ship selection inputs and labels
const shipTypeOptionsEl = () => {
  const el = synthesizeElement('div', { id: 'ship-options' });
  for (let i = 0; i < ships.length; i += 1) {
    el.append(options[ships[i]], labels[ships[i]]);
  }
  setDefaultShip();
  return el;
};

export default shipTypeOptionsEl;
