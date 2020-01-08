/**
 * 55. Jump game
 * https://leetcode.com/problems/jump-game/description/?envType=study-plan-v2&envId=top-interview-150
 * ---------------------------------------------------------
 * You are given an integer array nums. You are initially positioned at the array's first index,
 * and each element in the array represents your maximum jump length at that position.
 *
 * Return true if you can reach the last index, or false otherwise.
 *
 * Example 1:
 *
 * Input: nums = [2,3,1,1,4]
 * Output: true
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
 * Example 2:
 *
 * Input: nums = [3,2,1,0,4]
 * Output: false
 * Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 *
 *
 * Constraints:
 *
 * 1 <= nums.length <= 104
 * 0 <= nums[i] <= 105
 * ---------------------------------------------------------
 *
 * Runtime complexity: O(n^2)
 * Space complexity: O(n)
 *
 * @param {number[]} nums
 * @return {boolean}
 */
let canJump = function(nums) {
  const memo = Array(nums.length).fill("UNKNOWN");
  memo[nums.length-1] = "GOOD";

  for (let i=nums.length-2;i>=0;i--) {
    let maxJumpIndex = Math.min(i+nums[i], nums.length-1);

    for (let j=i+1;j<=maxJumpIndex;j++) {
      if (memo[j] === "GOOD") {
        memo[i] = "GOOD";
        break;
      }
    }
  }

  return memo[0] === "GOOD";
};

let nums = [2,3,1,1,4];
console.log(canJump(nums));

nums = [2,0,0];
console.log(canJump(nums));

nums = [3,2,1,0,4];
console.log(canJump(nums));