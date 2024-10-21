export function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

export function createList(array) {
  let listHead = new ListNode(array[0]);
  let list = listHead;

  for (let i = 1; i < array.length; i++) {
    list.next = new ListNode(array[i]);
    list = list.next;
  }

  return listHead;
}