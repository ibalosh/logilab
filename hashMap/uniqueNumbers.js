/**
 *
 * Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
 *
 * @param {number[]} arr
 * @return {boolean}
 */
let uniqueOccurrences = function(arr) {
  let occurrences = {};

  for (let i = 0; i < arr.length; i++) {
    occurrences[arr[i]] = occurrences[arr[i]] === undefined ? 1 : occurrences[arr[i]] + 1;
  }

  let doubleValues = new Set();
  let noDoubles = true;
  Object.keys(occurrences).forEach( key => {
    if (doubleValues.has(+occurrences[key])) {
      noDoubles = false;
      return;
    }
    doubleValues.add(occurrences[key])
  });

  return noDoubles;
};

let arr = [1,2,2,1,1,3]
console.log(uniqueOccurrences(arr))