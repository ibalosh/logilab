def move_zeroes(nums)
  reader = 0
  writer = 0

  while writer < nums.size
    if nums[writer] != 0
      nums[reader] = nums[writer]
      reader += 1
      writer += 1
    else
      writer += 1
    end
  end

  while reader < nums.size
    nums[reader] = 0
    reader += 1
  end

  nums
end

nums = [0,1,0,3,12]

p move_zeroes(nums)

nums = [2,1]
p move_zeroes(nums)

nums = [0,0]
p move_zeroes(nums)