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

  const wordAsArray = word.split('');
  let left = 0;
  let right = word.length-1;

  while (left < right) {
    while (vowels[wordAsArray[left]] !== 1) {
      if (left >= right)
        return wordAsArray.join('');;
      left++;
    }

    while (vowels[wordAsArray[right]] !== 1) {
      if (right > wordAsArray.length)
        return wordAsArray.join('');
      right--;
    }


    if (left >= right)
      break;

    let temp = wordAsArray[left];
    wordAsArray[left] = wordAsArray[right];
    wordAsArray[right] = temp;
    left++;
    right--;
  }

  return wordAsArray.join('');
};

let s = "IceCreAm";
//console.log(reverseVowels(s));

s = "leetcode";
//console.log(reverseVowels(s));

s = ".,"
console.log(reverseVowels(s));