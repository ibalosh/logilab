/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
let minFlips = function(a, b, c) {
  function convertToBin(number) {
    let numberToDivide = number;
    let bits = [];

    while (numberToDivide > 0) {
      bits.push(numberToDivide % 2);
      numberToDivide = Math.floor(numberToDivide / 2);
    }

    return bits.reverse();
  }

  let aBits = convertToBin(a);
  let bBits = convertToBin(b);
  let cBits = convertToBin(c);
  let counter = 0;

  console.log(aBits);
  console.log(bBits);
  console.log(cBits);

  for (let i = 0; i < Math.ceil((aBits.length + bBits.length)/2); i++) {
    let bitOne = aBits[i] === undefined ? 0 : aBits[i];
    let bitTwo = bBits[i] === undefined ? 0 : bBits[i];
    if ((bitOne && bitTwo) !== cBits) counter++;
  }

  return counter;
};

console.log(minFlips(4,2,7))