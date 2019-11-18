import {ListNode, createList} from "./ListNode.js";

/**
 * @param {ListNode} head
 * @return {number}
 */
let pairSum = function(head) {
  let list = [];
  let node = head;

  while (node !== null) {
    list.push(node);
    node = node.next;
  }

  let max = 0
  let j= 0
  let n = list.length;

  for (let i = 0; i < list.length; i++) {
    j = n - i - 1;
    if (j <= i) break;
    max = Math.max(max, list[i].val + list[j].val);
  }

  return max;
};

let head = [5,4,2,1];
let list = createList(head);
console.log(pairSum(list))

head = [4,2,2,3];
list = createList(head);
console.log(pairSum(list))

head = [4,2];
list = createList(head);
console.log(pairSum(list))

head = [1,100000]
list = createList(head);
console.log(pairSum(list))