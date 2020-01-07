/**
 * 169. Majority element
 * https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150
 *
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