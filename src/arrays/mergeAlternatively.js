/**
 * 1768. Merge Strings Alternately
 * https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75
 * -----------------------------------------------------------------------------
 *
 * You are given two strings word1 and word2. Merge the strings by adding letters in alternating order,
 * starting with word1. If a string is longer than the other, append the additional letters onto the end of the
 * merged string.
 *
 * Return the merged string.
 *
 * Example 1:
 *
 * Input: word1 = "abc", word2 = "pqr"
 * Output: "apbqcr"
 * Explanation: The merged string will be merged as so:
 * word1:  a   b   c
 * word2:    p   q   r
 * merged: a p b q c r
 * Example 2:
 *
 * Input: word1 = "ab", word2 = "pqrs"
 * Output: "apbqrs"
 *
 * Explanation: Notice that as word2 is longer, "rs" is appended to the end.
 * word1:  a   b
 * word2:    p   q   r   s
 * merged: a p b q   r   s
 *
 * Example 3:
 *
 * Input: word1 = "abcd", word2 = "pq"
 * Output: "apbqcd"
 * Explanation: Notice that as word1 is longer, "cd" is appended to the end.
 * word1:  a   b   c   d
 * word2:    p   q
 * merged: a p b q c   d
 *
 * Constraints:
 *
 * 1 <= word1.length, word2.length <= 100
 * word1 and word2 consist of lowercase English letters.
 *
 * -----------------------------------------------------------------------------
 * Runtime complexity: O(n + m) - n, m - word1 and word2
 * Space complexity: O(n + m)
 *
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternatelyFirstTry = function(word1, word2) {
  let mergedWord = "";

  let counter=0;
  for (let i = 0; i < word1.length; i++) {
    if (i === word2.length)
      break;

    mergedWord += word1.charAt(i);
    mergedWord += word2.charAt(i);
    counter++;
  }

  if (word1.length !== word2.length) {
    let longerWord = (word1.length > word2.length) ? word1 : word2;

    for (let j = counter; j < longerWord.length; j++) {
      mergedWord += longerWord.charAt(j);
    }
  }

  return mergedWord;
}

/*
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
function mergeAlternately(word1,word2) {
  const wordLength = Math.max(word1.length, word2.length);
  let word = "";

  for (let i=0;i< wordLength;i++) {
    word += word1.charAt(i);
    word += word2.charAt(i);
  }

  return word;
}

let word1 = "abc";
let word2 = "pqr"
console.log(mergeAlternately(word1, word2));

word1 = "abc";
word2 = "p"
console.log(mergeAlternately(word1, word2));

word1 = "a";
word2 = "pqr"
console.log(mergeAlternately(word1, word2));

word1 = "a";
word2 = "p"
console.log(mergeAlternately(word1, word2));

word1 = "a";
word2 = ""
console.log(mergeAlternately(word1, word2));

word1 = "";
word2 = "p"
console.log(mergeAlternately(word1, word2));

word1 = "abcd";
word2 = "pq"
console.log(mergeAlternately(word1, word2));
