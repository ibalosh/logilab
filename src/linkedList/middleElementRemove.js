import {ListNode, createList} from "./ListNode.js";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let deleteMiddle = function(head) {
  if (head.next === null) return null;

  let listPointer = head;
  let listDoublePointer = head.next.next;

  while (listDoublePointer !== null && listDoublePointer.next !== null) {
    listPointer = listPointer.next;
    listDoublePointer = listDoublePointer.next.next;
  }

  listPointer.next = listPointer.next.next;
  return head;
};

let head = [1,3,4,7,1,2,6]
console.log(deleteMiddle(createList(head)));

head = [1,2,3,4];
console.log(deleteMiddle(createList(head)));

head = [2,1];
console.log(deleteMiddle(createList(head)));
