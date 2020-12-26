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
 *
 * @param {number[][]} grid
 * @return {number}
 */
let orangesRotting = function(grid) {
  let freshOrangesCount = 0;
  let rottenOrangesCount=0;
  let queue = [];
  let minutes = 0;

  //O(NxM)
  for (let i=0;i<grid.length;i++) {
    for (let j=0;j<grid[0].length;j++) {
      if (grid[i][j] === 1) {
        freshOrangesCount++;
      }
      if (grid[i][j] === 2) {
        queue.push([i,j]);
      }
    }
  }

  function findNeighbours(row,col, grid) {
    const neighbours = []
    const directions = [[0,-1],[-1,0],[0,1],[1,0]];

    for (let i=0;i<directions.length;i++) {
      const tempRow = row - directions[i][0];
      const tempCol = col - directions[i][1];

      if (grid[tempRow] !== undefined &&grid[tempRow][tempCol] === 1) {
        neighbours.push([tempRow, tempCol]);
      }
    }

    return neighbours;
  }

  // O(NxM)
  while (queue.length) {

    if (rottenOrangesCount === freshOrangesCount)
      return minutes;

    const tempQueueLength = queue.length;
    for (let i=0;i<tempQueueLength;i++) {
      let [row,col] = queue.shift();

      const neighbours = findNeighbours(row, col, grid);
      for (let i=0;i<neighbours.length;i++) {
        const [tempRow, tempCol] = neighbours[i];
        grid[tempRow][tempCol] = 2;
        rottenOrangesCount++;
        queue.push([tempRow, tempCol]);
      }
    }

    minutes++;
  }

  if (rottenOrangesCount !== freshOrangesCount)
    return -1;
  else
    return minutes;
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