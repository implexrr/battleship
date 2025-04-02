const headingText = (newState) => {
  let text;
  if (newState === 'initial') {
    text = 'Battleship';
  } else if (newState === 'placement') {
    text = 'Placement Phase';
  } else if (newState === 'shooting') {
    text = 'Shooting Phase';
  } else if (newState === 'gameOver') {
    text = 'Game Over';
  }
  return text;
};

export default headingText;
