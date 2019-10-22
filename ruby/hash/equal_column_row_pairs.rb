def equal_pairs(grid)
  row_values={}
  col_values={}

  i=0
  while (i<grid.length)
    j=0
    key = ""
    while (j<grid.length)
      value = grid[i][j].to_s
      key= key + value + ","
      j+=1
    end
    row_values[key] = row_values[key].to_i + 1
    i+=1
  end

  i=0
  while (i<grid.length)
    j=0
    key = ""
    while (j<grid.length)
      value = grid[j][i].to_s
      key= key + value + ","
      j+=1
    end
    col_values[key] = col_values[key].to_i + 1
    i+=1
  end

  count = 0
  row_values.each do |key, value|
    if col_values[key]
      count += col_values[key]*value
    end
  end

  puts row_values
  puts col_values
  count
end


grid = [ [3,2,1], [1,7,6], [2,7,7]]
p equal_pairs(grid)
grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
p equal_pairs(grid)
grid=[[13,13],
      [13,13]]
p equal_pairs(grid)

grid = [[11,1],
        [1,11]]
p equal_pairs(grid)