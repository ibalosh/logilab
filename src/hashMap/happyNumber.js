/**
 * 202. Happy Number
 * https://leetcode.com/problems/happy-number/description/?envType=study-plan-v2&envId=top-interview-150
 * ------------------------------------------------------------
 * Write an algorithm to determine if a number n is happy.
 *
 * A happy number is a number defined by the following process:
 *
 * Starting with any positive integer, replace the number by the sum of the squares of its digits.
 * Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
 * Those numbers for which this process ends in 1 are happy.
 * Return true if n is a happy number, and false if not.
 *
 * Example 1:
 *
 * Input: n = 19
 * Output: true
 * Explanation:
 * 12 + 92 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
 * Example 2:
 *
 * Input: n = 2
 * Output: false
 *
 *
 * Constraints:
 *
 * 1 <= n <= 231 - 1
 * ------------------------------------------------------------
 * Runtime complexity: O(logN)
 * Space complexity: O(logN)
 *
 * @param {number} n
 * @return {boolean}
 */
let isHappy = function(n) {
  if (n === 1)
    return true;

  let sum = n;
  const sumsAlreadyChecked = new Set();

  while (sum !== 1) {
    if (sumsAlreadyChecked.has(sum))
      return false;

    sumsAlreadyChecked.add(sum)
    let numberAsArray = sum.toString().split("");
    sum = 0;

    for (let i=0;i<numberAsArray.length;i++) {
      sum += numberAsArray[i] * numberAsArray[i];
    }

    if (sum === 1)
      return true;
  }

  return false;
};

console.log(isHappy(1));
console.log(isHappy(2));
console.log(isHappy(19));