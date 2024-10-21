import Stack from "./stack.js"
import Queue from "./queue.js"

let reverseStackUsingQueue = function (stack) {
  let queue = new Queue();

  while (!stack.isEmpty()) {
    queue.enQueue(stack.pop());
  }

  while (!queue.isEmpty()) {
    stack.push(queue.deQueue());
  }

  return stack;
}

let s = new Stack([1,2,3,4,5]);
console.log(reverseStackUsingQueue(s));