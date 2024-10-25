function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fib(n-1) + fib(n-2);
}

// 0 1 1 2 3
console.log(fib(10));


// dynamic programming way
// optimized to O(n) runtime, O(n) space
function fib2(n) {
  const array = [0,1];

  for (let i = 2; i <= n; i++) {
    array[i] = array[i-1] + array[i-2];
  }

  return array[n];
}

console.log(fib2(10));

// dynamic programming way
// optimized to O(n) runtime, O(1) space
function fib3(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;
  let a = 0;
  let b = 1;
  let c = a + b;

  for (let i = 3; i <= n; i++) {
    a = b;
    b = c;
    c = a + b;
  }

  return c;
}

console.log(fib3(10));