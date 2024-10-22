# frozen_string_literal: true

def max_vowels(s, k)
  return 0 if s.size > 100000 || s.size < 1

  vowels = {
    'a' => true,
    'e' => true,
    'i' => true,
    'o' => true,
    'u' => true
  }

  i=0
  sum = 0
  while (i<k)
    sum += 1 if vowels[s[i]]
    i+=1
  end

  max_sum = sum
  j=1
  while j<s.size-k+1
    sum -= 1 if vowels[s[j-1]]
    sum += 1 if vowels[s[j+k-1]]

    max_sum = sum if sum > max_sum
    j+=1
  end

  max_sum
end

s = "abciiidef"
k = 3
puts max_vowels(s, k)
s = "aeiou"
k = 2
puts max_vowels(s, k)
s = "leetcode"
k = 3
puts max_vowels(s, k)
s = "", k = 0
puts max_vowels(s, k)

s = "tryhard"
k = 4
puts max_vowels(s, k)

s = "weallloveyou"
k = 7
puts max_vowels(s, k)