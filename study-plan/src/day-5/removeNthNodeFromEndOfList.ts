/* Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
  Input: head = [1,2,3,4,5], n = 2
  Output: [1,2,3,5]

Example 2:
  Input: head = [1], n = 1
  Output: []

Example 3:
  Input: head = [1,2], n = 1
  Output: [1]

The number of nodes in the list is sz.
  1 <= sz <= 30
  0 <= Node.val <= 100
  1 <= n <= sz   */

import { LinkedList, ListNode } from './linkedList';

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy = new ListNode(0);
  dummy.next = head;
  let low = dummy;
  let fast = dummy;
  let counter = 0;

  while (fast && fast.next && counter < n) {
    fast = fast.next;
    counter++;
  }

  while (fast.next) {
    low = low.next;
    fast = fast.next;
  }

  low.next = low.next.next;

  return dummy.next;
}

const linkedList = new LinkedList(new ListNode(1));
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);

console.log(removeNthFromEnd(linkedList.head, 2));

const test2 = new LinkedList(new ListNode(1));
console.log(removeNthFromEnd(test2.head, 1));

const test3 = new LinkedList(new ListNode(1));
test3.add(2);
console.log(removeNthFromEnd(test3.head, 1));
