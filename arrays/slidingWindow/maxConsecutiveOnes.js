/**
 * Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
 * Output: 6
 * Explanation: [1,1,1,0,0,1,1,1,1,1,1]
 * Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 * Example 2:
 *
 * Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
 * Output: 10
 * Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
 * Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let longestOnes = function(nums, k) {
  let left = 0;
  let right = 0;

  for (right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      k--;
    }

    if (k < 0) {
      if (nums[left] === 0) k++;
      left++;
    }
  }

  return right - left;
};

let nums = [1,1,1,0,0,0,1,1,1];
let k = 2
console.log(longestOnes(nums, k));

nums = [1,1,1,0,0,0,1,1,1,1,0];
k = 2
console.log(longestOnes(nums, k));

nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1];
k = 3;
console.log(longestOnes(nums, k));

nums = [0,0,1];
k = 3;
console.log(longestOnes(nums, k));

nums = [1];
k = 3;
console.log(longestOnes(nums, k));