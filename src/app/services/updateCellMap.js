export default function updateCellMap(cellMap, row, col, cell) {
  // eslint-disable-next-line no-param-reassign
  if (!cellMap[row]) cellMap[row] = {};
  // eslint-disable-next-line no-param-reassign
  cellMap[row][col] = cell;
}
