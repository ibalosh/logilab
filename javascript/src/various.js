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


