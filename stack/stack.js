export default class Stack {

  constructor(array = []) {
    this.array = array;
  }

  pop() {
    return this.array.pop();
  }

  push(value) {
    return this.array.push(value);
  }

  top() {
    return this.array[this.array.length - 1];
  }

  isEmpty() {
    return this.array.length === 0;
  }

  elements() {
    return this.array;
  }
}