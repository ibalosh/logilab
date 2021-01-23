/**
 * 14. Longest common prefix
 * https://leetcode.com/problems/longest-common-prefix/description/?envType=study-plan-v2&envId=top-interview-150
 * ---------------------------------------------------------------------
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 *
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 *
 * Example 2:
 *
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 * Constraints:
 *
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] consists of only lowercase English letters if it is non-empty.
 * ---------------------------------------------------------------------
 * Runtime complexity: O(CxN) - C - max char length, number of words
 * Space complexity: O(1)
 *
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function(strs) {
  let maxLength = 200;
  let maxCommonPrefix = ""

  for (let i=0;i<strs.length;i++) {
    if (strs[i].length < maxLength)
      maxLength = strs[i].length;
  }

  for (let i=0;i<maxLength;i++) {
    let prefixChar = strs[0].charAt(i);
    let allCharsSame = true;
    for (let j=1;j<strs.length;j++) {
      if (prefixChar !== strs[j].charAt(i)) {
        allCharsSame = false;
        break;
      }
    }

    if (allCharsSame === true) {
      maxCommonPrefix += prefixChar;
    }
    else {
      break;
    }
  }

  return maxCommonPrefix;
};

let strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs));

strs = ["dog","racecar","car"];
console.log(longestCommonPrefix(strs));
