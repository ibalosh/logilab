/**
 * Given a binary array nums, you should delete one element from it.
 *
 * Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,1,0,1]
 * Output: 3
 * Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
 * Example 2:
 *
 * Input: nums = [0,1,1,1,0,1,1,0,1]
 * Output: 5
 * Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
 * Example 3:
 *
 * Input: nums = [1,1,1]
 * Output: 2
 * Explanation: You must delete one element.
 *
 * @param {number[]} nums
 * @return {number}
 */
let longestSubarray = function(nums) {
    let left = 0;
    let right = 0;
    let k=1;

    for (right = 0; right < nums.length; right++) {
      if (nums[right] === 0) {
        k--;
      }

      if (k < 0) {
        if (nums[left] === 0) k++;
        left++;
      }
    }

    return right - left - 1;
};

let nums = [1,1,0,1];
console.log(longestSubarray(nums))

nums = [0,1,1,1,0,1,1,0,1];
console.log(longestSubarray(nums))