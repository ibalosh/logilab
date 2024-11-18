/**
 *
 * Given an encoded string, return its decoded string.
 *
 * The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
 *
 * You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].
 *
 * The test cases are generated so that the length of the output will never exceed 105.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "3[a]2[bc]"
 * Output: "aaabcbc"
 * Example 2:
 *
 * Input: s = "3[a2[c]]"
 * Output: "accaccacc"
 * Example 3:
 *
 * Input: s = "2[abc]3[cd]ef"
 * Output: "abcabccdcdcdef"
 *
 *
 * Constraints:
 *
 * 1 <= s.length <= 30
 * s consists of lowercase English letters, digits, and square brackets '[]'.
 * s is guaranteed to be a valid input.
 * All the integers in s are in the range [1, 300].
 *
 * @param {string} s
 * @return {string}
 */
let decodeString = function(s) {
  // if +char converts string to number then it's a number
  function isANumber(char) {
    return (!isNaN(+char))
  }

  // add function to array to fake array as stack
  Array.prototype.top = function () {
    return this[this.length - 1];
  }

  // add function to array to fake array as stack
  Array.prototype.isEmpty = function () {
    return this.length === 0;
  }

  let stack = []

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) !== "]") {
      let el = s.charAt(i);
      if (isANumber(s.charAt(i))) {
        while (isANumber(s.charAt(i+1))) {
          el += s.charAt(i+1);
          i++;
        }
      }

      stack.push(el);
    }
    else if (s.charAt(i) === "]") {
      let string = stack.pop();

      while (true) {
        let el = stack.pop();
        if (el === "[") break;
        string = el + string;
      }

      // since after [, next stack element is an operation
      // take it of stack and use it with string taken of the stack
      stack.push(string.repeat(stack.pop()));
    }
  }

  let string = "";
  while (!stack.isEmpty()) {
    string = stack.pop() + string;
  }

  return string;
};

let s = "100[leetcode]";
console.log(decodeString(s));

s = "2[abc]3[cd]ef";
console.log(decodeString(s));

s = "3[a]2[bc]"
console.log(decodeString(s));

s = "3[a2[c]]";
console.log(decodeString(s));





