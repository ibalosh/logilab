# @param {String} s
# @return {String}
def reverse_vowels(word)
  i = 0
  j = word.size - 1
  while i < word.size && i < j
    until is_a_vowel(word[i])
      i+=1
    end

    until is_a_vowel(word[j])
      j-=1
    end

    break if i >= j
    switch_vowels(word, i, j)
    i+=1
    j-=1
  end

  word
end


def switch_vowels(word, first_vowel_index, second_vowel_index)
  temp = word[first_vowel_index]
  word[first_vowel_index] = word[second_vowel_index]
  word[second_vowel_index] = temp
  word
end

def is_a_vowel(char)
  vowels = {
    "a" => true,
    "e" => true,
    "i" => true,
    "o" => true,
    "u" => true,
    "A" => true,
    "E" => true,
    "I" => true,
    "O" => true,
    "U" => true
  }

  vowels[char] == true
end

#puts reverse_vowels("helloiauoshaebbbeea")
puts reverse_vowels("hello")
#puts reverse_vowels("leetcode")
puts reverse_vowels("aA")
puts reverse_vowels("A man, a plan, a canal: Panama")
puts reverse_vowels("race car")