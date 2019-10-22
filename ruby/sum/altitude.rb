def largest_altitude(gain)
  highest = 0
  i = 0

  while i < gain.size
    if i == 0
      gain[i] = 0 + gain[i]
    else
      gain[i] = gain[i-1] + gain[i]
    end

    if highest < gain[i]
      highest = gain[i]
    end

    i+=1
  end

  highest
end


gain = [-5,1,5,0,-7]
puts largest_altitude(gain)

gain = [-4,-3,-2,-1,4,3,2]
puts largest_altitude(gain)