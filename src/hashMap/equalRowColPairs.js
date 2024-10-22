/**
 *
 * Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.
 *
 * A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).
 *
 *
 *
 * Example 1:
 *
 *
 * Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
 * Output: 1
 * Explanation: There is 1 equal row and column pair:
 * - (Row 2, Column 1): [2,7,7]
 * Example 2:
 *
 *
 * Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
 * Output: 3
 * Explanation: There are 3 equal row and column pairs:
 * - (Row 0, Column 0): [3,1,2,2]
 * - (Row 2, Column 2): [2,4,2,2]
 * - (Row 3, Column 2): [2,4,2,2]
 *
 *
 * Constraints:
 *
 * n == grid.length == grid[i].length
 * 1 <= n <= 200
 * 1 <= grid[i][j] <= 105
 *
 * @param {number[][]} grid
 * @return {number}
 */
let equalPairs = function(grid) {
  let matrixElementsPerRowCol = {}
  let counter = 0;


  for (let row = 0; row < grid.length; row++) {
    let rowId = ""
    for (let col = 0; col < grid[0].length; col++) {
        rowId += grid[row][col] + ".";
    }
    matrixElementsPerRowCol[rowId] = matrixElementsPerRowCol[rowId] === undefined ?
      0 : matrixElementsPerRowCol[rowId] + 1
  }

  for (let col = 0; col < grid.length; col++) {
    let colId = ""
    for (let row = 0; row < grid[0].length; row++) {
      colId += grid[row][col] + ".";
    }

    counter += matrixElementsPerRowCol[colId] === undefined ? 0 : matrixElementsPerRowCol[colId] + 1;
  }


  return counter;
};


let grid = [[3,2,1],[1,7,6],[2,7,7]];
console.log(equalPairs(grid));

grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
console.log(equalPairs(grid));

grid = [[11,1],[1,11]];
console.log(equalPairs(grid));

grid = [[13,13],[13,13]]
console.log(equalPairs(grid));