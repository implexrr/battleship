// Adds a cell element to the cellMap at the specified row and column
function updateCellMap(cellMap, row, col, cell) {
  // eslint-disable-next-line no-param-reassign
  if (!cellMap[row]) cellMap[row] = {};
  // eslint-disable-next-line no-param-reassign
  cellMap[row][col] = cell;
}

function extractCellMap() {
  const cellMap = {};
  document.querySelectorAll('.cell.player').forEach((cell) => {
    const { row, col } = cell.dataset;
    updateCellMap(cellMap, row, col, cell);
  });
  return cellMap;
}

export { updateCellMap, extractCellMap };
