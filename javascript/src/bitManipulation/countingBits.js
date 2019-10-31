/**
 * @param {number} n
 * @return {number[]}
 */
let countBits = function(n) {
  function bitsCount(n) {
    let bits = 0;
    let result = n;

    while (result !== 0) {
      bits += result % 2;
      result = Math.floor(result/2);
    }

    return bits;
  }

  let bits = []
  for (let i = 0; i <= n; i++) {
    bits.push(bitsCount(i));
  }

  return bits;
};


console.log(countBits(0));