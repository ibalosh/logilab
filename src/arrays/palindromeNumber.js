/**
 * Runtime complexity: O(log10x) - number of decimals in number
 * Space complexity: O(1)
 *
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  if (x < 0 )
    return false; // due to the sign, it will never be a palindrome;

  const number = x.toString();

  if (number.length === 1)
    return true;

  let invertedNumber = "";

  for (let i=number.length-1;i>=0;i--) {
    invertedNumber += number.charAt(i);
  }

  return invertedNumber === number;
};

console.log(isPalindrome(-123));
console.log(isPalindrome(123));
console.log(isPalindrome(121));
console.log(isPalindrome(10));