/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function quickSort(arr, left = 0, right = arr.length-1) {
    let pivot = partition(arr, left, right);

    if (left < pivot -1)
      quickSort(arr, left, pivot -1);

    if (right > pivot )
      quickSort(arr, pivot, right);
}

function partition(arr, left, right) {
  let pivot = Math.floor((left + right) / 2);

  while (left <= right) {
    while (arr[left] < arr[pivot])
      left++;

    while (arr[right] > arr[pivot])
      right--;

    if (left <= right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }

  return left;
}

let arr= [4,3,6,1,5];
quickSort(arr);
console.log(arr);


arr= [4,3,6,2,0];
quickSort(arr);
console.log(arr);
