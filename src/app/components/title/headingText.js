// Generates page title based on page type
const headingText = (newPage) => {
  let text;
  if (newPage === 'initial') {
    text = 'Battleship';
  } else if (newPage === 'placement') {
    text = 'Placement Phase';
  } else if (newPage === 'shooting') {
    text = 'Shooting Phase';
  } else if (newPage === 'gameOver') {
    text = 'Game Over';
  }
  return text;
};

export default headingText;
