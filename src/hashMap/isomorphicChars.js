/** 205. Isomorphic Strings
 * https://leetcode.com/problems/isomorphic-strings/description/?envType=study-plan-v2&envId=top-interview-150
 * ---------------------------------------------
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 *
 * All occurrences of a character must be replaced with another character while preserving
 * the order of characters. No two characters may map to the same character, but a character may map to itself.
 *
 * Example 1:
 *
 * Input: s = "egg", t = "add"
 * Output: true
 *
 * Explanation:
 *
 * The strings s and t can be made identical by:
 *
 * Mapping 'e' to 'a'.
 * Mapping 'g' to 'd'.
 *
 * Example 2:
 *
 * Input: s = "foo", t = "bar"
 * Output: false
 *
 * Explanation:
 *
 * The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.
 *
 * Example 3:
 *
 * Input: s = "paper", t = "title"
 * Output: true
 *
 * Constraints:
 *
 * 1 <= s.length <= 5 * 104
 * t.length == s.length
 * s and t consist of any valid ascii character.
 * ---------------------------------------------
 * Runtime complexity: O(n)
 * Space complexity:
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isIsomorphic = function(s, t) {
  const mappingS2T = {};
  const mappingT2S = {};

  for (let i=0;i<s.length;i++) {
    if (mappingS2T[s.charAt(i)] === undefined)
      mappingS2T[s.charAt(i)] = t.charAt(i);
    else if (mappingS2T[s.charAt(i)] !== t.charAt(i))
      return false;

    if (mappingT2S[t.charAt(i)] === undefined)
      mappingT2S[t.charAt(i)] = s.charAt(i);
    else if (mappingT2S[t.charAt(i)] !== s.charAt(i))
      return false;
  }

  return true;
};

let s = "egg";
let t = "add";
console.log(isIsomorphic(s, t));

s = "foo";
t = "bar";
console.log(isIsomorphic(s, t));

s = "paper";
t = "title"
console.log(isIsomorphic(s, t));