/**
 * -----------------------------------------
 * Input: A bag contains n = 6 items with IDs [1, 1, 1, 2, 2, 3], and m = 2 items can be removed.
 * Output: What is the minimum number of different IDs the final bag can contain?
 *
 * Runtime complexity: O(n)
 * Space complexity: O(n)
 * -----------------------------------------
 *
 * @param {number[]}
 * @param {number}
 *
 * @return {number}
 */
function minimumNumberOfDifferentIds(n, m) {
  const numbers = {}

  for (let i=0;i<n.length;i++) {
    numbers[n[i]] = numbers[n[i]] === undefined ? 1 : ++numbers[n[i]];
  }

  const frequencies = Object.values(numbers).sort((a,b) => a-b)

  for (let i=0;i<frequencies.length;i++) {
    if (frequencies[i] <= m) {
      m = m - frequencies[i];
      frequencies[i] = 0;
    } else {
      frequencies[i] -=m;
      m=0;
    }
  }

  console.log(frequencies)
  return frequencies.filter(e => e > 0).length
}

console.log(minimumNumberOfDifferentIds([1, 1, 1, 2, 2, 3], 2)); // [0,1,3] , 2
console.log(minimumNumberOfDifferentIds([1, 1, 1, 2, 2, 3], 3)); // [0,0,3] , 1