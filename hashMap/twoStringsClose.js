/**
 * Two strings are considered close if you can attain one from the other using the following operations:
 *
 * Operation 1: Swap any two existing characters.
 * For example, abcde -> aecdb
 * Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
 * For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
 * You can use the operations on either string as many times as necessary.
 *
 * Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.
 *
 *
 *
 * Example 1:
 *
 * Input: word1 = "abc", word2 = "bca"
 * Output: true
 * Explanation: You can attain word2 from word1 in 2 operations.
 * Apply Operation 1: "abc" -> "acb"
 * Apply Operation 1: "acb" -> "bca"
 * Example 2:
 *
 * Input: word1 = "a", word2 = "aa"
 * Output: false
 * Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
 * Example 3:
 *
 * Input: word1 = "cabbba", word2 = "abbccc"
 * Output: true
 * Explanation: You can attain word2 from word1 in 3 operations.
 * Apply Operation 1: "cabbba" -> "caabbb"
 * Apply Operation 2: "caabbb" -> "baaccc"
 * Apply Operation 2: "baaccc" -> "abbccc"
 *
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
let closeStrings = function(word1, word2) {
  if (word1.length !== word2.length) return false;

  let word1CharFreq = {}
  let word2CharFreq = {}

  for (let i = 0; i < word1.length; i++) {
    let word1c = word1.charAt(i);
    let word2c = word2.charAt(i);
    word1CharFreq[word1c] = word1CharFreq[word1c] === undefined ? 1 : word1CharFreq[word1c] + 1;
    word2CharFreq[word2c] = word2CharFreq[word2c] === undefined ? 1 : word2CharFreq[word2c] + 1;
  }

  let uniqueWords1 = new Set(word1);
  let uniqueWords2 = new Set(word2);

  if (uniqueWords1.size !== uniqueWords2.size) {
    return false;
  }

 if (new Set([...word1, ...word2]).size !== uniqueWords2.size) {
   return false;
 }

  let wordsCountOrdered1 = Object.values(word1CharFreq).sort((a, b) => a - b)
  let wordsCountOrdered2 = Object.values(word2CharFreq).sort((a, b) => a - b)

  for (let i = 0; i < wordsCountOrdered1.length; i++) {
    if (wordsCountOrdered1[i] !== wordsCountOrdered2[i]) {
      return false;
    }
  }

  return true;
};

let word1 = "abbc"; let word2 = "bbca"
console.log(closeStrings(word1,word2));

word1 = "a";
word2 = "aa"
console.log(closeStrings(word1,word2));

word1 = "aacabb";
word2 = "bbcbaa"
console.log(closeStrings(word1,word2));

word1 = "cabbba";
word2 = "abbccc";
console.log(closeStrings(word1,word2));

word1 = "cabbba";
word2 = "aabbss";
console.log(closeStrings(word1,word2));

word1 = "uau";
word2 = "ssx";
console.log(closeStrings(word1,word2));

word1 = "aaaacc";
word2 = "caaaac";
console.log(closeStrings(word1,word2));



