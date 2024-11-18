function findPair(array, value) {
  function onSortedArray() {
    let leftIndex = 0;
    let rightIndex = array.length - 1;

    while (leftIndex < rightIndex) {
      const sum = array[leftIndex] + array[rightIndex];
      if (sum === value) {
        return [array[leftIndex], array[rightIndex]];
      }

      if (sum < value) {
        leftIndex++;
      } else {
        rightIndex--;
      }
    }

    return null;
  }

  function onUnsortedArray() {
    const arrayValues = new Set();

    for (let i = 0; i < array.length; i++) {
      const complement = value - array[i];
      if (arrayValues.has(complement)) {
        return [complement, array[i]];
      }
      arrayValues.add(array[i]);
    }

    return null;
  }

  return {
    onSortedArray,
    onUnsortedArray
  }
}


let result = findPair([10,20,40,50], 70).onSortedArray();
console.log(result);

result = findPair([10,20,40,50], 70).onUnsortedArray();
console.log(result);

