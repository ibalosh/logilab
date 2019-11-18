function convertToBit(number) {
  let result = number;
  let bits = [];

  while (result !==0) {
    bits.push(result % 2);
    result = Math.floor(result / 2);
  }

  console.log(bits.reverse());
}

convertToBit(5364);