/**
 * @param {character[]} chars
 * @return {number}
 */
let compress = function(chars) {
  let compressedString = "";

  for (let i = 0; i < chars.length; i++) {
    compressedString += chars[i];
    let sameChars = 1;

    while (chars[i] === chars[i+1]) {
      i++;
      sameChars++;
    }

    if (sameChars > 1) {
      compressedString += sameChars;
    }
  }

  for (let i = 0; i < chars.length; i++) {
    chars[i] =
      (i < compressedString.length) ? compressedString.charAt(i) :  chars[i] = '';

  }

  return compressedString.length;
};

let chars = ["a","a","b","b","c","c","c"];
console.log(compress(chars));

chars = ["a"];
console.log(compress(chars));

chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
console.log(compress(chars));
