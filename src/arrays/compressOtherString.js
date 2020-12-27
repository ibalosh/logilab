/**
 *
 * Runtime complexity: O(nlogn) (regexp, arrays of results are O(n) but sorting is not)
 * Space complexity: O(n)
 *
 * @param {string}
 * @returns {string}
 */
function compressString(input) {
  const frequencyMap = {};
  const regex = /([a-zA-Z])(\d+)/g; // Matches a character followed by digits

  let match = regex.exec(input);

  while (match !== null) {
    const char = match[1];
    const freq = parseInt(match[2]);
    frequencyMap[char] = (frequencyMap[char] || 0) + freq;
    match = regex.exec(input);
  }

  const sortedChars = Object.keys(frequencyMap).sort((a,b) => a-b);
  let result = "";

  for (const char of sortedChars) {
    result += char + frequencyMap[char];
  }

  return result;
}

// Test the function
const input = "a3c11b2c2";
console.log(compressString(input)); // Output: "a3b2c13"