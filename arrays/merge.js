const mergeAlternatively = function (word1, word2) {
  let word = "";
  const shorterLength = word1.length < word2.length ? word1.length : word2.length;
  const longerWord = word1.length > word2.length ? word1 : word2;

  for (let i = 0; i < longerWord.length; i++) {
    word += word1[i];
    word += word2[i];

    if (i === shorterLength - 1) {
      for (let j = i+1; j < longerWord.length; j++) {
        word += longerWord[j];
        i+=1;
      }
    }
  }

  return word;
}

let word1 = "abc";
let word2 = "pqr";
console.log(mergeAlternatively(word1, word2));

word1 = "ab";
word2 = "pqrs";
console.log(mergeAlternatively(word1, word2));

word1 = "abcd";
word2 = "pq";
console.log(mergeAlternatively(word1, word2));