/**
 * 605. Can Place Flowers
 * https://leetcode.com/problems/can-place-flowers/description/?envType=study-plan-v2&envId=leetcode-75
 * -----------------------------------------------------
 * You have a long flowerbed in which some of the plots are planted, and some are not.
 * However, flowers cannot be planted in adjacent plots.
 *
 * Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1
 * means not empty, and an integer n, return true if n new flowers can be planted in the
 * flowerbed without violating the no-adjacent-flowers rule and false otherwise.
 *
 * Example 1:
 *
 * Input: flowerbed = [1,0,0,0,1], n = 1
 * Output: true
 *
 * Example 2:
 *
 * Input: flowerbed = [1,0,0,0,1], n = 2
 * Output: false
 *
 * Constraints:
 *
 * 1 <= flowerbed.length <= 2 * 104
 * flowerbed[i] is 0 or 1.
 * There are no two adjacent flowers in flowerbed.
 * 0 <= n <= flowerbed.length
 * -----------------------------------------------------
 *
 * Runtime complexity: O(n)
 * Space complexity: O(1)
 *
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function(flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    const left = (flowerbed[i-1] === 0 || flowerbed[i-1] === undefined);
    const right = (flowerbed[i+1] === 0 || flowerbed[i+1] === undefined);
    if (flowerbed[i] === 0 && left && right) {
      n-=1;
      flowerbed[i]=1;
    }
  }

  return n <= 0;
}

let flowerbed = [1,0,0,0,1];
let n = 1;
console.log(canPlaceFlowers(flowerbed,n))

flowerbed = [1,0,0,0,0,1];
n=2;
console.log(canPlaceFlowers(flowerbed,n))


flowerbed = [0,0,1,0,0]
n=1;
console.log(canPlaceFlowers(flowerbed,n))

n=1;
flowerbed = [0,0,0,0,0,1,0,0]
console.log(canPlaceFlowers(flowerbed,n))