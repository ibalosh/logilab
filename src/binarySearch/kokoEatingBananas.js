/**
 * 875. Koko eating bananas
 * https://leetcode.com/problems/koko-eating-bananas/description/?envType=study-plan-v2&envId=leetcode-75
 * --------------------------------------------------------------
 * Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas.
 * The guards have gone and will come back in h hours.
 *
 * Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of
 * bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of
 * them instead and will not eat any more bananas during this hour.
 *
 * Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
 *
 * Return the minimum integer k such that she can eat all the bananas within h hours.
 *
 * Example 1:
 *
 * Input: piles = [3,6,7,11], h = 8
 * Output: 4
 *
 * Example 2:
 *
 * Input: piles = [30,11,23,4,20], h = 5
 * Output: 30
 *
 * Example 3:
 *
 * Input: piles = [30,11,23,4,20], h = 6
 * Output: 23
 *
 *
 * Constraints:
 *
 * 1 <= piles.length <= 104
 * piles.length <= h <= 109
 * 1 <= piles[i] <= 109
 * --------------------------------------------------------------
 *
 * Runtime complexity: O(n*log(m)) = n is pile elements, m is sum of all piles
 * Space complexity: O(1)
 *
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
let minEatingSpeed = function(piles, h) {
  let minimumBananasPerHourSpeed = Number.MAX_VALUE;
  let minHours = 1;
  let maxHours = null;

  for (const pile of piles) {
    maxHours = Math.max(maxHours, pile);
  }

  while (maxHours >= minHours) {
    let hoursToEatAll = 0;
    let mid = minHours + Math.floor((maxHours - minHours)/2);

    for (let i=0;i<piles.length;i++) {
      hoursToEatAll += Math.ceil(piles[i]/mid);
    }

    if (hoursToEatAll > h) {
      minHours = mid +1;
    }
    else {
      if (minimumBananasPerHourSpeed > mid)
        minimumBananasPerHourSpeed = mid;
      maxHours = mid - 1;
    }
  }


  return minimumBananasPerHourSpeed;
};

let piles = [3,6,7,11];
let h = 8;
console.log(minEatingSpeed(piles,h));

piles = [30,11,23,4,20];
h=5;
console.log(minEatingSpeed(piles,h));