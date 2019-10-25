/**
 * You are given an integer array cost where cost[i] is the cost of ith step on a staircase.
 * Once you pay the cost, you can either climb one or two steps.
 *
 * You can either start from the step with index 0, or the step with index 1.
 *
 * Return the minimum cost to reach the top of the floor.
 *
 * Example 1:
 *
 * Input: cost = [10,15,20]
 * Output: 15
 * Explanation: You will start at index 1.
 * - Pay 15 and climb two steps to reach the top.
 * The total cost is 15.
 * Example 2:
 *
 * Input: cost = [1,100,1,1,1,100,1,1,100,1]
 * Output: 6
 * Explanation: You will start at index 0.
 * - Pay 1 and climb two steps to reach index 2.
 * - Pay 1 and climb two steps to reach index 4.
 * - Pay 1 and climb two steps to reach index 6.
 * - Pay 1 and climb one step to reach index 7.
 * - Pay 1 and climb two steps to reach index 9.
 * - Pay 1 and climb one step to reach the top.
 * The total cost is 6.
 *
 *
 * Constraints:
 *
 * 2 <= cost.length <= 1000
 * 0 <= cost[i] <= 999
 *
 * Bottom-up solution - tabulation
 *
 * @param {number[]} cost
 * @return {number}
 */
let minCostClimbingStairs = function(cost) {
  function minimumCost(i,cost,memoHash) {
    if (i<=1) return 0;
    if (memoHash[i] !== undefined) {
      return memoHash[i];
    }

    let oneStep = cost[i-1] + minimumCost(i-1, cost, memoHash);
    let twoStep = cost[i-2] + minimumCost(i-2, cost, memoHash);
    memoHash[i] = Math.min(oneStep, twoStep);

    return memoHash[i];
  }

  return minimumCost(cost.length, cost, {});
};


//0 1 2 3 4 5
//0 0 0 1 2 4
let cost = [10,15,20]
console.log(minCostClimbingStairs(cost));

cost = [1,100,1,1,1,100,1,1,100,1];
console.log(minCostClimbingStairs(cost));

cost = [0,2,2,1];
console.log(minCostClimbingStairs(cost));