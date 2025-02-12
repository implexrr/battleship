import './main.css';
import ship from './ships';
import initializeGameboard from './gameBoard';

const gameboardP1 = initializeGameboard('p1');
console.log(gameboardP1);
console.log(gameboardP1.getGameboard());
console.log(gameboardP1.getPlayer());
console.log(gameboardP1.placeShip(-1,0,'horizontal','destroyer'));
console.log(gameboardP1.placeShip(0,-1,'horizontal','destroyer'));
console.log(gameboardP1.placeShip(0,-1,'horizontal','destroyer'));
console.log(gameboardP1.placeShip(0,-1,'horizontal','destroyer'));