function greatestCDBruteForce(string1, string2) {
  let longerString;
  let shorterString;

  if (string1.length > string2.length) {
    longerString = string1;
    shorterString = string2;
  }
  else {
    longerString = string2;
    shorterString = string1;
  }

  for (let i = shorterString.length; i >= 0; i--) {
    const gcd = shorterString.slice(0, i);
    if (shorterString.length % gcd.length === 0 && longerString.length % gcd.length === 0) {
      if (shorterString.replaceAll(gcd, "") === "" && longerString.replaceAll(gcd,"") === "") {
        return gcd;
      }
    }
  }

  return "";
}

let str1 = "ABCABC";
let str2 = "ABC"

console.log(greatestCDBruteForce(str1, str2));

str1 = "ABABAB";
str2 = "ABAB";

console.log(greatestCDBruteForce(str1, str2));

str1 = "LEET";
str2 = "CODE";

console.log(greatestCDBruteForce(str1, str2));

str1 = "TAUXXTAUXXTAUXXTAUXXTAUXX";

str2 = "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX";

console.log(greatestCDBruteForce(str1, str2));