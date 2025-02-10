import './main.css';
import ship from './ships';

const shipLengths = {
  carrier: 5, battleship: 4, cruiser: 3, submarine: 2, destroyer: 1,
};

const shipsP1 = {};
Object.keys(shipLengths).forEach((shipType) => {
  shipsP1[`${shipType}`] = ship(0, 0, 'vertical', shipType, 'p1');
});

console.log(shipsP1);
console.log(shipsP1.carrier.getShipLength());
console.log(shipsP1.carrier.getPlayer());
