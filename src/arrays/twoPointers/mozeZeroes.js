/**
 * 283. Move Zeroes
 * https://leetcode.com/problems/move-zeroes/description/?envType=study-plan-v2&envId=leetcode-75
 * -------------------------------------------------------------
 *
 * Given an integer array nums, move all 0's to the end of it while maintaining
 * the relative order of the non-zero elements.
 *
 * Note that you must do this in-place without making a copy of the array.
 *
 * Example 1:
 *
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * Example 2:
 *
 * Input: nums = [0]
 * Output: [0]
 *
 *
 * Constraints:
 *
 * 1 <= nums.length <= 104
 * -231 <= nums[i] <= 231 - 1
 * -------------------------------------------------------------
 *
 * Runtime complexity: O(n)
 * Space complexity: O(1)
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes = function(nums) {
    let indexOfFreeSpace = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        nums[indexOfFreeSpace]=nums[i];
        indexOfFreeSpace++;
      }
    }

    for (let i = indexOfFreeSpace; i < nums.length;i++) {
      nums[i] = 0;
    }
};

let nums = [0,1,0,3,12];
moveZeroes(nums)
console.log(nums);

nums = [0];
moveZeroes(nums)
console.log(nums);

nums = [0,1];
moveZeroes(nums)
console.log(nums);