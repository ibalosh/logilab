# @param {String} s
# @param {String} t
# @return {Boolean}
def is_subsequence(s, t)
  position_in_s = 0
  position_in_t = 0

  while position_in_t < t.size
    if s[position_in_s] == t[position_in_t]
      position_in_s +=1
      position_in_t +=1
    else
      position_in_t +=1
    end
  end

  position_in_s == s.size
end

s = "abc"
t = "ahbgdc"
p is_subsequence(s, t) # => true

s = "a"
t = "ba"
p is_subsequence(s, t)

s = "axc"
t = "ahbgdc"
p is_subsequence(s, t) #