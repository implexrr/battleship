import synthesizeElement from '../../utils/synthesizeElement';
import { SHIP_LENGTHS } from '../../gameMechanics/ships';

const options = {};
const labels = {};
const ships = Object.keys(SHIP_LENGTHS);

for (let i = 0; i < ships.length; i += 1) {
  options[ships[i]] = synthesizeElement('input', {
    id: `${ships[i]}-option`,
    type: 'radio',
    name: 'ship-type',
    value: `${ships[i]}`,
  });
  labels[ships[i]] = synthesizeElement('label', { for: `${ships[i]}-option` });
  labels[ships[i]].textContent = ships[i].charAt(0).toUpperCase() + ships[i].slice(1);
}

const shipTypeOptionsEl = () => {
  const el = document.createElement('div');
  for (let i = 0; i < ships.length; i += 1) {
    el.append(options[ships[i]], labels[ships[i]]);
  }
  return el;
};

export default shipTypeOptionsEl;
