/**
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
