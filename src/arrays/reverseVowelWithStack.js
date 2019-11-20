/**
 * 345. Reverse Vowels of a String
 * https://leetcode.com/problems/reverse-vowels-of-a-string/description/?envType=study-plan-v2&envId=leetcode-75
 * -----------------------------------------------------
 * Given a string s, reverse only all the vowels in the string and return it.
 *
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower
 * and upper cases, more than once.
 *
 * Example 1:
 *
 * Input: s = "IceCreAm"
 * Output: "AceCreIm"
 *
 * Explanation:
 *
 * The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".
 *
 * Example 2:
 *
 * Input: s = "leetcode"
 * Output: "leotcede"
 *
 * Constraints:
 *
 * 1 <= s.length <= 3 * 105
 * s consist of printable ASCII characters.
 * -----------------------------------------------------
 *
 * Runtime complexity: O(n)
 * Space complexity: O(n)
 *
 * @param {string} s
 * @return {string}
 */
let reverseVowels = function(word) {
  const vowels = {
    'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1,
    'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1,
  }

  // creating a Stack of vowels in the word
  let foundVowelsInWord = [];

  for (let i = 0; i < word.length; i++) {
    if (vowels[word.charAt(i)]) {
      foundVowelsInWord.push(word.charAt(i));
    }
  }

  if (foundVowelsInWord.length === 0) { return word}

  let newWord = "";
  for (let i = 0; i < word.length; i++) {
    if (vowels[word.charAt(i)]) {
      newWord += foundVowelsInWord.pop();
    }
    else {
      newWord += word.charAt(i);
    }
  }

  return newWord;
};

s = "IceCreAm"

console.log(reverseVowels(s));