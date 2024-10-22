# @param {Integer[]} flowerbed
# @param {Integer} n
# @return {Boolean}
def can_place_flowers(flowerbed, n)
  i = 0
  count = 0
  while i<flowerbed.size
    before = i > 0 ? flowerbed[i-1] : 0
    after = i <= flowerbed.size - 2 ? flowerbed[i+1] : 0

    if flowerbed[i] == 0 && before == 0 && after == 0
      flowerbed[i] = 1
      count += 1
    end

    i+=1
  end

  n <= count
end

flowerbed = [0,1,0]
n = 1

puts can_place_flowers(flowerbed, n)