/**
 * 88. Merge Sorted Array
 * https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
 * -------------------------------------------------------------
 *
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
 * and two integers m and n, representing the number of elements in nums1 and nums2
 * respectively.
 *
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.

 * The final sorted array should not be returned by the function,
 * but instead be stored inside the array nums1. To accommodate this,
 * nums1 has a length of m + n, where the first m elements denote the elements
 * that should be merged, and the last n elements are set to 0 and should be ignored.
 * nums2 has a length of n.
 *
 * Example 1:
 *
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 * Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
 * The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
 * Example 2:
 *
 * Input: nums1 = [1], m = 1, nums2 = [], n = 0
 * Output: [1]
 * Explanation: The arrays we are merging are [1] and [].
 * The result of the merge is [1].
 * Example 3:
 *
 * Input: nums1 = [0], m = 0, nums2 = [1], n = 1
 * Output: [1]
 * Explanation: The arrays we are merging are [] and [1].
 * The result of the merge is [1].
 * Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 *
 *
 * Constraints:
 *
 * nums1.length == m + n
 * nums2.length == n
 * 0 <= m, n <= 200
 * 1 <= m + n <= 200
 * -109 <= nums1[i], nums2[j] <= 109
 *
 *
 * Follow up: Can you come up with an algorithm that runs in O(m + n) time?
 * -------------------------------------------------------------
 *
 * Runtime Complexity: O(m + n)
 * Space Complexity: O(m)
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function(nums1, m, nums2, n) {
  if ((m + n) !== nums1.length)
    return;

  let nums1Copy = [...nums1];
  let pointer1 = 0;
  let pointer2 = 0;

  let index = 0;
  while (index < m + n) {
    if (pointer2 >= n || (pointer1 < m && nums1Copy[pointer1] <= nums2[pointer2])) {
      nums1[index] = nums1Copy[pointer1++];
    }
    else if (pointer1 >=m || pointer2 < n) {
      nums1[index] = nums2[pointer2++];
    }

    index++;
  }
}

let nums1 = [4,5,6,0,0,0]
let m = 3;
let nums2 = [1,2,3];
let n = 3;
merge(nums1, m, nums2, n);
console.log(nums1); // [1,2,3,4,5,6]

nums1 = [1,2,4,5,6,0];
m = 5;
nums2 = [3];
n = 1;
merge(nums1, m, nums2, n);
console.log(nums1); // [1,2]

nums1 = [1,2,3,0,0,0];
m = 3;
nums2 = [2,5,6];
n = 3
merge(nums1, m, nums2, n);
console.log(nums1); // [1,2,2,3,5,6]

nums1 = [1];
m = 1;
nums2 = [];
n = 0;
merge(nums1, m, nums2, n);
console.log(nums1); // [1]

nums1 = [0];
m = 0;
nums2 = [1];
n = 1;
merge(nums1, m, nums2, n);
console.log(nums1); // [1]

nums1 = [2,0];
m = 1;
nums2 = [1];
n = 1;
merge(nums1, m, nums2, n);
console.log(nums1); // [1,2]