/**
 * 169. Majority element
 * https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * Runtime complexity: O(n)
 * Space complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = function(nums) {
  const ocurrences = {}

  for (let num of nums) {
    ocurrences[num] = ocurrences[num] === undefined ? 1 : ocurrences[num] + 1;
  }

  return +Object.keys(ocurrences).find(key => ocurrences[key] > Math.floor(nums.length/2));
};

let nums = [3,2,3];
console.log(majorityElement(nums));

nums = [2,2,1,1,1,2,2];
console.log(majorityElement(nums));