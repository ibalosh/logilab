/**
 * 155. Min Stack
 * https://leetcode.com/problems/min-stack/description/?envType=study-plan-v2&envId=top-interview-150
 * ------------------------------------------------
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 *
 * Implement the MinStack class:
 *
 * MinStack() initializes the stack object.
 * void push(int val) pushes the element val onto the stack.
 * void pop() removes the element on the top of the stack.
 * int top() gets the top element of the stack.
 * int getMin() retrieves the minimum element in the stack.
 * You must implement a solution with O(1) time complexity for each function.
 *
 *
 *
 * Example 1:
 *
 * Input
 * ["MinStack","push","push","push","getMin","pop","top","getMin"]
 * [[],[-2],[0],[-3],[],[],[],[]]
 *
 * Output
 * [null,null,null,null,-3,null,0,-2]
 *
 * Explanation
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin(); // return -3
 * minStack.pop();
 * minStack.top();    // return 0
 * minStack.getMin(); // return -2
 *
 *
 * Constraints:
 *
 * -231 <= val <= 231 - 1
 * Methods pop, top and getMin operations will always be called on non-empty stacks.
 * At most 3 * 104 calls will be made to push, pop, top, and getMin.
 * ------------------------------------------------
 * Runtime complexity: O(1)
 * Space complexity: O(n)
 */
let MinStack = function() {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  if (this.stack.length === 0) {
    this.stack.push({value: val, min: val});
  }
  else {
    let newMin = Math.min(this.stack[this.stack.length-1].min, val)
    this.stack.push({value: val, min: newMin});
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if (this.stack.length === 0)
    return -1;

  return this.stack[this.stack.length - 1].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if (this.stack.length === 0)
    return -1;
  return this.stack[this.stack.length-1].min;
};

let obj = new MinStack()
obj.push(3);
obj.push(4);
obj.push(5);
obj.push(8);
obj.pop();
obj.push(2);
console.log(obj.top());
console.log(obj.getMin());