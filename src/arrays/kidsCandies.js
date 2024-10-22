/*
 * Time complexity: O(n)
 * Space complexity: O(n)
 *
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