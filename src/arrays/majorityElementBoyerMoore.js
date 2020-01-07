/**
 * 169. Majority element
 * https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150
 * ----------------------------------------------
 * Given an array nums of size n, return the majority element.
 *
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 *
 * Example 1:
 *
 * Input: nums = [3,2,3]
 * Output: 3
 * Example 2:
 *
 * Input: nums = [2,2,1,1,1,2,2]
 * Output: 2
 *
 *
 * Constraints:
 *
 * n == nums.length
 * 1 <= n <= 5 * 104
 * -109 <= nums[i] <= 109
 *
 *
 * Follow-up: Could you solve the problem in linear time and in O(1) space?
 * ----------------------------------------------
 * Runtime complexity: O(n)
 * Space complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = function(nums) {
  let count = 0;
  let candidate = null;

  for (let i=0;i<nums.length;i++) {
    if (count===0) {
      candidate = nums[i];
      count++
    }
    else {
      count += (nums[i] === candidate) ? 1 : -1;
    }
  }

  return (count > 0) ? candidate : -1;
};

let nums = [3,2,3];
console.log(majorityElement(nums));

nums = [2,2,1,1,1,2,2];
console.log(majorityElement(nums));