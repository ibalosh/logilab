/**
 * 51. N-Queens
 * https://leetcode.com/problems/n-queens/description/
 * ----------------------------------------------------
 * The n-queens puzzle is the problem of placing n queens on an n x n chessboard
 * such that no two queens attack each other.
 *
 * Given an integer n, return all distinct solutions to the n-queens puzzle.
 * You may return the answer in any order.
 *
 * Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.'
 * both indicate a queen and an empty space, respectively.
 *
 * Example 1:
 *
 * Input: n = 4
 * Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 * Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
 * Example 2:
 *
 * Input: n = 1
 * Output: [["Q"]]
 *
 *
 * Constraints:
 *
 * 1 <= n <= 9
 * ----------------------------------------------------
 * Runtime complexity: O(n!)
 * Space complexity: O(n^2)
 *
 * @param {number} n
 * @return {string[][]}
 */
let solveNQueens = function(n) {
  const cols = new Set();
  const posDiag = new Set(); // (row + col) equal on each step - decreasing row, increasing col
  const negDiag = new Set(); // (row - col) equal on each step - increasing row, decreasing col

  const board = Array(n).fill(null).map(_row => Array(n).fill("."))
  let res = [];

  function backTrack(row) {
    if (row === n) {
      const boardCopy = board.map(row => row.join(""));
      res.push(boardCopy);
    }

    for (let col=0;col < n;col++) {
      if (cols.has(col) || posDiag.has(row + col) || negDiag.has(row-col))
        continue;

      posDiag.add(row+col);
      negDiag.add(row-col);
      cols.add(col);
      board[row][col] = "Q"

      backTrack(row+1);

      posDiag.delete(row+col);
      negDiag.delete(row-col);
      cols.delete(col);
      board[row][col] = "."
    }
  }

  backTrack(0);
  return res;
};

/**
 *  . Q . .
 *  . . . Q
 *  Q . . .
 *  . . Q .
 **/

console.log(solveNQueens(4));
