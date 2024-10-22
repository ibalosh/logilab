/**
 * @param {string} s
 * @return {string}
 */
let removeStars = function(s) {
  let stack = []

  for (let i = 0; i < s.length; i++) {
    (s.charAt(i) !== '*') ? stack.push(s.charAt(i)) : stack.pop();
  }

  return stack.join("");
};


let s = "leet**cod*e"
console.log(removeStars(s));

s = "erase*****";
console.log(removeStars(s));