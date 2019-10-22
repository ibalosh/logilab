# @param {Integer[]} flowerbed
# @param {Integer} n
# @return {Boolean}
def reverse_words(s)
  words = []

  i=0
  word = ""
  while i<= s.size
    if i == s.size
      words << word if word.size > 0
      break
    end

    if s[i] == " "
      if word.size > 0
        words.push word
        word = ""
      end
    else
      word += s[i]
    end

    i+=1
  end

  word = ""
  while words.size > 1
    word += words.pop + " "
  end
  word += words.pop

  word
end

#s = "the sky is blue"
#p reverse_word(s)

s = "  hello world  "
p reverse_word(s)

s = "a good   example"
p reverse_word(s)

s = "a b"
p reverse_word(s)
