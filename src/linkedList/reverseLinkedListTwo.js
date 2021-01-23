import {createList, printList} from "./ListNode.js";

/**
 * Runtime complexity: O(n)
 * Space complexity: O(1)
 *
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
let reverseBetween = function(head, left, right) {
  let previousNode = null;
  let currentNode = head;
  let nodesFromLeftSide = null;
  let nodesFromRightSide = null;
  let lastNodeInReversedList = currentNode;
  let currentIndex = 1;

  while (currentNode && currentIndex !== left) {
    nodesFromLeftSide = currentNode;
    currentNode = currentNode.next;
    lastNodeInReversedList = currentNode;
    currentIndex++;
  }

  if (currentNode === null || currentNode.next === null)
    return head;

  while (currentNode) {
    let tempNode = currentNode.next;
    currentNode.next = previousNode;
    if (tempNode === null)
      break;

    if (currentIndex === right) {
      nodesFromRightSide = tempNode;
      break;
    }

    previousNode = currentNode;
    currentNode = tempNode;
    currentIndex++;
  }

  lastNodeInReversedList.next = nodesFromRightSide;

  if (nodesFromLeftSide === null)
    head = currentNode;
  else if (nodesFromLeftSide !== currentNode)
    nodesFromLeftSide.next = currentNode;

  return head;
};

let head = [1,2,3,4,5];
let left = 2;
let right = 4;
console.log(reverseBetween(createList(head), left, right))

head = [5];
left = 1;
right = 1;
console.log(reverseBetween(createList(head), left, right))

head = [3,5]
left = 1;
right = 1;
console.log(reverseBetween(createList(head), left, right))

head = [3,5]
left = 1;
right = 2;
console.log(reverseBetween(createList(head), left, right))