/**
 * 128. Longest Consecutive Sequence
 * https://leetcode.com/problems/longest-consecutive-sequence/description/?envType=study-plan-v2&envId=top-interview-150
 * -----------------------------------------------------------
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 *
 * You must write an algorithm that runs in O(n) time.
 *
 * Example 1:
 *
 * Input: nums = [100,4,200,1,3,2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 *
 * Example 2:
 *
 * Input: nums = [0,3,7,2,5,8,4,6,0,1]
 * Output: 9
 *
 * Constraints:
 *
 * 0 <= nums.length <= 105
 * -109 <= nums[i] <= 109
 * -----------------------------------------------------------
 * Runtime complexity: O(n)
 * Space complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
let longestConsecutive = function(nums) {
  const numbers = new Set();
  for (let i=0;i<nums.length;i++) {
    numbers.add(nums[i]);
  }

  let maxSequenceCount = 0;

  for (let num of numbers) {
    if (numbers.has(num -1) === false) {
      let possibleSequence = 1;
      while (numbers.has(num+1)) {
        possibleSequence++;
        num++;
      }

      maxSequenceCount = Math.max(possibleSequence, maxSequenceCount);
    }
  }

  return maxSequenceCount;
};

let nums = [100,4,200,1,3,2]
console.log(longestConsecutive(nums));