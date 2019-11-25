/**
 * 11. Container with most water
 * https://leetcode.com/problems/container-with-most-water/description/?envType=study-plan-v2&envId=leetcode-75
 * -------------------------------------------------------------
 *
 * You are given an integer array height of length n.
 * There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0)
 * and (i, height[i]).
 *
 * Find two lines that together with the x-axis form a container,
 * such that the container contains the most water.
 *
 * Return the maximum amount of water a container can store.
 *
 * Notice that you may not slant the container.
 *
 * Example 1:
 *
 *
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
 * Example 2:
 *
 * Input: height = [1,1]
 * Output: 1
 *
 *
 * Constraints:
 *
 * n == height.length
 * 2 <= n <= 105
 * 0 <= height[i] <= 104
 * -------------------------------------------------------------
 *
 * Runtime complexity: O(n)
 * Space complexity: O(1)
 *
 * @param {number[]} height
 * @return {number}
 */
let maxArea = function(height) {
  function calculateWaterVolume(leftHeight, rightHeight, width) {
    let minHeight = Math.min(leftHeight, rightHeight);
    return minHeight * width;
  }

  let leftIndex = 0;
  let rightIndex = height.length - 1;
  let maxWaterVolume = calculateWaterVolume(
    height[leftIndex],
    height[rightIndex],
    rightIndex - leftIndex
  )

  while (leftIndex < rightIndex) {
    if (height[leftIndex] < height[rightIndex]) {
      leftIndex++;
    }
    else {
      rightIndex--;
    }

    const newMaxWaterVolume = calculateWaterVolume(
      height[leftIndex],
      height[rightIndex],
      rightIndex - leftIndex
    );

    maxWaterVolume = Math.max(maxWaterVolume, newMaxWaterVolume);
  }

  return maxWaterVolume;

};

let height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));

height = [1,1];
console.log(maxArea(height));

height = [8,7,2,1]
console.log(maxArea(height));

height = [2,3,4,5,18,17,6];
console.log(maxArea(height));

height = [1,2,3,4,5,25,24,3,4];
console.log(maxArea(height));