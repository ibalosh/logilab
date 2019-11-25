/**
 * 392. Is Subsequence
 * https://leetcode.com/problems/is-subsequence/?envType=study-plan-v2&envId=leetcode-75
 * -------------------------------------------------------------
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 *
 * A subsequence of a string is a new string that is formed from the original string by
 * deleting some (can be none) of the characters without disturbing the relative positions
 * of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 *
 * Example 1:
 *
 * Input: s = "abc", t = "ahbgdc"
 * Output: true
 *
 * Example 2:
 *
 * Input: s = "axc", t = "ahbgdc"
 * Output: false
 *
 * Constraints:
 *
 * 0 <= s.length <= 100
 * 0 <= t.length <= 104
 * s and t consist only of lowercase English letters.
 * -------------------------------------------------------------
 *
 * Runtime complexity: O(n)
 * Space complexity: O(1)
 *
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isSubsequence = function(possibleSubString,stringOfChars) {
  let pointer1 = 0;

  for (let i=0; i<stringOfChars.length; i++) {
    if (possibleSubString[pointer1] === stringOfChars[i]) {
      pointer1++;
    }
  }

  return pointer1 === possibleSubString.length;
};

let possibleSubString = "abc";
let stringOfChars = "ahbgdc";

console.log(isSubsequence(possibleSubString,stringOfChars));

let s = "axc";
let t = "ahbgdc";
console.log(isSubsequence(s,t));

s = "a";
t = "a";
console.log(isSubsequence(s,t));

s = "";
t = "";
console.log(isSubsequence(s,t));