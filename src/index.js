import './main.css';

console.log(123);
const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

// document.addEventListener('onload', () => console.log(elvenShieldRecipe));
const elvenGauntletsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 1,
};
console.log(elvenGauntletsRecipe);
console.log(696969);

let arr = [5,4,2,3,1];
arr.toSorted();
console.log(arr);


