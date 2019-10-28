/**
 *
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 *
 *
 *
 *
 * Example 1:
 *
 * Input: numRows = 5
 * Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 * Example 2:
 *
 * Input: numRows = 1
 * Output: [[1]]
 *
 *
 * Constraints:
 *
 * 1 <= numRows <= 30
 *
 * @param {number} numRows
 * @return {number[][]}
 */
let generate = function(numRows) {
  if (numRows < 2) return [[1]]
  let numbers = [];
  numbers[0] = [1];
  numbers[1] = [1,1];

  for (let i = 2; i < numRows; i++) {
    let nums = [1];

    for (let j = 0; j < i-1; j++) {
      nums.push(numbers[i-1][j] + numbers[i-1][j+1]);
    }
    nums.push(1);
    numbers.push(nums);
  }

  return numbers;
};

console.log(generate(1));
console.log(generate(2));
console.log(generate(5));

/*

1
[1]

2
 [1]
[1,1]

3
  [1]
 [1,1]
[1,2,1]

4
   [1]
  [1,1]
 [1,2,1]
[1,3,3,1]

5
    [1]
   [1,1]
  [1,2,1]
 [1,3,3,1]
[1,4,6,4,1]

 */