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

  let uniqueOccurrences = new Set(Object.values(occurrences))

  return uniqueOccurrences.size === Object.keys(occurrences).length;
};

let arr = [1,2,2,1,1,3]
console.log(uniqueOccurrences(arr))