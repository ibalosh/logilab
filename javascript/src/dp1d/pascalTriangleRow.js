/**
 *
 * Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 *
 *
 *
 *
 * Example 1:
 *
 * Input: rowIndex = 3
 * Output: [1,3,3,1]
 * Example 2:
 *
 * Input: rowIndex = 0
 * Output: [1]
 * Example 3:
 *
 * Input: rowIndex = 1
 * Output: [1,1]
 *
 *
 * Constraints:
 *
 * 0 <= rowIndex <= 33
 *
 * @param {number} numRows
 * @return {number[][]}
 */
let generate = function(numRows) {
  if (numRows < 1) return [1]

  let numbers = [];
  numbers[0] = [1];
  numbers[1] = [1,1];

  for (let i = 2; i < numRows +1; i++) {
    let nums = [1];

    for (let j = 0; j < i-1; j++) {
      nums.push(numbers[i-1][j] + numbers[i-1][j+1]);
    }
    nums.push(1);
    numbers.push(nums);
  }

  return numbers.pop();
};

console.log(generate(3));
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