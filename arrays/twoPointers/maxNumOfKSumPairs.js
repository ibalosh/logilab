/*
You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.



Example 1:

Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.
Example 2:

Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
1 <= k <= 109
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let maxOperations = function(nums, k) {
  let numbers = {}
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (numbers[k-nums[i]] > 0) {
      counter++;
      numbers[k-nums[i]]--;
    } else {
      numbers[nums[i]] = numbers[nums[i]] === undefined ? 1 : numbers[nums[i]] + 1;
    }
  }

  return counter;
};

let nums = [1,2,3,4];
let k = 5
//console.log(maxOperations(nums, k));

nums = [1,4,1,4];
k = 5
//console.log(maxOperations(nums, k));

nums = [4,1,4,1];
k = 5
//console.log(maxOperations(nums, k));


nums = [1,2];
k = 3
//console.log(maxOperations(nums, k));

nums = [3,1,3,4,3]
k = 6
console.log(maxOperations(nums, k));