import {ListNode, createList} from "./ListNode.js";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let reverseList = function(head) {
  let current = head;
  let prev = null;

  while(current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  return prev;
};

let head = [1,2,3,4,5];
console.log(reverseList(createList(head)));

head = [];
console.log(reverseList(createList(head)));

