/**
 * 52. N-Queens
 * https://leetcode.com/problems/n-queens-ii/description/
 * ----------------------------------------------------
 * The n-queens puzzle is the problem of placing n queens on an n x n chessboard such
 * that no two queens attack each other.
 *
 * Given an integer n, return the number of distinct solutions to the n-queens puzzle.
 *
 * Example 1:
 *
 * Input: n = 4
 * Output: 2
 * Explanation: There are two distinct solutions to the 4-queens puzzle as shown.
 *
 * Example 2:
 *
 * Input: n = 1
 * Output: 1
 *
 * Constraints:
 *
 * 1 <= n <= 9
 * ----------------------------------------------------
 * Runtime complexity: O(n!)
 * Space complexity: O(n)
 *
 * @param {number} n
 * @return {number}
 */
let solveNQueens = function(n) {
  const negDiag = new Set(); // row - col
  const posDiag = new Set(); // row + col
  const cols = new Set();

  function backTrack(row) {
    if (row === n) {
      return 1;
    }
    let answers = 0;

    for (let col=0;col<n;col++) {
      if (!(
        negDiag.has(row - col) ||
        posDiag.has(row + col) ||
        cols.has(col)
      )) {
          negDiag.add(row-col);
          posDiag.add(col+row);
          cols.add(col);
          answers += backTrack(row+1);
          negDiag.delete(row-col);
          posDiag.delete(row+col);
          cols.delete(col);
      }
    }

    return answers;
  }

  return backTrack(0)
};

console.log(solveNQueens(4));
console.log(solveNQueens(1));
