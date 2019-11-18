let productExceptSelf = function(nums) {
  let leftMultipliedNums = [1];
  let rightMultipliedNums = [1];

  for (let i = 1; i < nums.length; i++) {
    leftMultipliedNums.push(leftMultipliedNums[i-1] * nums[i-1]);
  }

  for (let i = 1; i < nums.length; i++) {
    rightMultipliedNums.push(rightMultipliedNums[i-1]*nums[nums.length - i]);
  }

  for (let i = 0; i < leftMultipliedNums.length; i++) {
    leftMultipliedNums[i] =
      leftMultipliedNums[i] * rightMultipliedNums[rightMultipliedNums.length - i - 1];
  }

  return leftMultipliedNums;
};


let nums = [1,2,3,4]

console.log(productExceptSelf(nums))


