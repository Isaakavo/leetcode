/* Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Example 1:
  Input: head = [1,2,3,4,5]
  Output: [3,4,5]
  Explanation: The middle node of the list is node 3.

Example 2:
  Input: head = [1,2,3,4,5,6]
  Output: [4,5,6]
  Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 

Constraints:
  The number of nodes in the list is in the range [1, 100].
  1 <= Node.val <= 100 */

import { LinkedList, ListNode } from './linkedList';

function middleNode(head: ListNode | null): ListNode | null {
  let low = head;
  let high = head;
  while (high && high.next) {
    low = low.next;
    high = high.next.next;
  }
  return low;
}

const linkedList = new LinkedList(new ListNode(1));
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);

console.log(middleNode(linkedList.head));

linkedList.add(6);

console.log(middleNode(linkedList.head));