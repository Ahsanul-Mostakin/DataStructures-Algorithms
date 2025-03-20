/* 
5. Remove Nth Node from End of List 
Problem: Given the head of a linked list and an integer n, remove the nth node from the end and return the head.
*/
class ListNode {
  constructor(val = 0, next = null) {
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
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

function removeNthFromEndBrute(head, n) {
  const nodes = [];
  let current = head;
  while (current) {
    nodes.push(current);
    current = current.next;
  }
  const indexToRemove = nodes.length - n;
  if (indexToRemove === 0) return head.next;
  nodes[indexToRemove - 1].next = nodes[indexToRemove].next;
  return head;
}

// Optimal
function removeNthFromEnd(head, n) {
  const dummy = new ListNode(0, head);
  let fast = dummy,
    slow = dummy;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
}

let head1 = arrayToList([1, 2, 3, 4, 5]);
head1 = removeNthFromEndBrute(head1, 2);
console.log(listToArray(head1));

let head4 = arrayToList([1, 2, 3, 4, 5]);
console.log(listToArray(removeNthFromEnd(head4, 2)));
