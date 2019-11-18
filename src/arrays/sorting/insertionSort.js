/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function insertionSort(arr) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j-1]) {
        swap(arr, j, j-1);
      }
    }
  }

  return arr;
}

console.log(insertionSort([5,4,3,2,1]));
console.log(insertionSort([0,8,6,2,1]));
console.log(insertionSort([0,8,6,2,8]));
console.log(insertionSort([5,4,6,2,0]));


