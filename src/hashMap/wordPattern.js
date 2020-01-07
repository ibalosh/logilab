/**
 * 290. Word pattern
 * https://leetcode.com/problems/word-pattern/description/?envType=study-plan-v2&envId=top-interview-150
 * --------------------------------------------------------------
 * Given a pattern and a string s, find if s follows the same pattern.
 *
 * Here follow means a full match, such that there is a bijection between a letter in pattern and
 * a non-empty word in s. Specifically:
 *
 * Each letter in pattern maps to exactly one unique word in s.
 * Each unique word in s maps to exactly one letter in pattern.
 * No two letters map to the same word, and no two words map to the same letter.
 *
 *
 * Example 1:
 *
 * Input: pattern = "abba", s = "dog cat cat dog"
 *
 * Output: true
 *
 * Explanation:
 *
 * The bijection can be established as:
 *
 * 'a' maps to "dog".
 * 'b' maps to "cat".
 *
 * Example 2:
 *
 * Input: pattern = "abba", s = "dog cat cat fish"
 * Output: false
 *
 * Example 3:
 *
 * Input: pattern = "aaaa", s = "dog cat cat dog"
 * Output: false
 *
 *
 *
 * Constraints:
 *
 * 1 <= pattern.length <= 300
 * pattern contains only lower-case English letters.
 * 1 <= s.length <= 3000
 * s contains only lowercase English letters and spaces ' '.
 * s does not contain any leading or trailing spaces.
 * All the words in s are separated by a single space.
 * --------------------------------------------------------------
 * Runtime complexity: O(N+M) - N - length of s, M - length of pattern
 * Space complexity: O(N) - length of s
 *
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
let wordPattern = function(pattern, s) {
  const sWords = s.split(" ");
  const patternChars = pattern.split("");
  const mappedCharsToWords = {};
  const mappedWordsToChars = {};

  if (sWords.length !== patternChars.length)
    return false;

  for (let i=0;i<sWords.length;i++) {
    if (mappedCharsToWords[patternChars[i]] === undefined)
      mappedCharsToWords[patternChars[i]] = sWords[i];
    else if (mappedCharsToWords[patternChars[i]] !== sWords[i])
      return false;

    // just to get it passing for bogus example in leetcode which uses "constructor" as key
    if (!Object.keys(mappedWordsToChars).includes(sWords[i]))
      mappedWordsToChars[sWords[i]] = patternChars[i];
    else if (mappedWordsToChars[sWords[i]] !== patternChars[i])
      return false;
  }

  return true;
};

let pattern = "abba";
let s = "dog cat cat dog";
//console.log(wordPattern(pattern, s));

pattern = "abba";
s = "dog dog dog dog";
//console.log(wordPattern(pattern, s));

pattern = "abba";
s = "dog constructor constructor dog"
console.log(wordPattern(pattern, s));

