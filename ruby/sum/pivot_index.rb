# frozen_string_literal: true
def pivot_index(nums)
  i=0
  j=nums.size-1

  sum_left_num = 0
  sum_right_num = 0
  sums_left = []
  sums_right = []

  while nums.size > i
    sum_left_num = sum_left_num + nums[i]
    sum_right_num = sum_right_num + nums[j]
    sums_left << sum_left_num
    sums_right << sum_right_num
    i+=1
    j-=1
  end

  index_left = 0
  index_right = nil

  while index_left < sums_right.size
    index_right = sums_right.size-1

    while (index_right >= 0)
      if (sums_left[index_left] == sums_right[index_right])
        break
      end
      index_right -=1
    end
    break if (sums_left[index_left] == sums_right[index_right])

    index_left +=1
  end

  #puts sums_left.join(",")
  #puts sums_right.join(",")



  if (index_left == 0 || index_right == 0)
    return 0
  end

  if ((sums_left.size - 1 - index_right) - index_left) == 2
    return index_left + 1
  else
    return -1
  end
end

nums = [1,7,3,6,5,6]

puts pivot_index(nums)
puts pivot_index([1,2,3])
#puts pivot_index([2,1,-1])
#puts pivot_index([0,1,1])
puts pivot_index([1,-1,2])
#puts pivot_index([-1,-1,-1,0,-1,-1,-1])
#puts pivot_index([2,1,-1])

