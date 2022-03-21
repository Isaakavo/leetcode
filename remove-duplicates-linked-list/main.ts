/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class LinkedList {
  head: ListNode;

  constructor() {
    this.head = null;
  }

  insert(elem) {
    let newNode = new ListNode(elem);
    let current;

    if (this.head === null) {
      this.head = newNode;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  let listResult = new ListNode(head.val);
  let prev = head;
  let next = head.next;
  let curr = listResult;

  while (prev && next) {
    if (prev.val === next.val) {
      prev = next;
      next = next.next;
      curr.next = next;
      continue;
    } else {
      curr.next = next;
      prev = next;
      next = next.next;
      curr = curr.next;
    }
  }
  // while (prev && next) {
  //   if (prev.val === next.val) {
  //     prev = next;
  //     next = next.next;
  //     curr.next = next;
  //     continue;
  //   } else {
  //     curr.next = next;
  //   }
  //   prev = next;
  //   next = next.next;
  //   curr = curr.next;
  // }

  return listResult;
}

const head = new LinkedList();
// let value = [1, 1, 2];
// let value = [1,1,2,3,3];
// let value = [1,1,2,3,3,3];
// let value = [1,2,3];
let value = [1,2];

// head.val = value[0];
// head.next = new ListNode(value[1], new ListNode(value[2]));

for (let i = 0; i < value.length; i++) {
  const element = value[i];
  head.insert(element);
}

deleteDuplicates(head.head);
