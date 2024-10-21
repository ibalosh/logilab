/**
 * @param {string} s
 * @return {string}
 */
let removeStars = function(s) {
  let stack = []
  let string = []

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === '*') {
      stack.push(s.charAt(i))
    } else {
      while (stack.length > 0) {
        stack.pop();
        string.pop();
      }
      string.push(s.charAt(i));
    }
  }

  while (stack.length > 0) {
    stack.pop();
    string.pop();
  }

  return string.join("");
};


let s = "leet**cod*e"
console.log(removeStars(s));

s = "erase*****";
console.log(removeStars(s));