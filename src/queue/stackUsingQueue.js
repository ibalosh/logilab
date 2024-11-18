import Queue from "./queue.js";

var MyStack = function() {
  this.queue = new Queue();
  this.helpQueue = new Queue();
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  if (this.queue.isEmpty()) {
    this.queue.push(x);
    while (this.helpQueue.isEmpty() !== true) {
      this.queue.push(this.helpQueue.pop());
    }
  }
  else if (this.helpQueue.isEmpty()) {
    this.helpQueue.push(x);
    while (this.queue.isEmpty() !== true) {
      this.helpQueue.push(this.queue.pop());
    }
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  if (this.queue.isEmpty() !== true) {
    return this.queue.pop();
  }
  else if (this.helpQueue.isEmpty() !== true) {
    return this.helpQueue.pop();
  }
  else {
    return null;
  }
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  if (this.queue.isEmpty() !== true) {
    return this.queue.top();
  }
  else if (this.helpQueue.isEmpty() !== true) {
    return this.helpQueue.top();
  }
  else {
    return null;
  }
};

/**
 * @return {boolean}
 */
MyStack.prototype.isEmpty = function() {
  return (this.queue.isEmpty() === true && this.helpQueue.isEmpty() === true);
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.isEmpty()
 */

var obj = new MyStack();
console.log(obj.push(1));
console.log(obj.push(2));
console.log(obj.top());
console.log(obj.pop());
console.log(obj.isEmpty());
