/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = function(nums) {
  /**
   *
   * @param nums
   * @param {number} left
   * @param {number} right
   * @returns {number[]}
   */
  function quickSort(nums, left = 0, right = nums.length -1) {
    if (left < right) {
      const pivot = partition(nums, left, right);
      quickSort(nums, left, pivot-1);
      quickSort(nums, pivot, right);
    }
    return nums;
  }

  /**
   * @param {number[]} arr
   * @param {number} left
   * @param {number} right
   * @returns {number}
   */
  function partition(arr, left, right) {
    const mid = left + Math.floor((right-left)/2);
    const midElement = arr[mid];

    while(left <= right) {
      while (arr[left] < midElement)
        left++;

      while (arr[right] > midElement)
        right--;

      if (left <= right) {
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
      }
    }

    return left;
  }

  return quickSort(nums)
};

console.log(sortArray([5,2,3,1]));
console.log(sortArray([-1,2,-8,-10]))
console.log(sortArray([3,10,2,1]))
console.log(sortArray([-4,0,7,4,9,-5,-1,0,-7,-1]));
