def find_difference(nums1, nums2)
  nums1h = {}
  nums1.each { |num| nums1h[num] = true }

  nums2h = {}
  nums2.each { |num| nums2h[num] = true }

  nums1r = {}
  nums1.each do |num|
    if nums2h[num].nil?
      nums1r[num] = true
    end
  end

  nums2r = {}
  nums2.each do |num|
    if nums1h[num].nil?
      nums2r[num] = true
    end
  end

  [nums1r.keys, nums2r.keys]
end

nums1 = [1,2,3]
nums2 = [2,4,6]

puts find_difference(nums1, nums2)

nums1 = [1,2,3,3]
nums2 = [1,1,2,2]
puts find_difference(nums1, nums2)