/**
 * 383. Ransom Note
 * https://leetcode.com/problems/ransom-note/description/?envType=study-plan-v2&envId=top-interview-150
 * ------------------------------------------------------------
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed
 * by using the letters from magazine and false otherwise.
 *
 * Each letter in magazine can only be used once in ransomNote.
 *
 * Example 1:
 *
 * Input: ransomNote = "a", magazine = "b"
 * Output: false
 *
 * Example 2:
 *
 * Input: ransomNote = "aa", magazine = "ab"
 * Output: false
 *
 * Example 3:
 *
 * Input: ransomNote = "aa", magazine = "aab"
 * Output: true
 *
 * Constraints:
 *
 * 1 <= ransomNote.length, magazine.length <= 105
 * ransomNote and magazine consist of lowercase English letters.
 * ------------------------------------------------------------
 * Runtime complexity: O(m) // m being max between m and n
 * Space complexity: O(1) // because max chars is 26
 *
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
let canConstruct = function(ransomNote, magazine) {
  if (ransomNote.length > magazine.length)
    return false;

  const ransomNoteChars = {};
  const magazineChars = {}

  for (let i=0;i<ransomNote.length;i++) {
    ransomNoteChars[ransomNote.charAt(i)] =
      ransomNoteChars[ransomNote.charAt(i)] === undefined ? 1 : ransomNoteChars[ransomNote.charAt(i)] +1;
  }

  for (let i=0;i<magazine.length;i++) {
    magazineChars[magazine.charAt(i)] =
      magazineChars[magazine.charAt(i)] === undefined ? 1 : magazineChars[magazine.charAt(i)] +1;
  }

  let result = true;

  Object.keys(ransomNoteChars).forEach(key => {
    if (ransomNoteChars[key] <= magazineChars[key]) {
      ransomNoteChars[key] = ransomNoteChars[key]-1;
      magazineChars[key] = magazineChars[key]-1;
    }
    else {
      result = false;
    }
  })

  return result;
};

let ransomNote = "a";
let magazine = "b";
console.log(canConstruct(ransomNote, magazine)); // false

ransomNote = "ab";
magazine = "ba";
console.log(canConstruct(ransomNote, magazine)); // true

ransomNote = "aa";
magazine = "aab";
console.log(canConstruct(ransomNote, magazine)); // true