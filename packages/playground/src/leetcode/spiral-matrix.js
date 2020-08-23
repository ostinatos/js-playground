/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const ret = [];
  // empty matrix
  if (!matrix || !matrix.length) {
    return ret;
  }
  const m = matrix.length;
  const n = matrix[0].length;

  // traverse position
  let rowIndex = 0,
    colIndex = 0;
  // a matrix to mark visited
  const visited = [];
  for (let i = 0; i < m; i++) {
    visited[i] = [];
  }
  let visitedCount = 0;

  //control whether rowIndex or colIndex changed,
  // how rowIndex or colIndex changed
  let traverseMode = [
    { direction: "col", increase: true },
    { direction: "row", increase: true },
    { direction: "col", increase: false },
    { direction: "row", increase: false },
  ];

  let traverseModeIndex = 0;
  while (visitedCount < m * n) {
    // check to see if traverse mode need to change
    if (!visited[rowIndex][colIndex]) {
      // valid number is not visited
      ret.push(matrix[rowIndex][colIndex]);
      visited[rowIndex][colIndex] = true;
      visitedCount++;
    }

    const { direction, increase } = traverseMode[traverseModeIndex];
    let candidateIndex = {
      row: rowIndex,
      col: colIndex,
    };
    if (increase) {
      candidateIndex[direction]++;
    } else {
      candidateIndex[direction]--;
    }
    // IMPORTANT: must first check whether row and col is out of range!
    if (
      candidateIndex.row >= m ||
      candidateIndex.row < 0 ||
      candidateIndex.col >= n ||
      candidateIndex.col < 0 ||
      visited[candidateIndex.row][candidateIndex.col]
    ) {
      //candidate visited, change to next traverse mode
      traverseModeIndex = (traverseModeIndex + 1) % 4;
      //without changing rowindex and col index
      continue;
    }

    // not visited, and not out of range, proceed to next viable position
    rowIndex = candidateIndex.row;
    colIndex = candidateIndex.col;
  }
  return ret;
};

const res = spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);

console.debug("result:", JSON.stringify(res));
