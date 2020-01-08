/**
 * Runtime complexity: O(n)
 * Space complexity: O(1)
 *
 * @param {string} s
 * @return {number}
 */
let myAtoi = function(s) {
  let index = 0;
  while (s.charAt(index) === " ")
    index++;

  let result = 0;
  let sign = 1;

  while (index < s.length) {
    if (s.charAt(index).match(/[0-9+-]/) === null) {
      return result;
    }
    else if (s.charAt(index) === "-") {
      sign = -1;
      index++;
    }
    else if (s.charAt(index) === "+") {
      sign = 1;
      index++;
    }

    let digit;
    while (s.charAt(index).match(/[0-9]/) !== null) {
      digit = s.charAt(index) - "0";
      result = 10 * result + digit;
      index++;
    }

    break;
  }

  if (sign > 0) {
    return Math.min(sign * Math.pow(2, 31)-1, sign * result)
  }
  else {
    return Math.max(sign * Math.pow(2, 31), sign * result)
  }
};

let s = "words and 987";
console.log(myAtoi(s));

s = "+-12"
console.log(myAtoi(s));

s = " -42";
console.log(myAtoi(s));

s = "1337c0d3";
console.log(myAtoi(s));

s = "55555938593895839859385938958938598395893";
console.log(myAtoi(s));

s = "-91283472332";
console.log(myAtoi(s));