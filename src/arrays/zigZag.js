/**
 * 6. ZigZag conversion
 * https://leetcode.com/problems/zigzag-conversion/description/?envType=study-plan-v2&envId=top-interview-150
 * ---------------------------------------------------------------
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * And then read line by line: "PAHNAPLSIIGYIR"
 *
 * Write the code that will take a string and make this conversion given a number of rows:
 *
 * string convert(string s, int numRows);
 *
 *
 * Example 1:
 *
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 * Example 2:
 *
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 * Explanation:
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 * Example 3:
 *
 * Input: s = "A", numRows = 1
 * Output: "A"
 *
 *
 * Constraints:
 *
 * 1 <= s.length <= 1000
 * s consists of English letters (lower-case and upper-case), ',' and '.'.
 * 1 <= numRows <= 1000
 * ---------------------------------------------------------------
 * Runtime complexity: O(numRows*n)
 * Space complexity: O(numRows*n)
 *
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
let convert = function(s, numRows) {
  if (numRows === 1)
    return s;

  const section = Math.ceil(s.length/(2*numRows-2));
  const cols = section * numRows -1;
  const arrayOfChars = Array(numRows).fill(null).map(_row => Array(cols).fill(""))
  let row = 0;
  let col = 0;

  for (let i=0;i<s.length;i++) {
    while (row < numRows && i < s.length) {
      arrayOfChars[row][col] = s.charAt(i);
      i++;
      row++;
    }
    row--;

    while (row >0 && i < s.length) {
      row--;
      col++;
      arrayOfChars[row][col] = s.charAt(i);
      if (row > 0)
        i++;
    }
    row++;
  }

  let result = "";
  for (let i=0;i<arrayOfChars.length;i++) {
    for (let j=0;j<arrayOfChars[0].length;j++) {
      if (arrayOfChars[i][j] !== "")
        result += arrayOfChars[i][j]
    }
  }

  return result;
};

let s = "PAYPALISHIRING";
let numRows = 3;
console.log(convert(s, numRows))

numRows = 4;
console.log(convert(s, numRows))

s="A";
numRows = 1;
//console.log(convert(s, numRows))

s="AB";
numRows = 1;
console.log(convert(s, numRows))

