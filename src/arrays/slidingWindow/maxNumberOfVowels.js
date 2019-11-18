/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
let maxVowels = function(s, k) {
  let maxVowelsInSubstring = 0;
  let vowelsInSlidingWindow = 0;

  const isAVowel = function (char) {
    const vowels = {'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1}
    return vowels[char] === 1;
  }

  for (let i = 0; i < k; i++) {
    if (isAVowel(s.charAt(i))) {
      vowelsInSlidingWindow++;
    }
  }

  maxVowelsInSubstring = vowelsInSlidingWindow;

  for (let i = 1; i < s.length - k + 1; i++) {
    if (isAVowel(s.charAt(i-1))) {
      vowelsInSlidingWindow--;
    }

    if (isAVowel(s.charAt(i+k-1))) {
      vowelsInSlidingWindow++;
    }

    if (vowelsInSlidingWindow > maxVowelsInSubstring) {
      maxVowelsInSubstring = vowelsInSlidingWindow;
    }
  }

  return maxVowelsInSubstring;
};

let s = "abciiidef";
let k = 3
console.log(maxVowels(s, k));

s = "aeiou";
k = 2
console.log(maxVowels(s, k));

s = "weallloveyou";
k = 7;
console.log(maxVowels(s, k));

s = "novowels";
k = 1;
console.log(maxVowels(s, k));