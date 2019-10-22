# @param {Integer[]} arr
# @return {Boolean}
def unique_occurrences(array)
  ocurrences = {}

  array.each do |i|
    ocurrences[i] = ocurrences[i].to_i + 1
  end

  duplicates = {}
  ocurrences.values.each do |value|
    duplicates[value] = duplicates[value].to_i + 1
  end

  duplicates.keys.length == ocurrences.values.length
end

arr = [1,2,2,2,1,1,3]
puts unique_occurrences(arr)

arr = [1,2]
puts unique_occurrences(arr)

arr = [-3,0,1,-3,1,1,1,-3,10,0]
puts unique_occurrences(arr)