# @param {Integer[]} flowerbed
# @param {Integer} n
# @return {Boolean}
def reverse_words(s)
  s.split(" ").reverse.join(" ").strip
end

#s = "the sky is blue"
#p reverse_word(s)

s = "  hello world  "
p reverse_words(s)

s = "a good   example"
p reverse_words(s)

s = "a b"
p reverse_words(s)
