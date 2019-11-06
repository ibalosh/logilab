/**
 * @param {number[][]} grid
 * @return {number}
 */
let shortestPathBinaryMatrix = function(grid) {
  // matrix neighbours
  function getNeighbours(row,col, grid) {
    let neighbours = [];

    let neighbourDirections = [
      [1,-1],[0,-1],[-1,-1],[1,0],[-1,0],[1,1],[0,1],[-1,1]
    ]

    for (let i = 0; i < neighbourDirections.length; i++) {
      let neighbourRow = row + neighbourDirections[i][0];
      let neighbourCol = col + neighbourDirections[i][1];

      if (
        neighbourRow >= 0 &&
        neighbourCol >= 0 &&
        neighbourRow < grid.length &&
        neighbourCol < grid[0].length  &&
        grid[neighbourRow][neighbourCol] !== undefined &&
        grid[neighbourRow][neighbourCol] < 1)
      {
        neighbours.push([neighbourRow, neighbourCol]);
      }
    }

    return neighbours;
  }

  if (grid[0][0] === 1 || grid[grid.length-1][grid.length-1] === 1 ) {
    return -1;
  }

  let queue = [];
  queue.push([0,0]);
  grid[0][0] = 1;

  while (queue.length > 0) {
    let cell = queue.shift();
    let [cellRow, cellCol] = cell;

    let distance = grid[cellRow][cellCol];
    if (cellRow === grid.length -1 && cellCol === grid[0].length - 1) {
      return distance;
    }

    let neighbours = getNeighbours(cellRow, cellCol, grid);
    for (let i = 0; i < neighbours.length; i++) {
      let neighbourRow = neighbours[i][0];
      let neighbourCol = neighbours[i][1];
      queue.push([neighbourRow, neighbourCol]);
      grid[neighbourRow][neighbourCol] = distance + 1;
    }
  }

  return -1;
};




let grid = [
  [0,1],
  [1,0]
]
console.log(shortestPathBinaryMatrix(grid));

grid = [
  [0,0,0],
  [1,1,0],
  [1,1,0]
]

console.log(shortestPathBinaryMatrix(grid));

grid = [
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
console.log(shortestPathBinaryMatrix(grid));