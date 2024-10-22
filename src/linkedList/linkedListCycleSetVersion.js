import {ListNode, createList} from "./ListNode.js";

/**
 * @param {ListNode} head
 * @return {boolean}
 */
let hasCycle = function(head) {
  let node = head;
  let nodeSeen = new Set();
  nodeSeen.add(head);

  while (node !== null) {
    node = node.next;
    if (nodeSeen.has(node)) return true;
    nodeSeen.add(node);
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



