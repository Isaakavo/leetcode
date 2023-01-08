export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export class LinkedList {
  head: ListNode;
  sz: number;

  constructor(head = null) {
    this.head = head;
    this.sz = head !== null ? 1 : 0;
  }

  add(node: number) {
    let nodeToInsert = new ListNode(node);
    let ptr = this.head;
    while (ptr && ptr.next) {
      ptr = ptr.next;
    }
    ptr.next = nodeToInsert;
    this.sz++;
  }
}
