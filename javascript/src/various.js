// method invocation pattern

let myObject = {
  value: 0,
  increment: function (inc) {
    this.value += typeof inc === 'number' ? inc : 1;
  }
};

myObject.increment(2);
myObject.increment();
myObject.increment();
console.log(myObject.value);

myObject.double = function(inc) {
  let that = this;

  function helper(inc) {
    that.value += inc;
  }

  helper(inc);
}

myObject.double((1));
console.log(myObject.value);

// clojure
function createCounter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter();
counter();
counter();



function fib(n) {
  let fib = [0,1];

  let i=2;
  while (i <= n) {
      fib.push(fib[i-1] + fib[i-2]);
      i++;
  }
  return fib;
}
function fibRec(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibRec(n - 1) + fibRec(n - 2);
}

console.log("fib");
console.log(fib(5));
fibRec(5);
