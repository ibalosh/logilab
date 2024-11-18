/**
 * Nearest Exit from Entrance in Maze
 *
 * https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/description/?envType=study-plan-v2&envId=leetcode-75
 *
 * You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.')
 * and walls (represented as '+').
 * You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol]
 * denotes the row and column of the cell you are initially standing at.
 *
 * In one step, you can move one cell up, down, left, or right. You cannot step into a
 * cell with a wall, and you cannot step outside the maze. Your goal is to find the nearest
 * exit from the entrance. An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.
 *
 * Return the number of steps in the shortest path from the entrance to the nearest exit,
 * or -1 if no such path exists.
 *
 * Example 1:
 *
 *
 * Input: maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2]
 * Output: 1
 * Explanation: There are 3 exits in this maze at [1,0], [0,2], and [2,3].
 * Initially, you are at the entrance cell [1,2].
 * - You can reach [1,0] by moving 2 steps left.
 * - You can reach [0,2] by moving 1 step up.
 * It is impossible to reach [2,3] from the entrance.
 * Thus, the nearest exit is [0,2], which is 1 step away.
 * Example 2:
 *
 *
 * Input: maze = [["+","+","+"],[".",".","."],["+","+","+"]], entrance = [1,0]
 * Output: 2
 * Explanation: There is 1 exit in this maze at [1,2].
 * [1,0] does not count as an exit since it is the entrance cell.
 * Initially, you are at the entrance cell [1,0].
 * - You can reach [1,2] by moving 2 steps right.
 * Thus, the nearest exit is [1,2], which is 2 steps away.
 * Example 3:
 *
 *
 * Input: maze = [[".","+"]], entrance = [0,0]
 * Output: -1
 * Explanation: There are no exits in this maze.
 *
 *
 * Constraints:
 *
 * maze.length == m
 * maze[i].length == n
 * 1 <= m, n <= 100
 * maze[i][j] is either '.' or '+'.
 * entrance.length == 2
 * 0 <= entrancerow < m
 * 0 <= entrancecol < n
 * entrance will always be an empty cell.
 *
 * Runtime complexity O(NxM)
 * Space time complexity O(MxN)
 *
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
let nearestExit = function(maze, entrance) {
  function getNeighbours(row, col, maze) {
    const directions = [[-1,0],[1,0],[0,1],[0,-1]];
    let neighbours = [];

    for (let i = 0; i < directions.length; i++) {
      let neighbourRow = row + directions[i][0];
      let neighbourCol = col + directions[i][1];

      if (
        neighbourRow >= 0 &&
        neighbourCol >= 0 &&
        neighbourRow < maze.length &&
        neighbourCol < maze[0].length &&
        maze[neighbourRow][neighbourCol] === "."
      ) {
        neighbours.push([neighbourRow, neighbourCol]);
      }
    }

    return neighbours;
  }

  let queue = [];
  queue.push(entrance);
  maze[entrance[0]][entrance[1]] = 0;


  while (queue.length > 0) {
    let cell = queue.shift();
    let cellRow = cell[0];
    let cellCol = cell[1];
    let distance = +maze[cellRow][cellCol];

    if (
      (cellRow !== entrance[0] || cellCol !== entrance[1]) &&
      (
        cellRow === 0 || cellRow === maze.length - 1 ||
        cellCol === 0 || cellCol === maze[0].length -1
      )
    ) {
      return distance;
    }

    let neighbours = getNeighbours(cell[0],cell[1], maze);
    for (let i = 0; i < neighbours.length; i++) {
      let neighbourRow = neighbours[i][0];
      let neighbourCol = neighbours[i][1];
      queue.push([neighbourRow, neighbourCol]);
      maze[neighbourRow][neighbourCol] = distance + 1;
    }
  }

  return -1;
};

let maze = [
  ["+","+",".","+"],
  [".",".",".","+"],
  ["+","+","+","."]
];

let entrance = [1,2];
console.log(nearestExit(maze, entrance))

maze = [
  ["+","+","+"],
  [".",".","."],
  ["+","+","+"]
];

entrance = [1,0]
console.log(nearestExit(maze, entrance))

maze = [[".","+"]];
entrance = [0,0];
console.log(nearestExit(maze, entrance))