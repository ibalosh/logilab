Array.prototype.top = function () {
  return this[this.length - 1];
}

Array.prototype.isEmpty = function () {
  return this.length === 0;
}

let reverseString = function(string) {
  let stack = [];
  let reversedString = "";

  for (let i = 0; i < string.length; i++) {
    stack.push(string.charAt(i));
  }

  for (let i = 0; i < string.length; i++) {
    reversedString += stack.pop();
  }

  return reversedString;
}

let reverseStringWithoutStack = function(string) {
  let reversedString = "";

  for (let i = 0; i < string.length; i++) {
    reversedString = string[i] + reversedString;
  }

  return reversedString;
}

let s = "igor balos";
console.log(reverseString(s));
console.log(reverseStringWithoutStack(s));