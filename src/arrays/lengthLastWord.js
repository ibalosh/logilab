/**
 * 58. Length last word
 * https://leetcode.com/problems/length-of-last-word/description/?envType=study-plan-v2&envId=top-interview-150
 * ------------------------------------------------------
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 *
 * A word is a maximal
 * substring
 *  consisting of non-space characters only.
 *
 * Example 1:
 *
 * Input: s = "Hello World"
 * Output: 5
 * Explanation: The last word is "World" with length 5.
 *
 * Example 2:
 *
 * Input: s = "   fly me   to   the moon  "
 * Output: 4
 * Explanation: The last word is "moon" with length 4.
 * Example 3:
 *
 * Input: s = "luffy is still joyboy"
 * Output: 6
 * Explanation: The last word is "joyboy" with length 6.
 *
 *
 * Constraints:
 *
 * 1 <= s.length <= 104
 * s consists of only English letters and spaces ' '.
 * There will be at least one word in s.
 * ------------------------------------------------------
 * Runtime complexity: O(n)
 * Space complexity: O(1)
 *
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = function(s) {
  let lastWord = "";

  let i = s.length-1;
  while (i >=0 && s.charAt(i) === " ")
    i--;

  while (i >= 0 && s.charAt(i) !== " ") {
    lastWord += s.charAt(i);
    i--;
  }

  return lastWord.length;
};

console.log(lengthOfLastWord("a"));
console.log(lengthOfLastWord(""));
console.log(lengthOfLastWord("  "));
console.log(lengthOfLastWord("Hello  World"));
console.log(lengthOfLastWord("   fly me   to   the moon   "));
console.log(lengthOfLastWord("luffy is still joyboy"));

