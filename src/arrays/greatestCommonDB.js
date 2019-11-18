/**
 * 1071. Greatest Common Divisor of Strings
 * https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75
 * -----------------------------------------------------------------------------
 *
 * For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t
 * (i.e., t is concatenated with itself one or more times).
 *
 * Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
 *
 * Example 1:
 *
 * Input: str1 = "ABCABC", str2 = "ABC"
 * Output: "ABC"
 * Example 2:
 *
 * Input: str1 = "ABABAB", str2 = "ABAB"
 * Output: "AB"
 * Example 3:
 *
 * Input: str1 = "LEET", str2 = "CODE"
 * Output: ""
 *
 *
 * Constraints:
 *
 * 1 <= str1.length, str2.length <= 1000
 * str1 and str2 consist of English uppercase letters.
 * -----------------------------------------------------------------------------
 *
 * @param {string} string1
 * @param {string} string2
 * @return {string}
 */
let gcdOfStrings = function(string1, string2) {
  function gcdOfNumbers(x, y) {
    if (y === 0) {
      return x;
    }
    else {
      return gcdOfNumbers(y, x%y)
    }
  }

  if (string1.length === 0 || string2.length === 0) return ""
  if (string1 + string2 !== string2 + string1) return ""

  return string1.slice(0, gcdOfNumbers(string1.length, string2.length));
}

let word1 = "abab";
let word2 = "ab"
console.log(gcdOfStrings(word1, word2));

word1 = "ABCABC";
word2 = "ABC"
console.log(gcdOfStrings(word1, word2));

word1 = "ABABAB";
word2 = "ABAB"
console.log(gcdOfStrings(word1, word2));

word1 = "LEET";
word2 = "CODE"
console.log(gcdOfStrings(word1, word2));

word1 = "TAUXXTAUXXTAUXXTAUXXTAUXX";
word2 = "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX";
console.log(gcdOfStrings(word1, word2));
