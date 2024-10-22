const canPlaceFlowers = function(flowerbed, n) {
  if (n===0) return true;

  for (let i = 0; i < flowerbed.length; i++) {
    let left = (i===0) ? 0 : flowerbed[i-1];
    let right = (i===flowerbed.length-1) ? 0 : flowerbed[i+1];

    if (flowerbed[i] === 0 && left === 0 && right === 0) {
      n-=1;
      flowerbed[i]=1;
    }

    if (n===0) {
      break;
    }
  }

  return n === 0;
}

let flowerbed = [1,0,0,0,1];
let n = 1;

//console.log(canPlaceFlowers(flowerbed,n))

flowerbed = [1,0,0,0,0,1];
n=2;
//console.log(canPlaceFlowers(flowerbed,n))


flowerbed = [0,0,1,0,0]
n=1;

//console.log(canPlaceFlowers(flowerbed,n))

n=1;
flowerbed = [0,0,0,0,0,1,0,0]
console.log(canPlaceFlowers(flowerbed,n))