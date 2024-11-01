/**
 * @param {number[]} nums
 * @return {number}
 */
let rob = function(nums) {
  let maxRobbedAmount = new Array(nums.length + 1).fill(0);
  maxRobbedAmount[nums.length] = 0;
  maxRobbedAmount[nums.length-1] = nums[nums.length - 1];

  for (let i = nums.length-2; i >=0; i--) {
    maxRobbedAmount[i] = Math.max(
      maxRobbedAmount[i+2] + nums[i],
        maxRobbedAmount[i+1]
    )
  }

  return maxRobbedAmount[0];
};


let nums = [1,2,3,1];
console.log(rob(nums));

nums = [2,7,9,3,1];
console.log(rob(nums));