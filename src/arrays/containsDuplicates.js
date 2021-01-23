/**
 * Runtime complexity: O(n) worst case
 * Space complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
let containsNearbyDuplicate = function(nums, k) {
  const numbers = {}
  let hasDistinctIndices = false;

  for (let i=0;i<nums.length;i++) {
    if (numbers[nums[i]]) {
      let indices = numbers[nums[i]];
      for (const index of indices) {
        if (Math.abs(i - index) <= k) {
          hasDistinctIndices = true;
          break;
        }
      }
    }

    numbers[nums[i]] = numbers[nums[i]] === undefined ? [i] : [...numbers[nums[i]], i]

    if (hasDistinctIndices)
      break;

  }

  return hasDistinctIndices;
};

let nums = [1,2,3,1];
let k = 3;
console.log(containsNearbyDuplicate(nums, k));

nums = [1,0,1,1];
k = 1;
console.log(containsNearbyDuplicate(nums, k));

nums = [1,2,3,1,2,3];
k = 2;
console.log(containsNearbyDuplicate(nums, k));