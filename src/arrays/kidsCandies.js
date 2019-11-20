/**
 * 1431. Kids With the Greatest Number of Candies
 * https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75
 * -----------------------------------------------------------------------------
 * There are n kids with candies. You are given an integer array candies,
 * where each candies[i] represents the number of candies the ith kid has,
 * and an integer extraCandies, denoting the number of extra candies that you have.
 *
 * Return a boolean array result of length n, where result[i] is true if,
 * after giving the ith kid all the extraCandies, they will have the greatest
 * number of candies among all the kids, or false otherwise.
 *
 * Note that multiple kids can have the greatest number of candies.
 *
 * Example 1:
 *
 * Input: candies = [2,3,5,1,3], extraCandies = 3
 * Output: [true,true,true,false,true]
 *
 * Example 2:
 *
 * Input: candies = [4,2,1,1,2], extraCandies = 1
 * Output: [true,false,false,false,false]
 *
 * Example 3:
 *
 * Input: candies = [12,1,12], extraCandies = 10
 * Output: [true,false,true]
 * -----------------------------------------------------------------------------
 *
 * Space complexity         : O(n)
 * Runtime complexity       : O(n) - counting output array
 *
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
function kidsWithCandies(candies, extraCandies) {
  let maxCandiesAmongKids = -1;
  let kidsWithMostCandies = [];

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > maxCandiesAmongKids) {
      maxCandiesAmongKids = candies[i];
    }
  }

  for (let i = 0; i < candies.length; i++) {
    const mostCandies = candies[i] + extraCandies >= maxCandiesAmongKids;
    kidsWithMostCandies.push(mostCandies);
  }

  return kidsWithMostCandies;
}

let candies = [2,3,5,1,3];
let extraCandies = 3;

console.log(kidsWithCandies(candies, extraCandies));
//[true,true,true,false,true]