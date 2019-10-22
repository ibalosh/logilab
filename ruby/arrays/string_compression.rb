# frozen_string_literal: true

def compress(chars)
  i=0
  pos=0

  while i < chars.length
    pos+=1
    count = 1

    while chars[i] == chars[i+1]
      i+=1
      count+=1
    end

    if (count > 1)
      count.to_s.split("").each do |c|
        chars[pos] = c
        pos+=1
      end
    end

    j = i+1
    while (j>pos)
      chars[j-1] = chars[j]
      j-=1
    end

    i+=1
  end

  [chars,pos]
end

chars = ["a","a", "b","b","c","c","c"]

array, length = compress(chars)
puts array.join(", ")
puts length


chars = ["a"]
array, length = compress(chars)
puts array.join(", ")
puts length

chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
array, length = compress(chars)
puts array.join(", ")
puts length


chars = ["a","a","a","b","b","a","a"]
array, length = compress(chars)
puts array.join(", ")
puts length


chars = ["a","a","a","a","b","a"]
array, length = compress(chars)
puts array.join(", ")
puts length