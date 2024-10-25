/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 *
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [2,2,1]
 * Output: 1
 * Example 2:
 *
 * Input: nums = [4,1,2,1,2]
 * Output: 4
 * Example 3:
 *
 * Input: nums = [1]
 * Output: 1
 *
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }

  return result;
};

let nums = [2,2,1];
console.log(singleNumber(nums));

let singleNumberWithHash = function(nums) {
  let numbersCount = {}
  for (let i = 0; i < nums.length; i++) {
    numbersCount[nums[i]] = numbersCount[nums[i]] === undefined ? 1 : numbersCount[nums[i]]++;
  }

  for (let i = 0; i < nums.length; i++) {
    if (numbersCount[nums[i]] === 1) {
      return  numbersCount[nums[i]];
    }
  }

  return -1;
};

nums = [2,2,1];
console.log(singleNumberWithHash(nums));