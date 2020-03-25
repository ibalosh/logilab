/**
 * 7. Reverse integer
 * https://leetcode.com/problems/reverse-integer/description/
 * ---------------------------------------------
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 *
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 *
 * Example 1:
 *
 * Input: x = 123
 * Output: 321
 *
 * Example 2:
 *
 * Input: x = -123
 * Output: -321
 *
 * Example 3:
 *
 * Input: x = 120
 * Output: 21
 *
 * Constraints:
 *
 * -231 <= x <= 231 - 1
 * ---------------------------------------------
 * Runtime complexity: O(log10x) - log10x is the ~ number of digits in number
 * Space complexity: O(1)
 *
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  const maxValue = Math.pow(2, 31) - 1;
  const minValue = Math.pow(-2, 31);
  let numberAsString = x.toString();
  const sign = numberAsString.charAt(0) === "-" ? "-" : ""

  if (sign === "-")
    numberAsString = numberAsString.slice(1,numberAsString.length)

  let reversed = "";

  for (let i=numberAsString.length-1;i>=0;i--) {
    reversed += numberAsString[i];
  }

  reversed = +`${sign}${reversed}`;
  return (reversed > maxValue || reversed < minValue) ? 0 : reversed
};

const reverseMod = function(x) {
  const [minValue,maxValue] = [Math.pow(-2, 31),Math.pow(2, 31) - 1];
  let reversedNumber = 0;

  while (x !== 0) {
    const number = x % 10;
    x = x < 0 ? Math.ceil(x/10) : Math.floor(x/10)
    reversedNumber = reversedNumber * 10 + number;
    if (reversedNumber > maxValue || reversedNumber < minValue)
      return 0;
  }

  return reversedNumber;
};

console.log(reverse(123));
console.log(reverse(120));
console.log(reverse(-123));

console.log(reverseMod(123));
console.log(reverseMod(120));
console.log(reverseMod(-123));