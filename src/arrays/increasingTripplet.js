/**
 * 334. Increasing Triplet Subsequence
 * https://leetcode.com/problems/increasing-triplet-subsequence/description/?envType=study-plan-v2&envId=leetcode-75
 * -------------------------------------------------------------
 *
 * Given an integer array nums, return true if there exists a triple of indices (i, j, k)
 * such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,4,5]
 * Output: true
 * Explanation: Any triplet where i < j < k is valid.
 *
 * Example 2:
 *
 * Input: nums = [5,4,3,2,1]
 * Output: false
 * Explanation: No triplet exists.
 * Example 3:
 *
 * Input: nums = [2,1,5,0,4,6]
 * Output: true
 * Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
 *
 * Constraints:
 *
 * 1 <= nums.length <= 5 * 105
 * -231 <= nums[i] <= 231 - 1
 * -------------------------------------------------------------
 *
 * Runtime complexity: O(n)
 * Space complexity: O(1)
 *
 * @param {number[]} nums
 * @return {boolean}
 */
let increasingTriplet = function(nums) {
  let firstMinimum = Number.MAX_SAFE_INTEGER;
  let secondMinimum = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < firstMinimum) {
      firstMinimum = nums[i];
    }
    else if (nums[i] > firstMinimum && nums[i] < secondMinimum) {
      secondMinimum = nums[i];
    }
    else if (nums[i] > secondMinimum) {
      return true;
    }
  }

  return false;
};

let nums = [1,2,0,4,5];
console.log(increasingTriplet(nums));

nums = [5,4,3,2,1];
console.log(increasingTriplet(nums));

nums = [1,5,2,3,0];
console.log(increasingTriplet(nums));

nums = [1,5,0,3,5];
console.log(increasingTriplet(nums));

nums = [2,1,5,0,4,6];
console.log(increasingTriplet(nums));

nums = [1,1,-2,6];
console.log(increasingTriplet(nums));

nums = [20,100,10,12,5,2,13];
console.log(increasingTriplet(nums));