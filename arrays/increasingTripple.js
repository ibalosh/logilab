let increasingTriplet = function(nums) {
  let firstMinimum = Number.MAX_VALUE;
  let secondMinimum = Number.MAX_VALUE;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < firstMinimum) {
      firstMinimum = nums[i];
    } else if (nums[i] < secondMinimum && nums[i] > firstMinimum) {
      secondMinimum = nums[i];
    }

    if (nums[i] > secondMinimum) {
      return true;
    }
  }

  return false;
};

let nums = [1,2,3,4,5];
console.log(increasingTriplet(nums));

nums = [5,4,3,2,1];
console.log(increasingTriplet(nums));

nums = [1,5,2,3,0];
console.log(increasingTriplet(nums));

nums = [1,5,0,3,5];
console.log(increasingTriplet(nums));

nums = [2,1,5,0,4,6];
console.log(increasingTriplet(nums));

nums = [1,1,-2,6];
console.log(increasingTriplet(nums));

nums = [20,100,10,12,5,2,13];
console.log(increasingTriplet(nums));