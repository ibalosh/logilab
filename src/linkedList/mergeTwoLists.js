import {ListNode, createList, printList} from "./ListNode.js";

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
let mergeTwoLists = function(list1, list2) {
  let list = new ListNode(-1);
  let listHead = list;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      list.next = new ListNode(list1.val)
      list1 = list1.next
    }
    else {
      list.next = new ListNode(list2.val)
      list2 = list2.next;
    }

    list = list.next;
  }

  list.next = list1 === null ? list2 : list1;
  return listHead.next;
};

let list1 = [1,2,4];
let list2 = [1,3,4];

let list = mergeTwoLists(createList(list1),createList(list2));
printList(list);

list1 = []; list2 = [];
//list = mergeTwoLists(createList(list1),createList(list2));
//printList(list);

list1 = []; list2 = [0];
list = mergeTwoLists(createList(list1),createList(list2));
printList(list);
