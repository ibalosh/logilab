/**
 * Letter Combinations of a Phone Number
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/editorial/?envType=study-plan-v2&envId=leetcode-75
 * --------------------------------------------
 * Runtime complexity: O(4^n*n)
 * Space complexity: O(n)
 *
 * @param {string} digits
 * @return {string[]}
 */
let letterCombinations = function(digits) {
  if (digits.length === 0)
    return [];

  const combinations = []
  const letters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  function backTrack(index, charsForCombination) {
    if (charsForCombination.length === digits.length) {
      combinations.push(charsForCombination.join(""));
      return;
    }

    const lettersForCombination = letters[digits[index]];

    for (let i=0;i<lettersForCombination.length;i++) {
      charsForCombination.push(lettersForCombination.charAt(i));
      backTrack(index+1, charsForCombination);
      charsForCombination.pop();
    }
  }

  backTrack(0, []);
  return combinations;
};

console.log(letterCombinations("23"));
console.log(letterCombinations(""));
console.log(letterCombinations("2"));