import {ListNode, createList} from "./ListNode.js";

/**
 * @param {ListNode} head
 * @return {boolean}
 */
let hasCycle = function(head) {
  if (head === null) return false;
  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer !== null && fastPointer.next !== null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    if (fastPointer === slowPointer) return true;
  }

  return false;
};

let list = createList([3,2,0,-4]);
let node = list.next;
list.next.next.next.next = node

console.log(hasCycle(list));

list = createList([1,2]);
list.next.next = list;
console.log(hasCycle(list));

list = createList([1]);
console.log(hasCycle(list));



