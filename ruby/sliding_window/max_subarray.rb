# frozen_string_literal: true

def find_max_average(nums, k)
  i=0

  sum=0
  while (i < k)
    sum = sum + nums[i]
    i+=1
  end

  max_sum = sum.to_f/k

  j=1
  while (j<nums.size - k+1)
    sum = sum - nums[j-1] + nums[k+j-1]
    max_sum = [max_sum, sum.to_f/k].max
    j+=1
  end

  max_sum
end

nums = [1,12,-5,-6,50,3]
k = 4

puts find_max_average(nums, k) # Output: 12.75

nums = [5]
k = 1

puts find_max_average(nums, k) # Output: 12.75

nums = [-1]
k = 1

puts find_max_average(nums, k) # Output: 12.75