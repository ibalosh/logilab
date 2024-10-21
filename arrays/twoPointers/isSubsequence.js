let isSubsequence = function(possibleSubString,stringOfChars) {
  if (possibleSubString.length === 0 && stringOfChars.length === 0) {
    return true
  }

  if (stringOfChars.length < possibleSubString.length) {
    return false;
  }

  let indexInSubstring = -1;

  for (let i = 0; i < stringOfChars.length; i++) {
    if (stringOfChars[i] === possibleSubString[indexInSubstring+1]) {
      indexInSubstring++;
    }

    if (indexInSubstring === possibleSubString.length -1) {
      return true;
    }
  }

  return false;
};

let possibleSubString = "abc";
let stringOfChars = "ahbgdc";

console.log(isSubsequence(possibleSubString,stringOfChars));

let s = "axc";
let t = "ahbgdc";
console.log(isSubsequence(s,t));

s = "a";
t = "a";
console.log(isSubsequence(s,t));

s = "";
t = "";
console.log(isSubsequence(s,t));