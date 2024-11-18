/**
 * @param {string} s
 * @return {string}
 */
let reverseVowels = function(word) {
  const vowels = {
    'a': 1,
    'e': 1,
    'i': 1,
    'o': 1,
    'u': 1,
    'A': 1,
    'E': 1,
    'I': 1,
    'O': 1,
    'U': 1,
  }

  let foundVowelsInWord = [];

  for (let i = 0; i < word.length; i++) {
    if (vowels[word.charAt(i)]) {
      foundVowelsInWord.push(word.charAt(i));
    }
  }

  if (foundVowelsInWord.length === 0) { return word}

  let newWord = "";

  for (let i = 0; i < word.length; i++) {
    if (vowels[word.charAt(i)]) {
      newWord += foundVowelsInWord.pop();
    }
    else {
      newWord += word.charAt(i);
    }
  }

  return newWord;
};

s = "IceCreAm"

console.log(reverseVowels(s));