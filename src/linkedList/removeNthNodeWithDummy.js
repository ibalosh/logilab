import {ListNode, createList} from "./ListNode.js";

/**
 *
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 * Example 2:
 *
 * Input: head = [1], n = 1
 * Output: []
 * Example 3:
 *
 * Input: head = [1,2], n = 1
 * Output: [1]
 *
 *
 * Constraints:
 *
 * The number of nodes in the list is sz.
 * 1 <= sz <= 30
 * 0 <= Node.val <= 100
 * 1 <= n <= sz
 *
 *
 * Follow up: Could you do this in one pass?
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
let removeNthFromEnd = function(head, n) {
  // we use dummy node to avoid issues when need to remove head, or list has only one node
  // dummy points to element prior to head, so we can always point it to element after the head
  // if head gets removed
  let dummy = new ListNode(0);
  dummy.next = head;

  let slowPointer = dummy;
  let fastPointer = dummy;

  for (let i = 0; i <= n ; i++) {
    fastPointer = fastPointer.next;
  }

  while (fastPointer !== null) {
    fastPointer = fastPointer.next;
    slowPointer = slowPointer.next;
  }

  slowPointer.next = slowPointer.next.next;
  return dummy.next;
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