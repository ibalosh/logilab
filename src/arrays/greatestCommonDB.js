function greatestCD(string1, string2) {
  function gcd(x, y) {
    if (y === 0) {
      return x;
    }
    else {
      return gcd(y, x%y)
    }
  }

  if (string1 + string2 !== string2 + string1) {
    return ""
  }

  const greatestCommonDivisor = gcd(string1.length, string2.length);
  return string1.slice(0, greatestCommonDivisor);
}


let str1 = "ABCABC";
let str2 = "ABC"

console.log(greatestCD(str1, str2));

str1 = "ABABAB";
str2 = "ABAB";

console.log(greatestCD(str1, str2));

str1 = "LEET";
str2 = "CODE";

console.log(greatestCD(str1, str2));

str1 = "TAUXXTAUXXTAUXXTAUXXTAUXX";

str2 = "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX";

console.log(greatestCD(str1, str2));