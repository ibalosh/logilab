/**
 * 216. Combination sum 3
 * https://leetcode.com/problems/combination-sum-iii/description/?envType=study-plan-v2&envId=leetcode-75
 * -----------------------------------------------
 * Find all valid combinations of k numbers that sum up to n such that the following conditions are true:
 *
 * Only numbers 1 through 9 are used.
 * Each number is used at most once.
 * Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.
 *
 * Example 1:
 *
 * Input: k = 3, n = 7
 * Output: [[1,2,4]]
 * Explanation:
 * 1 + 2 + 4 = 7
 * There are no other valid combinations.
 *
 * Example 2:
 *
 * Input: k = 3, n = 9
 * Output: [[1,2,6],[1,3,5],[2,3,4]]
 * Explanation:
 * 1 + 2 + 6 = 9
 * 1 + 3 + 5 = 9
 * 2 + 3 + 4 = 9
 * There are no other valid combinations.
 *
 * Example 3:
 *
 * Input: k = 4, n = 1
 * Output: []
 * Explanation: There are no valid combinations.
 * Using 4 different numbers in the range [1,9], the smallest sum we can get is 1+2+3+4 = 10 and since 10 > 1, there are no valid combination.
 *
 * Constraints:
 *
 * 2 <= k <= 9
 * 1 <= n <= 60
 * -----------------------------------------------
 * Runtime complexity: O(K×C(9,K))
 * Space complexity: O(K)
 *
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
let combinationSum3 = function(k, n) {
  const answers = [];

  function backTrack(startNumber, combination) {
    if (combination.length === k) {
      let sum = 0;
      for (let i=0;i<combination.length;i++)
        sum += combination[i];

      if (sum === n) {
        answers.push([...combination]);
      }

      return;
    }

    for (let i=startNumber;i<=9;i++) {
      if (combination[combination.length-1] < i || combination.length === 0) {
        combination.push(i);
        backTrack(startNumber+1, combination);
        combination.pop();
      }
    }
  }

  backTrack(1, []);
  return answers;
};

let k = 3;
let n = 7;
console.log(combinationSum3(k,n));

k = 3;
n = 9;
console.log(combinationSum3(k,n));

k = 4;
n = 1;
console.log(combinationSum3(k,n));