def close_strings(word1, word2)
  return false if word1.length != word2.length

  word1 = word1.chars.sort
  word2 = word2.chars.sort

  puts word1.join(",")
  puts word2.join(",")
  word2 == word1
end

word1 = "abc"
word2 = "bca"

p close_strings(word1, word2)


word1 = "cabbba"
word2 = "abbccc"
p close_strings(word1, word2)