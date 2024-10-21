/**
 * Given an expression string s, write a program to examine whether the pairs
 * and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in the given expression.
 *
 * Example:
 *
 * Input: s = “[()]{}{[()()]()}”
 * Output: true
 * Explanation: All the brackets are well-formed
 *
 *
 * Input: s = “[(])”
 * Output: false
 * Explanation: 1 and 4 brackets are not balanced because
 * there is a closing ‘]’ before the closing ‘(‘
 *
 */

Array.prototype.top = function () {
  return this[this.length - 1];
}

Array.prototype.isEmpty = function () {
  return this.length === 0;
}

let validParentheis = function (s) {
  const openBrackets = {
    "[": "]",
    "(": ")",
    "{": "}",
  }

  let stack = [];

  for (let i=0; i<s.length; i++) {
    if (openBrackets[s.charAt(i)] !== undefined) {
      stack.push(s.charAt(i));
    }
    else if (openBrackets[stack.top()] === s.charAt(i)) {
      stack.pop();
    }
  }

  return stack.isEmpty();
}

let s = "[()]{}{[()()]()}";
console.log(validParentheis(s));

s = "[[[({})]{}]]";
console.log(validParentheis(s));

s = "[(])";
console.log(validParentheis(s));