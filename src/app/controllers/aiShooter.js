// import { GAMEBOARD_LENGTH } from '../gameMechanics/gameBoard';
// import { SHIP_LENGTHS } from '../gameMechanics/ships';

// const aiShooter = (() => {
//   const shots = {};

//   function initializeShots() {
//     for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
//       shots[i] = {};
//     }
//   }

//   function alreadyShotHere(i, j) {
//     return (shots[i][j] === true);
//   }

//   function getNextShot() {
//     let row = Math.floor(Math.random() * 10);
//     let col = Math.floor(Math.random() * 10);
//     while (alreadyShotHere(row, col)) {
//       row = Math.floor(Math.random() * 10);
//       col = Math.floor(Math.random() * 10);
//     }
//     return { row, col };
//   }

//   function getShots() {
//     return shots;
//   }

//   function recordShot(i, j) {
//     shots[i][j] = true;
//     console.log(`shot recorded at ${i}, ${j}`);
//     console.log(getShots());
//   }

//   function resetShots() {
//     Object.keys(shots).forEach((key) => {
//       delete shots[key];
//     });
//   }

//   return { recordShot, resetShots, getShots };
// })();

// export default aiShooter;
