export default function extractCellMap() {
  const cellMap = {};
  document.querySelectorAll('.cell.player').forEach((cell) => {
    const { row, col } = cell.dataset;
    if (!cellMap[row]) cellMap[row] = {};
    cellMap[row][col] = cell;
  });
  return cellMap;
}
