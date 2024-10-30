function selectionSort(arr) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  for (let i = 0; i < arr.length-1; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        swap(arr, i, j);
      }
    }
  }

  return arr;
}

console.log(selectionSort([5,4,3,2,1]));
console.log(selectionSort([0,8,6,2,1]));
console.log(selectionSort([0,8,6,2,8]));