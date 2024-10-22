# @param {Integer[]} height
# @return {Integer}
def max_area(height)
  i = 0
  j = 1
  max_area = calc_area(i, j, height)

  index = 2
  while index < height.size
    if height[i] < height[j]
      if height[index] > height[i]
        i = index
      end
    else
      if height[index] > height[j]
        j = index
      end
    end
    if max_area < calc_area(i, j, height)
      max_area = calc_area(i, j, height)
    end
    index += 1
  end
end

def calc_area(i, j, height)
  min_height = [height[i], height[j]].min
  i > j ? (i-j) * min_height : (j-i) * min_height
end



height = [1,8,6,2,5,4,8,3,7]

p max_area(height) # 49