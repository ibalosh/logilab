Array.prototype.top = function () {
  return this[this.length - 1];
}

Array.prototype.isEmpty = function () {
  return this.length === 0;
}

let postfixToPrefix = function (s) {
  let stackedOperands = [];

  let prefixText = "";
  let operators = {
    "+" : 1,
    "*" : 1,
    "/" : 1,
    "-" : 1,
  }

  for (let i = 0; i < s.length; i++) {
    if (operators[s.charAt(i)] === undefined) {
      stackedOperands.push(s.charAt(i));
    }
    else {
      let operand2 = stackedOperands.isEmpty() ? "" : stackedOperands.pop();
      let operand1 = stackedOperands.isEmpty() ? "" : stackedOperands.pop();
      let string = s.charAt(i) + operand1 + operand2;
      stackedOperands.push(string);
    }
  }

  return stackedOperands.pop();
}

let s = "AB+CD-*";
console.log(postfixToPrefix(s));