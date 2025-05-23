/**
 * 328. Odd Even Linked List
 * https://leetcode.com/problems/odd-even-linked-list/description/?envType=problem-list-v2&envId=linked-list
 * ---------------------------------------------------------------------------------------
 * Given the head of a singly linked list, group all the nodes with odd indices together
 * followed by the nodes with even indices, and return the reordered list.
 *
 * The first node is considered odd, and the second node is even, and so on.
 *
 * Note that the relative order inside both the even and odd groups should remain as it was in the input.
 * You must solve the problem in O(1) extra space complexity and O(n) time complexity.
 *
 * Example 1:
 *
 * Input: head = [1,2,3,4,5]
 * Output: [1,3,5,2,4]
 * Example 2:
 *
 * Input: head = [2,1,3,5,6,4,7]
 * Output: [2,3,6,7,1,5,4]
 * ---------------------------------------------------------------------------------------
 * Runtime complexity : O(n)
 * Space complexity : O(1)
 *
 */
import {createList} from "./ListNode.js";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let oddEvenList = function(head) {
  if (head === null) return null;
  let oddNode = head;
  let evenNode = oddNode.next;
  let evenNodeHead = evenNode;

  while (evenNode !== null && evenNode.next !== null) {
    oddNode.next = evenNode.next;
    oddNode = oddNode.next;

    evenNode.next = oddNode.next;
    evenNode = evenNode.next;
  }

  oddNode.next = evenNodeHead;
  return head;
};

let head = [1,2,3,4,5];
let list = createList(head);
console.log(oddEvenList(list))

head = [2,1,3,5,6,4,7];
list = createList(head);
console.log(oddEvenList(list));

head = [2,1];
list = createList(head);
console.log(oddEvenList(list));

head = [2];
list = createList(head);
console.log(oddEvenList(list));
