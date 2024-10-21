let moveZeroes = function(nums) {
    let indexOfFreeSpace = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        nums[indexOfFreeSpace]=nums[i];
        indexOfFreeSpace++;
      }
    }

    for (let i = indexOfFreeSpace; i < nums.length;i++) {
      nums[i] = 0;
    }

    return nums;
};

let nums = [0,1,0,3,12];
console.log(moveZeroes(nums));

nums = [0];
console.log(moveZeroes(nums));

nums = [0,1];
console.log(moveZeroes(nums));