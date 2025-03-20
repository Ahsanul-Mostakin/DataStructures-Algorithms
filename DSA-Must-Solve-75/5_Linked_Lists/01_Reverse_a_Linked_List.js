/* 
1. Reverse a Linked List 
Problem: Given the head of a singly linked list, reverse it and return the new head.
*/
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function arrayToList(arr) {
  if (!arr.length) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function listToArray(head) {
  let arr = [];
  let current = head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
}

function reverseListBrute(head) {
  const values = [];
  let current = head;
  while (current) {
    values.push(current.val);
    current = current.next;
  }
  if (!values.length) return null;
  const reversedHead = new ListNode(values[values.length - 1]);
  current = reversedHead;
  for (let i = values.length - 2; i >= 0; i--) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }
  return reversedHead;
}

// Optimal
function reverseList(head) {
  let prev = null,
    current = head;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

let head = arrayToList([1, 2, 3, 4, 5]);
console.log(listToArray(reverseList(head)));

let head1 = arrayToList([1, 2, 3, 4, 5]);
console.log(listToArray(reverseListBrute(head1)));
