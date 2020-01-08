/** 77. Combinations
 * https://leetcode.com/problems/combinations/description/
 * ----------------------------------------------------------
 * Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
 *
 * You may return the answer in any order.
 *
 * Example 1:
 *
 * Input: n = 4, k = 2
 * Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
 * Explanation: There are 4 choose 2 = 6 total combinations.
 * Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
 *
 * Example 2:
 *
 * Input: n = 1, k = 1
 * Output: [[1]]
 * Explanation: There is 1 choose 1 = 1 total combination.
 *
 *
 * Constraints:
 *
 * 1 <= n <= 20
 * 1 <= k <= n
 * ----------------------------------------------------------
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
let combine = function(n, k) {
  const answers = [];

  function backTrack(number, combination) {
    if (combination.length === k) {
      answers.push([...combination]);
      return;
    }

    // optimization, since we only need to find k numbers and combination will
    // always contain next increasing number, no need to loop through all numbers up to n
    // but rather up to number when combination length k is satisfied
    const combinationsNeedToAdd = k - combination.length;
    const remainingNumbersThatCanBeAdded = n - number + 1;
    const available = remainingNumbersThatCanBeAdded - combinationsNeedToAdd;

    for (let i=number;i<=number+available;i++) {
      combination.push(i);
      backTrack(i+1, combination);
      combination.pop();
    }
  }

  backTrack(1, []);
  return answers;
};

let n = 4;
let k = 2;
console.log(combine(n,k));

n = 1;
k = 1;
console.log(combine(n,k));

n = 5;
k = 3;
console.log(combine(n,k));