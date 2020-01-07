/**
 * 20. Valid parenthesis
 * https://leetcode.com/problems/valid-parentheses/description/?envType=study-plan-v2&envId=top-interview-150
 * ---------------------------------------------
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 *
 * Example 1:
 *
 * Input: s = "()"
 * Output: true
 *
 * Example 2:
 *
 * Input: s = "()[]{}"
 * Output: true
 *
 * Example 3:
 *
 * Input: s = "(]"
 * Output: false
 *
 * Example 4:
 *
 * Input: s = "([])"
 * Output: true
 *
 * Constraints:
 *
 * 1 <= s.length <= 104
 * s consists of parentheses only '()[]{}'.
 * ---------------------------------------------
 * Runtime complexity: O(n) - length of string
 * Space complexity: O(n) - stack size
 *
 */

let validParenthesis = function (s) {
  Array.prototype.top = function () {
    return this[this.length - 1];
  }

  Array.prototype.isEmpty = function () {
    return this.length === 0;
  }

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
    else {
      return false;
    }
  }

  return stack.isEmpty();
}

let s = "[()]{}{[()()]()}";
console.log(validParenthesis(s));

s = "[[[({})]{}]]";
console.log(validParenthesis(s));

s = "[(])";
console.log(validParenthesis(s));

s = "]";
console.log(validParenthesis(s));

s = "([])";
console.log(validParenthesis(s));
