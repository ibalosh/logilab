import {ListNode, createList} from "./ListNode.js";

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
let removeNthFromEnd = function(head, n) {
  let fastPointer = head;
  let slowPointer = head;

  for (let i = 0; i < n; i++) {
    fastPointer = fastPointer.next;
    // if fast becomes null, means we want to delete head
    if (fastPointer === null) {
      head = head.next;
      return head;
    }
  }

  while (fastPointer.next !== null) {
    fastPointer = fastPointer.next;
    slowPointer = slowPointer.next;
  }

  slowPointer.next = slowPointer.next.next;
  return head;
};

let list = createList([1,2,3,4,5]);
let n = 2;
console.log(removeNthFromEnd(list, n));

list = createList([1]);
n = 1;
console.log(removeNthFromEnd(list, n));

list = createList([1,2]);
n = 1
console.log(removeNthFromEnd(list, n));


list = createList([1,2]);
n = 2
console.log(removeNthFromEnd(list, n));
