/**
 *
 * The input string contains digits 0-9 and parentheses ().
 * The digits outside the parentheses are mapped to lowercase English alphabets.
 * The digits inside the parentheses are mapped to the frequencies of the corresponding alphabets
 * in the order that they appear in the string .
 *
 * Example 1
 * Input string: '1224#26#'
 * This input string is an encoding of 'abxz'.
 *
 * 'a' to 'i' is encoded from '0' to '9' respectively. So, '1' maps to 'a' and '2' maps to 'b'.
 * 'j' is encoded as '10#', 'k' as '11#', and so on, with the last alphabet 'z' as '26#'.
 *
 * Example 2
 * Input string: '1(2)2(3)324#26#(5)'
 * This input string is an encoding of 'aabbbcxzzzzz'
 *
 * Output
 *
 * Given a string, return a frequency array containing the counts of the alphabets in the string.
 *
 * For example, the input string 'abxz' should return:
 *
 * [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1] -> You need to return this array.
 *
 *
 * Runtime Complexity: O(n)
 * Space Complexity: O(n)
 *
 */

/**
 * @param {string} sequence
 * @return {number[]}
 */
function decodeEncoded(sequence) {
  const frequencies = [];
  const frequenciesBinary = Array(27).fill(0);

  // map numbers to an array of chars
  for (let i=0;i< sequence.length;i++) {
    if (sequence.charAt(i) === "(") {
      let multiplier = "";

      i++;
      while (sequence.charAt(i) !== ")") {
        multiplier += sequence.charAt(i);
        i++;
      }

      // convert to number
      multiplier = +multiplier;
      const frequency = frequencies.pop();
      for (let k=0;k<multiplier;k++) {
        frequencies.push(frequency);
      }
    }
    else if (sequence.charAt(i+2) === "#") {
      let number = sequence.charAt(i) + sequence.charAt(i+1);
      i=i+2;
      frequencies.push(String.fromCharCode(96 + +number));
    }
    else {
      let number = sequence.charAt(i);
      frequencies.push(String.fromCharCode(96 + +number));
    }
  }

  for (let i=0;i<frequencies.length;i++) {
    frequenciesBinary[(frequencies[i].charCodeAt(0)-97)]++;
  }

  return frequenciesBinary;
}

console.log(decodeEncoded("1224#26#"));
/*
[a,b,x,z] or
[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0]
*/

console.log(decodeEncoded("1(2)2(3)324#26#(5)"));
/*
[
  'a', 'a', 'b', 'b',
  'b', 'c', 'x', 'z',
  'z', 'z', 'z', 'z'
]

[
  2, 3, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 1,
  0, 5, 0
]
 */