/**
 *
 * You are given an integer array nums consisting of n elements, and an integer k.
 *
 * Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
 *
 * Example 1:
 *
 * Input: nums = [1,12,-5,-6,50,3], k = 4
 * Output: 12.75000
 * Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
 * Example 2:
 *
 * Input: nums = [5], k = 1
 * Output: 5.00000
 *
 *
 * Constraints:
 *
 * n == nums.length
 * 1 <= k <= n <= 105
 * -104 <= nums[i] <= 104
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let findMaxAverage = function(nums, k) {
  let slidingSum = 0;

  for (let i = 0; i < k; i++) {
    slidingSum += nums[i];
  }

  let maxSum = slidingSum;

  for (let i = k; i < nums.length; i++) {
    slidingSum = slidingSum - nums[i-k] + nums[i];
    maxSum = Math.max(maxSum, slidingSum)
  }

  return maxSum/k;
};

let nums = [1,12,-5,-6,50,3];
let k = 4;
console.log(findMaxAverage(nums, k));

nums = [5]; k = 1;
console.log(findMaxAverage(nums, k));

nums = [0,4,0,3,2]; k=1;
console.log(findMaxAverage(nums, k));

nums = [4,2,1,3,3]; k =2;
console.log(findMaxAverage(nums, k));