let reverseWords = function(wordsString) {
  if (wordsString.length < 1) { return ""}

  let words = [];
  let word = "";

  for (let i = 0; i < wordsString.length; i++) {
    if (wordsString.charAt(i) === " ") {
      if (word.length > 0) {
        words.push(word);
      }

      word = "";
    }
    else {
      word += wordsString.charAt(i);
    }
  }

  if (word.length > 0) {
    words.push(word);
  }

  let wordsReversedString = ""
  while (words.length > 0) {
    if (words.length > 1) {
      wordsReversedString += words.pop() + " "
    }
    else {
      wordsReversedString += words.pop()
    }
  }

  return wordsReversedString;
};

let words = "the sky is blue"
console.log(reverseWords(words));