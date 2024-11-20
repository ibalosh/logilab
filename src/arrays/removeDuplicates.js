/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    nums[k] = nums[i];
    while (i < nums.length && nums[i] === nums[i+1]) {
      i++;
    }
    k++;
  }

  // not needed, just added to better see the result
  for (let i = k; i < nums.length; i++) {
    nums[i] = -1;
  }

  return k;
};

let removeDuplicatesAnotherApproach = function(nums) {
  let insertIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i-1])
      insertIndex++;

    nums[insertIndex] = nums[i];
  }

  // not needed, just added to better see the result
  for (let i = insertIndex + 1; i < nums.length; i++) {
    nums[i] = -1;
  }

  return insertIndex + 1;
};

let nums = [1, 1, 1];
removeDuplicates(nums);
console.log(nums);

nums = [1, 1, 1, 1, 2];
removeDuplicates(nums);
console.log(nums);
