# @param {Integer[]} candies
# @param {Integer} extra_candies
# @return {Boolean[]}
def kids_with_candies(candies, extra_candies)
  kid_with_most_candies = kid_with_most_candies(candies)

  candies.map do |candy|
    candy + extra_candies >= kid_with_most_candies
  end
end

def kid_with_most_candies(candies)
  max = 0
  candies.each do |candy|
    max = candy if candy > max
  end

  max
end

candies = [2,3,5,1,3]
extraCandies = 3

puts kids_with_candies(candies, extraCandies)

candies = [4,2,1,1,2]
extraCandies = 1
puts kids_with_candies(candies, extraCandies)

candies = [12,1,12]
extraCandies = 10
puts kids_with_candies(candies, extraCandies)