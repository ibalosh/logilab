/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @param {number} pick   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
**/

const guess = function(num, pick = 2) {
  if (num > pick) return -1;
  else if (num < pick) return 1;
  else return 0;

}

/**
 * @param {number} n
 * @return {number}
 */
let guessNumber = function(n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    let mid = Math.floor(left + (right-left)/2);
    let result = guess(mid);

    if (result === -1) {
      right = mid - 1;
    }
    else if (result === 1) {
      left = mid + 1;
    }
    else {
      return mid;
    }
  }
};

let n = 2;
let pick = 6;

console.log(guessNumber(n));

