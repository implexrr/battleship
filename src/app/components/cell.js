import synthesizeElement from '../utils/synthesizeElement';

// Creates a single grid cell element with metadata for row, column, player, and cell type
const cellEl = (i, j, player, type, phase) => {
  const el = synthesizeElement('div', {
    'data-row': i,
    'data-col': j,
    class: `cell ${player} ${phase}`, // Adds player-specific class for styling
    'cell-type': type, // Custom attribute to define cell role (e.g., 'water', 'battleship', 'miss', etc.)
  });
  return el;
};

export default cellEl;
