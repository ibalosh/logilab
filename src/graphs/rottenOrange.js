/**
 * Rotting Oranges
 *
 * https://leetcode.com/problems/rotting-oranges/description/?envType=study-plan-v2&envId=leetcode-75
 *
 * You are given an m x n grid where each cell can have one of three values:
 *
 * 0 representing an empty cell,
 * 1 representing a fresh orange, or
 * 2 representing a rotten orange.
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
 *
 * Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
 * Output: 4
 * Example 2:
 *
 * Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
 * Output: -1
 * Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
 * Example 3:
 *
 * Input: grid = [[0,2]]
 * Output: 0
 * Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
 *
 *
 * Constraints:
 *
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 10
 * grid[i][j] is 0, 1, or 2.
 *
 * Runtime complexity O(NxM)
 * Space time complexity O(MxN)
 *
 * @param {number[][]} grid
 * @return {number}
 */
let orangesRotting = function(grid) {
  function getNeighbours(row, col, grid) {
    const directions = [[-1,0],[1,0],[0,1],[0,-1]];
    let neighbours = [];

    for (let i = 0; i < directions.length; i++) {
      let neighbourRow = row + directions[i][0];
      let neighbourCol = col + directions[i][1];

      if (
        neighbourRow >= 0 &&
        neighbourCol >= 0 &&
        neighbourRow < grid.length &&
        neighbourCol < grid[0].length &&
        grid[neighbourRow][neighbourCol] === 1
      ) {
        neighbours.push([neighbourRow, neighbourCol]);
      }
    }

    return neighbours;
  }

  let queue = [];
  let freshOranges = 0;
  let minutesElapsed = -1;

  for (let i=0; i < grid.length; i++) {
    for (let j=0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        queue.push([i,j]);
        grid[i][j] = 10;
      }
      if (grid[i][j] === 1) {
        freshOranges++;
      }
    }
  }

  while (queue.length > 0) {
    const cell = queue.shift();
    const cellRow = cell[0];
    const cellCol = cell[1];
    let minutes = grid[cellRow][cellCol];
    if (minutes > minutesElapsed) minutesElapsed = minutes;

    let neighbours = getNeighbours(cellRow, cellCol, grid);
    for (let i = 0; i < neighbours.length; i++) {
      let neighbourRow = neighbours[i][0];
      let neighbourCol = neighbours[i][1];
      queue.push([neighbourRow, neighbourCol]);
      grid[neighbourRow][neighbourCol] = minutes + 1;
      freshOranges--;
    }
  }

  if (freshOranges > 0)
    return -1

  return minutesElapsed > -1 ? minutesElapsed - 10 : 0
};

let grid = [
  [2,1,1],
  [1,1,0],
  [0,1,1]
]
console.log(orangesRotting(grid))

grid = [
  [2,1,1],
  [0,1,1],
  [1,0,1]
];
console.log(orangesRotting(grid));

grid=  [[0,2]];
console.log(orangesRotting(grid));

grid = [[0]];
console.log(orangesRotting(grid));

grid = [[1]]
console.log(orangesRotting(grid));