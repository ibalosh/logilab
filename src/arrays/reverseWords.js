/**
 * 151. Reverse Words in a String
 * -------------------------------------------------------------
 * Given an input string s, reverse the order of the words.
 *
 * A word is defined as a sequence of non-space characters.
 * The words in s will be separated by at least one space.
 *
 * Return a string of the words in reverse order concatenated by a single space.
 *
 * Note that s may contain leading or trailing spaces or multiple spaces between two words.
 * The returned string should only have a single space separating the words.
 * Do not include any extra spaces.
 *
 * Example 1:
 *
 * Input: s = "the sky is blue"
 * Output: "blue is sky the"
 * Example 2:
 *
 * Input: s = "  hello world  "
 * Output: "world hello"
 * Explanation: Your reversed string should not contain leading or trailing spaces.
 *
 * Example 3:
 *
 * Input: s = "a good   example"
 * Output: "example good a"
 * Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 *
 * Constraints:
 *
 * 1 <= s.length <= 104
 * s contains English letters (upper-case and lower-case), digits, and spaces ' '.
 * There is at least one word in s.
 * -------------------------------------------------------------
 *
 * Space Complexity: O(n)
 * Runtime Complexity: O(n)
 *
 * @param {string} wordsString
 * @return {string}
 */
let reverseWords = function(wordsString) {
  if (wordsString.length < 1) { return ""}

  let words = [];

  for (let i = 0; i < wordsString.length; i++) {
    let word = "";
    while (wordsString.charAt(i) === " " && i < wordsString.length)
      i++;

    while (wordsString.charAt(i) !== " " && i < wordsString.length) {
      word += wordsString.charAt(i);
      i++;
    }

    if (word.length > 0)
      words.push(word);
  }

  let reversedWord = ""
  while (words.length > 1) {
   reversedWord+= words.pop() + " ";
  }

  reversedWord+= words.pop();

  return reversedWord;
};

let words = "the sky is blue"
console.log(reverseWords(words));