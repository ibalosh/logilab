export default class Queue {


  constructor() {
    this.items = {}
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  enQueue(value) {
    this.items[this.backIndex] = value;
    this.backIndex++;
  }

  deQueue(value) {
    const returnItem = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return returnItem;
  }

  peek() {
    return this.isEmpty() ? [] : this.items[this.frontIndex];
  }

  isEmpty() {
    return this.frontIndex === this.backIndex;
  }
}
