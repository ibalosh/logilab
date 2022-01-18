/**
 * 912. Sort an array
 *
 * Given an array of integers nums, sort the array in ascending order and return it.
 *
 * You must solve the problem without using any built-in functions in O(nlog(n)) time complexity
 * and with the smallest space complexity possible.
 *
 * Example 1:
 *
 * Input: nums = [5,2,3,1]
 * Output: [1,2,3,5]
 * Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
 * Example 2:
 *
 * Input: nums = [5,1,1,2,0,0]
 * Output: [0,0,1,1,2,5]
 * Explanation: Note that the values of nums are not necessary unique.
 *
 * Constraints:
 *
 * 1 <= nums.length <= 5 * 104
 * -5 * 104 <= nums[i] <= 5 * 104
 *
 * @param {number[]} arr
 * @param {number}
 * @param {number}
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = partition(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex, right);
  }
}

function partition(arr, left, right) {
  let pivot = arr[Math.floor((left + right) / 2)];

  while (left <= right) {
    while (arr[left] < pivot) left++;

    while (arr[right] > pivot) right--;

    if (left <= right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }

  // Return the partition index
  return left;
}

let arr= [4,3,6,1,5];
quickSort(arr);
console.log(arr);

arr= [4,3,6,2,0];
quickSort(arr);
console.log(arr);

arr = [-4,0,7,4,9,-5,-1,0,-7,-1]
quickSort(arr);
console.log(arr);